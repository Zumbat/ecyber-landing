'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import HoverMovingBorderButton from './ui/hover-moving-border-button';
import { useTranslation } from 'react-i18next';

export default function Footer() {
const {t} = useTranslation()

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
             {t('footer.text')}
            </p>
            <div className="flex flex-col space-y-4">
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
              <a href="https://www.excursusgroup.com/privacy-policy/" className="text-[#A1A1A1] text-sm hover:text-[#E8E8E8] transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-1">
            <div className="flex flex-row items-start lg:justify-between gap-6">
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
              <div className="flex items-center justify-end lg:items-start">
                <HoverMovingBorderButton
                  borderRadius="0.75rem"
                  duration={2000}
                  className="py-2 px-4"
                  onClick={() => {
                    window.location.href = "https://tools.ecyber.it/auth/request-link";
                  }}
                >
                   {t('nav.start')} 
                </HoverMovingBorderButton>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3C3C3C] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <p className="text-[#A1A1A1] text-sm">
                © Copyright 2025 by Excursus srl
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-[#A1A1A1] text-sm">Powered by</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 542.6 316.1"
                width={40}
                height={24}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 zumbat-jump"
              >
                <path fill="#fff" d="M219.2,109.3c3.1-1,6.3-1.5,9.4-1.4,0,0,7.9.5,12.8,3.6-.1-.4-1.9-5.7-10.1-8.5-.6-.2-1.1-.4-1.7-.5,0-.1-.1-.1-.1-.1-5.8-1.6-11.9-1.8-18.4-1-.2.1-.5.1-.8.1-8.2,1.2-16.6,4.1-24.8,7.3-3.9,1.6-7.7,3.3-11.5,5.3-2.5,1.2-4.9,2.5-7.3,3.9-.1,0-.1.1-.1.1-13.8,7.5-26.7,16.7-39,26.6-.2.1-.5.4-.7.5-8.1,6.7-19.2,14.7-31.4,20.4q-.1.1-.2.1c-1.2.6-2.4,1.2-3.6,1.7-25.7,11.1-78.4,6.4-91.4.9,1.1.7,2.2,1.5,3.3,2.2.1.1.2.1.2.1,18.2,11.8,39.9,18,74.2,17.9,76.5-.1,108.5-68.6,141.3-79.3h.1Z"/>
                <path fill="#fff" d="M492.8,32.1s-3,1.7-9.9-2.7c-5.7-3.6-11.5-7-17.9-9-10.1-3.1-19.8-2.1-21.3-.5,5.4,21.8,21.1,26.4,29,31.3,0,0-40.1,24.8-72.5-10.7,0,0-3.1-3.2-4.6-4.8q-.1,0-.1-.1c-11.8-11.6-25.6-20.8-40.8-27C342,3.5,328.3.5,313.9,0c-15.4-.4-30.3,2.1-44.5,7-7.6,2.6-14.9,6-22,10.1-10.6,5.9-18.8,13.4-27.8,22.2-.4.3-.6.5-.8.7-.4.3-.7.5-1,.7-1.9,2-4,3.8-5.8,5.9-1.8,1.7-3.4,3.6-5.1,5.4-10.6,12.3-22.3,30.8-38,50.3l-7.2,9.5s.5-.4,1.4-1c4.8-3.1,21.9-13.3,44.7-18.5,1.8-.4,3.6-.7,5.4-.9.1,0,.2-.1.5-.1,1.9-.1,3.8-.4,5.9-.4,0,0-.1,0-.2-.1h1.9c.1.1.2.1.4.1,1.9,0,3.9.3,5.8.5,2.3.4,4.6.9,6.9,1.7,8.8,3,16.7,11,19,21.7,1.3,5.3,1.2,11.1,0,16.2-.8,5.1-2.5,9.7-4.3,14.4-2.2,5.2-4.7,10.1-7.5,14.8-4.5,9.3-11.2,19.1-21.3,29.2-14.3,14.3-22.5,31.7-26.9,49-2.4,9.2-3.7,18.5-4.1,27.3-1.4,23.6,2.3,43.4,4.1,50.2.1-2.5.5-8.5,2.2-16.7.5-3.3,1.3-7.2,2.4-11.3.6-2.3,1.3-4.8,2-7.3,1-3.1,2-6.2,3.3-9.4,1.3-4,3-7.9,4.9-12,0-.1.1-.2.1-.4,8.3-17.6,21.2-36.4,40.9-51.1,9.3-6.9,18.5-14.1,27.4-21.6,14.8-12.5,28.9-26,41.6-41.3,16.2-19.6,36.3-38.1,53.2-37.6,8.8.4,18.4,4.1,23.8,11-.2-.7-.6-1.6-.8-2.3-.5-1-1-2-1.4-3-.7-1.6-1.6-3.2-2.4-4.8-2.5-4.9-5.4-9.6-8.8-13.9-2-2.8-4.2-5.6-6.4-8.1-.6-.5-1.1-1-1.7-1.5.1,0,.5.1.7.3-4-4.9-8.2-9.6-12.6-13.8-14.3-14.2-31.8-23.6-50.4-29.8-18.8-5.9-38.6-8.8-58.6-10.9,20.2-2.1,40.7-1.2,60.6,3.3,19.8,4.6,39,14.4,54.4,29.4,7.7,7.5,14.4,15.9,20.7,24.8,6.1,9.1,11.9,19,14.4,31,.1,1,.1,2,.4,3,.2,1.1.6,2.1.8,3.3,2.2,10.5-2.8,27.1-10.2,34.8-7.2,7.6-16.1,11.8-25,12.6,4,1.5,8.1,2.2,12.4,2.5h.6c.2.1.5.1.8.1h2.6c11.9-.4,23.2-5.3,32.2-13.3,5.9-5.1,11-11.5,14.7-18.9.4-.7.8-1.6,1.2-2.7,5.3-12.5,12-24.7,22-32.7,49.3-40.2,64.6-24.5,84.1-37.4,3.1-2.1,4.1-7,1.9-10.1-17.6-23.8-27.8-31.9-48.6-28.1Z"/>
              </svg>
              <a href="https://www.zumbat.it/" target="_blank" className="text-[#A1A1A1] text-sm font-medium hover:text-[#E8E8E8] transition-colors duration-300">Zumbat</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>);
}
