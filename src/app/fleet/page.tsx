import ContinentalRange from "../components/fleet/ContinentalRange";
import GlobalReach from "../components/fleet/GlobalReach";
import Header from "../components/fleet/Header";
import Form from "../components/home/Form";
// import MembershipForm from "../components/MembershipForm";

export default function Fleet() {
  return (
    <div>
      <Header />
      <GlobalReach />
      <div className="bg-[#F6F6F6]">
        <div className="max-w-[1250px] mx-auto px-5 py-20 flex flex-col gap-5">
          <h1 className="tracking-widest font-light text-zinc-700">
            PLANIFIER UN VOL
          </h1>
          <Form />
        </div>
      </div>
      <ContinentalRange />
      <div className="bg-[#F6F6F6]">
        <div className="max-w-[1250px] mx-auto px-5 py-20 flex flex-col gap-5">
          <h1 className="tracking-widest font-light text-zinc-700">
            PLANIFIER UN VOL
          </h1>
          <Form />
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
            besoins spécifiques et aux préférences personnelles des membres. Nos
            adhésions sont flexibles, sans investissement, et offrent un accès à
            une flotte cohérente et de marque de plus de 300 avions super-moyens
            et longs courriers, avec les plus hauts niveaux de service à bord de
            l&apos;aviation privée.
          </p>
          <MembershipForm />
        </div>
      </div> */}
    </div>
  );
}
