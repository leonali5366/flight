"use client";
import { useEffect, useState } from "react";
import Form from "../components/home/Form";
// import MembershipForm from "../components/MembershipForm";

export default function RequestAQuote() {
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
    <div className="bg-white">
      <div className="max-w-[1250px] mx-auto px-5 lg:h-screen">
        <div className="mt-32 flex flex-col gap-7">
          <span className="lg:text-6xl text-3xl text-zinc-600 font-garamond-display">
            {lang === "french"
              ? "Demandez un devis pour votre prochain vol."
              : "Request a quote for your next flight."}
          </span>
          <p className="text-zinc-600 font-light tracking-wider leading-6 max-lg:text-sm">
            {lang === "french"
              ? "Chaque vol est unique, c'est pourquoi nous mettons tout en œuvre pour concevoir une expérience sur mesure, parfaitement adaptée à vos exigences de voyage et à vos préférences personnelles. Afin de vous proposer la solution de vol idéale pour votre prochain déplacement, veuillez nous fournir un maximum d’informations ci-dessous. Nous vous enverrons une suggestion personnalisée accompagnée d’un devis."
              : "Every flight is unique, which is why we work diligently to create the perfect journey tailored to both your travel requirements and personal preferences. To find the optimal flight solution for your next trip, please provide as much information as possible below, and we will present you with a customized proposal along with a quote."}
          </p>
          <p className="text-zinc-600 font-light tracking-wider leading-6">
            {lang === "french"
              ? "Entrez les détails de votre vol ci-dessous, et notre équipe vous contactera dans les plus brefs délais. Les tarifs des vols charters en jet privé sont soumis aux fluctuations du marché et débutent à partir de €5 000 euros."
              : "Enter your flight details below, and our team will get in touch with you shortly. Private jet charter prices are subject to market rates and start from €5,000 euros."}
          </p>
          <Form />
          <p className="text-zinc-600 font-light tracking-wider leading-6 text-sm text-center">
            {lang === "french"
              ? "Besoin d'aide? Contactez-nous sur"
              : "Need help? Contact us on"}{" "}
            <a
              href={`https://api.whatsapp.com/send/?phone=351917365290&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-800"
            >
              +351 917 365 290
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
