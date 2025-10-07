import BenefitAccordion from './BenefitAccordion';
import { DoorClosedLocked, HeartHandshake, Orbit, Zap } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="w-full flex items-start justify-center mt-40 mb-80">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Section Title */}
        <div className="text-center mb-16 bg-gradient-to-r from-[#111111]/0 via-[#111111]/80 to-[#111111]/0">
          <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
            Perché sceglierci
          </h2>
          <p className="text-[#A1A1A1] text-lg">
            I benefici che otterrai scegliendo i nostri servizi di Cyber Security
          </p>
        </div>
        
        {/* Benefits Accordion */}
        <BenefitAccordion
          benefits={[
            {
              icon: <Orbit strokeWidth={1} className="text-[#E8E8E8]" size={24}/>,
              title: "Prevenzione proattiva",
              description: "Attacchi scoperti prima che diventino danni."
            },
            {
              icon: <DoorClosedLocked strokeWidth={1} className="text-[#E8E8E8]" height={24}/>,
              title: "Riduzione dei rischi",
              description: "Dati al sicuro, reputazione protetta."
            },
            {
              icon: <Zap strokeWidth={1} className="text-[#E8E8E8]" height={24}/>,
              title: "Chiarezza & trasparenza",
              description: "Report comprensibili, priorità definite."
            },
            {
              icon: <HeartHandshake strokeWidth={1} className="text-[#E8E8E8]" size={24}/>,
              title: "Conformità & fiducia",
              description: "Rispetti normative, rassicuri clienti / partner."
            }
          ]}
        />
      </div>
    </section>
  );
}
