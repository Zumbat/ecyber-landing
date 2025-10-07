"use client";

import React from "react";

type SplineSceneProps = {
  scene: string;
  className?: string;
};

export default function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={className}>
      <iframe
        src={scene}
        className="absolute inset-0 w-full h-full rounded-2xl"
        style={{ transform: 'scale(2.3)' }}
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
