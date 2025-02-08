import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="bg-[#B82E3F] sm:h-[250px] flex flex-col justify-between gap-10 p-10 text-white">
      <div className="flex place-content-center gap-5 mt-5">
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
      <p className="text-xs font-light tracking-wider">
        {lang === "french"
          ? "© OppongJet 2025 . OppongJet®, Oppong® et le logo OppongJet® sono marchi registrati di OppongJet. Tutti i diritti riservati. OppongJet e le sue filiali non sono vettori aerei diretti statunitensi. OppongJet US Inc. et les services en ligne et mobiles de OppongJet sont un courtier de vols nolisés qui ne gesticulent pas d'aéromobili. OppongJet Limited est un vettore aereo europeo che gestisce aeromobili registrati 9H con it suo certificateo di operatore aereo maltese n. MT-17 est constituée à Malte avec le numéro de société C 55231. Gli aeromobili di proprietà di OppongJet e registrati negli Stati Uniti sono gestiti da vettori aerei statunitensi debitamente autorizzati, y compris XOJET Aviation LLC. Légal | Confidentialité"
          : "© OppongJet 2025 . OppongJet®, Oppong® and the OppongJet® logo sono marchi registrati di OppongJet. Tutti i diritti riservati. OppongJet and sue filiali non sono vettori aerei diretti statunitensi. OppongJet US Inc. and OppongJet's online and mobile services are a charter flight broker that does not operate an aeromobili. OppongJet Limited is a vettore aereo europeo che gestisce aeromobili registrati 9H con it suo certificateo di operatore aereo maltese nr. MT-17 is incorporated in Malta with company number C 55231. Gli aeromobili di proprieta di OppongJet and registrati negli Stati Uniti sono gestiti da vettori aerei statunitensi debitamente authorizzati, including XOJET Aviation LLC. Legal | Confidentiality"}
      </p>
    </div>
  );
}
