"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/home/Form";
import Header from "./components/home/Header";
import Membership from "./components/home/Membership";
import Nav from "./components/Nav";
// import MembershipForm from "./components/MembershipForm";

export default function Home() {
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
    <div>
      <Nav />
      <Header />
      <div className="max-w-[1250px] mx-auto px-5 py-20 flex flex-col gap-5">
        <h1 className="text-xl tracking-widest opacity-70">
          {lang === "french" ? "PLANIFIER UN VOL" : "Plan a flight"}
        </h1>
        <p className="mb-8 text-sm tracking-wider opacity-60">
          {lang === "french"
            ? "Saisissez les détails de votre vol ci-dessous, et notre équipe vous contactera dans les plus brefs délais. Les tarifs des vols charters en jet privé varient selon le marché et commencent à partir de €5 000 euros."
            : "Enter your flight details below, and our team will get in touch with you as soon as possible. Private jet charter prices are subject to market rates and start from €5,000 euros."}
        </p>
        <Form />
      </div>
      <Membership />
      <Footer />
    </div>
  );
}
