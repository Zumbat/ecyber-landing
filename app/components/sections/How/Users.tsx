"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Componente per il contatore animato
const AnimatedCounter = () => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const animateCounter = () => {
      // Genera numero random tra 203 e 397
      const randomTarget = Math.floor(Math.random() * (397 - 203 + 1)) + 203;
      
      // Reset a 0 e mostra
      setCount(0);
      setIsVisible(true);

      // Incrementa gradualmente
      let currentCount = 0;
      const increment = randomTarget / 100; // 100 step per animazione fluida
      
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= randomTarget) {
          setCount(randomTarget);
          clearInterval(interval);
          
          // Dopo 1 secondo, nascondi e riparti
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              animateCounter();
            }, 1000); // 1 secondo di pausa
          }, 1000);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 20); // 50fps per animazione fluida

      return () => clearInterval(interval);
    };

    // Avvia dopo 1 secondo
    const timer = setTimeout(animateCounter, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center h-16 flex items-center justify-center">
      {isVisible && (
        <div className="font-mono text-4xl md:text-5xl text-[#cd78de] font-bold">
          {count}
          </div>
      )}
          </div>
  );
};

export default function FuturisticPanel() {

  return (
    <div className="relative w-full max-w-2xl mx-auto p-6">
      {/* Sfondo con punti grigi */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #e8e8e8 1px, transparent 0)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Pannello principale */}
      <div className="relative bg-[#111] border border-[#3c3c3c] rounded-lg p-8 overflow-hidden">
           {/* Highlight animato che scorre sopra il testo */}
           <motion.div
              className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent via-[#cd78de] to-transparent opacity-40"
              animate={{
                left: ["-30%", "90%", "-30%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              style={{
                filter: "blur(1px)",
                mixBlendMode: "screen"
              }}
            />


        {/* Bordo animato luminoso */}
        <div className="absolute inset-0 rounded-lg">
          <motion.div
            className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-[#cd78de] to-transparent"
            animate={{
              x: ["-100%", "100%"],
              y: ["0%", "0%", "100%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 0.4, 0.5]
            }}
            style={{
              top: 0,
              left: 0,
            }}
          />
          <motion.div
            className="absolute w-0.5 h-16 bg-gradient-to-b from-transparent via-[#cd78de] to-transparent"
            animate={{
              x: ["0%", "0%", "100%", "100%", "0%"],
              y: ["-100%", "100%", "100%", "0%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 0.4, 0.5]
            }}
            style={{
              top: 0,
              right: 0,
            }}
          />
          <motion.div
            className="absolute w-16 h-0.5 bg-gradient-to-l from-transparent via-[#cd78de] to-transparent"
            animate={{
              x: ["100%", "-100%"],
              y: ["0%", "0%", "-100%", "-100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              bottom: 0,
              right: 0,
            }}
          />
          <motion.div
            className="absolute w-0.5 h-16 bg-gradient-to-t from-transparent via-[#cd78de] to-transparent"
            animate={{
              x: ["0%", "0%", "-100%", "-100%", "0%"],
              y: ["100%", "-100%", "-100%", "0%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              bottom: 0,
              left: 0,
            }}
          />
        </div>

        {/* Contenuto del pannello */}
        <div className="relative z-10">
          {/* Numero animato che incrementa da 0 a 354 */}
          <AnimatedCounter />
          </div>

        {/* Effetti di glow */}
        <div className="absolute inset-0 rounded-lg pointer-events-none">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#cd78de]/5 via-transparent to-[#cd78de]/5" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#cd78de]/5 via-transparent to-[#cd78de]/5" />
        </div>
      </div>
    </div>
  );
}