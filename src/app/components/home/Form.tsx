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
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";
import { act, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const generateTimeArray = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Format hours and minutes to always be two digits
      const formattedHour = String(hour).padStart(2, "0");
      const formattedMinute = String(minute).padStart(2, "0");
      times.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  return times;
};

export default function Form() {
  const timeArray = generateTimeArray();
  const [active, setActive] = useState<boolean>(false);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [departingTime, setDepartingTime] = useState<string>();
  const [returnDepartingTime, setReturnDepartingTime] = useState<string>();
  const [passenger, setPassenger] = useState<number>(1);
  const [title, setTitle] = useState<string>();
  const [titleOther, setTitleOther] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [additional, setAdditional] = useState<string>("");
  const [flightFrequency, setFlightFrequency] = useState<string>();
  const [flyingSolution, setFlyingSolution] = useState<string>();
  const [hearAboutUs, setHearAboutUs] = useState<string>();
  const [marketingConsent, setMarketingConsent] = useState<boolean>();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(from, to, additional);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" text-black text-sm">
        <div className="w-full border border-black rounded-full h-16 grid grid-cols-4 items-center px-7 font-medium py-3">
          <div className="w-full flex items-center gap-3">
            <PlaneTakeoff size={20} strokeWidth={1.25} />
            <Input
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
              className="border-none shadow-none focus-visible:ring-0 placeholder:font-light font-light"
            />
          </div>
          <div className="border-l border-black w-full flex items-center gap-3 pl-4 h-full">
            <PlaneLanding size={20} strokeWidth={1.25} />
            <Input
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
              className="border-none shadow-none focus-visible:ring-0 placeholder:font-light font-light"
            />
          </div>
          <div className="border-l border-black w-full flex items-center justify-between pl-4 h-full">
            <div className="w-full flex items-center gap-3">
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
                        <SelectItem value="Set time">Set time</SelectItem>
                      </SelectContent>
                    </Select>

                    {departingTime === "Set time" && (
                      <div className="flex items-center gap-5">
                        <span className="text-sm font-light">Time</span>
                        <Select>
                          <SelectTrigger className="font-light">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="font-light">
                            {timeArray.map((time, i) => {
                              return (
                                <SelectItem key={i} value={time}>
                                  {time}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
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
                        <SelectItem value="Set time">Set time</SelectItem>
                      </SelectContent>
                    </Select>

                    {returnDepartingTime === "Set time" && (
                      <div className="flex items-center gap-5">
                        <span className="text-sm font-light">Time</span>
                        <Select>
                          <SelectTrigger className="font-light">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="font-light">
                            {timeArray.map((time, i) => {
                              return (
                                <SelectItem key={i} value={time}>
                                  {time}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="border-l border-black w-full flex items-center justify-between pl-4 h-full">
            <div className="flex items-center gap-5 font-light">
              <button
                className="disabled:opacity-50"
                onClick={decrement}
                disabled={passenger <= 1}
              >
                <CircleMinus size={20} strokeWidth={1.25} />
              </button>
              {passenger} {passenger === 1 ? "Passenger" : "Passengers"}
              <button
                className="disabled:opacity-50"
                onClick={increment}
                disabled={passenger >= 14}
              >
                <CirclePlus size={20} strokeWidth={1.25} />
              </button>
            </div>
            <button
              className={
                active
                  ? "hidden"
                  : "block disabled:opacity-50 disabled:cursor-not-allowed"
              }
              disabled={!from || !to || !date}
              onClick={() => setActive(true)}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        {/* 2nd sec */}
        {active === false && (
          <h1 className="text-sm opacity-60 mt-5 tracking-wider">
            Need more flights? Switch to{" "}
            <button
              onClick={() => setActive(true)}
              className="underline hover:text-red-700 transition-colors duration-300 ease-in-out"
            >
              multi-city
            </button>
          </h1>
        )}
        {active && (
          <div className="mt-5">
            <button className="py-3 px-7 border border-black rounded-full text-xs tracking-widest font-light">
              ADD FLIGHT
            </button>
            <div className="flex justify-between gap-10 mt-8 h-auto">
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
                  className="h-full mt-1 font-light"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 mt-5">
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
              <div className="flex flex-col gap-1 mt-10">
                <label className="font-light tracking-wider">
                  How did you hear about VistaJet?
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
            <label
              htmlFor=""
              className="flex items-center gap-5 mt-10 text-base tracking-wider font-light"
            >
              <input
                type="checkbox"
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="size-5"
              />
              I would like to receive marketing communications from VistaJet by
              email, post or text message.
            </label>
            <p className="text-xs text-zinc-600 tracking-wider mt-5">
              By submitting this form you consent to the processing of your
              personal data in accordance with the VistaJet Privacy Notice.
            </p>
            <button
              type="submit"
              className="px-7 py-2 rounded-full bg-red-700 font-medium text-white text-[12.8px] opacity-90 tracking-wider mt-5 hover:bg-red-800 transition-colors duration-300 ease-in-out"
            >
              REQUEST FLIGHT
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
