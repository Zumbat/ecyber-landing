export default function HeroSection() {
  return (
    <section className="w-full h-screen flex items-start justify-center relative overflow-hidden pt-20">
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-8 text-left rounded-2xl py-50">
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
                Scopri le vulnerabilità prima che lo facciano gli altri.
              </span>
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
  );
}
