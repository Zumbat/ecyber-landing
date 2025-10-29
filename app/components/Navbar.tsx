'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SelectorLanguage from './Selector_language';

export default function Navbar() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          } else {
            setIsFooterVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
      }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <nav className={`w-full bg-[#111111]/70 backdrop-blur-[4px] fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isFooterVisible ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end gap-2">
            <Image
              src="/assets/e-cyber_logo.svg"
              alt="E-Cyber Logo"
              width={120}
              height={40}
              className="h-8 w-auto mr-2"
            />
            <p className="text-[#E8E8E8] text-xl orbitron-text">E-Cyber</p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button
              className="border border-[#3c3c3c] text-[#E8E8E8] hover:bg-[#3c3c3c]/20 hover:text-[#E8E8E8] font-semibold py-2 px-4 rounded-2xl text-sm cursor-pointer"
              onClick={() => {
                window.location.href = "https://tools.ecyber.it/auth/request-link";
              }}
            >
              {t('nav.start')} 
            </button>
            <SelectorLanguage />
          </div>
        </div>
      </div>
    </nav>
  );
}
