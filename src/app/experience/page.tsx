"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Header from "../components/experience/Header";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
// import MembershipForm from "../components/MembershipForm";

const service = [
  {
    title: "ÉQUIPE D'EXPERTS",
    titleE: "EXPERT TEAM",
    image: "/images/cabin-hostess-dressing-the-cabin.jpg",
    desMain:
      "Pour nous, l’excellence est la norme en matière de service. Avec un équipage de cabine hautement qualifié et une équipe dédiée d’experts en voyage, vous bénéficiez d’un accompagnement inégalé, aussi bien dans les airs qu’au sol.",
    desMainE:
      " When it comes to service, we consider excellence the standard. From highly trained cabin crew to your dedicated team of travel experts, you are in the best hands, both in the air and on the ground.",
    trigger: "EN SAVOIR PLUS SUR L'ÉQUIPE",
    triggerE: "LEARN MORE ABOUT THE TEAM",
    des1: "Une expérience de vol inégalée vous attend. Chaque voyage avec Oppong private jet est assuré par deux pilotes dans le cockpit et un hôte de cabine formé à la Oppong private jet Academy en partenariat avec le British Butler Institute, le Norland College et le Wine & Spirit Education Trust. Pour une sécurité et une expertise maximales, nos pilotes se spécialisent sur un seul type d’appareil et suivent un entraînement intensif deux fois par an.",
    des1E:
      "An unmatched in-flight experience awaits you. Every Oppong private jet flight is operated by two pilots in the cockpit and a cabin host trained at the Oppong private jet Academy in collaboration with the British Butler Institute, Norland College, and the Wine & Spirit Education Trust. To ensure maximum familiarity and safety, our pilots fly only one type of aircraft and undergo intensive training twice a year.",
    des2: "Une équipe d'experts est à votre disposition 24h/24, 7j/7, tout au long de l’année, pour gérer chaque détail logistique de votre voyage, y compris les arrangements au sol. Habituée aux délais de réponse courts, votre équipe dédiée vous garantit un service fiable et efficace à chaque vol.",
    des2E:
      "A team of experts is available 24/7, every day of the year, to handle all logistical aspects of your journey, including ground arrangements. Trained for rapid response times, your dedicated team ensures a reliable and efficient service whenever you wish to fly.",
  },
  {
    title: "PRIVATE DINING",
    titleE: "PRIVATE DINING",
    image: "/images/asia-gastronomy.jpg",
    desMain:
      "Oppong private jet propose des plats raffinés préparés par les chefs privés et les restaurants étoilés les plus prestigieux, vous offrant ainsi une expérience gastronomique d’exception à bord. Grâce à un réseau de plus de 7 000 partenaires, nous répondons à toutes vos envies culinaires.",
    desMainE:
      "Oppong private jet serves exquisite dishes crafted by the most sought-after private chefs and Michelin-starred restaurants, allowing you to savor every moment on board. With a network of over 7,000 partners, we bring you the flavors you desire.",
    trigger: "EN SAVOIR PLUS SUR LES REPAS PRIVÉS",
    triggerE: "LEARN MORE ABOUT PRIVATE MEALS",
    des1: "Conçue en collaboration avec les chefs et restaurants les plus prestigieux au monde, la sélection exclusive de restaurants privés de Oppong private jet est sans égal. Nos menus évoluent au fil des saisons pour vous faire découvrir de nouvelles saveurs. Attachés à votre bien-être, nous sélectionnons les ingrédients les plus frais et de la plus haute qualité, où que soit votre point de départ.",
    des1E:
      "Created in partnership with some of the world’s most renowned chefs and restaurants, Oppong private jet’s exclusive selection of private dining experiences is unmatched. Our menus change with the seasons to bring you new flavors. Committed to your well-being, we source the freshest and highest-quality ingredients, no matter where your journey begins.",
    des2: " Oppong private jet a révolutionné la gastronomie privée en vol en alliant l’art et la science de la restauration, garantissant des plats aussi savoureux en altitude qu’au sol. Grâce à l’application Oppong private jet, profitez d’un choix quasi illimité et réservez vos repas en vol en toute simplicité.",
    des2E:
      "Oppong private jet has transformed private dining in the sky by mastering the art and science of in-flight cuisine, ensuring dishes are just as flavorful at altitude as they are on the ground. With the Oppong private jet app, you have an almost unlimited selection at your fingertips, making in-flight meal reservations effortless.",
    des3: "Notre équipe de restauration privée est à votre disposition pour créer des expériences culinaires sur mesure, adaptées à chaque occasion, afin que vous puissiez savourer pleinement votre temps à bord avec vos invités.",
    des3E:
      "Our private dining team is here to help you craft the perfect culinary experience for any occasion, allowing you to fully enjoy your time on board with your gues",
  },
  {
    title: "OPPONGPET",
    titleE: "OPPONGPET",
    image: "/images/pets.jpeg",
    desMain:
      " Un service exclusif dédié aux membres soucieux du bien-être de leurs compagnons à quatre pattes en vol. Ce programme sur mesure, conçu en collaboration avec des vétérinaires et experts animaliers expérimentés, garantit une expérience de voyage optimale pour nos clients voyageant avec des animaux.",
    desMainE:
      "A dedicated service for members who prioritize the well-being of their four-legged companions on board. This tailor-made program, developed in partnership with experienced veterinarians and animal experts, ensures a seamless and comfortable travel experience for clients flying with pets.",
    trigger: "PLUS D'INFORMATIONS SUR OPPONGPET",
    triggerE: "MORE INFORMATION ABOUT OPPONGPET",
    des1: "Nous nous assurons que vos compagnons fidèles bénéficient du même niveau de soin et d'attention que vous lors de vos voyages avec nous. Avec un membre sur quatre voyageant avec un animal, le programme OppongPet propose des solutions adaptées pour répondre aux besoins et aux défis des déplacements avec des animaux de compagnie.",
    des1E:
      "We ensure that your loyal companions receive the same level of care and attention as you when traveling with us. With one in four members flying with a pet, the OppongPet program provides tailored solutions to meet the needs and challenges of traveling with animals.",
    des2: "Ce programme a été élaboré en collaboration avec des vétérinaires expérimentés, des entraîneurs, des diététiciens et des toiletteurs, afin d’offrir le meilleur confort aux animaux en vol. Les hôtes de cabine de Oppong private jet sont spécialement formés aux premiers secours pour animaux, garantissant leur sécurité tout au long du voyage. Pour les animaux anxieux en avion, nous proposons des cours anti-stress en partenariat avec The Dog House, afin de les préparer à un vol en toute sérénité.",
    des2E:
      "The program was developed in collaboration with experienced veterinarians, trainers, dietitians, and groomers to ensure the highest level of comfort for pets in flight. Oppong private jet’s cabin hosts are specially trained in pet first aid, ensuring their safety throughout the journey. For animals anxious about flying, we offer fear-of-flying courses in partnership with The Dog House to help them prepare for a relaxed and stress-free flight.",
    des3: "Notre portefeuille Private World de destinations et d’expériences partenaires vous ouvre les portes des meilleures propriétés accueillant les animaux de compagnie à travers le monde, garantissant un service sans faille, du départ jusqu’à l’arrivée. Des tapis de couchage Labbvenn faits à la main aux kits de confort comprenant des produits de toilettage et des en-cas, Oppong private jet veille à offrir une expérience de voyage des plus agréables à vos compagnons bien-aimés.",
    des3E:
      "Our Private World portfolio of destinations and partner experiences grants access to some of the finest pet-friendly properties worldwide, ensuring a seamless journey from departure to destination. From handcrafted Labbvenn sleeping mats to amenity kits featuring grooming products and treats, Oppong private jet is dedicated to providing the utmost comfort for your beloved companions.",
  },
  {
    title: "ADVENTURES IN THE SKY",
    titleE: "ADVENTURES IN THE SKY",
    image: "/images/adventures-in-the-sky.jpg",
    desMain:
      "Oppong private jet offre le programme de voyage le plus complet pour les enfants. Chaque aventure est soigneusement adaptée à leur âge et à leurs centres d’intérêt, garantissant des moments uniques et inoubliables à chaque vol.",
    desMainE:
      "Oppong private jet provides the most comprehensive travel program for children. Our adventures are tailored to your child's age and interests, making every journey a memorable experience.",
    trigger: "PLUS D'INFORMATIONS SUR ADVENTURES IN THE SKY",
    triggerE: "MORE ABOUT ADVENTURES IN THE SKY",
    des1: " Voyager avec des enfants implique des besoins spécifiques en matière de divertissement, de confort et de commodité à bord. C'est pourquoi le programme Adventures in the Sky a été conçu pour transformer chaque voyage en une expérience magique et inoubliable. Des aventures extraordinaires, qu’il s’agisse de rassembler famille et amis sur une île secrète du Pacifique ou sur une montagne enneigée immaculée, jusqu’à organiser un goûter enchanté inspiré du Chapelier Fou en plein vol.",
    des1E:
      "Traveling with children presents a unique need for entertainment, convenience and comfort on board. The 'Adventures in the Sky' program was created to turn an ordinary trip into a magical experience that children will be able to cherish forever. Amazing adventures to reunite friends and families from all over the world on a little-known sandy island in the Pacific Ocean, or on a breathtaking mountain with untouched snow, until hosting a flying mad Hatter snack.",
    des2: "Avec des costumiers, des animateurs qualifiés et des activités interactives comme le tournage de leur propre film, les enfants n’auront pas une seconde pour s’ennuyer. Nous avons également conçu des packs d’activités adaptés à chaque tranche d’âge. Notre programme vise à transformer chaque voyage en une aventure passionnante et inoubliable pour les enfants et leurs familles.",
    des2E:
      "With costume designers, skilled entertainers, and interactive activities such as filming their own movie, children will never run out of excitement. We have also created activity packs tailored to different age groups. Our program is designed to make every journey an exciting and memorable adventure for children and families alike.",
  },
  {
    title: "BIBLIOTHÈQUE Oppong private jet",
    titleE: "Oppong private jet LIBRARY",
    image: "/images/Oppong private jet-global-7500-library.jpg",
    desMain:
      "À l’image d’un bon livre, l’aviation privée peut vous emmener où vous le souhaitez. Longtemps perçue comme un moyen d’évasion et de rupture avec le quotidien, l’aviation offre aujourd’hui, grâce à l’intimité de la cabine, un véritable moment de détente et de réflexion.",
    desMainE:
      "Like a great book, private aviation can take you anywhere you wish to go. For years, flying has been seen as an escape, a way to leave everything behind. Today, the privacy of the cabin offers a unique opportunity for relaxation and reflection.",
    trigger: "PLUS D'INFORMATIONS SUR LA BIBLIOTHÈQUE Oppong private jet",
    triggerE: "MORE INFORMATION ABOUT THE Oppong private jet LIBRARY",
    des1: "Offrez-vous un moment de détente avec notre bibliothèque de bord, qui propose une sélection variée de livres dans plusieurs genres et langues. Conçue en partenariat avec Heywood Hill, la prestigieuse librairie londonienne et libraire officiel de la famille royale, elle offre des ouvrages pour tous les goûts, de l’humour au design, en passant par l’aventure et la poésie. Oppong private jet s’est également associé aux experts linguistiques de Grant & Cutler pour inclure des best-sellers internationaux en français, espagnol et mandarin, ainsi qu’une sélection de classiques étrangers.",
    des1E:
      "ake a moment for yourself with our onboard library, featuring a curated selection of books across multiple genres and languages. Commissioned by Heywood Hill, London’s premier bookstore and the official bookseller to the Royal Family, the library offers something for every reader—from humor and design to adventure and poetry. Oppong private jet has also partnered with language specialists Grant & Cutler to include international bestsellers in French, Spanish, and Mandarin, along with a range of classic foreign titles.",
  },
  {
    title: "LE PROGRAMME DES VINS",
    titleE: "THE WINE PROGRAM",
    image: "/images/wine.jpeg",
    desMain:
      "Les effets de l'altitude, de la pression en cabine et de la qualité de l'air peuvent altérer le palais, rendant le choix du vin idéal plus complexe en vol. Oppong private jet a ainsi conçu une carte des vins exclusive, réunissant des crus d’exception du monde entier, sélectionnés pour préserver leur équilibre et leurs arômes à haute altitude.",
    desMainE:
      "The effects of altitude, cabin pressure, and air quality can alter the palate, making it challenging to choose the perfect wine to enjoy in-flight. Oppong private jet has created an exclusive wine list, featuring exceptional wines from around the world that maintain their balance and flavor at altitude",
    trigger: "EN SAVOIR PLUS SUR NOTRE PROGRAMME DE VINS",
    triggerE: "LEARN MORE ABOUT OUR WINE PROGRAM",
    des1: "Le programme de vin de Oppong private jet est conçu pour les membres passionnés, qu'ils soient collectionneurs ou amateurs de grands crus. Afin d’optimiser l’expérience de dégustation en altitude, Oppong private jet a mené des recherches approfondies, incluant la publication du Questionnaire sur le vin dans le ciel, un guide complet sur la dégustation, le service et le transport du vin lors de voyages internationaux avec des œnophiles renommés. Pour garantir un service d’excellence, les hôtes de cabine Oppong private jet sont formés au niveau 2 du Wine & Spirit Education Trust.",
    des1E:
      "Oppong private jet’s wine program caters to members who are passionate about fine wines, whether they collect or simply celebrate them. To enhance the enjoyment of wine at altitude, Oppong private jet has conducted extensive research, including the publication of the Wine in the Sky Questionnaire, a comprehensive guide on tasting, serving, and transporting wine during global travels with leading oenophiles. To further elevate the onboard experience, Oppong private jet’s cabin hosts are trained to Wine & Spirit Education Trust Level 2 certification.",
    des2: "Oppong private jet Private World offre à ses membres des expériences œnologiques sur mesure, allant des visites privées de domaines viticoles à l’accès exclusif à des collectionneurs de grands crus et à des événements prestigieux. En exclusivité pour ses membres, Oppong private jet propose le tout premier service de livraison de cave à cave de caisses de Grand Cru Olivier Bernstein en édition limitée, une initiative unique dans le monde du vin.",
    des2E:
      "Oppong private jet Private World provides members with bespoke wine experiences, from private vineyard tours to exclusive access to fine wine collectors and prestigious events. As a first-of-its-kind initiative, Oppong private jet exclusively offers its members a cellar-to-cellar delivery service for limited-edition Grand Cru Olivier Bernstein cases, redefining luxury wine access.",
  },
];

export default function Experience() {
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
        <div className="max-w-[1250px] mx-auto px-5 mt-16 flex flex-col gap-8">
          <span className="tracking-[.3rem] text-xl font-light">
            {lang === "french"
              ? "CHAQUE VOYAGE EST UNIQUE"
              : "EVERY TRIP IS UNIQUE"}
          </span>
          <p className="text-sm font-light tracking-wider">
            {lang === "french"
              ? "Oppong private jet redéfinit l’expérience des vols privés avec la gamme la plus complète de programmes à bord. Du raffinement de la gastronomie privée au seul programme de vol dédié aux enfants, nos membres profitent pleinement de chaque instant passé à bord de nos avions. Découvrez l’exception de voyager avec Oppong private jet."
              : "Oppong private jet is transforming the way private flights are experienced with the most comprehensive range of onboard programs. From exquisite private dining to the only dedicated in-flight program for children, our members can fully savor every moment in the air. Experience the difference of flying with Oppong private jet."}
          </p>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {service.map((data, i) => {
              return (
                <div
                  key={i}
                  className="h-[250px] bg-cover bg-center relative p-8 flex flex-col justify-end overflow-hidden group"
                  style={{ backgroundImage: `url(${data.image})` }}
                >
                  <span className="z-[1] text-white font-light tracking-wider text-lg">
                    {lang === "french" ? data.title : data.titleE}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black"></div>
                  <div className="bg-[#F9F9F9] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 w-full h-full absolute top-0 left-0 transition-all duration-300 ease-in-out px-5 flex flex-col justify-center gap-3 z-[2]">
                    <span className="text-xl font-medium text-red-700">
                      {lang === "french" ? data.title : data.titleE}
                    </span>
                    <p className="text-xs tracking-wider text-zinc-600 leading-6">
                      {lang === "french" ? data.desMain : data.desMainE}
                    </p>
                    <Dialog>
                      <DialogTrigger className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
                        {lang === "french" ? data.trigger : data.triggerE}
                      </DialogTrigger>
                      <DialogContent className="max-w-[1200px] max-h-[600px] h-full w-full flex lg:flex-row flex-col-reverse lg:justify-between items-center overflow-y-auto">
                        <div className="flex flex-col gap-7 w-full">
                          <DialogTitle className="text-xl font-medium text-red-700">
                            {lang === "french" ? data.title : data.titleE}
                          </DialogTitle>
                          <p className="text-xs tracking-wider text-zinc-600 leading-6">
                            {lang === "french" ? data?.des1 : data?.des1E}
                          </p>
                          <p className="text-xs tracking-wider text-zinc-600 leading-6">
                            {lang === "french" ? data?.des2 : data?.des2E}
                          </p>
                          <p className="text-xs tracking-wider text-zinc-600 leading-6">
                            {lang === "french" ? data?.des3 : data?.des3E}
                          </p>
                          <Link href={"/request-a-quote"}>
                            <button className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
                              {lang === "french"
                                ? "SE RENSEIGNER MAINTENANT"
                                : "INQUIRE NOW"}
                            </button>
                          </Link>
                        </div>
                        <div className="w-full">
                          <Image
                            src={data.image}
                            alt=""
                            width={600}
                            height={600}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between mb-20">
            <div className="w-full lg:h-[500px] h-[300px] relative">
              <Image
                src={"/images/peninsula-villa---aerial-2.jpeg"}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full bg-[#F8F8F8]">
              <div className="p-8 flex flex-col gap-5">
                <h1 className="text-2xl font-light tracking-[.2em] text-zinc-600">
                  {lang === "french"
                    ? "UN MONDE PRIVÉ POUR LES MEMBRES DE Oppong private jet"
                    : "A PRIVATE WORLD FOR Oppong private jet MEMBERS"}
                </h1>
                <p className="font-light tracking-wider leading-6 text-sm">
                  {lang === "french"
                    ? "Chez Oppong private jet, le monde s’offre véritablement à vous. Le portefeuille Oppong private jet Private World propose une sélection exclusive des meilleurs partenaires et événements de luxe, soigneusement choisis pour offrir des expériences uniques à notre communauté de membres."
                    : "At Oppong private jet, the world is yours to explore. The Oppong private jet Private World portfolio offers a handpicked selection of the finest luxury partners and exclusive events, curated to provide exceptional experiences for our esteemed members."}
                </p>
                <p className="font-light tracking-wider leading-6 text-sm">
                  {lang === "french"
                    ? "Private World offre à ses membres des itinéraires sur mesure et soigneusement sélectionnés pour vivre des expériences rares et authentiques dans les destinations les plus spectaculaires du monde. Grâce à un réseau de plus de 600 partenaires internationaux, nos membres accèdent à des suites et résidences exclusives, des chalets de ski, des yachts, des îles privées et des domaines d’exception, bénéficiant ainsi d’une hospitalité ultime, d’une intimité absolue et d’un service entièrement personnalisé."
                    : "Private World provides all its members with handpicked, tailor-made itineraries to experience rare and authentic moments in breathtaking destinations worldwide. With a network of over 600 international partners, members gain access to exclusive suites and residences, ski chalets, yachts, private islands, and exceptional estates—ensuring the ultimate in hospitality, privacy, and personalized service. "}
                </p>
                {/* <button className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
                  SE RENSEIGNER MAINTENANT
                </button> */}
              </div>
            </div>
          </div>
          {/* <div className="bg-white mt-8">
            <div className="max-w-[1250px] mx-auto px-5 flex flex-col gap-5 pt-10">
              <span className="tracking-[.3rem] text-xl font-light">
                DEMANDE D&apos;ADHÉSION
              </span>
              <h1 className="text-sm font-light tracking-wider">
                Flexible. Sans actifs. Adapté à vos besoins.
              </h1>
              <p className="text-sm font-light tracking-wider leading-6">
                Oppong private jet se passionne pour l&apos;adaptation de chaque vol aux
                besoins spécifiques et aux préférences personnelles des membres.
                Nos adhésions sont flexibles, sans investissement, et offrent un
                accès à une flotte cohérente et de marque de plus de 300 avions
                super-moyens et longs courriers, avec les plus hauts niveaux de
                service à bord de l&apos;aviation privée.
              </p>
              <MembershipForm />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
