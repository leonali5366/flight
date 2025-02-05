import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Header from "../components/experience/Header";
import Image from "next/image";
// import MembershipForm from "../components/MembershipForm";

const service = [
  {
    title: "ÉQUIPE D'EXPERTS",
    image: "/images/cabin-hostess-dressing-the-cabin.jpg",
    desMain:
      "En matière de service, nous considérons l'excellence comme la norme. Du personnel de cabine hautement qualifié à votre équipe personnelle d'experts en voyage, vous êtes entre les meilleures mains, dans les airs comme au sol.",
    trigger: "EN SAVOIR PLUS SUR L'ÉQUIPE",
    des1: "Une expérience inégalée en cabine vous attend. Chaque vol VistaJet compte deux pilotes dans le poste de pilotage et un hôte de cabine formé à la VistaJet Academy par le British Butler Institute, le Norland College et le Wine & Spirit Education Trust. Les pilotes ne volent que sur un seul type d'appareil, afin de garantir une familiarité maximale, et s'entraînent deux fois par an.",
    des2: "Une équipe d'experts se tient personnellement à votre disposition 24 heures sur 24, 7 jours sur 7, tous les jours de l'année, pour organiser tous les aspects de la logistique du voyage, y compris les arrangements au sol. Formée aux délais de réponse courts, votre équipe est là pour vous fournir un service fiable et efficace chaque fois que vous souhaitez prendre l'avion.",
  },
  {
    title: "PRIVATE DINING",
    image: "/images/asia-gastronomy.jpg",
    desMain:
      "VistaJet sert des plats préparés par les chefs privés et les restaurants étoilés les plus recherchés, ce qui vous permet de savourer le temps passé ensemble à bord. Travaillant avec plus de 7 000 partenaires, nous vous proposons toutes les saveurs que vous souhaitez.",
    trigger: "EN SAVOIR PLUS SUR LES REPAS PRIVÉS",
    des1: "Créée en partenariat avec certains des chefs et restaurants les plus renommés au monde, la sélection exclusive de restaurants privés de VistaJet est inégalée. Nos menus changent en fonction des saisons, pour vous offrir de nouvelles saveurs. Soucieux de votre bien-être, nous nous procurons les ingrédients et les plats les plus frais et de la plus haute qualité, quel que soit votre lieu de départ.",
    des2: "VistaJet a transformé la restauration privée dans les airs en explorant l'art et la science de la restauration et en créant des plats aussi savoureux en altitude qu'au sol. L'application VistaJet offre un choix presque illimité au bout de vos doigts, vous permettant de réserver vos repas en vol en toute simplicité.",
    des3: "Notre équipe de restauration privée est là pour vous aider à créer le goût parfait pour toute occasion, afin que vous puissiez profiter de votre temps à bord avec vos invités.",
  },
  {
    title: "VISTAPET",
    image: "/images/pets.jpeg",
    desMain:
      "Le service pour les membres qui se soucient du bien-être de leurs compagnons à quatre pattes à bord. Ce programme sur mesure a été conçu en collaboration avec des vétérinaires expérimentés et des experts animaliers pour répondre aux besoins de nos clients voyageant avec des animaux.",
    trigger: "PLUS D'INFORMATIONS SUR VISTAPET",
    des1: "Nous veillons à ce que vos fidèles compagnons reçoivent le même niveau de soutien et d'attention que vous lorsque vous voyagez avec nous. Avec un membre sur quatre voyageant avec des animaux, le programme VistaPet offre des solutions aux différents besoins et défis liés aux voyages avec des animaux de compagnie.",
    des2: "Le programme a été conçu en collaboration avec des vétérinaires expérimentés, des entraîneurs, des diététiciens et des toiletteurs, tandis que les hôtes de cabine de VistaJet sont formés aux premiers secours pour animaux afin de garantir la sécurité des passagers animaux pendant le voyage. Pour les animaux qui ont peur de l'avion, nous proposons des cours sur la peur de l'avion, en partenariat avec The Dog House, afin de les préparer à un vol détendu.",
    des3: "Notre portefeuille Private World de destinations et d'expériences partenaires offre un accès à certaines des meilleures propriétés accueillant les animaux de compagnie à travers le monde, promettant un service sans faille, du départ à la destination. Des tapis de couchage Labbvenn faits à la main aux kits de commodités comprenant des produits de toilettage et des en-cas, VistaJet est à portée de main pour assurer un service confortable à vos amis bien-aimés.",
  },
  {
    title: "ADVENTURES IN THE SKY",
    image: "/images/adventures-in-the-sky.jpg",
    desMain:
      "VistaJet propose le programme de voyage le plus complet pour les enfants. Nos aventures sont adaptées à l'âge et aux centres d'intérêt de votre enfant, ce qui rend chaque voyage mémorable.",
    trigger: "PLUS D'INFORMATIONS SUR ADVENTURES IN THE SKY",
    des1: "Voyager avec des enfants présente un besoin unique de divertissement, de commodité et de confort à bord. Le programme 'Adventures in the Sky' a été créé pour transformer un voyage ordinaire en une expérience magique que les enfants pourront chérir à jamais. Des aventures étonnantes pour réunir des amis et des familles de tous les coins du monde sur une île sablonneuse peu connue de l'océan Pacifique, ou sur une montagne époustouflante à la neige intacte, jusqu'à l'organisation d'un goûter de Chapelier fou volant.",
    des2: "Avec des costumiers, des animateurs qualifiés et des activités interactives telles que le tournage de votre propre film, les enfants auront du mal à s'ennuyer. Nous avons également créé des packs d'activités pour chaque tranche d'âge. Notre programme est conçu pour créer des voyages passionnants et mémorables pour les enfants et les familles.",
  },
  {
    title: "BIBLIOTHÈQUE VISTAJET",
    image: "/images/vistajet-global-7500-library.jpg",
    desMain:
      "Comme un bon livre, l'aviation privée peut vous emmener partout où vous voulez aller. Pendant des années, l'aviation a été considérée comme une évasion, un moyen de tout laisser derrière soi. Aujourd'hui, l'intimité de la cabine offre un moment de détente et de réflexion.",
    trigger: "PLUS D'INFORMATIONS SUR LA BIBLIOTHÈQUE VISTAJET",
    des1: "Prenez du temps pour vous dans notre bibliothèque de bord, qui propose une sélection de livres en plusieurs genres et en plusieurs langues. Commandée à Heywood Hill, la principale librairie de Londres et libraire officiel de la famille royale, la bibliothèque propose des ouvrages pour tous les lecteurs, de l'humour au design, en passant par l'aventure et la poésie. VistaJet s'est associé aux spécialistes des langues étrangères Grant & Cutler pour inclure également des best-sellers internationaux en français, en espagnol et en mandarin, avec une gamme de titres étrangers classiques.",
  },
  {
    title: "LE PROGRAMME DES VINS",
    image: "/images/wine.jpeg",
    desMain:
      "Les effets de l'altitude, de la pression dans la cabine et de la qualité de l'air font qu'il peut être difficile de choisir le bon vin à déguster à bord, car le palais est altéré. VistaJet a créé une carte des vins de marque, composée de grands vins du monde entier qui conservent leur équilibre en altitude.",
    trigger: "EN SAVOIR PLUS SUR NOTRE PROGRAMME DE VINS",
    des1: "Le programme de vin de VistaJet s'adresse aux membres qui sont passionnés par le vin, qu'il s'agisse de le collectionner ou de le célébrer. Les recherches de VistaJet, visant à affiner les plaisirs de la dégustation du vin en altitude, comprennent la publication du Questionnaire sur le vin dans le ciel, un recueil de suggestions pour la dégustation, le service et le transport du vin lors de voyages autour du monde avec des œnophiles de premier plan. Pour améliorer encore la dégustation à bord, les hôtes de cabine VistaJet sont formés par le Wine & Spirit Education Trust au niveau 2.",
    des2: "VistaJet Private World propose des expériences œnologiques sur mesure pour les membres au sol - des visites privées de vignobles à l'accès à des collectionneurs de vins fins et à des événements exclusifs. Le service de livraison de cave à cave de caisses de Grand Cru Olivier Bernstein en édition limitée, proposé exclusivement aux membres de VistaJet, est la première initiative de ce type.",
  },
];

export default function Experience() {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="max-w-[1250px] mx-auto px-5 mt-16 flex flex-col gap-8">
          <span className="tracking-[.3rem] text-xl font-light">
            CHAQUE VOYAGE EST UNIQUE
          </span>
          <p className="text-sm font-light tracking-wider">
            VistaJet change la façon dont les vols privés sont perçus grâce à la
            gamme la plus complète de programmes à bord. De l&apos;exquis repas
            privé au seul programme de vol pour les enfants,
            nos membres peuvent savourer pleinement chaque moment passé à bord
            de nos avions. Découvrez ce que l&apos;on ressent en volant avec
            VistaJet.
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
                    {data.title}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black"></div>
                  <div className="bg-[#F9F9F9] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 w-full h-full absolute top-0 left-0 transition-all duration-300 ease-in-out px-5 flex flex-col justify-center gap-3 z-[2]">
                    <span className="text-xl font-medium text-red-700">
                      {data.title}
                    </span>
                    <p className="text-xs tracking-wider text-zinc-600 leading-6">
                      {data.desMain}
                    </p>
                    <Dialog>
                      <DialogTrigger className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
                        {data.trigger}
                      </DialogTrigger>
                      <DialogContent className="max-w-[1200px] max-h-[600px] h-full w-full flex lg:flex-row flex-col-reverse lg:justify-between items-center overflow-y-auto">
                        <div className="flex flex-col gap-7 w-full">
                          <DialogTitle className="text-xl font-medium text-red-700">
                            {data.title}
                          </DialogTitle>
                          <p className="text-xs tracking-wider text-zinc-600 leading-6">
                            {data?.des1}
                          </p>
                          <p className="text-xs tracking-wider text-zinc-600 leading-6">
                            {data?.des2}
                          </p>
                          <p className="text-xs tracking-wider text-zinc-600 leading-6">
                            {data?.des3}
                          </p>
                          <button className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
                            SE RENSEIGNER MAINTENANT
                          </button>
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
                  UN MONDE PRIVÉ POUR LES MEMBRES DE VISTAJET
                </h1>
                <p className="font-light tracking-wider leading-6 text-sm">
                  Chez VistaJet, le monde est vraiment à découvrir. Le
                  portefeuille VistaJet Private World offre une sélection des
                  meilleurs partenaires et événements de luxe triés sur le volet
                  pour la communauté de nos membres.
                </p>
                <p className="font-light tracking-wider leading-6 text-sm">
                  Private World propose à tous ses membres des itinéraires
                  personnalisés et sélectionnés à la main pour vivre des
                  expériences rares et authentiques dans des destinations
                  spectaculaires du monde entier. Grâce à un réseau de plus de
                  600 partenaires internationaux et à l&apos;accès à des suites
                  et résidences exclusives, à des chalets de ski, à des yachts,
                  à des îles privées et à des domaines exceptionnels, les
                  membres bénéficient d&apos;une hospitalité ultime, d&apos;une
                  intimité et d&apos;un service personnalisé.
                </p>
                <button className="px-4 py-2 rounded-full bg-red-700 transition-colors duration-300 ease-in-out hover:bg-red-800 w-fit uppercase text-white text-[.6rem] tracking-widest">
                  SE RENSEIGNER MAINTENANT
                </button>
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
    </div>
  );
}
