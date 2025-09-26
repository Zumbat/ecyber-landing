import Image from 'next/image';

export default function Footer() {

  return (
    <footer className="w-full bg-[#101010] gradient-border-top">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Logo e Info Azienda */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/assets/e-cyber_logo.svg"
                alt="E-Cyber Logo"
                width={120}
                height={40}
                className="mb-4"
              />
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-4">
              Servizi avanzati di Cyber Security per proteggere il tuo business. 
              Scanning, monitoring e penetration testing con strumenti professionali.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-[#3C3C3C] rounded-full flex items-center justify-center hover:bg-[#E8E8E8] hover:text-[#111111] transition-all duration-300 cursor-pointer">
                <Image
                  src="/assets/web-security.svg"
                  alt="Web Security"
                  width={20}
                  height={20}
                  className="text-[#E8E8E8] path:fill-[#E8E8E8] stroke-[#E8E8E8]"
                />
              </div>
              <div className="w-8 h-8 bg-[#3C3C3C] rounded-full flex items-center justify-center hover:bg-[#E8E8E8] hover:text-[#111111] transition-all duration-300 cursor-pointer">
                <Image
                  src="/assets/data-monitoring.svg"
                  alt="Data Monitoring"
                  width={20}
                  height={20}
                  className="text-[#E8E8E8] path:fill-[#E8E8E8] stroke-[#E8E8E8]"
                />
              </div>
              <div className="w-8 h-8 bg-[#3C3C3C] rounded-full flex items-center justify-center hover:bg-[#E8E8E8] hover:text-[#111111] transition-all duration-300 cursor-pointer">
                <Image
                  src="/assets/pen-testing.svg"
                  alt="Penetration Testing"
                  width={24}
                  height={24}
                  className="text-[#E8E8E8] path:fill-[#E8E8E8] stroke-[#E8E8E8]"
                />
              </div>
            </div>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#E8E8E8] mb-6">Contatti</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#E8E8E8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <span className="text-[#A1A1A1] text-sm">+39 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#E8E8E8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="text-[#A1A1A1] text-sm">info@e-cyber.it</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#E8E8E8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <span className="text-[#A1A1A1] text-sm">Milano, Italia</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex items-center lg:items-start">
                <button className="border border-[#3c3c3c] text-[#E8E8E8] hover:bg-[#3c3c3c]/20 hover:text-[#E8E8E8] font-semibold py-2 px-4 rounded-2xl text-sm cursor-pointer transition-all duration-300">
                  Iscriviti
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3C3C3C] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#A1A1A1] text-sm">
              © 2024 E-Cyber. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Termini di Servizio
              </a>
              <a href="#" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
