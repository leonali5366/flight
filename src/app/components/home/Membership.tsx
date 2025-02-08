import Image from "next/image";
import { useEffect, useState } from "react";

export default function Membership() {
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
    <div className="bg-white mb-20">
      <div className="max-w-[1250px] mx-auto mt-5 px-5 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          {/* <span className="text-xl text-zinc-500 tracking-widest">
            NOS ABONNEMENTS
          </span> */}
          {/* <p className="text-sm text-zinc-500 tracking-wider">
            Oppong Private Jet propose des abonnements flexibles et sans investissement de
            capital pour répondre à vos besoins de vol privé. Nos membres
            bénéficient d&apos;un accès mondial et d&apos;un service inégalé à
            bord d&apos;une flotte cohérente et moderne composée de jets privés
            super-midsize, long-courriers et très -long-courriers.
          </p> */}
          <div className="flex justify-between">
            <div className="w-full h-[500px] relative">
              <Image
                src={"/images/membership.jpg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full">
              <div className="p-8 h-full flex flex-col items-start justify-center gap-5 text-sm bg-[#F8F8F8]">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">Program</span>
                  <p className="font-light tracking-wider leading-6">
                    {lang === "french"
                      ? "Optez pour un abonnement sur-mesure, parfaitement adapté à vos préférences de vol, qui vous garantit un accès illimité 365 jours par an à l'ensemble de la flotte exclusive de 300 avions du groupe Oppong."
                      : "Choose a tailor-made subscription designed to suit your flight preferences, offering you guaranteed access 365 days a year to the entire exclusive fleet of 300 aircraft from the Oppong group."}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">VJ25</span>
                  <p className="font-light tracking-wider leading-6">
                    {lang === "french"
                      ? "L'option parfaite pour des voyages exclusifs et occasionnels, dès 25 heures de vol par an, avec un accès total aux services prestigieux de Oppong private jet."
                      : " The ideal membership for high-quality and infrequent travel, starting from 25 flight hours per year, with full access to Oppong private jet’s renowned services."}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">
                    Corporate
                  </span>
                  <p className="font-light tracking-wider leading-6">
                    {lang === "french"
                      ? "Il garantit une flexibilité optimale pour maximiser votre efficacité professionnelle, avec des horaires de départ ajustables, la possibilité d'utiliser deux avions simultanément et des conditions de paiement avantageuses, sur une flotte d'élite de jets privés internationaux."
                      : "It provides the ultimate flexibility for your professional efficiency, with adjustable departure times, the ability to use two aircraft simultaneously, and preferential payment terms, on a top-tier fleet of international private jets."}
                  </p>
                </div>
                {/* <button className="text-xs px-7 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out tracking-wider text-white">
                  VOIR NOS ABONNEMENTS
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* private jets */}
        <div className="flex justify-between">
          <div className="w-full">
            <div className="p-8 h-full flex flex-col items-start gap-5 text-sm bg-[#F8F8F8]">
              <span className="text-xl tracking-[0.2em] font-light text-zinc-800">
                {lang === "french" ? "UNE FLOTTE MONDIALE" : "A WORLD FLEET"}
              </span>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                {lang === "french"
                  ? " La légendaire flotte argentée et rouge de Oppong private jet est prête pour vous. Avec des avions de toutes catégories, du régional au long-courrier, et une gamme complète de tailles de cabine, voyagez à tout moment, partout dans le monde, en bénéficiant d’un niveau de sécurité et de confort inégalé."
                  : "Oppong private jet’s iconic silver and red fleet is ready for you. With aircraft ranging from regional to global and a full selection of cabin sizes, you can travel anytime, anywhere, with the highest standards of safety and comfort."}
              </p>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                {lang === "french"
                  ? " Notre service en cabine est pensé pour offrir un environnement idéal à bord, avec des options telles que des suites d'affaires entièrement équipées pour nos voyageurs professionnels, ainsi que des business suites parfaites pour se détendre en vol ou voyager en famille."
                  : "Our in-cabin service is designed to create the perfect onboard environment, offering options such as fully equipped business suites for our travelers and business suites ideal for those looking to relax or travel with family."}
              </p>
              {/* <button className="text-xs px-7 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out tracking-wider text-white">
                VOIR LA FLOTTE
              </button> */}
            </div>
          </div>
          <div className="w-full h-[474px] relative">
            <Image
              src={"/images/privatejet.jpg"}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* PrivateDining */}
        <div className="flex justify-between">
          <div className="w-full h-[478px] relative">
            <Image
              src={"/images/privateDining.jpeg"}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full">
            <div className="p-8 h-full flex flex-col items-start gap-5 text-sm bg-[#F8F8F8]">
              <span className="text-xl tracking-[0.2em] font-light text-zinc-800">
                {lang === "french"
                  ? "L'EXPÉRIENCE ULTIME DE VOL PRIVÉ"
                  : "THE ULTIMATE PRIVATE FLIGHT EXPERIENCE"}
              </span>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                {lang === "french"
                  ? "Oppong private jet a révolutionné l’expérience en vol en concevant des programmes exclusifs qui permettent à ses membres de profiter pleinement de chaque moment à bord. De la création de menus saisonniers adaptés aux spécificités des repas en altitude à l’élaboration de programmes dédiés aux enfants et aux animaux de compagnie, chaque voyage avec nous est une expérience unique et inoubliable."
                  : " Oppong private jet has redefined the in-flight experience by designing exclusive flight programs that allow members to make the most of their time on board. From crafting seasonal menus that enhance dining at altitude to creating tailored programs for children and pets, every journey with us is unique and unforgettable."}
              </p>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                {lang === "french"
                  ? "Nous offrons un service inégalé grâce à nos équipes de cabine formées par des institutions prestigieuses telles que le British Butler Institute, le Norland College, le Wine & Spirit Education Trust et MedAire. Chaque vol est assuré par au moins une hôtesse de cabine, garantissant une expérience fluide et un service d’excellence absolue."
                  : "We provide an unparalleled service with cabin crews trained by renowned institutions such as the British Butler Institute, Norland College, the Wine & Spirit Education Trust, and MedAire. Every flight is attended by at least one cabin hostess, ensuring a seamless experience and the highest level of excellence."}
              </p>
              {/* <abbr title="Private Dining">
                <button className="text-xs px-7 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out tracking-wider text-white">
                  DÉCOUVREZ NOS SERVICES À BORD EMBLÉMATIQUES
                </button>
              </abbr> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
