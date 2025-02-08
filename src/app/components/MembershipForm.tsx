"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function MembershipForm() {
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [flightFrequency, setFlightFrequency] = useState<string>();
  const [flyingSolution, setFlyingSolution] = useState<string>();
  const [hearAboutUs, setHearAboutUs] = useState<string>();
  return (
    <div className="pb-20 flex flex-col gap-5 mt-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex md:flex-row flex-col md:items-end gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-light tracking-wider">Titre</span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr.">Mr.</SelectItem>
                <SelectItem value="Ms.">Ms.</SelectItem>
                <SelectItem value="Mrs.">Mrs.</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input className="md:w-[100px]" />
          <label htmlFor="" className="flex flex-col gap-1 w-full">
            <span className="text-sm font-light tracking-wider">Prénom</span>
            <Input />
          </label>
        </div>
        <label htmlFor="" className="flex flex-col gap-1">
          <span className="text-sm font-light tracking-wider">Nom</span>
          <Input />
        </label>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-light tracking-wider">
            Numéro de téléphone
          </span>
          <PhoneInput
            international
            defaultCountry="US"
            value={phone}
            onChange={setPhone}
            className="w-full p-[0.3rem] border rounded-md shadow-sm focus-within:ring-1 focus-within:ring-ring"
          />
        </div>
        <label htmlFor="" className="flex flex-col gap-1">
          <span className="text-sm font-light tracking-wider">E-mail</span>
          <Input type="email" />
        </label>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-light tracking-wider">
            Quel type de vol demandez-vous ?
          </label>
          <Select value={hearAboutUs} onValueChange={setHearAboutUs}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Wall Street Journal">
                Wall Street Journal
              </SelectItem>
              <SelectItem value="New York Times">New York Times</SelectItem>
              <SelectItem value="Forbes">Forbes</SelectItem>
              <SelectItem value="CNBC">CNBC</SelectItem>
              <SelectItem value="Bloomberg">Bloomberg</SelectItem>
              <SelectItem value="Google Search">Google Search</SelectItem>
              <SelectItem value="Social Media">Social Media</SelectItem>
              <SelectItem value="Recommendation">Recommendation</SelectItem>
              <SelectItem value="Event">Event</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-light tracking-wider">
            Quelle est votre solution de vol actuelle?
          </label>
          <Select value={flyingSolution} onValueChange={setFlyingSolution}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
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

        <div className="flex flex-col gap-1">
          <label className="text-sm font-light tracking-wider">
            À quelle fréquence voyagez-vous en privé ?
          </label>
          <Select value={flightFrequency} onValueChange={setFlightFrequency}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
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
      </div>
      <label htmlFor="" className="flex flex-col gap-1">
        <span className="text-sm font-light tracking-wider">Message</span>
        <Textarea className="min-h-[200px]" />
      </label>
      <label htmlFor="" className="flex items-center gap-3">
        <input type="checkbox" name="" id="" />
        <span className="text-sm font-light tracking-wider">
          Qu&apos;est-ce qui décrit le mieux votre façon de voler actuellement?
        </span>
      </label>
      <label htmlFor="" className="flex items-center gap-3">
        <input type="checkbox" name="" id="" />
        <span className="text-sm font-light tracking-wider">
          Je consens au traitement de mes données personnelles conformément à la
          politique de confidentialité de OppongJet.
        </span>
      </label>
      <button className="w-fit px-6 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out text-xs text-white tracking-wider">
        INVIA
      </button>
    </div>
  );
}
