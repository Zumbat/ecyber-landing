import BenefitAccordion from './BenefitAccordion';
import { DoorClosedLocked, HeartHandshake, Orbit, Zap } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="w-full flex items-start justify-center mt-30 mb-60">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Section Title */}
        <div className="text-center mb-16 bg-gradient-to-r from-[#111111]/0 via-[#111111]/80 to-[#111111]/0">
          <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
            Perché sceglierci
          </h2>
          <p className="text-[#A1A1A1] text-lg">
            I benefici concreti del nostro approccio di cyber intelligence operativa.
          </p>
        </div>
        
        {/* Benefits Accordion */}
        <BenefitAccordion
          benefits={[
            {
              icon: <Orbit strokeWidth={1} className="text-[#E8E8E8]" size={24}/>,
              title: "Prevenzione proattiva",
              description: "Attacchi scoperti e neutralizzati prima che diventino incidenti."
            },
            {
              icon: <DoorClosedLocked strokeWidth={1} className="text-[#E8E8E8]" height={24}/>,
              title: "Riduzione dei rischi",
              description: "Protezione costante dei dati e della reputazione aziendale."
            },
            {
              icon: <Zap strokeWidth={1} className="text-[#E8E8E8]" height={24}/>,
              title: "Chiarezza & trasparenza",
              description: "Report d’intelligence comprensibili, priorità operative definite."
            },
            {
              icon: <HeartHandshake strokeWidth={1} className="text-[#E8E8E8]" size={24}/>,
              title: "Conformità & fiducia",
              description: "Rispettare le normative, rassicurare clienti e partner diventa parte naturale del tuo ecosistema digitale."
            }
          ]}
        />
      </div>
    </section>
  );
}
