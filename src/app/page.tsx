import Footer from "./components/Footer";
import Form from "./components/home/Form";
import Header from "./components/home/Header";
import Membership from "./components/home/Membership";
import Nav from "./components/Nav";
// import MembershipForm from "./components/MembershipForm";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="max-w-[1250px] mx-auto px-5 py-20 flex flex-col gap-5">
        <h1 className="text-xl tracking-widest opacity-70">PLANIFIER UN VOL</h1>
        <p className="mb-8 text-sm tracking-wider opacity-60">
          Saisissez les détails de votre vol ci-dessous et notre équipe vous
          contactera dans les plus brefs délais. Les prix des vols charter en
          jet privé sont soumis au taux du marché et commencent à partir de 11
          000 $.
        </p>
        <Form />
      </div>
      <Membership />
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
            besoins spécifiques et aux préférences personnelles des membres. Nos
            adhésions sont flexibles, sans investissement, et offrent un accès à
            une flotte cohérente et de marque de plus de 300 avions super-moyens
            et longs courriers, avec les plus hauts niveaux de service à bord de
            l&apos;aviation privée.
          </p>
          <MembershipForm />
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
