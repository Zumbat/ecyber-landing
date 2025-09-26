"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import Radar from "./Radar";
import PasswordScan from "./Users";

const ClientCards = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  console.log(activeStep, "activeStep");

  const STEPS = [
    {
      alert: "Radar",
      image: "/images/radar.mp4",
      title: "Software potentissimi",
      content: "Usiamo strumenti professionali, testati nel settore, combinati con competenze manuali per garantire precisione e completezza.",
      element: <div className="flex items-center justify-center">
        <Radar/>
      </div>

    },
    {
      alert: "Report",
      image: "/images/report.mp4",
      title: "Report dettagliati",
      content: "Ogni assessment culmina in un report chiaro: descrizione delle vulnerabilità, impatto, probabilità, suggerimenti concreti per mitigazione, riferimenti tecnici.",
    },
    {
      alert: "Supporto",
      image: "/images/supporto.mp4",
      title: "Supporto continuo",
      content: "Non è solo un check una tantum: offriamo monitoring (quando pertinente), follow-up, e consulenza per mantenere l'assetto sicuro nel tempo.",
    element: <div className="flex items-center justify-center">
        <PasswordScan/>
    </div>
    },
  ];

  return (<>
    <motion.div
      className="flex flex-col items-center w-full relative gap-16 md:gap-4"
      initial={{ x: 100, opacity: 0 }} // Start off-screen left
      whileInView={{ x: 0, opacity: 1 }} // Slide in to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% visible
    >
      {STEPS.map((step, index) => (
        <div 
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 items-center w-full relative gap-8 hover:z-3 `}
        >
          {/* Card positioned based on index */}
          <div 
            className={`relative w-80 bg-[#3C3C3C] rounded-2xl overflow-hidden border border-[#3C3C3C] ${index === 0 ? 'md:ml-0' : index === 1 ? 'md:ml-[15%]' : 'md:ml-[30%]'}`}
          >
            <AnimatedCard srcMp4={step.image} title={step.alert} element={step.element} />
          </div>
          
          {/* Content - positioned to the right and centered */}
          <div className={`flex items-start space-x-4 max-w-md bg-gradient-to-r from-[#111111]/0 via-[#111111]/80 to-[#111111]/0 ${index === 0 ? 'md:ml-0' : index === 1 ? 'md:ml-[15%]' : 'md:ml-[30%]'}`}>
            {/* Icon */}
            <div className="flex-shrink-0 w-4 h-4 mt-1 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                <div className={`w-2 h-2 bg-[${index==0 ? '#2d8c80' : index==1 ? '#8B5CF6' : '#cd78de'}] rounded-full animate-pulse`}/>
            </div>
            {/* Content */}
            <div>
                <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">
                    {step.title}
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed">
                    {step.content}
                </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
    </>);
};

export default ClientCards;
