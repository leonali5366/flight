"use client";
import { Card, CardContent } from "@/components/ui/card";
import Nav from "../components/Nav";
import Image from "next/image";
import Header from "./Header";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function EmptyLegs() {
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
      <Nav />
      <Header />
      <div className="bg-white">
        {/* <ul className="h-20 place-content-center shadow-md flex items-center gap-5">
          <li className="h-full flex items-center justify-center border-b-2 border-red-700">
            What is an Empty leg?
          </li>
          <li className="h-full flex items-center justify-center border-b-2 border-red-700">
            For Who?
          </li>
          <li className="h-full flex items-center justify-center border-b-2 border-red-700">
            Our Empty Legs
          </li>
        </ul> */}
        <div className="max-w-[1250px] mx-auto px-5 flex flex-col gap-20">
          <h1 className="text-4xl font-medium font-garamond-display text-center mt-14">
            {lang === "french"
              ? "Découvrez nos Empty Legs"
              : "Discover our Empty Legs!"}
          </h1>
          <Card>
            <CardContent className="mt-5">
              <div className="flex md:flex-row flex-col md:justify-between gap-10 md:h-[300px]">
                <div className="relative w-full md:h-full h-[250px]">
                  <Image
                    src={"/images/oppong-empty-leg.jpg"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="w-full flex flex-col justify-center gap-3">
                  <span className="text-xl font-medium text-zinc-800 uppercase">
                    {lang === "french"
                      ? "Qu’est ce qu’un Empty Leg ?"
                      : "What is an Empty Leg?"}
                  </span>
                  <p className="text-zinc-600">
                    {lang === "french"
                      ? "Un Empty Leg est un vol aller ou retour à vide d’un voyage déjà réservé. C’est souvent l’opportunité de réserver un jet privé à moindre coût. L’Empty Leg aura un horaire de départ, une destination et un type d’avion spécifique. Il est essentiel de garder à l’esprit que toute modification souhaitée par le passager initial peut avoir un effet direct, et parfois à la dernière minute, sur votre vol."
                      : "An empty leg is the empty return or outbound flight of an already booked trip. This is often the opportunity for cost-effective private jet bookings. The advertised empty leg will have a fixed departure date, time and destination. The type of aircraft will also be set upon the original booking. It is essential to bear in mind that any modifications the actual passenger would apply to their reservation will have a direct, last-minute impact on your flight."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="mt-5">
              <div className="flex md:flex-row flex-col-reverse md:justify-between gap-10 md:h-[300px]">
                <div className="w-full flex flex-col justify-center gap-3">
                  <span className="text-xl font-medium text-zinc-800 uppercase">
                    {lang === "french" ? "Pour Qui ?" : "For Who?"}
                  </span>
                  <p className="text-zinc-600">
                    {lang === "french"
                      ? "Les Empty Legs sont destinés à une clientèle flexible qui souhaite bénéficier d’un voyage de luxe très avantageux. Dès qu’un Empty Leg devient disponible, SPARFELL le publie dans la section de recherche ci-dessous. Vous pouvez ainsi voir si l’un de nos Empty Legs correspond à vos besoins. Si ce type de voyage peut convenir à certains passagers, il n’est pas souhaitable pour ceux dont le voyage nécessite précision et coordination. Pour en savoir plus, veuillez contacter l’équipe Charter SPARFELL."
                      : "Empty legs are dedicated to a flexible clientele who want to benefit from cost-effective luxury travel. When an empty leg becomes available, SPARFELL will offer it in the above research section, and you will be able to see if any journeys match your travels. While this type of travel might suit certain passengers, the empty legs will not be suitable for those who need precise and coordinated journeys. To know more, contact the SPARFELL charter team directly."}
                  </p>
                </div>
                <div className="relative w-full md:h-full h-[250px]">
                  <Image
                    src={"/images/oppong-empty-legs(2).jpg"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <FrequentlyAskQuestion />
      <Contact />
      <Footer />
    </div>
  );
}
