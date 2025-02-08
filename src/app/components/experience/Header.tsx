"use client";

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
    <div>
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-zoom"
          style={{ backgroundImage: `url('/images/privateDining.jpeg')` }}
        ></div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>

        {/* Content */}
        <div className="relative z-[2] flex flex-col items-center gap-10 text-center">
          <h1 className="text-6xl font-garamond-display">
            {lang === "french"
              ? "L'expérience ultime en jet privé"
              : "The ultimate private jet experience"}
          </h1>
          {lang === "french" ? (
            <p className="font-light tracking-[0.3em] text-sm opacity-90">
              UN VOYAGE EFFICACE ET FLUIDE AVEC UN SERVICE À BORD <br />{" "}
              PARFAITEMENT ADAPTÉ À VOUS ET À VOS INVITÉS.
            </p>
          ) : (
            <p className="font-light tracking-[0.3em] text-sm opacity-90">
              AN EFFICIENT AND SMOOTH JOURNEY WITH ONBOARD SERVICE <br />{" "}
              PERFECTLY SUITED TO YOU AND YOUR GUESTS.
            </p>
          )}

          {/* <button className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
            LES SERVICES À BORD EMBLÉMATIQUES DE OPPONGJET
          </button> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom {
          animation: zoom 25s infinite; /* 6.5s for zoom in and 6.5s for zoom out */
        }
      `}</style>
    </div>
  );
}
