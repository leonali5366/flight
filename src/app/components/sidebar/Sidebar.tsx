import React from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./anime";
import Curve from "./Curve";
import Links from "./Links";

export default function Sidebar() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "La flotte",
      href: "/fleet",
    },
    {
      title: "Expérience",
      href: "/experience",
    },
  ];

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
        </div>
      </div>
    </motion.div>
  );
}
