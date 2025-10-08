'use client';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitAccordionProps {
  benefits: BenefitItem[];
}

export default function BenefitAccordion({ benefits }: BenefitAccordionProps) {

  return (
    <div className="flex flex-col gap-6"> {/*grid-cols-1 lg:grid-cols-2*/}
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-xl border border-[#3C3C3C] transition-all duration-300 group bg-[#3c3c3c]/20 hover:bg-[#3c3c3c]/40 backdrop-blur-[2px] hover:backdrop-blur-[4px]"
          >
            {/* Icona */}
            <div className="flex-shrink-0 w-8 h-8 bg-[#3C3C3C] rounded-lg flex items-center justify-center">
              <span className="text-[#E8E8E8] text-sm font-bold">
                {benefit.icon}
              </span>
            </div>
            
            {/* Contenuto */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#E8E8E8] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#A1A1A1] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
