import ServiceCard from '../../ServiceCard';

export default function WhatSection() {
  return (
    <section className="w-full flex items-start justify-center relative overflow-hidden bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111] backdrop-blur-sm gradient-border-top gradient-border-bottom">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
            Cosa facciamo
          </h2>
          <p className="text-[#A1A1A1] text-lg">
            Servizi avanzati di Cyber Intelligence e Red Teaming per proteggere il tuo business da attacchi reali.
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Scanning del target"
            description="Mappiamo in profondità il tuo perimetro digitale per individuare asset esposti e punti deboli. Identifichiamo vulnerabilità tecniche e configurazioni errate, per bloccare in anticipo ciò che un attaccante potrebbe sfruttare."
            className="hover:border-[#2d8c80]"
          />
          <ServiceCard
            title="Treath Intelligence"
            description="Monitoriamo il web, il dark web e le fonti sensibili per scoprire informazioni compromesse, fughe di dati e indicatori di attacco. Ti forniamo alert in tempo reale e dossier di intelligence per anticipare ogni rischio."
            className="hover:border-[#8B5CF6]"
          />
          <ServiceCard
            title="Penetration Testing (Pentest)"
            description="Simuliamo attacchi complessi con tecniche reali, misurando la resilienza della tua difesa. I nostri esperti Red Team elaborano report tattici e un piano d’azione mirato per mitigare ogni criticità. Copertura completa: reti, applicazioni, infrastrutture e processi."
            className="hover:border-[#cd78de]"
          />
        </div>
      </div>
    </section>
  );
}
