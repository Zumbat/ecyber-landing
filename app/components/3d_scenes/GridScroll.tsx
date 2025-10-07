"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

function PerspectiveGrid() {
  const gridRef = useRef<THREE.LineSegments>(null);

  return (
    // A large wireframe plane tilted forward so the bottom is near the camera
    <group position={[0, 1.2, -2]} rotation={[0.55, 0, 0]}>
      <gridHelper args={[150, 50, "#3c3c3c", "#3c3c3c"]} ref={gridRef as any} />
    </group>
  );
}

export default function GridScroll() {
  return (
    <section className="w-full h-[300px] bg-[#111111] relative overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 500 }}
        style={{ background: "#111111" }}
      >
        {/* Depth-based fade into background */}
        <fog attach="fog" args={["#111111", 6, 24]} />
        <ambientLight intensity={0.25} />
        <PerspectiveGrid />
      </Canvas>

      {/* Vignette/light focus bottom-center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 93%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 70%)",
          mixBlendMode: "screen",
        }}
      />
    </section>
  );
}
