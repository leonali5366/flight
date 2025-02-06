import { useEffect, useState } from "react";

export default function Header() {
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
    <div className="relative h-screen flex items-center justify-center text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        muted
        loop
      >
        <source src="/video/header-home.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
      <div className="flex flex-col gap-5 text-center mt-36">
        {lang === "french" ? (
          <h1 className="text-6xl font-garamond-display">
            Voyager en privé en toute <br /> simplicité
          </h1>
        ) : (
          <h1 className="text-6xl font-garamond-display">
            Flying private made simple
          </h1>
        )}
        {lang === "french" ? (
          <p className="font-light tracking-[0.3em] text-sm">
            LA PREMIÈRE ET UNIQUE COMPAGNIE MONDIALE D&apos;AVIATION PRIVÉE
          </p>
        ) : (
          <p className="font-light tracking-[0.3em] text-sm">
            MEMBERSHIP WITHOUT JOINING FEES. <br />
            SIMPLY PAY FOR THE HOURS YOU NEED.
          </p>
        )}
        <div className="flex items-center justify-center gap-5">
          <button className="w-36 rounded-full border py-2 text-xs font-medium opacity-90 uppercase">
            {lang === "french" ? "PLANIFIER UN VOL" : "Plan a flight"}
          </button>
        </div>
      </div>
    </div>
  );
}
