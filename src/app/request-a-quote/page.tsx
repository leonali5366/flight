import Form from "../components/home/Form";
// import MembershipForm from "../components/MembershipForm";

export default function RequestAQuote() {
  return (
    <div className="bg-white">
      <div className="max-w-[1250px] mx-auto px-5 lg:h-screen">
        <div className="mt-32 flex flex-col gap-7">
          <span className="lg:text-6xl text-3xl text-zinc-600 font-garamond-display">
            Demandez un devis pour votre prochain vol.
          </span>
          <p className="text-zinc-600 font-light tracking-wider leading-6 max-lg:text-sm">
            Chaque vol est unique, nous travaillons donc avec diligence pour
            créer le vol parfait qui répond à la fois à vos exigences de voyage
            et à vos préférences personnelles à chaque fois que vous voyagez.
            Pour trouver la solution de vol optimale pour votre prochain voyage,
            veuillez fournir le plus d&apos;informations possible ci-dessous, et
            nous vous proposerons une suggestion sur mesure accompagnée
            d&apos;un devis.
          </p>
          <p className="text-zinc-600 font-light tracking-wider leading-6">
            Entrez les détails de votre vol ci-dessous et notre équipe vous
            contactera sous peu. Les prix des vols charters en jet privé sont
            soumis au taux du marché et commencent à partir de 11 000 USD.
          </p>
          <Form />
          <p className="text-zinc-600 font-light tracking-wider leading-6 text-sm text-center">
            Besoin d&apos;aide? Contactez-nous sur{" "}
            <a
              href="tel:+44 800 955 7500"
              className="underline hover:text-red-800"
            >
              +44 800 955 7500
            </a>
          </p>
        </div>
      </div>
      {/* <div className="bg-[#F6F6F6]">
        <div className="max-w-[1250px] mx-auto px-5">
          <div className="mt-8">
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
          </div>
        </div>
      </div> */}
    </div>
  );
}
