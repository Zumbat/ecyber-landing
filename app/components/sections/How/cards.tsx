"use client"
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ClientCards = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  console.log(activeStep, "activeStep");

  const STEPS = [
    {
      title: "Step 1",
      content: "Content 1",
      image: "/images/step1.jpg",
    },
    {
      title: "Step 1",
      content: "Content 1",
      image: "/images/step1.jpg",
    },
    {
      title: "Step 1",
      content: "Content 1",
      image: "/images/step1.jpg",
    },
  ];

  return (<>
    {/* <motion.div
      className="flex flex-col items-center w-full relative gap-0 lg:gap-5"
      initial={{ x: 100, opacity: 0 }} // Start off-screen left
      whileInView={{ x: 0, opacity: 1 }} // Slide in to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Animate once when 20% visible
    >*/}
      {STEPS.map((step, index) => (
        <div key={index} className="relative w-80 h-80 bg-[#3C3C3C] rounded-2xl overflow-hidden border border-[#3C3C3C]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3C3C3C] to-[#111111] flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 bg-[#E8E8E8] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#3C3C3C] rounded"/>
                </div>
            </div>
            </div>
        </div>
      ))}
    {/* </motion.div> */}
    </>);
};

export default ClientCards;
