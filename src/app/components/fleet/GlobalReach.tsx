import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const carousel = [
  {
    name: "Global 7500",
    image: "/images/vistajet-bombardier-global-7500.png",
    speed: "7.700nm | 14.260km",
    property: "14 places | 8 couchages",
    propertyE: "14 places | 8 beddings",
    des: "Le plus grand et le plus long-courrier des jets d’affaires offre une connectivité mondiale imbattable et des ailes conçues avec précision qui assurent un vol exceptionnellement doux. Pouvant voler jusqu'à 17 heures sans escale, il offre la plus grande cabine avec quatre espaces de vie séparés, parfaits pour les affaires ou être en famille.",
    desE: "The largest and longest-haul of the’ Business jets offers unbeatable global connectivity and precision-designed wings that ensure exceptionally smooth flight. It can fly up to 17 hours non-stop, offering the largest cabin with four separate living areas, perfect for business or family.",
  },
  {
    name: "Global 6000",
    image: "/images/vistajet-bombardier-global-6000.png",
    speed: "6.000nm | 11.100km",
    property: "14 places | 7 couchages",
    propertyE: "14 places | 7 beddings",
    des: "Il est doté d'une cabine spacieuse de trois zones distinctes, dont une grande cuisine qui permet de prendre des repas raffinés. Il est parfait pour les réunions d'affaires, la détente ou le repos. Le Global 6000 est particulièrement apprécié pour l'accès aux zones reculées.",
    desE: "It has a spacious cabin with three distinct areas, including a large kitchen that allows you to enjoy refined meals. It is perfect for business meetings, relaxation or rest. The Global 6000 is particularly appreciated for access to remote areas.",
  },
  {
    name: "Global 5000",
    image: "/images/vistajet-bombardier-global-5000.png",
    speed: "5.200nm | 9.630km",
    property: "13 places assises | 7 places couchées",
    propertyE: "13 places assises | 7 beddings",
    des: "C'est l'un des avions les plus spacieux et les plus silencieux de sa catégorie, avec une cabine à trois zones, idéale pour les réunions d'affaires, la détente ou le repos, et une durée de vol pouvant aller jusqu'à 11 heures sans escale.",
    desE: "It is one of the most spacious and quiet aircraft in its class, with a three-zone cabin, ideal for business meetings, relaxation or rest, and a flight time of up to 11 hours non-stop.",
  },
];

export default function GlobalReach() {
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
    <div className="bg-white py-20">
      <div className="max-w-[1250px] mx-auto max-lg:px-20">
        <h1 className="lg:text-6xl text-4xl text-red-700 font-garamond-display text-center">
          {lang === "french" ? "PORTÉE MONDIALE" : "GLOBAL REACH"}
        </h1>
        <Carousel className="mt-5">
          <CarouselContent className="lg:grid lg:grid-cols-3 lg:gap-8 lg:p-5">
            {carousel.map((data, i) => {
              return (
                <CarouselItem key={i}>
                  <Card className="p-10 flex flex-col gap-8 h-full">
                    <h1 className="text-center font-light uppercase text-zinc-700 tracking-[.2em]">
                      {data.name}
                    </h1>
                    <Image
                      src={data.image}
                      alt=""
                      width={300}
                      height={200}
                      layout="responsive"
                    />
                    <div className="flex flex-col gap-3">
                      <span className="text-sm text-zinc-500 ml-8 tracking-wider">
                        {data.speed}
                      </span>
                      <div className="w-full h-[1px] bg-zinc-300"></div>
                      <span className="text-sm text-zinc-500 ml-8 tracking-wider">
                        {lang === "french" ? data.property : data.propertyE}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 tracking-wider leading-6">
                      {lang === "french" ? data.des : data.desE}
                    </p>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="lg:hidden" />
          <CarouselNext className="lg:hidden" />
        </Carousel>
      </div>
    </div>
  );
}
