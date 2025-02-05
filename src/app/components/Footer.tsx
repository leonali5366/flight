export default function Footer() {
  return (
    <div className="bg-[#B82E3F] sm:h-[250px] flex flex-col justify-between gap-10 p-10 text-white">
      <div className="flex place-content-center gap-5 mt-5">
        <button className="tracking-widest font-light hover:underline uppercase">
          La flotte
        </button>
        <button className="tracking-widest font-light hover:underline uppercase">
          Expérience
        </button>
      </div>
      <p className="text-xs font-light tracking-wider">
        © VistaJet 2025 . VistaJet®, Vista® et le logo VistaJet® sono marchi
        registrati di VistaJet. Tutti i diritti riservati. VistaJet e le sue
        filiali non sono vettori aerei diretti statunitensi. VistaJet US Inc. et
        les services en ligne et mobiles de VistaJet sont un courtier de vols
        nolisés qui ne gesticulent pas d&apos;aéromobili. VistaJet Limited est
        un vettore aereo europeo che gestisce aeromobili registrati 9H con it
        suo certificateo di operatore aereo maltese n. MT-17 est constituée à
        Malte avec le numéro de société C 55231. Gli aeromobili di proprietà di
        VistaJet e registrati negli Stati Uniti sono gestiti da vettori aerei
        statunitensi debitamente autorizzati, y compris XOJET Aviation LLC.
        Légal | Confidentialité
      </p>
    </div>
  );
}
