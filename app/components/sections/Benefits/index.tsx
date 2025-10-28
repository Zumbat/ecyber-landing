'use client';
import { useTranslation } from 'react-i18next';
import BenefitAccordion from './BenefitAccordion';
import { DoorClosedLocked, HeartHandshake, Orbit, Zap } from 'lucide-react';

export default function BenefitsSection() {
  const {t} = useTranslation();
  return (
    <section className="w-full flex items-start justify-center mt-30 mb-60">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Section Title */}
        <div className="text-center mb-16 bg-gradient-to-r from-[#111111]/0 via-[#111111]/80 to-[#111111]/0">
          <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
            {t('benefitsSection.title')}
          </h2>
          <p className="text-[#A1A1A1] text-lg">
            {t('benefitsSection.description')}
          </p>
        </div>
        
        {/* Benefits Accordion */}
        <BenefitAccordion
          benefits={[
            {
              icon: <Orbit strokeWidth={1} className="text-[#E8E8E8]" size={24}/>,
              title: t('benefitsSection.benefits.proattiva.title'),
              description: t('benefitsSection.benefits.proattiva.description')
            },
            {
              icon: <DoorClosedLocked strokeWidth={1} className="text-[#E8E8E8]" height={24}/>,
              title: t('benefitsSection.benefits.riduzione.title'),
              description: t('benefitsSection.benefits.riduzione.description')
            },
            {
              icon: <Zap strokeWidth={1} className="text-[#E8E8E8]" height={24}/>,
              title: t('benefitsSection.benefits.chiarezza.title'),
              description: t('benefitsSection.benefits.chiarezza.description')
            },
            {
              icon: <HeartHandshake strokeWidth={1} className="text-[#E8E8E8]" size={24}/>,
              title: t('benefitsSection.benefits.conformita.title'),
              description: t('benefitsSection.benefits.conformita.description')
            }
          ]}
        />
      </div>
    </section>
  );
}
