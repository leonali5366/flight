"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled
  const [isNavVisible, setIsNavVisible] = useState(true); // Track if the navbar is visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && isNavVisible) {
        // Scrolling down
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY && !isNavVisible) {
        // Scrolling up
        setIsNavVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);

      // Change background color when scrolled
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isNavVisible]);
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-10 transition-all duration-300 ease-in-out ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white text-black shadow-md" // White background when scrolled
          : "bg-transparent text-white" // Transparent background at the top
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 h-full">
        <ul className="flex items-center gap-5 text-xs font-medium cursor-pointer">
          <li>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="size-[40px] rounded-full bg-red-800 cursor-pointer flex items-center justify-center z-10"
            >
              <div
                className={`w-full before:content-[''] before:block before:h-px before:w-2/5 before:top-[5px] after:top-[-5px] before:mx-auto before:bg-white before:relative before:transition-transform before:duration-300 after:content-[''] after:block after:h-px after:w-2/5 after:mx-auto after:bg-white after:relative after:transition-transform after:duration-300 ${
                  isActive
                    ? "before:transform before:-rotate-45 after:transform after:rotate-45 after:mt-2"
                    : ""
                }`}
              ></div>
            </div>
          </li>

          <AnimatePresence mode="wait">
            {isActive && <Sidebar />}
          </AnimatePresence>
          <li className="uppercase max-lg:hidden">
            <Link href={"/fleet"}>La flotte</Link>
          </li>
          <li className="uppercase max-lg:hidden">
            <Link href={"/experience"}>Expérience</Link>
          </li>
        </ul>
        <Link href={"/"}>
          <div className="relative size-20 flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 926.4 410.43"
              aria-labelledby="logoTitle"
            >
              <title id="logoTitle">VistaJet winglet</title>
              <path
                fill={"#B00016"} // Change logo color based on scroll
                d="M911.35 0 546.6 149.97c-37.18 15.23-66.04 49.22-78.26 92.07-30.63-19.3-67.11-23.55-100.22-11.33C334.65 241.69 0 410.43 0 410.43h20.01c10.45-3.72 215.31-89.59 304.2-108.54 70.65-13.99 139.7 22.13 182.55 67.46l9.74-4.78c5.84-93.49 59.85-177.95 134.21-217.61L926.4.18h-15.05V0Z"
              ></path>
            </svg>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <span className="text-sm font-medium max-lg:hidden">
            Appelez-nous{" "}
            <a
              href="tel:+1 (833) 853-8872"
              className={`hover:text-red-500 transition-colors duration-300 ease-in-out underline ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              +1 (833) 853-8872
            </a>
          </span>
          <Link href={"/request-a-quote"}>
            <button
              className={`py-2 px-5
              bg-red-700 hover:bg-red-800 text-white
              transition-colors duration-300 ease-in-out rounded-full text-xs tracking-widest uppercase`}
            >
              Demande de devis
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
