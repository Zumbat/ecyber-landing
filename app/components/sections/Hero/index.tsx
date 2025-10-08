import HoverMovingBorderButton from "../../ui/hover-moving-border-button";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex items-start justify-center relative overflow-hidden pt-20">
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-8 text-left rounded-2xl py-50">
          {/* Hero Section */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="flex flex-col gap-2 text-5xl font-bold leading-tight mb-2 orbitron-text">
              <span className="block bg-gradient-to-b from-[#E8E8E8] via-[#a1a1a1] to-[#3C3C3C] bg-clip-text text-transparent">
                Proteggi
              </span>
              <span className="block bg-gradient-to-b from-[#E8E8E8] via-[#a1a1a1] to-[#3C3C3C] bg-clip-text text-transparent">
                il tuo business 
              </span>
            </h1>
            <h2 className="text-xl font-bold text-[#A8A8A8] leading-tight mb-2">
              <span className="block">
                Scopri le vulnerabilità prima che lo facciano gli altri.
              </span>
            </h2>

            {/* Sub-headline */}
            <p className="text-sm text-[#A1A1A1] my-8 mx-auto leading-relaxed">
              Servizi avanzati di <span className="text-[#E8E8E8] font-semibold">Cyber Intelligence</span> e <span className="text-[#E8E8E8] font-semibold">Red Teaming / Offending Security</span>:
              <br/>Analisi del perimetro digitale, monitoraggio delle minacce, simulazioni di attacco e prevenzione proattiva 
              — con un team dedicato che lavora per te e report strategici sempre aggiornati.
            </p>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap justify-end items-center gap-4 text-[#A1A1A1]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2d8c80] rounded-full animate-pulse"></div>
                <span className="text-sm">Sicurezza continua</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                <span className="text-sm">Report operativi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse"></div>
                <span className="text-sm">Intelligence attiva</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cd78de] rounded-full animate-pulse"></div>
                <span className="text-sm">Supporto 24/7</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start items-start pt-8">
              <HoverMovingBorderButton
                borderRadius="0.75rem"
                duration={2000}
                className="py-2 px-4"
              >
                Inizia ora →
              </HoverMovingBorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
