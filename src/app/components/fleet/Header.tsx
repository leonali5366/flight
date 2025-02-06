"use client";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.backgroundPositionY = `-${scrollY * 0.3}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div
        ref={parallaxRef}
        className="relative h-screen flex items-center bg-fixed justify-center text-white bg-cover bg-center px-5"
        style={{ backgroundImage: `url('/images/fleet-header.jpeg')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
        <div className="flex flex-col items-center gap-10 text-center">
          {lang === "french" ? (
            <h1 className="lg:text-6xl text-3xl font-garamond-display">
              Une flotte mondiale emblématique dans toutes les <br /> catégories
              d&apos;avions
            </h1>
          ) : (
            <h1 className="lg:text-6xl text-3xl font-garamond-display">
              An iconic global fleet in all aircraft categories
            </h1>
          )}

          {lang === "french" ? (
            <p className="font-light tracking-[0.3em] text-sm opacity-90">
              DU GLOBAL 7500, AUX AVIONS POLYVALENTS DE LA GAMME CONTINENTALE,
              NOUS OFFRONS LA LIBERTÉ ET LE CHOIX <br /> ULTIMES DE VOLER
              N&apos;IMPORTE OÙ.
            </p>
          ) : (
            <p className="font-light tracking-[0.3em] text-sm opacity-90">
              FROM THE GLOBAL 7500 TO THE VERSATILE AIRCRAFT IN THE CONTINENTAL
              RANGE, WE OFFER <br /> THE ULTIMATE FREEDOM AND CHOICE TO FLY
              ANYWHERE.
            </p>
          )}

          {/* <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-16 gap-5 w-full max-w-[650px]">
            <button className="w-full rounded-full border tracking-wider font-light py-2 text-xs opacity-90">
              FLOTTE MONDIALE
            </button>
            <button className="w-full rounded-full border tracking-wider font-light py-2 text-xs opacity-90">
              FLOTTE DE LA GAMME CONTINENTALE
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
