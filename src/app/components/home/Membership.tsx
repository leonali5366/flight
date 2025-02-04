import Image from "next/image";

export default function Membership() {
  return (
    <div className="bg-white">
      <div className="max-w-[1250px] mx-auto mt-5 px-5 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <span className="text-xl text-zinc-500 tracking-widest">
            NOS ABONNEMENTS
          </span>
          <p className="text-sm text-zinc-500 tracking-wider">
            VistaJet propose des abonnements flexibles et sans investissement de
            capital pour répondre à vos besoins de vol privé. Nos membres
            bénéficient d&apos;un accès mondial et d&apos;un service inégalé à
            bord d&apos;une flotte cohérente et moderne composée de jets privés
            super-midsize, long-courriers et très -long-courriers.
          </p>
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
                    L&apos;abonnement sur-mesure adapté à vos préférences de vol
                    et qui vous offre un accès garanti 365 jours par an à
                    l&apos;ensemble de la flotte de 300 avions de la holding
                    Vista.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">VJ25</span>
                  <p className="font-light tracking-wider leading-6">
                    L&apos;adhésion idéale pour des voyages de haute qualité et
                    peu fréquents, à partir de 25 heures de vol par an, avec un
                    accès complet aux services emblématiques de VistaJet.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-800 tracking-wider">
                    Corporate
                  </span>
                  <p className="font-light tracking-wider leading-6">
                    Il offre la meilleure souplesse pour votre éfficacité
                    professionnelle grâce à des horaires de départ flexibles, à
                    l&apos;utilisation simultanée de deux avions et à des
                    conditions de paiement préférentielles, sur une flotte
                    internationale de jets privés de premier plan.
                  </p>
                </div>
                <button className="text-xs px-7 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out tracking-wider text-white">
                  VOIR NOS ABONNEMENTS
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* private jets */}
        <div className="flex justify-between">
          <div className="w-full">
            <div className="p-8 h-full flex flex-col items-start gap-5 text-sm bg-[#F8F8F8]">
              <span className="text-xl tracking-[0.2em] font-light text-zinc-800">
                UNE FLOTTE MONDIALE
              </span>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                La flotte emblématique argentée et rouge de VistaJet vous
                attend. Avec des avions de toutes les gammes, du régional au
                mondial, et avec un éventail complet de tailles de cabine à
                choisir, vous pouvez voyager à tout moment, n&apos;importe où,
                avec un niveau de securité et de confort optimals.
              </p>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                Notre service en cabine est conçu pour créer
                l&apos;environnement parfait à bord, avec des options telles que
                des suites d&apos;affaires entièrement équipées pour nos
                voyageurs, ou des business suites pour ceux qui souhaitent se
                détendre à bord ou qui voyagent en famille.
              </p>
              <button className="text-xs px-7 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out tracking-wider text-white">
                VOIR LA FLOTTE
              </button>
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
                L&apos;EXPÉRIENCE ULTIME DE VOL PRIVÉ
              </span>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                VistaJet a transformé l&apos;expérience en vol, en élaborant
                une sélection de programmes de vol qui permettent aux membres
                de profiter pleinement de leur séjour à bord. De la création de
                menus saisonniers qui tiennent compte des nuances des repas en
                altitude à l&apos;élaboration de programmes à bord pour
                les enfants et les animaux domestiques, chaque voyage avec nous
                est unique et mémorable.
              </p>
              <p className="text-zinc-800 font-light tracking-wider leading-6">
                Nous offrons un service inégalé avec des équipes de cabine
                formées par le British Butler Institute, le Norland College, le
                Wine & Spirit Education Trust et MedAire. Nous garantissons
                qu&apos;au moins une hôtesse de cabine vous accueillera sur
                chaque vol, de sorte que vous pouvez vous attendre à un service
                sans faille au plus haut niveau d&apos;excellence.
              </p>
              <abbr title="Private Dining">
                <button className="text-xs px-7 py-2 rounded-full bg-red-700 hover:bg-red-800 transition-colors duration-300 ease-in-out tracking-wider text-white">
                  DÉCOUVREZ NOS SERVICES À BORD EMBLÉMATIQUES
                </button>
              </abbr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
