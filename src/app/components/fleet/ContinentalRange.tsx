import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const carousel = [
  {
    name: "Challenger 850",
    image: "/images/vistajet-bombardier-challenger-850.png",
    speed: "2.800nm | 5.185km",
    property: "14 places | 7 couchages",
    des: "Il combine les capacités d'un avion plus grand avec le confort et la flexibilité d'un jet d'affaires, avec une cabine identique en taille et en luxe à celle du Global 6000.",
  },
  {
    name: "Challenger 605",
    image: "/images/vistajet-bombardier-challenger-605.png",
    speed: "4.000nm | 7.408km",
    property: "12 places | 5 couchages",
    des: "Un impressionnant jet d'affaires intercontinental doté de la cabine la plus large de sa catégorie, offrant des performances exceptionnelles pour un budget équivalent à celui d'un jet sensiblement plus petit, sans compromis sur l'espace de la cabine.",
  },
  {
    name: "Challenger 350",
    image: "/images/vistajet-bombardier-challenger-350.png",
    speed: "3.200nm | 5.900km",
    property: "8 places | 3 couchages",
    des: "L'ultime jet d'affaires super-moyen ayant accès à plus d'aéroports que tout autre concurrent de sa catégorie, avec une durée de vol pouvant atteindre sept heures et quinze minutes, et une section de cabine spacieuse similaire à celle d'un grand avion à plus long rayon d’action.",
  },
];

export default function ContinentalRange() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-[1250px] mx-auto max-lg:px-20">
        <h1 className="lg:text-6xl text-4xl text-zinc-700 font-garamond-display text-center">
          GAMME CONTINENTALE
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
                        {data.property}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 tracking-wider leading-6">
                      {data.des}
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
