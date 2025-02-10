"use client";
import { useEffect, useState } from "react";
import ContinentalRange from "../components/fleet/ContinentalRange";
import GlobalReach from "../components/fleet/GlobalReach";
import Header from "../components/fleet/Header";
import Footer from "../components/Footer";
import Form from "../components/home/Form";
import Nav from "../components/Nav";

export default function Fleet() {
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
      <GlobalReach />
      <div className="bg-[#F6F6F6]">
        <div className="max-w-[1250px] mx-auto px-5 py-20 flex flex-col gap-5">
          <h1 className="tracking-widest font-light text-zinc-700">
            {lang === "french" ? "PLANIFIER UN VOL" : "PLAN A FLIGHT"}
          </h1>
          <Form />
        </div>
      </div>
      <ContinentalRange />
      <div className="bg-[#F6F6F6]">
        <div className="max-w-[1250px] mx-auto px-5 py-20 flex flex-col gap-5">
          <h1 className="tracking-widest font-light text-zinc-700">
            {lang === "french" ? "PLANIFIER UN VOL" : "PLAN A FLIGHT"}
          </h1>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
