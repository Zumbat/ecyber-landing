'use client';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Globe from './Globe';

// Componente per gestire la camera con movimento Z basato sullo scroll della pagina
function CameraController() {
  const { camera } = useThree();
  const targetZRef = useRef(2);

  useEffect(() => {
    // Inizializza la camera al centro
    camera.position.set(0, 0, 2);
    camera.lookAt(0, 0, 0);
    
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return;
    
    // Scroll handler - zoom completo a 2vh
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 2; // 2 volte l'altezza dello schermo
      const scrollProgress = Math.min(scrollY / maxScroll, 1); // 0 to 1
      
      // Calcola posizione Z basata sullo scroll (da 2 a 7)
      // Più scroll = più lontano dalla scena (zoom-out)
      const minZ = 2;   // Posizione iniziale (vicino al globo)
      const maxZ = 7;   // Posizione massima (lontano dal globo ma ancora visibile)
      targetZRef.current = minZ + (scrollProgress * (maxZ - minZ));
    };

    // Aggiungi event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [camera]);

  useFrame((state, delta) => {
    if (camera instanceof THREE.PerspectiveCamera) {
      // Interpola dolcemente verso la posizione Z target con lerp più fluido
      const currentZ = camera.position.z;
      const targetZ = targetZRef.current;
      
      // Lerp più fluido basato sul delta time per movimento costante
      
      // Mantieni la camera sempre al centro (0,0) e muovi solo Z
      camera.position.set(0, 0, currentZ + (targetZ - currentZ));
      
      // La camera deve sempre guardare verso il centro del globo (0,0,0)
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

interface SceneProps {
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  isVisible?: boolean;
}

export default function Scene({ className = "", style = {}, width = "100%", height = "100%", isVisible = true }: SceneProps) {
  const [performanceMode, setPerformanceMode] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check if window/document is available (SSR safety)
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Rileva se WebGL è supportato
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setWebglSupported(!!gl);

    // Rileva performance del dispositivo
    const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    setPerformanceMode(isLowEndDevice);
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">WebGL non supportato</h2>
          <p className="text-gray-400">Il tuo browser non supporta WebGL necessario per questa visualizzazione.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ 
        width: '100vw', 
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        ...style 
      }}>
      <Canvas
        style={{ background: '#111111', width: '100%', height: '100%' }}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        {/* Camera al centro (vista dall'interno) */}
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 0]}
          fov={75}
          near={0.1}
          far={100}
        />
        
        {/* Controller per zoom fluido */}
        <CameraController />
        
        {/* Sfondo nero */}
        <color attach="background" args={["#111111"]} />
        
        {/* Luci per illuminare la scena */}
        <ambientLight intensity={0.1} />
        <pointLight 
          position={[0, -4, 0]} 
          intensity={1} 
          color="#e8e8e8"     
          distance={10}
          decay={2}
        />
        <directionalLight position={[0, 0, 5]} intensity={0.6} />
        
        {/* Ambiente per riflessi */}
        <Environment preset="studio" />
        
        {/* Il nostro globo (vista dall'interno) */}
        <Globe 
          radius={3} 
          performanceMode={performanceMode}
        />
        
        
      </Canvas>
    </div>
  );
}
