import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./anime";
import Curve from "./Curve";
import Links from "./Links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    {
      title: "Accueil",
      titleE: "Home",
      href: "/",
    },
    {
      title: "La flotte",
      titleE: "Fleet",
      href: "/fleet",
    },
    {
      title: "Expérience",
      titleE: "Experience",
      href: "/experience",
    },
    {
      title: "Vols à vide",
      titleE: "Empty Legs",
      href: "/empty-legs",
    },
    {
      title: "Demande de devis",
      titleE: "Request a quote",
      href: "/request-a-quote",
    },
  ];
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
  const handleLangEnglish = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };
  const handleLangFrench = () => {
    localStorage.setItem("lang", "french");
    window.location.reload();
  };
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 h-screen bg-red-800 text-white"
    >
      <Curve />

      <div className="box-border h-full md:p-[100px] p-[50px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 text-5xl md:mt-20 mt-10">
          <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Links key={index} data={{ ...data, index }} />
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="mt-20 mx-auto">
              <Globe />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={handleLangEnglish}
                disabled={lang === "english"}
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">United States</span>
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
        </div>
      </div>
    </motion.div>
  );
}
