'use client';

import HoverMovingBorderButton from "../../ui/hover-moving-border-button";
import { useTranslation } from 'react-i18next';


export default function HeroSection() {
  const { t } = useTranslation();
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
                {t('hero.protect')}
              </span>
              <span className="block bg-gradient-to-b from-[#E8E8E8] via-[#a1a1a1] to-[#3C3C3C] bg-clip-text text-transparent">
                {t('hero.your_business')}
              </span>
            </h1>
            <h2 className="text-xl font-bold text-[#A8A8A8] leading-tight mb-2">
              <span className="block">
                {t('hero.discover_vulnerabilities')}
              </span>
            </h2>

            {/* Sub-headline */}
            <p className="text-sm text-[#A1A1A1] my-8 mx-auto leading-relaxed">
              {t('hero.advanced_services')} <span className="text-[#E8E8E8] font-semibold">{t('hero.cyber_intelligence')}</span> e <span className="text-[#E8E8E8] font-semibold">{t('hero.red_teaming')}</span>:
              <br/>{t('hero.digital_perimeter_analysis')} <span className="text-[#E8E8E8] font-semibold">{t('hero.threat_monitoring')}</span>, <span className="text-[#E8E8E8] font-semibold">{t('hero.attack_simulations')}</span> e <span className="text-[#E8E8E8] font-semibold">{t('hero.proactive_prevention')}</span>
              — {t('hero.team_dedicated')} <span className="text-[#E8E8E8] font-semibold">{t('hero.strategic_reports')}</span>.
            </p>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap justify-end items-center gap-4 text-[#A1A1A1]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2d8c80] rounded-full animate-pulse"></div>
                <span className="text-sm">{t('hero.continuous_security')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                <span className="text-sm">{t('hero.operational_reports')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse"></div>
                <span className="text-sm">{t('hero.active_intelligence')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cd78de] rounded-full animate-pulse"></div>
                <span className="text-sm">{t('hero.24_7_support')}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start items-start pt-8">
              <HoverMovingBorderButton
                borderRadius="0.75rem"
                duration={2000}
                className="py-2 px-4"
                onClick={() => {
                  window.location.href = "https://tools.ecyber.it/auth/request-link";
                }}
              >
                {t('hero.start_now')} →
              </HoverMovingBorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
