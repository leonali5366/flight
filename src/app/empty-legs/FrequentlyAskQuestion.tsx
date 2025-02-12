import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

export default function FrequentlyAskQuestion() {
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
    <div className="bg-[#B82E3F] mt-20">
      <div className="max-w-[1000px] mx-auto px-5 flex md:flex-row flex-col md:justify-between gap-x-20 gap-y-10 py-20 text-white">
        <span className="w-full text-4xl font-medium tracking-wide font-garamond-display">
          {lang === "french"
            ? "Questions Fréquemment Posées"
            : "Frequently Asked Questions"}
        </span>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {lang === "french"
                ? "Puis-je planifier des voyages à court terme ? En combien de temps un appareil peut-il être prêt au décollage ?"
                : "Can I plan trips on short notice? In how much time could an aircraft be ready for take-off?"}
            </AccordionTrigger>
            <AccordionContent>
              {lang === "french"
                ? "Non, nous disposons de nombreuses opportunités Off-Market, en plus des avions figurant à notre inventaire. Contactez-nous directement pour tout appareil susceptible de vous intéresser. Nos équipes commerciales : (+351 917 365 290)."
                : "Given that the relevant aircraft is available, it can be ready for take-off within about two hours. Contact our charter teams (+351 917 365 290) for any inquiries."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {lang === "french"
                ? "Quelles sont les restrictions liées à la COVID-19 pour mon vol ?"
                : "What are the COVID-19 restrictions for my flight?"}
            </AccordionTrigger>
            <AccordionContent className="space-y-5">
              <p>
                {lang === "french"
                  ? "Comprenant la complexité des déplacements à l’époque actuelle, nous entendons vous aider à vous concentrer sur l’essentiel de votre voyage. Nous vous offrons la possibilité d’obtenir un résultat de test PCR dans l’heure pour tout départ ou arrivée à Genève. Nous espérons ainsi réintroduire de la spontanéité dans votre style de vie. Dans le plus strict respect des directives gouvernementales, notre équipe charter est à votre disposition pour vous guider tout au long de chaque procédure COVID-19."
                  : " Understanding the complexity of travelling in present times, we aim to help you focus on the essentials of your journey. We give you the possibility to get a PCR test result within an hour for any departure from or any arrival to Geneva. We hope to restore spontaneity as part of your lifestyle. Strictly following governmental guidelines, our charter team is at your disposal to guide you through every COVID-19 procedure."}
              </p>
              <p>
                {lang === "french"
                  ? "Les mesures de sécurité générales pour tous les avions SPARFELL comprennent une évaluation complète des risques pour chaque vol ainsi qu’un nettoyage complet et une désinfection intégrale après chaque vol. En outre, les membres d’équipage ne se présentent au travail que s’ils sont 100 % en bonne santé. Afin de fournir les meilleures normes de sécurité possibles, tous les membres du personnel navigant ont suivi une formation approfondie sur la gestion des passagers à bord et l’ensemble des tâches effectuées à l’intérieur et aux abords de l’avion."
                  : "The general safety measures for all SPARFELL aircraft include a complete risk assessment for every flight and full cleaning and disinfection after each flight. In addition, crew members report for duty only if they are 100% healthy. All flight crew members have received an in-depth briefing regarding the handling of passengers on board and all the tasks in and around the aircraft to provide the best possible safety standards."}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {lang === "french"
                ? "Tous les appareils de SPARFELL sont-ils disponibles sur le site Internet ?"
                : "Are all the aircraft that SPARFELL has available on the website?"}
            </AccordionTrigger>
            <AccordionContent>
              {lang === "french"
                ? "Non, nous disposons de nombreuses opportunités Off-Market, en plus des avions figurant à notre inventaire. Contactez-nous directement pour tout appareil susceptible de vous intéresser. Nos équipes commerciales : (+351 917 365 290)."
                : "No, we have multiple off-market opportunities in addition to the aircraft displayed in our inventory. Contact us directly for any aircraft that you may be interested in. Our trading teams: (+351 917 365 290)."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              {lang === "french"
                ? "SPARFELL propose-t-il également des services d'acquisition d'avions ?"
                : "Does SPARFELL also provide aircraft acquisition services?"}
            </AccordionTrigger>
            <AccordionContent>
              {lang === "french"
                ? "Oui, SPARFELL offre à la fois des services de vente et d’achat d’avions.En fonction de vos besoins spécifiques, nos équipes commerciales compétentes se feront un plaisir de vous assister dans votre recherche d’appareils."
                : "Yes, SPARFELL offers both aircraft sales and aircraft acquisition services. Based on your specific requirements, our knowledgeable trading teams can assist you in sourcing an aircraft."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
