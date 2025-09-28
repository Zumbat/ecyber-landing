"use client";

import React from "react";

type AnimatedCardProps = {
  srcMp4?: string;
  srcWebm?: string;
  title: string;
  element?: React.ReactNode;
};

export default function AnimatedCard({ srcMp4, srcWebm, title, element }: AnimatedCardProps) {
  return (
    <div className="relative w-full h-[200px] max-w-sm rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0c10] to-[#0f1117] border border-white/10 shadow-lg">
      {/* Video animato */}
      {element ? element : (<>
      <video
        className="w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
      >
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        {srcMp4 && <source src={srcMp4} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      </>)}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
    </div>
  );
}
