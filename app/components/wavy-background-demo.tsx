"use client";
import React, { forwardRef } from "react";
import { WavyBackground } from "./ui/wavy-background";

const WavyBackgroundDemo = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <WavyBackground 
        className="max-w-full mx-auto"
      >
      </WavyBackground>
    </div>
  );
});

WavyBackgroundDemo.displayName = "WavyBackgroundDemo";

export default WavyBackgroundDemo;
