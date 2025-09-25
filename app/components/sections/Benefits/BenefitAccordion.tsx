'use client';

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitAccordionProps {
  benefits: BenefitItem[];
}

export default function BenefitAccordion({ benefits }: BenefitAccordionProps) {
  // Dividi i benefits in due colonne: 3 a sinistra, 2 a destra
  const leftColumn = benefits.slice(0, 3);
  const rightColumn = benefits.slice(3, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Colonna sinistra - 3 elementi */}
      <div className="space-y-6">
        {leftColumn.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-xl border border-[#3C3C3C] hover:border-[#2d8c80] transition-all duration-300 group"
          >
            {/* Icona */}
            <div className="flex-shrink-0 w-8 h-8 bg-[#3C3C3C] rounded-lg flex items-center justify-center group-hover:bg-[#2d8c80] transition-colors duration-300">
              <span className="text-[#E8E8E8] text-sm font-bold">
                {benefit.icon}
              </span>
            </div>
            
            {/* Contenuto */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#E8E8E8] mb-2 group-hover:text-[#2d8c80] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-[#A1A1A1] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Colonna destra - 2 elementi */}
      <div className="space-y-6">
        {rightColumn.map((benefit, index) => (
          <div
            key={index + 3}
            className="flex items-start space-x-4 p-4 rounded-xl border border-[#3C3C3C] hover:border-[#2d8c80] transition-all duration-300 group"
          >
            {/* Icona */}
            <div className="flex-shrink-0 w-8 h-8 bg-[#3C3C3C] rounded-lg flex items-center justify-center group-hover:bg-[#2d8c80] transition-colors duration-300">
              <span className="text-[#E8E8E8] text-sm font-bold">
                {benefit.icon}
              </span>
            </div>
            
            {/* Contenuto */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#E8E8E8] mb-2 group-hover:text-[#2d8c80] transition-colors duration-300">
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
