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
      "En matière de service, nous considérons l'excellence comme la norme. Du personnel de cabine hautement qualifié à votre équipe personnelle d'experts en voyage, vous êtes entre les meilleures mains, dans les airs comme au sol.",
    desMainE:
      "When it comes to service, we see excellence as the norm. From highly trained cabin crew to your personal team of travel experts, you are in the best hands, in the air and on the ground.",
    trigger: "EN SAVOIR PLUS SUR L'ÉQUIPE",
    triggerE: "LEARN MORE ABOUT THE TEAM",
    des1: "Une expérience inégalée en cabine vous attend. Chaque vol VistaJet compte deux pilotes dans le poste de pilotage et un hôte de cabine formé à la VistaJet Academy par le British Butler Institute, le Norland College et le Wine & Spirit Education Trust. Les pilotes ne volent que sur un seul type d'appareil, afin de garantir une familiarité maximale, et s'entraînent deux fois par an.",
    des1E:
      "An unparalleled cabin experience awaits you. Each VistaJet flight has two pilots in the cockpit and one cabin host trained at the VistaJet Academy by the British Butler Institute, Norland College and the Wine & Spirit Education Trust. Pilots only fly on one type of aircraft, to ensure maximum familiarity, and train twice a year.",
    des2: "Une équipe d'experts se tient personnellement à votre disposition 24 heures sur 24, 7 jours sur 7, tous les jours de l'année, pour organiser tous les aspects de la logistique du voyage, y compris les arrangements au sol. Formée aux délais de réponse courts, votre équipe est là pour vous fournir un service fiable et efficace chaque fois que vous souhaitez prendre l'avion.",
    des2E:
      "A team of experts is personally at your disposal 24 hours on 24, 7 days on 7, every day of the year, to organize all aspects of the logistics of the trip, including ground arrangements. Trained in short response times, your team is there to provide you with reliable and efficient service whenever you want to fly.",
  },
  {
    title: "PRIVATE DINING",
    titleE: "PRIVATE DINING",
    image: "/images/asia-gastronomy.jpg",
    desMain:
      "VistaJet sert des plats préparés par les chefs privés et les restaurants étoilés les plus recherchés, ce qui vous permet de savourer le temps passé ensemble à bord. Travaillant avec plus de 7 000 partenaires, nous vous proposons toutes les saveurs que vous souhaitez.",
    desMainE:
      "VistaJet serves dishes prepared by private chefs and the most sought-after starred restaurants, allowing you to savor the time spent together on board. Working with more than 7,000 partners, we offer you all the flavors you want.",
    trigger: "EN SAVOIR PLUS SUR LES REPAS PRIVÉS",
    triggerE: "LEARN MORE ABOUT PRIVATE MEALS",
    des1: "Créée en partenariat avec certains des chefs et restaurants les plus renommés au monde, la sélection exclusive de restaurants privés de VistaJet est inégalée. Nos menus changent en fonction des saisons, pour vous offrir de nouvelles saveurs. Soucieux de votre bien-être, nous nous procurons les ingrédients et les plats les plus frais et de la plus haute qualité, quel que soit votre lieu de départ.",
    des1E:
      "Created in partnership with some of the world's most renowned chefs and restaurants, VistaJet's exclusive selection of private restaurants is unmatched. Our menus change according to the seasons, to offer you new flavors. Concerned about your well-being, we source the freshest and highest quality ingredients and dishes, no matter where you start.",
    des2: "VistaJet a transformé la restauration privée dans les airs en explorant l'art et la science de la restauration et en créant des plats aussi savoureux en altitude qu'au sol. L'application VistaJet offre un choix presque illimité au bout de vos doigts, vous permettant de réserver vos repas en vol en toute simplicité.",
    des2E:
      "VistaJet has transformed private dining in the air by exploring the art and science of dining and creating dishes that are as tasty at altitude as they are on the ground. The VistaJet app offers an almost unlimited choice at your fingertips, allowing you to book your meals in flight with ease.",
    des3: "Notre équipe de restauration privée est là pour vous aider à créer le goût parfait pour toute occasion, afin que vous puissiez profiter de votre temps à bord avec vos invités.",
    des3E:
      "Our private catering team is here to help you create the perfect taste for any occasion, so you can enjoy your time onboard with your guests.",
  },
  {
    title: "VISTAPET",
    titleE: "VISTAPET",
    image: "/images/pets.jpeg",
    desMain:
      "Le service pour les membres qui se soucient du bien-être de leurs compagnons à quatre pattes à bord. Ce programme sur mesure a été conçu en collaboration avec des vétérinaires expérimentés et des experts animaliers pour répondre aux besoins de nos clients voyageant avec des animaux.",
    desMainE:
      "The service for members who care about the well-being of their four-legged companions on board. This tailor-made program has been designed in collaboration with experienced veterinarians and animal experts to meet the needs of our clients traveling with animals.",
    trigger: "PLUS D'INFORMATIONS SUR VISTAPET",
    triggerE: "MORE INFORMATION ABOUT VISTAPET",
    des1: "Nous veillons à ce que vos fidèles compagnons reçoivent le même niveau de soutien et d'attention que vous lorsque vous voyagez avec nous. Avec un membre sur quatre voyageant avec des animaux, le programme VistaPet offre des solutions aux différents besoins et défis liés aux voyages avec des animaux de compagnie.",
    des1E:
      "We ensure that your faithful companions receive the same level of support and attention as you do when traveling with us. With one in four members travelling with pets, the VistaPet program offers solutions to the different needs and challenges of traveling with pets.",
    des2: "Le programme a été conçu en collaboration avec des vétérinaires expérimentés, des entraîneurs, des diététiciens et des toiletteurs, tandis que les hôtes de cabine de VistaJet sont formés aux premiers secours pour animaux afin de garantir la sécurité des passagers animaux pendant le voyage. Pour les animaux qui ont peur de l'avion, nous proposons des cours sur la peur de l'avion, en partenariat avec The Dog House, afin de les préparer à un vol détendu.",
    des2E:
      "The program has been designed in collaboration with experienced veterinarians, coaches, dietitians and groomers, while VistaJet cabin guests are trained in animal first aid to ensure the safety of animal passengers during the journey. For animals who are afraid of flying, we offer classes on fear of flying, in partnership with The Dog House, to prepare them for a relaxed flight.",
    des3: "Notre portefeuille Private World de destinations et d'expériences partenaires offre un accès à certaines des meilleures propriétés accueillant les animaux de compagnie à travers le monde, promettant un service sans faille, du départ à la destination. Des tapis de couchage Labbvenn faits à la main aux kits de commodités comprenant des produits de toilettage et des en-cas, VistaJet est à portée de main pour assurer un service confortable à vos amis bien-aimés.",
    des3E:
      "Our Private World portfolio of partner destinations and experiences provides access to some of the best pet-friendly properties around the world, promising seamless service from departure to destination. From handmade Labbvenn sleeping mats to amenity kits including grooming products and snacks, VistaJet is on hand to ensure comfortable service to your beloved friends.",
  },
  {
    title: "ADVENTURES IN THE SKY",
    titleE: "ADVENTURES IN THE SKY",
    image: "/images/adventures-in-the-sky.jpg",
    desMain:
      "VistaJet propose le programme de voyage le plus complet pour les enfants. Nos aventures sont adaptées à l'âge et aux centres d'intérêt de votre enfant, ce qui rend chaque voyage mémorable.",
    desMainE:
      "VistaJet offers the most comprehensive travel program for children. Our adventures are tailored to the age and interests of your child, making every trip memorable.",
    trigger: "PLUS D'INFORMATIONS SUR ADVENTURES IN THE SKY",
    triggerE: "MORE ABOUT ADVENTURES IN THE SKY",
    des1: "Voyager avec des enfants présente un besoin unique de divertissement, de commodité et de confort à bord. Le programme 'Adventures in the Sky' a été créé pour transformer un voyage ordinaire en une expérience magique que les enfants pourront chérir à jamais. Des aventures étonnantes pour réunir des amis et des familles de tous les coins du monde sur une île sablonneuse peu connue de l'océan Pacifique, ou sur une montagne époustouflante à la neige intacte, jusqu'à l'organisation d'un goûter de Chapelier fou volant.",
    des1E:
      "Traveling with children presents a unique need for entertainment, convenience and comfort on board. The 'Adventures in the Sky' program was created to turn an ordinary trip into a magical experience that children will be able to cherish forever. Amazing adventures to reunite friends and families from all over the world on a little-known sandy island in the Pacific Ocean, or on a breathtaking mountain with untouched snow, until hosting a flying mad Hatter snack.",
    des2: "Avec des costumiers, des animateurs qualifiés et des activités interactives telles que le tournage de votre propre film, les enfants auront du mal à s'ennuyer. Nous avons également créé des packs d'activités pour chaque tranche d'âge. Notre programme est conçu pour créer des voyages passionnants et mémorables pour les enfants et les familles.",
    des2E:
      "With costume designers, skilled animators, and interactive activities such as shooting your own movie, kids will find it hard to get bored. We have also created activity packs for each age group. Our program is designed to create exciting and memorable trips for children and families alike.",
  },
  {
    title: "BIBLIOTHÈQUE VISTAJET",
    titleE: "VISTAJET LIBRARY",
    image: "/images/vistajet-global-7500-library.jpg",
    desMain:
      "Comme un bon livre, l'aviation privée peut vous emmener partout où vous voulez aller. Pendant des années, l'aviation a été considérée comme une évasion, un moyen de tout laisser derrière soi. Aujourd'hui, l'intimité de la cabine offre un moment de détente et de réflexion.",
    desMainE:
      "As a good book, private aviation can take you anywhere you want to go. For years, aviation has been seen as an escape, a way to leave everything behind. Today, the privacy of the cabin offers a moment of relaxation and reflection.",
    trigger: "PLUS D'INFORMATIONS SUR LA BIBLIOTHÈQUE VISTAJET",
    triggerE: "MORE INFORMATION ABOUT THE VISTAJET LIBRARY",
    des1: "Prenez du temps pour vous dans notre bibliothèque de bord, qui propose une sélection de livres en plusieurs genres et en plusieurs langues. Commandée à Heywood Hill, la principale librairie de Londres et libraire officiel de la famille royale, la bibliothèque propose des ouvrages pour tous les lecteurs, de l'humour au design, en passant par l'aventure et la poésie. VistaJet s'est associé aux spécialistes des langues étrangères Grant & Cutler pour inclure également des best-sellers internationaux en français, en espagnol et en mandarin, avec une gamme de titres étrangers classiques.",
    des1E:
      "Make time for yourself in our on-board library, which offers a selection of books in multiple genres and languages. Commissioned from Heywood Hill, London's leading bookstore and the official bookseller of the royal family, the library offers books for all readers, from humor to design, to adventure and poetry. VistaJet has partnered with foreign language specialists Grant & Cutler to also include international bestsellers in French, Spanish and Mandarin, along with a range of classic foreign titles.",
  },
  {
    title: "LE PROGRAMME DES VINS",
    titleE: "THE WINE PROGRAM",
    image: "/images/wine.jpeg",
    desMain:
      "Les effets de l'altitude, de la pression dans la cabine et de la qualité de l'air font qu'il peut être difficile de choisir le bon vin à déguster à bord, car le palais est altéré. VistaJet a créé une carte des vins de marque, composée de grands vins du monde entier qui conservent leur équilibre en altitude.",
    desMainE:
      "The effects of altitude, cabin pressure and air quality make it difficult to choose the right wine to enjoy on board, as the palate is altered. VistaJet has created a brand-name wine list, made up of great wines from around the world that maintain their balance at altitude.",
    trigger: "EN SAVOIR PLUS SUR NOTRE PROGRAMME DE VINS",
    triggerE: "LEARN MORE ABOUT OUR WINE PROGRAM",
    des1: "Le programme de vin de VistaJet s'adresse aux membres qui sont passionnés par le vin, qu'il s'agisse de le collectionner ou de le célébrer. Les recherches de VistaJet, visant à affiner les plaisirs de la dégustation du vin en altitude, comprennent la publication du Questionnaire sur le vin dans le ciel, un recueil de suggestions pour la dégustation, le service et le transport du vin lors de voyages autour du monde avec des œnophiles de premier plan. Pour améliorer encore la dégustation à bord, les hôtes de cabine VistaJet sont formés par le Wine & Spirit Education Trust au niveau 2.",
    des1E:
      "VistaJet's wine program is for members who are passionate about wine, whether it's collecting it or celebrating it. VistaJet's research, aimed at refining the pleasures of wine tasting at altitude, includes the publication of the Wine in the Sky Questionnaire, a collection of suggestions for wine tasting, serving, and transporting wine on trips around the world with leading oenophiles. To further enhance onboard tasting, VistaJet cabin guests are trained by the Wine & Spirit Education Trust at Level 2.",
    des2: "VistaJet Private World propose des expériences œnologiques sur mesure pour les membres au sol - des visites privées de vignobles à l'accès à des collectionneurs de vins fins et à des événements exclusifs. Le service de livraison de cave à cave de caisses de Grand Cru Olivier Bernstein en édition limitée, proposé exclusivement aux membres de VistaJet, est la première initiative de ce type.",
    des2E:
      "VistaJet Private World offers bespoke wine experiences for members on the ground - from private vineyard tours to access to fine wine collectors and exclusive events. The limited-edition cellar-to-cellar delivery service from Grand Cru Olivier Bernstein, offered exclusively to VistaJet members, is the first such initiative.",
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
              ? "VistaJet change la façon dont les vols privés sont perçus grâce à la gamme la plus complète de programmes à bord. De l'exquis repas privé au seul programme de vol pour les enfants, nos membres peuvent savourer pleinement chaque moment passé à bord de nos avions. Découvrez ce que l'on ressent en volant avec VistaJet."
              : "VistaJet is changing the way private flights are perceived through the most comprehensive range of onboard programs. From the exquisite private meal to the only flight program for children, our members can fully enjoy every moment they spend on board our aircraft. Find out how it feels to fly with VistaJet."}
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
                    ? "UN MONDE PRIVÉ POUR LES MEMBRES DE VISTAJET"
                    : "A PRIVATE WORLD FOR VISTAJET MEMBERS"}
                </h1>
                <p className="font-light tracking-wider leading-6 text-sm">
                  {lang === "french"
                    ? "Chez VistaJet, le monde est vraiment à découvrir. Le portefeuille VistaJet Private World offre une sélection des meilleurs partenaires et événements de luxe triés sur le volet pour la communauté de nos membres."
                    : "At VistaJet, the world is truly waiting to be discovered. The VistaJet Private World portfolio offers a selection of the best handpicked luxury partners and events for the community of our members."}
                </p>
                <p className="font-light tracking-wider leading-6 text-sm">
                  {lang === "french"
                    ? "Private World propose à tous ses membres des itinéraires personnalisés et sélectionnés à la main pour vivre des expériences rares et authentiques dans des destinations spectaculaires du monde entier. Grâce à un réseau de plus de 600 partenaires internationaux et à l'accès à des suites et résidences exclusives, à des chalets de ski, à des yachts, à des îles privées et à des domaines exceptionnels, les membres bénéficient d'une hospitalité ultime, d'une intimité et d'un service personnalisé."
                    : "Private World offers all its members personalized and hand-selected itineraries for rare and authentic experiences in spectacular destinations around the world. Through a network of more than 600 international partners and access to exclusive suites and residences, ski chalets, yachts, private islands and exceptional estates, members enjoy the ultimate in hospitality, privacy and personalized service. "}
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
                VistaJet se passionne pour l&apos;adaptation de chaque vol aux
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
