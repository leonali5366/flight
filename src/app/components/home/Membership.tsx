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
                      ? "L'abonnement sur-mesure adapté à vos préférences de vol et qui vous offre un accès garanti 365 jours par an à l'ensemble de la flotte de 300 avions de la holding Vista."
                      : "The tailor-made subscription tailored to your flight preferences and offers you guaranteed access 365 days a year to the entire fleet of 300 aircraft of the holding Vista."}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">VJ25</span>
                  <p className="font-light tracking-wider leading-6">
                    {lang === "french"
                      ? "L'adhésion idéale pour des voyages de haute qualité et peu fréquents, à partir de 25 heures de vol par an, avec un accès complet aux services emblématiques de VistaJet."
                      : "The ideal membership for high-quality and infrequent travel, starting at 25 flight hours per year, with full access to VistaJet's iconic services."}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">
                    Corporate
                  </span>
                  <p className="font-light tracking-wider leading-6">
                    {lang === "french"
                      ? "Il offre la meilleure souplesse pour votre éfficacité professionnelle grâce à des horaires de départ flexibles, à l'utilisation simultanée de deux avions et à des conditions de paiement préférentielles, sur une flotte internationale de jets privés de premier plan."
                      : "It offers the best flexibility for your business efficiency thanks to flexible departure times, the simultaneous use of two aircraft and preferential payment terms, on a leading international fleet of private jets."}
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
                  ? "La flotte emblématique argentée et rouge de VistaJet vous attend. Avec des avions de toutes les gammes, du régional au mondial, et avec un éventail complet de tailles de cabine à choisir, vous pouvez voyager à tout moment, n'importe où, avec un niveau de securité et de confort optimals."
                  : "VistaJet's iconic red and silver fleet awaits you. With aircraft of all ranges, from regional to global, and with a full range of cabin sizes to choose from, you can travel at any time, anywhere, with an optimal level of safety and comfort."}
              </p>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                {lang === "french"
                  ? "Notre service en cabine est conçu pour créer l'environnement parfait à bord, avec des options telles que des suites d'affaires entièrement équipées pour nos voyageurs, ou des business suites pour ceux qui souhaitent se détendre à bord ou qui voyagent en famille."
                  : "Our cabin service is designed to create the perfect onboard environment, with options such as fully equipped business suites for our travelers, or business suites for those who wish to relax on board or who travel with family."}
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
                  ? "VistaJet a transformé l'expérience en vol, en élaborant une sélection de programmes de vol qui permettent aux membres de profiter pleinement de leur séjour à bord. De la création de menus saisonniers qui tiennent compte des nuances des repas en altitude à l'élaboration de programmes à bord pour les enfants et les animaux domestiques, chaque voyage avec nous est unique et mémorable."
                  : "VistaJet has transformed the flight experience, developing a selection of flight programs that allow members to fully enjoy their stay on board. From creating seasonal menus that take into account the nuances of aloft meals to developing on-board programs for children and pets, every trip with us is unique and memorable."}
              </p>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                {lang === "french"
                  ? "Nous offrons un service inégalé avec des équipes de cabine formées par le British Butler Institute, le Norland College, le Wine & Spirit Education Trust et MedAire. Nous garantissons qu'au moins une hôtesse de cabine vous accueillera sur chaque vol, de sorte que vous pouvez vous attendre à un service sans faille au plus haut niveau d'excellence."
                  : "We offer unparalleled service with cabin crews formed by the British Butler Institute, Norland College, Wine & Spirit Education Trust and MedAire. We guarantee that at least one cabin hostess will welcome you on every flight, so you can expect flawless service at the highest level of excellence."}
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
