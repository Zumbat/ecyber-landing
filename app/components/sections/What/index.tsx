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
            Servizi avanzati di Cyber Security per proteggere il tuo business
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Scanning del target"
            description="Scopri immediatamente quali sono i punti deboli nel tuo perimetro digitale. Scanner avanzati che analizzano ogni superficie 'visibile', identificano vulnerabilità note e configurazioni errate prima che possano essere sfruttate."
            className="hover:border-[#2d8c80]"
          />
          <ServiceCard
            title="Data Monitoring"
            description="Monitora il web, i database esposti, i leak grazie a sistemi come Dehashed e rispondi proattivamente. Ricevi alert in tempo reale per qualunque esposizione o perdita potenziale dei tuoi dati sensibili."
            className="hover:border-[#8B5CF6]"
          />
          <ServiceCard
            title="Penetration Testing (Pentest)"
            description="Simuliamo attacchi reali per testare la tua difesa. Report pratici + piano d'azione concreto per sanare falle critiche. Test manuali + automatizzati, copertura completa: reti, applicazioni, infrastrutture."
            className="hover:border-[#cd78de]"
          />
        </div>
      </div>
    </section>
  );
}
