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
    <>
      <div
        ref={parallaxRef}
        className="bg-cover bg-center h-screen bg-fixed flex flex-col items-center gap-5 place-content-center px-5"
        style={{ backgroundImage: `url('/images/oppong-cloud.jpg')` }}
      >
        <span className="text-white text-6xl font-garamond-display tracking-wider">
          Empty Legs
        </span>
        <p className="text-sm uppercase text-white opacity-80 max-sm:text-center tracking-wider">
          {lang === "french"
            ? "La solution avantageuse pour les voyages de dernière minute"
            : "Economical solutions for last-minute travels"}
        </p>
      </div>
    </>
  );
}
