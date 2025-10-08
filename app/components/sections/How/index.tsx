import HowCards from './cards';

export default function HowSection() {
  return (
    <section className="w-full flex items-end justify-center mt-40">
      <div className="md:w-[80%] w-full md:mx-auto px-8 py-20">
        {/* Section Title */}
        <div className="text-center mb-16 bg-gradient-to-r from-[#111111]/0 via-[#111111]/80 to-[#111111]/0">
          <h2 className="text-4xl font-bold text-[#E8E8E8] mb-4">
            Come lo facciamo
          </h2>
          <p className="text-[#A1A1A1] text-lg">
            Tecnologia e Metodo per garantire la massima sicurezza
          </p>
        </div>

        {/* Content Grid */}
        <HowCards />
      </div>
    </section>
  );
}
