"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled
  const [isNavVisible, setIsNavVisible] = useState(true); // Track if the navbar is visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

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

  const handleLangEnglish = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };
  const handleLangFrench = () => {
    localStorage.setItem("lang", "french");
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-screen h-20 z-10 transition-all duration-300 ease-in-out ${
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
            <Link href={"/fleet"}>
              {lang === "french" ? "La flotte" : "Fleet"}
            </Link>
          </li>
          <li className="uppercase max-lg:hidden">
            <Link href={"/experience"}>
              {lang === "french" ? "Expérience" : "Experience"}
            </Link>
          </li>
          <li className="uppercase max-lg:hidden">
            <Link href={"/empty-legs"}>Empty legs</Link>
          </li>
        </ul>
        {/* logo */}
        <abbr title="Home">
          <Link href={"/"}>
            <Image
              src={"/images/Logo.png"}
              alt="logo"
              width={180}
              height={180}
            />
          </Link>
        </abbr>
        {/* phone number */}
        <div className="flex items-center gap-5">
          <span className="text-sm font-medium max-lg:hidden">
            {lang === "french" ? "Appelez-nous" : "Call Us:"}{" "}
            <a
              href={`https://api.whatsapp.com/send/?phone=351917365290&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-red-500 transition-colors duration-300 ease-in-out underline ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              +351 917 365 290
            </a>
          </span>
          {/* language switch */}
          <div className="max-xl:hidden">
            <abbr title="Language">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Globe />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={handleLangEnglish}
                    disabled={lang === "english"}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">
                        United States
                      </span>
                      <span className="text-xs font-medium opacity-80">
                        English
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLangFrench}
                    disabled={lang === "french"}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">French</span>
                      <span className="text-xs font-medium opacity-80">
                        Français
                      </span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </abbr>
          </div>
          {/* route button request a quote */}
          <abbr title="Request a quote">
            <Link href={"/request-a-quote"}>
              <button
                className={`py-2 px-5
              bg-red-700 hover:bg-red-800 text-white
              transition-colors duration-300 ease-in-out rounded-full text-xs max-sm:text-[.6rem] tracking-widest uppercase text-nowrap`}
              >
                {lang === "french" ? "Demande de devis" : "Request a quote"}
              </button>
            </Link>
          </abbr>
        </div>
      </div>
    </nav>
  );
}
