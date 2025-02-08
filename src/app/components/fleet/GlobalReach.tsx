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
    des: "Le plus spacieux et performant des jets d’affaires long-courriers propose une connectivité mondiale inégalée et des ailes minutieusement conçues pour garantir un vol exceptionnellement fluide. Capable de voler sans escale jusqu’à 17 heures, il offre la plus grande cabine de sa catégorie, divisée en quatre espaces de vie distincts, parfaits pour les voyages d’affaires ou en famille.",
    desE: "The largest and longest-range business jet delivers unmatched global connectivity and precisely engineered wings for an exceptionally smooth flight. Capable of flying non-stop for up to 17 hours, it features the most spacious cabin in its class, divided into four distinct living areas, perfect for business or family travel.",
  },
  {
    name: "Global 6000",
    image: "/images/vistajet-bombardier-global-6000.png",
    speed: "6.000nm | 11.100km",
    property: "14 places | 7 couchages",
    propertyE: "14 places | 7 beddings",
    des: "Ce jet se distingue par une cabine spacieuse répartie en trois zones distinctes, incluant une vaste cuisine conçue pour savourer des repas raffinés. Idéal pour les réunions d'affaires, la détente ou le repos, le Global 6000 est particulièrement apprécié pour son accès privilégié aux zones reculées.",
    desE: "This jet features a spacious cabin divided into three distinct zones, including a large kitchen designed for enjoying gourmet meals. Ideal for business meetings, relaxation, or rest, the Global 6000 is especially valued for its privileged access to remote areas.",
  },
  {
    name: "Global 5000",
    image: "/images/vistajet-bombardier-global-5000.png",
    speed: "5.200nm | 9.630km",
    property: "13 places assises | 7 places couchées",
    propertyE: "13 places assises | 7 beddings",
    des: "Découvrez l'un des avions les plus spacieux et silencieux de sa catégorie, doté d'une cabine répartie en trois zones distinctes, idéale pour les réunions d'affaires, la détente ou le repos, et capable d'effectuer des vols sans escale pouvant durer jusqu'à 11 heures.",
    desE: "Experience one of the most spacious and quiet jets in its class, featuring a three-zone cabin perfect for business meetings, relaxation, or rest, with a non-stop flight duration of up to 11 hours.",
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
