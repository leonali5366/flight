import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    const data = {
      fullName,
      email,
      phone,
      interest,
      message,
    };
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/users/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Succefully sent request.");
      }
    } catch (error) {
      console.error(error, "Something went wrong, try again later.");
      toast.error("Something went wrong, try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-black/85">
      <div className="max-w-[1250px] mx-auto px-5 flex flex-col gap-10 py-20 text-white">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-medium font-garamond-display">
            Contact
          </span>
          <span className="tracking-wider">Get in touch!</span>
        </div>
        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {/* first name */}
            <label
              htmlFor="firstName"
              className="relative flex flex-col gap-1 group opacity-80"
            >
              <h1
                className={`absolute top-0 left-0 ${
                  fullName
                    ? "-translate-y-5 text-sm text-red-600 after:content-['*']"
                    : "group-focus-within:after:content-['*'] group-focus-within:-translate-y-5 group-focus-within:text-sm group-focus-within:text-red-600"
                } transition-all duration-300 ease-in-out z-[-1]`}
              >
                Full Name
              </h1>
              <input
                type="text"
                name=""
                id="firstName"
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-transparent outline-none py-1"
              />
              <div
                className={`w-full h-[1px] transition-all duration-300 ease-in-out ${
                  fullName
                    ? "bg-red-600"
                    : "group-focus-within:bg-red-600 bg-white"
                }`}
              ></div>
            </label>

            {/* last name */}
            <label
              htmlFor="lastName"
              className="relative flex flex-col gap-1 group opacity-80"
            >
              <h1
                className={`absolute top-0 left-0 ${
                  email
                    ? "-translate-y-5 text-sm text-red-600 after:content-['*']"
                    : "group-focus-within:after:content-['*'] group-focus-within:-translate-y-5 group-focus-within:text-sm group-focus-within:text-red-600"
                } transition-all duration-300 ease-in-out z-[-1]`}
              >
                Email
              </h1>
              <input
                type="text"
                name=""
                id="lastName"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none py-1"
              />
              <div
                className={`w-full h-[1px] transition-all duration-300 ease-in-out ${
                  email
                    ? "bg-red-600"
                    : "group-focus-within:bg-red-600 bg-white"
                }`}
              ></div>
            </label>
            {/* Phone */}
            <label
              htmlFor="lastName"
              className="relative flex flex-col gap-1 group opacity-80"
            >
              <h1
                className={`absolute top-0 left-0 ${
                  phone
                    ? "-translate-y-5 text-sm text-red-600 after:content-['*']"
                    : "group-focus-within:after:content-['*'] group-focus-within:-translate-y-5 group-focus-within:text-sm group-focus-within:text-red-600"
                } transition-all duration-300 ease-in-out z-[-1]`}
              >
                Phone
              </h1>
              <input
                type="text"
                name=""
                id="lastName"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent outline-none py-1"
              />
              <div
                className={`w-full h-[1px] transition-all duration-300 ease-in-out ${
                  phone
                    ? "bg-red-600"
                    : "group-focus-within:bg-red-600 bg-white"
                }`}
              ></div>
            </label>
            {/* interest */}
            <label className="relative flex flex-col group opacity-80">
              <h1
                className={`absolute top-0 left-0 ${
                  interest
                    ? "-translate-y-5 text-sm text-red-600 after:content-['*']"
                    : "group-focus-within:after:content-['*'] group-focus-within:-translate-y-5 group-focus-within:text-sm group-focus-within:text-red-600"
                } transition-all duration-300 ease-in-out z-[-1]`}
              >
                interest
              </h1>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger
                  className={`border-t-0 border-l-0 border-r-0 focus:ring-0 ${
                    interest
                      ? "border-b-red-600"
                      : "group-focus-within:border-b-red-600"
                  } border-b rounded-none transition-all duration-300 ease-in-out`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aircraft Charter">
                    Aircraft Charter
                  </SelectItem>
                  <SelectItem value="Aircraft Management">
                    Aircraft Management
                  </SelectItem>
                  <SelectItem value="Aircraft Trading">
                    Aircraft Trading
                  </SelectItem>
                  <SelectItem value="Aircraft Design & Completion">
                    Aircraft Design & Completion
                  </SelectItem>
                  <SelectItem value="Yacht Management">
                    Yacht Management
                  </SelectItem>
                  <SelectItem value="Property Management">
                    Property Management
                  </SelectItem>
                  <SelectItem value="Travel & Concierge">
                    Travel & Concierge
                  </SelectItem>
                </SelectContent>
              </Select>
            </label>
            {/* message */}
            <label
              htmlFor="lastName"
              className="relative flex flex-col gap-1 group opacity-80 md:col-span-2"
            >
              <h1
                className={`absolute top-0 left-0 ${
                  message
                    ? "-translate-y-5 text-sm text-red-600 after:content-['*']"
                    : "group-focus-within:after:content-['*'] group-focus-within:-translate-y-5 group-focus-within:text-sm group-focus-within:text-red-600"
                } transition-all duration-300 ease-in-out z-[-1]`}
              >
                Message
              </h1>
              <textarea
                name=""
                id="lastName"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent outline-none min-h-[200px]"
              />
              <div
                className={`w-full h-[1px]  transition-all duration-300 ease-in-out ${
                  message
                    ? "bg-red-600"
                    : "group-focus-within:bg-red-600 bg-white"
                }`}
              ></div>
            </label>
          </div>
          <Button
            type="submit"
            variant={"destructive"}
            className="w-fit"
            disabled={!fullName || !email || !phone || !interest}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
