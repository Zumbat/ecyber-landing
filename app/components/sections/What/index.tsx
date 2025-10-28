'use client';

import ServiceCard from '../../ServiceCard';
import { useTranslation } from 'react-i18next';


export default function WhatSection() {

  const { t } = useTranslation();


  return (
    <section className="w-full flex items-start justify-center relative overflow-hidden bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111] backdrop-blur-sm gradient-border-top gradient-border-bottom">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
            {t('what_section.title')}
          </h2>
          <p className="text-[#A1A1A1] text-lg">
            {t('what_section.description')}
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title={t('what_section.service_card.scanning_target.title')}
            description={t('what_section.service_card.scanning_target.description')}
            className="hover:border-[#2d8c80]"
          />
          <ServiceCard
            title={t('what_section.service_card.threat_intelligence.title')}
            description={t('what_section.service_card.threat_intelligence.description')}
            className="hover:border-[#8B5CF6]"
          />
          <ServiceCard
            title={t('what_section.service_card.penetration_testing.title')}
            description={t('what_section.service_card.penetration_testing.description')}
            className="hover:border-[#cd78de]"
          />
        </div>
      </div>
    </section>
  );
}
