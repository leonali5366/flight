import { motion } from "framer-motion";
import { slide } from "./anime";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LinkData {
  title: string;
  titleE: string;
  href: string;
  index: number;
}

export default function Links({ data }: { data: LinkData }) {
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
  const { title, titleE, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href}>
        <button className="text-white max-md:text-xl">
          {lang === "french" ? title : titleE}
        </button>
      </Link>
    </motion.div>
  );
}
