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
    name: "Challenger 850",
    image: "/images/vistajet-bombardier-challenger-850.png",
    speed: "2.800nm | 5.185km",
    property: "14 places | 7 couchages",
    propertyE: "14 places | 7 beddings",
    des: "Il associe la capacité d’un avion de plus grande envergure au confort et à la flexibilité d’un jet d’affaires, avec une cabine offrant le même espace et le même luxe que celui du Global 6000..",
    desE: "It combines the capabilities of a larger aircraft with the comfort and flexibility of a business jet, featuring a cabin that matches the size and luxury of the Global 6000.",
  },
  {
    name: "Challenger 605",
    image: "/images/vistajet-bombardier-challenger-605.png",
    speed: "4.000nm | 7.408km",
    property: "12 places | 5 couchages",
    propertyE: "12 places | 5 beddings",
    des: "Un impressionnant jet d'affaires intercontinental doté de la cabine la plus large de sa catégorie, offrant des performances exceptionnelles pour un budget équivalent à celui d'un jet sensiblement plus petit, sans compromis sur l'espace de la cabine.",
    desE: "An impressive intercontinental business jet featuring the widest cabin in its class, delivering exceptional performance at a budget comparable to that of a significantly smaller jet, without compromising on cabin space.",
  },
  {
    name: "Challenger 350",
    image: "/images/vistajet-bombardier-challenger-350.png",
    speed: "3.200nm | 5.900km",
    property: "8 places | 3 couchages",
    propertyE: "8 places | 3 beddings",
    des: "Découvrez l'ultime jet d'affaires super-moyen, offrant un accès inégalé à plus d'aéroports que tout autre concurrent de sa catégorie. Avec une autonomie de vol pouvant atteindre sept heures et quinze minutes et une cabine spacieuse comparable à celle d'un grand jet à long rayon d'action, il allie performance et confort exceptionnel.",
    desE: "Experience the ultimate super-mid business jet, providing access to more airports than any competitor in its class. With a flight duration of up to seven hours and fifteen minutes and a spacious cabin comparable to that of a large long-range jet, it combines exceptional performance with unparalleled comfort.",
  },
];

export default function ContinentalRange() {
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
        <h1 className="lg:text-6xl text-4xl text-zinc-700 font-garamond-display text-center">
          {lang === "french" ? "GAMME CONTINENTALE" : "CONTINENTAL RANGE"}
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
