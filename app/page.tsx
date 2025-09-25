
import ParticleBackground from './components/3d_scenes/ParticleBackground';
import Scene from './components/3d_scenes/Scene';
import ServiceCard from './components/ServiceCard';
import HowCards from './components/sections/How/cards';
import BenefitAccordion from './components/sections/Benefits/BenefitAccordion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* <Scene 
        className=""
        style={{ 
          zIndex: -1
        }}
        width={'100%'}
        height={'100%'}
      /> */}
      {/* Hero Section */}
      <section className="w-full h-screen flex items-start justify-center relative overflow-hidden bg-[#111111]/50 pt-20">
        
        {/* Main Content */}
        <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-8 text-left rounded-2xl py-50 ">
          {/* Hero Section */}
          <div className="space-y-8">
            {/* Main Headline */}
                <h1 className="text-5xl font-bold leading-tight mb-2 orbitron-text">
                  <span className="block bg-gradient-to-r from-[#E8E8E8] via-[#3C3C3C] to-[#3C3C3C] bg-clip-text text-transparent">
                    Proteggi<br/> il tuo business.
                  </span>
            </h1>
                <h2 className="text-2xl font-bold text-[#E8E8E8] leading-tight mb-2">
              <span className="block">
                Scopri le vulnerabilità prima che lo facciano gli altri.</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-sm text-[#A1A1A1] mx-auto leading-relaxed">
              Servizi avanzati di <span className="text-[#E8E8E8] font-semibold">Cyber Security</span>: 
              <br/>Scanning del target, Data Monitoring e Penetration Testing 
              - con software top di gamma e report dettagliati.
            </p>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap justify-end items-center gap-4 text-[#A1A1A1]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2d8c80] rounded-full animate-pulse"></div>
                <span className="text-sm">Sicurezza garantita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                <span className="text-sm">Report dettagliati</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cd78de] rounded-full animate-pulse"></div>
                <span className="text-sm">Supporto 24/7</span>
              </div>
            </div>


            {/* CTA Button */}
            <div className="flex justify-start items-start pt-8">
              <button className="border border-[#E8E8E8] text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111111] font-semibold py-2 px-4 rounded-xl text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E8E8E8]/25">
                Inizia ora →
              </button>
            </div>

          </div>
        </div>
      </div>
      </section>
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
       <section className="w-full flex items-end justify-center mt-100" >
         <div className="max-w-6xl mx-auto px-8 py-20">
           {/* Section Title */}
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
               Come lo facciamo
             </h2>
             <p className="text-[#A1A1A1] text-lg">
               Tecnologia e Metodo per garantire la massima sicurezza
             </p>
           </div>
           
           {/* Content Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center">
               <HowCards />
             </div>

             {/* Right Column - Content */}
             <div className="space-y-8">
               <div className="flex justify-center space-x-4 h-full">
                {/* Icon */}
                <div className="flex-shrink-0 w-4 h-4 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#2d8c80] rounded-full animate-pulse"></div>
                </div>
                 {/* Content */}
                 <div>
                   <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">
                     Software potentissimi
                   </h3>
                   <p className="text-[#A1A1A1] text-sm leading-relaxed">
                     Usiamo strumenti professionali, testati nel settore, combinati con competenze manuali per garantire precisione e completezza.
                   </p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">
                     Report dettagliati
                   </h3>
                   <p className="text-[#A1A1A1] text-sm leading-relaxed">
                     Ogni assessment culmina in un report chiaro: descrizione delle vulnerabilità, impatto, probabilità, suggerimenti concreti per mitigazione, riferimenti tecnici.
                   </p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-4 h-4 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#cd78de] rounded-full animate-pulse"/>
                </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">
                     Supporto continuo
                   </h3>
                   <p className="text-[#A1A1A1] text-sm leading-relaxed">
                     Non è solo un check una tantum: offriamo monitoring (quando pertinente), follow-up, e consulenza per mantenere l'assetto sicuro nel tempo.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

        {/* Benefits Section */}
        <section className="w-full flex items-start justify-center mt-20">
          <div className="max-w-4xl mx-auto px-8 py-20">
            {/* Section Title */}
            <div className="text-center mb-16">
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
                  icon: "🔒",
                  title: "Prevenzione proattiva",
                  description: "Attacchi scoperti prima che diventino danni."
                },
                {
                  icon: "🔒",
                  title: "Riduzione dei rischi",
                  description: "Dati al sicuro, reputazione protetta."
                },
                {
                  icon: "🔒",
                  title: "Conformità & fiducia",
                  description: "Rispetti normative, rassicuri clienti / partner."
                },
                {
                  icon: "🔒",
                  title: "Chiarezza & trasparenza",
                  description: "Report comprensibili, priorità definite."
                },
                {
                  icon: "🔒",
                  title: "Efficienza nel tempo",
                  description: "Interventi mirati, risparmi evitando problemi futuri."
                }
              ]}
            />
          </div>
        </section>

        {/* Footer */}
        <Footer />
    </div>
  );
}
