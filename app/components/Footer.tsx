'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import HoverMovingBorderButton from './ui/hover-moving-border-button';

export default function Footer() {

return (<>
    <footer className="w-full bg-[#101010] gradient-border-top">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Logo e Info Azienda */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/assets/e-cyber_logo.svg"
                alt="E-Cyber Logo"
                width={70}
                height={25}
                className="mb-4"
              />
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-4">
              Servizi avanzati di Cyber Intelligence e Red Teaming per proteggere il tuo business.
              Scanning, monitoraggio e simulazioni di attacco con strumenti e analisti professionisti.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/excursusinvestigazioni" target="_blank">
                <Facebook strokeWidth={1} className="text-[#E8E8E8]" size={24}/>
              </a>
              <a href="https://www.instagram.com/excursusgroup/" target="_blank">
                <Instagram strokeWidth={1} className="text-[#E8E8E8]" size={24}/>
              </a>
              <a href="https://www.linkedin.com/company/excursus-investigazioni/?originalSubdomain=it" target="_blank">
                <Linkedin strokeWidth={1} className="text-[#E8E8E8]" size={24}/>
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#E8E8E8] mb-6">Contatti</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <Phone strokeWidth={1} className="text-[#E8E8E8]" size={18}/>
                    </div>
                    <span className="text-[#A1A1A1] text-sm">800 642 988</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <Mail strokeWidth={1} className="text-[#E8E8E8]" size={18}/>
                    </div>
                    <span className="text-[#A1A1A1] text-sm">info@excursusgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <MapPin strokeWidth={1} className="text-[#E8E8E8]" size={18}/>
                    </div>
                    <span className="text-[#A1A1A1] text-sm">Via Ludovisi 35, Roma</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex items-center lg:items-start">
                <HoverMovingBorderButton
                  borderRadius="0.75rem"
                  duration={2000}
                  className="py-2 px-4"
                  onClick={() => {
                    window.location.href = "https://tools.ecyber.it/auth/request-link";
                  }}
                >
                  Inizia ora →
                </HoverMovingBorderButton>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3C3C3C] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#A1A1A1] text-sm">
              © Copyright 2025 by Excursus srl
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.excursusgroup.com/privacy-policy/" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Privacy Policy
              </a>
              {/* <a href="#" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Termini di Servizio
              </a>
              <a href="#" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>);
}
