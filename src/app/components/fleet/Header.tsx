"use client";
import { useEffect, useRef } from "react";

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
  return (
    <div>
      <div
        ref={parallaxRef}
        className="relative h-screen flex items-center bg-fixed justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('/images/fleet-header.jpeg')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="text-6xl font-garamond-display">
            Une flotte mondiale emblématique dans toutes les <br /> catégories
            d&apos;avions
          </h1>
          <p className="font-light tracking-[0.3em] text-sm opacity-90">
            DU GLOBAL 7500, AUX AVIONS POLYVALENTS DE LA GAMME CONTINENTALE,
            NOUS OFFRONS LA LIBERTÉ ET LE CHOIX <br /> ULTIMES DE VOLER
            N&apos;IMPORTE OÙ.
          </p>
          <div className="flex items-center justify-between gap-16 w-[650px]">
            <button className="w-full rounded-full border tracking-wider font-light py-2 text-xs opacity-90">
              FLOTTE MONDIALE
            </button>
            <button className="w-full rounded-full border tracking-wider font-light py-2 text-xs opacity-90">
              FLOTTE DE LA GAMME CONTINENTALE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
