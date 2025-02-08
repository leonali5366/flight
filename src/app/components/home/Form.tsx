"use client";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PopoverContent } from "@radix-ui/react-popover";
import {
  ArrowRight,
  CalendarIcon,
  CircleMinus,
  CirclePlus,
  Loader,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import airports from "airports"; // Import the airports library
import { toast } from "sonner";

// const generateTimeArray = () => {
//   const times = [];
//   for (let hour = 0; hour < 24; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const formattedHour = String(hour).padStart(2, "0");
//       const formattedMinute = String(minute).padStart(2, "0");
//       times.push(`${formattedHour}:${formattedMinute}`);
//     }
//   }
//   return times;
// };

interface Airport {
  iata: string;
  name: string | null; // Allow null values
  city?: string;
  country?: string;
  lat?: string;
  lon?: string;
  iso?: string;
  status?: number;
  continent?: string;
  type?: string;
  size?: string | null;
}

type BookingStatus = "PENDING" | "COMPLETE";

type Booking = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalRequests?: string;
  flyFrequency: string;
  flyingSolution: string;
  heardAbout: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  passenger: number;
  departureTime: string;
  returnDepartureTime?: string;
  status: BookingStatus;
  createdAt: string; // DateTime is stored as string in JSON
  updatedAt: string; // DateTime is stored as string in JSON
};

type BookingResponse = {
  status: string;
  message?: string;
  data?: Booking;
};
export default function Form() {
  // const timeArray = generateTimeArray();
  const [active, setActive] = useState<boolean>(false);
  const [titleOther, setTitleOther] = useState<string>();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [departingTime, setDepartingTime] = useState<string>("");
  const [returnDepartingTime, setReturnDepartingTime] = useState<string>("");
  const [passenger, setPassenger] = useState<number>(1);
  const [title, setTitle] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [additional, setAdditional] = useState<string>("");
  const [flightFrequency, setFlightFrequency] = useState<string>("");
  const [flyingSolution, setFlyingSolution] = useState<string>("");
  const [hearAboutUs, setHearAboutUs] = useState<string>("");

  // State for airport search results
  const [fromResults, setFromResults] = useState<Airport[]>([]);
  const [toResults, setToResults] = useState<Airport[]>([]);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Increment function: prevent going above 14
  const increment = () => {
    if (passenger < 14) {
      setPassenger(passenger + 1);
    }
  };

  // Decrement function: prevent going below 1
  const decrement = () => {
    if (passenger > 1) {
      setPassenger(passenger - 1);
    }
  };
  // Handle "From" input change
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFrom(value);

    // Filter airports based on input
    const results = airports.filter((airport: Airport) => {
      const name = airport.name?.toLowerCase() ?? "";
      const city = airport.city?.toLowerCase() ?? "";
      const iata = airport.iata?.toLowerCase() ?? "";

      return (
        name.includes(value.toLowerCase()) ||
        city.includes(value.toLowerCase()) ||
        iata.includes(value.toLowerCase())
      );
    });

    setFromResults(results.slice(0, 5)); // Show top 5 results
  };

  // Handle "To" input change
  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);

    // Filter airports based on input
    const results = airports.filter((airport: Airport) => {
      const name = airport.name?.toLowerCase() ?? "";
      const city = airport.city?.toLowerCase() ?? "";
      const iata = airport.iata?.toLowerCase() ?? "";

      return (
        name.includes(value.toLowerCase()) ||
        city.includes(value.toLowerCase()) ||
        iata.includes(value.toLowerCase())
      );
    });

    setToResults(results.slice(0, 5)); // Show top 5 results
  };

  // Handle airport selection
  const handleSelectFrom = (airport: Airport) => {
    if (airport.name && airport.iata) {
      setFrom(`${airport.name} (${airport.iata})`);
      setFromResults([]); // Clear results
    }
  };

  const handleSelectTo = (airport: Airport) => {
    if (airport.name && airport.iata) {
      setTo(`${airport.name} (${airport.iata})`);
      setToResults([]); // Clear results
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      title: title === "other" ? titleOther : title,
      firstName,
      lastName,
      email,
      phone,
      additionalRequests: additional,
      flyFrequency: flightFrequency,
      flyingSolution,
      heardAbout: hearAboutUs,
      from,
      to,
      departureDate: date?.toISOString(), // Convert Date to string
      returnDate: returnDate ? returnDate.toISOString() : "", // Optional return date
      passenger,
      departureTime: departingTime,
      returnDepartureTime: returnDepartingTime ?? "",
    };
    try {
      const response = await fetch("/api/users/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(data);

      const result: BookingResponse = await response.json();

      if (response.ok) {
        toast.success("Booking request submitted successfully!");
        resetForm();
      } else {
        toast.error(`Error: ${result.message}`);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Failed to submit booking request.");
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setTitleOther("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAdditional("");
    setFlightFrequency("");
    setFlyingSolution("");
    setHearAboutUs("");
    setFrom("");
    setTo("");
    setDate(undefined);
    setReturnDate(undefined);
    setPassenger(1); // or any default value you want
    setDepartingTime("");
    setReturnDepartingTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black text-sm">
        <div className="border border-black rounded-3xl lg:rounded-full h-auto flex lg:flex-row flex-col lg:pr-5">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center font-medium">
            {/* From Input */}
            <div className="pl-7 py-5">
              <div className="w-full flex items-center gap-3 relative">
                <PlaneTakeoff size={20} strokeWidth={1.25} />
                <Input
                  value={from}
                  onChange={handleFromChange}
                  placeholder="From"
                  className="border-none shadow-none focus-visible:ring-0 placeholder:font-light font-light"
                />
                {fromResults.length > 0 && (
                  <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {fromResults.map((airport) => (
                      <div
                        key={airport.iata}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectFrom(airport)}
                      >
                        {airport.name} ({airport.iata}) - {airport.city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* To Input */}
            <div className="py-5 md:border-l max-md:border-t border-black">
              <div className=" w-full flex items-center gap-3 pl-4 h-full relative">
                <PlaneLanding size={20} strokeWidth={1.25} />
                <Input
                  value={to}
                  onChange={handleToChange}
                  placeholder="To"
                  className="border-none shadow-none focus-visible:ring-0 placeholder:font-light font-light"
                />
                {toResults.length > 0 && (
                  <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {toResults.map((airport) => (
                      <div
                        key={airport.iata}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectTo(airport)}
                      >
                        {airport.name} ({airport.iata}) - {airport.city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date and Time Picker */}
            <div
              className={`${
                date && departingTime ? "py-3" : "py-5"
              } max-lg:pl-3 max-lg:border-t lg:border-l border-black`}
            >
              <div className="w-full flex items-center justify-between pl-4 h-full">
                <div className="w-full flex items-center gap-3 py-2">
                  <Popover>
                    <PopoverTrigger className="flex items-center gap-5">
                      <CalendarIcon size={20} strokeWidth={1.25} />
                      <div className="flex flex-col">
                        <span className="text-sm font-light">
                          {date ? date.toLocaleDateString() : "Date"}
                        </span>
                        <span className="text-xs font-light">
                          {date && departingTime}
                        </span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="z-10 my-5 rounded-md border shadow bg-white">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={{ before: new Date() }}
                      />
                      <div className="p-3 flex flex-col gap-3">
                        <Select
                          value={departingTime}
                          onValueChange={setDepartingTime}
                        >
                          <SelectTrigger className="font-light">
                            <SelectValue placeholder="Departing time" />
                          </SelectTrigger>
                          <SelectContent className="font-light">
                            <SelectItem value="any time">any time</SelectItem>
                            <SelectItem value="Early morning">
                              Early morning
                            </SelectItem>
                            <SelectItem value="Morning">Morning</SelectItem>
                            <SelectItem value="Afternoon">Afternoon</SelectItem>
                            <SelectItem value="Evening">Evening</SelectItem>
                            <SelectItem value="Late evening">
                              Late evening
                            </SelectItem>
                            {/* <SelectItem value="Set time">Set time</SelectItem> */}
                          </SelectContent>
                        </Select>

                        {/* {departingTime === "Set time" && (
                      <div className="flex items-center gap-5">
                        <span className="text-sm font-light">Time</span>
                        <Select>
                          <SelectTrigger className="font-light">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="font-light">
                            {timeArray.map((time, i) => (
                              <SelectItem key={i} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )} */}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-full flex items-center gap-3">
                  <Popover>
                    <PopoverTrigger className="tracking-wider">
                      <div className="flex flex-col">
                        <span className="text-sm font-light">
                          {returnDate
                            ? returnDate.toLocaleDateString()
                            : "Add return"}
                        </span>
                        <span className="text-xs font-light">
                          {returnDate && returnDepartingTime}
                        </span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="z-10 my-4 rounded-md border shadow bg-white">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        disabled={{ before: new Date() }}
                      />
                      <div className="p-3 flex flex-col gap-3">
                        <Select
                          value={returnDepartingTime}
                          onValueChange={setReturnDepartingTime}
                        >
                          <SelectTrigger className="font-light">
                            <SelectValue placeholder="Departing time" />
                          </SelectTrigger>
                          <SelectContent className="font-light">
                            <SelectItem value="Early morning">
                              Early morning
                            </SelectItem>
                            <SelectItem value="Morning">Morning</SelectItem>
                            <SelectItem value="Afternoon">Afternoon</SelectItem>
                            <SelectItem value="Evening">Evening</SelectItem>
                            <SelectItem value="Late evening">
                              Late evening
                            </SelectItem>
                            {/* <SelectItem value="Set time">Set time</SelectItem> */}
                          </SelectContent>
                        </Select>

                        {/* {returnDepartingTime === "Set time" && (
                      <div className="flex items-center gap-5">
                        <span className="text-sm font-light">Time</span>
                        <Select>
                          <SelectTrigger className="font-light">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="font-light">
                            {timeArray.map((time, i) => (
                              <SelectItem key={i} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )} */}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Passenger Counter */}
            <div className="py-5 md:border-l max-lg:border-t border-black">
              <div className="py-2 w-full flex items-center justify-between pl-4 h-full">
                <div className="flex items-center gap-5 font-light">
                  <button
                    type="button"
                    className="disabled:opacity-50"
                    onClick={decrement}
                    disabled={passenger <= 1}
                  >
                    <CircleMinus size={20} strokeWidth={1.25} />
                  </button>
                  {passenger} {passenger === 1 ? "Passenger" : "Passengers"}
                  <button
                    type="button"
                    className="disabled:opacity-50"
                    onClick={increment}
                    disabled={passenger >= 14}
                  >
                    <CirclePlus size={20} strokeWidth={1.25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className={`${
              active
                ? "hidden"
                : "block disabled:opacity-50 disabled:cursor-not-allowed"
            } max-lg:py-2 max-lg:disabled:bg-zinc-300 max-lg:bg-red-700 text-center rounded-b-3xl`}
            disabled={!from || !to || !date || !departingTime}
            onClick={() => setActive(true)}
          >
            <ArrowRight size={16} className="max-lg:hidden" />
            <h1 className="text-white lg:hidden">NEXT</h1>
          </button>
        </div>

        {active && (
          <div className="mt-5">
            {/* <button className="py-3 px-7 border border-black rounded-full text-xs tracking-widest font-light">
              ADD FLIGHT
            </button> */}
            <div className="flex lg:flex-row flex-col justify-between gap-10 mt-8 h-auto">
              <div className="w-full flex flex-col gap-3">
                <div className="flex items-center">
                  <span className="w-[100px] font-light tracking-wider">
                    Title
                  </span>
                  <div className="flex items-center gap-5 w-full">
                    <Select value={title} onValueChange={setTitle}>
                      <SelectTrigger className="w-[150px] font-light">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="font-light">
                        <SelectItem value="Mr.">Mr.</SelectItem>
                        <SelectItem value="Ms.">Ms.</SelectItem>
                        <SelectItem value="Mrs.">Mrs.</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {title === "other" && (
                      <Input
                        onChange={(e) => setTitleOther(e.target.value)}
                        placeholder="Please specify"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-[100px] font-light tracking-wider">
                    First name
                  </span>
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    className="font-light"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-[100px] font-light tracking-wider">
                    Last name
                  </span>
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    className="font-light"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-[100px] font-light tracking-wider">
                    Email
                  </span>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-light"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-[100px] font-light tracking-wider">
                    Phone
                  </span>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phone}
                    onChange={setPhone}
                    className="w-full p-2 border rounded-md shadow-sm"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <span className="text-base font-light">
                  Any additional requests that we may assist you with?
                </span>
                <label className="text-xs text-zinc-600 tracking-wider mt-2">
                  For example, dietary requirements, special requests.
                </label>
                <Textarea
                  onChange={(e) => setAdditional(e.target.value)}
                  className="h-full mt-1 font-light max-lg:min-h-[200px]"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 mt-5">
              <div className="flex flex-col gap-1 mt-5">
                <label className="font-light tracking-wider">
                  How often do you fly privately?
                </label>
                <Select
                  value={flightFrequency}
                  onValueChange={setFlightFrequency}
                >
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="font-light">
                    <SelectItem value="I am new to private aviation">
                      I am new to private aviation
                    </SelectItem>
                    <SelectItem value="1-25 hours">1-25 hours</SelectItem>
                    <SelectItem value="25-50 hours">25-50 hours</SelectItem>
                    <SelectItem value="50-75 hours">50-75 hours</SelectItem>
                    <SelectItem value="100+ hours">100+ hours</SelectItem>
                    <SelectItem value="Frequently, own an aircraft">
                      Frequently, own an aircraft
                    </SelectItem>
                    <SelectItem value="Unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label className="font-light tracking-wider">
                  What is your current flying solution?
                </label>
                <Select
                  value={flyingSolution}
                  onValueChange={setFlyingSolution}
                >
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="font-light">
                    <SelectItem value="Charter">Charter</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Fractional Ownership">
                      Fractional Ownership
                    </SelectItem>
                    <SelectItem value="Aircraft Ownership">
                      Aircraft Ownership
                    </SelectItem>
                    <SelectItem value="Jet Card">Jet Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1 lg:mt-10 mt-5">
                <label className="font-light tracking-wider">
                  How did you hear about OppongJet?
                </label>
                <Select value={hearAboutUs} onValueChange={setHearAboutUs}>
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="font-light">
                    <SelectItem value="Wall Street Journal">
                      Wall Street Journal
                    </SelectItem>
                    <SelectItem value="New York Times">
                      New York Times
                    </SelectItem>
                    <SelectItem value="Forbes">Forbes</SelectItem>
                    <SelectItem value="CNBC">CNBC</SelectItem>
                    <SelectItem value="Bloomberg">Bloomberg</SelectItem>
                    <SelectItem value="Google Search">Google Search</SelectItem>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="Recommendation">
                      Recommendation
                    </SelectItem>
                    <SelectItem value="Event">Event</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <button
              disabled={
                isSubmitting ||
                !(
                  (title === "other" ? titleOther : title) &&
                  firstName &&
                  lastName &&
                  email &&
                  phone &&
                  flightFrequency &&
                  flyingSolution &&
                  hearAboutUs
                )
              }
              type="submit"
              className="relative flex items-center justify-center disabled:cursor-not-allowed disabled:bg-zinc-500 px-7 py-2 rounded-full bg-red-700 font-medium text-white text-[12.8px] opacity-90 tracking-wider mt-10 hover:bg-red-800 transition-colors duration-300 ease-in-out"
            >
              {isSubmitting ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                "REQUEST FLIGHT"
              )}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
