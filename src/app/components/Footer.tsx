import Link from "next/link";
import { useEffect, useState } from "react";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaWhatsappSquare } from "react-icons/fa";
import { CiBank } from "react-icons/ci";

export default function Footer() {
  const [lang, setLang] = useState("");

  useEffect(() => {
    // Check if the code is running in the browser (i.e., window is defined)
    if (typeof window !== "undefined") {
      const existingLang = localStorage.getItem("lang");

      if (existingLang) {
        // If the lang is found in localStorage, set it to the state
        setLang(existingLang);
      } else {
        // If no lang is found, set a default value in both localStorage and state
        const defaultLang = "french"; // Example default language
        localStorage.setItem("lang", defaultLang);
        setLang(defaultLang);
      }
    }
  }, []);
  return (
    <div className="bg-[#B82E3F] xl:h-[300px] flex flex-col justify-between max-xl:gap-10 p-10 text-white">
      <div className="flex xl:flex-row flex-col items-baseline justify-between max-xl:gap-10 mt-5">
        <div className="w-full flex items-center place-content-center gap-5">
          <Link href={"/fleet"}>
            <button className="tracking-widest font-light hover:underline uppercase">
              {lang === "french" ? "La flotte" : "Fleet"}
            </button>
          </Link>
          <Link href={"/experience"}>
            <button className="tracking-widest font-light hover:underline uppercase">
              {lang === "french" ? "Expérience" : "Experience"}
            </button>
          </Link>
        </div>
        <div className="w-full flex sm:flex-row flex-col gap-5 sm:justify-between">
          <div className="flex flex-col max-sm:text-center gap-1">
            <span className="lg:text-xl font-medium">24/7 Support</span>
            <h1 className="lg:text-sm text-xs opacity-80">
              Our support services are available <br /> 24/7 to meet all your
              needs
            </h1>
          </div>

          <div className="flex flex-col max-sm:text-center gap-1">
            <span className="lg:text-xl font-medium">Address</span>
            <p className="lg:text-sm text-xs opacity-80">
              R. Joaquim Agostinho Fernandes 1 Cv 2, <br /> 8500-406 Portimão,{" "}
              <br /> Portugal
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="lg:text-xl font-medium">Contact</span>
            <a href="tel:+351917365290">
              <FaWhatsappSquare size={28} />
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="lg:text-xl font-medium tracking-wider text-nowrap">
              Payment Method
            </span>
            <div className="flex items-center gap-5">
              <RiVisaFill size={28} />
              <FaCcMastercard size={28} />
              <CiBank size={28} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-xs font-light tracking-wider">
          {lang === "french"
            ? "Oppong Private Jet LDA PT Inc. agit en tant que courtier en vol, organisant le transport aérien en affrétant des avions auprès d'exploitants d'aéronefs tiers, en qualité d'agent, au nom et pour le compte de ses clients. Oppong Private Jet n’est qu’un intermédiaire, ne possédant pas d’aéronefs et n'agissant pas en tant que transporteur contractuel ou indirect."
            : "Oppong Private Jet LDA PT Inc. acts as a flight broker, arranging air transportation by chartering aircraft from third-party operators as an agent, on behalf of its clients. Oppong Private Jet is solely an intermediary, does not own any aircraft, and does not act as a contractual or indirect carrier."}
        </p>
        <h1 className="text-xs font-light tracking-wider text-center border-t pt-3">
          {lang === "french"
            ? "Oppong Private Jet 2025. OppongJet®, Oppong® et le logo OppongJet® sont des marques déposées d'Oppong Private Jet. Tous droits réservés."
            : "OppongJet®, Oppong®, and the OppongJet® logo are registered trademarks of Oppong Private Jet. All rights reserved."}
        </h1>
      </div>
    </div>
  );
}
