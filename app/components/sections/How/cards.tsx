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
      title: <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">
        Non solo software, <br/>ma <span className="bg-[#50ada2]/50 text-[#50ada2]/70">persone esperte</span>.
      </h3>,
      content: "Il nostro Red Team / Offending Security combina strumenti professionali e capacità umane di analisi per garantire precisione, realismo e profondità operativa in ogni assessment.",
      element: <div className="flex items-center justify-center w-full h-full overflow-hidden">
        {/* Sfondo con punti grigi */}
        <div 
           className="absolute inset-0 opacity-30"
           style={{
             backgroundColor: `
               #1c1c1c
             `,
             backgroundSize: '20px 20px'
           }}
         />
        <video 
          src="/assets/radar.webm" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-2xl"
          style={{ 
            minHeight: '200px', 
            minWidth: '200px',
            transform: 'translateY(-8px)',
          }}
          onError={(e) => {
            console.error('Video error:', e);
            e.currentTarget.style.display = 'none';
          }}
          onLoadStart={() => {}}
          onCanPlay={() => {}}
        >
          <source src="/assets/radar.webm" type="video/webm" />
          Il tuo browser non supporta il video.
        </video>
      </div>
    },
    {
      alert: "Report",
      image: "/images/report.mp4",
      title: <h3 className="text-xl font-bold text-[#E8E8E8] mb-2">
        Report di intelligence <br/><span className="bg-[#976df7]/50 text-[#976df7]/70">chiari e utili</span>.
      </h3>,
      content: "Ogni attività genera un report con priorità di rischio, descrizione tecnica, contesto d’intelligence e indicazioni pratiche per la mitigazione. Comunicazione chiara, linguaggio comprensibile, impatto reale.",
      element: <div className="flex items-center justify-center w-full h-full overflow-hidden">
        {/* Sfondo con punti grigi */}
        <div 
           className="absolute inset-0 opacity-30"
           style={{
             backgroundColor: `
               #1c1c1c
             `,
             backgroundSize: '20px 20px'
           }}
         />
        <video 
          src="/assets/report.webm" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-2xl"
          style={{ 
            minHeight: '300px', 
            minWidth: '300px',
            transform: 'scale(2)'
          }}
          onError={(e) => {
            console.error('Video error:', e);
            e.currentTarget.style.display = 'none';
          }}
          onLoadStart={() => {}}
          onCanPlay={() => {}}
        >
          <source src="/assets/report.webm" type="video/webm"/>
          Il tuo browser non supporta il video.
        </video>
      </div>
    },
    {
      alert: "Supporto",
      image: "/images/supporto.mp4",
      title: <h3 className="text-xl font-bold text-[#E8E8E8] mb-2 pb-5">
        Supporto <span className="bg-[#e18cf2]/50 text-[#e18cf2]/70">continuo</span>.
      </h3>,
      content: "Non è un controllo occasionale: monitoriamo costantemente i tuoi asset, interveniamo su nuove minacce e aggiorniamo la strategia di difesa. Restiamo al tuo fianco per mantenere il livello di sicurezza sempre elevato nel tempo.",
      // element: <div className="flex items-center justify-center w-full h-full">
      //   <video 
      //     src="/assets/counter_ecyber.webm" 
      //     autoPlay 
      //     loop 
      //     muted 
      //     playsInline
      //     className="w-full h-full object-cover rounded-2xl"
      //     style={{ minHeight: '300px', minWidth: '300px' }}
      //     onError={(e) => {
      //       console.error('Video error:', e);
      //       e.currentTarget.style.display = 'none';
      //     }}
      //     onLoadStart={() => {}}
      //     onCanPlay={() => {}}
      //   >
      //     <source src="/assets/counter_ecyber.webm" type="video/webm" />
      //     Il tuo browser non supporta il video.
      //   </video>
      // </div>
        element: <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
          {/* Sfondo con punti grigi */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundColor: `
                #1c1c1c
              `,
              backgroundSize: '20px 20px'
            }}
          />
          {/* Video del supporto */}
          <video 
            src="/assets/supporto.webm" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover rounded-2xl relative z-10"
            style={{ 
              minHeight: '200px', 
              minWidth: '200px',
              transform: 'scale(1.5)',
            }}
            onError={(e) => {
              console.error('Video error:', e);
              e.currentTarget.style.display = 'none';
            }}
            onLoadStart={() => {}}
            onCanPlay={() => {}}
          >
            <source src="/assets/supporto.webm" type="video/webm" />
            Il tuo browser non supporta il video.
          </video>
        </div>
    },
  ];

  return (<>
    <motion.div
      className="flex flex-col md:flex-row w-full relative gap-8 items-stretch"
    >
      {STEPS.map((step, index) => (
        <div 
          key={index}
          className={`flex flex-col-reverse items-stretch justify-between relative gap-8 p-8 rounded-2xl bg-[#111111] border border-[#3C3C3C] flex-1`}
        >
          {/* Card positioned based on index */}
          <div 
            className={`relative w-full h-56 mt-auto rounded-2xl overflow-hidden `}
          >
            <AnimatedCard title={step.alert} element={step.element} />
          </div>
          
          {/* Content - positioned to the top */}
          <div className={`flex items-start space-x-4 max-w-md flex-1`}>
            {/* Icon */}
            {/* <div className="flex-shrink-0 w-4 h-4 mt-1 bg-[#3C3C3C] rounded-full flex items-center justify-center">
                <div className={`w-2 h-2 bg-[${index==0 ? '#2d8c80' : index==1 ? '#8B5CF6' : '#cd78de'}] rounded-full animate-pulse`}/>
            </div> */}
            {/* Content */}
            <div className="flex-1">
                {step.title}
                <p className="text-[#E8E8E8] text-sm leading-relaxed">
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
