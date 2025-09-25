'use client';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Globe from './Globe';

// Componente per gestire la camera con movimento Z basato sullo scroll della pagina
function CameraController() {
  const { camera } = useThree();
  const targetZRef = useRef(0);

  useEffect(() => {
    // Inizializza la camera al centro
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);
    
    // Scroll handler (stesso metodo di ParticleBackground)
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1); // 0 to 1
      
      // Calcola posizione Z basata sullo scroll (da 0 a 15 per vedere meglio il globo)
      // Più scroll = più lontano dalla scena (zoom-out)
      const minZ = 3;   // Posizione iniziale (dentro il globo)
      const maxZ = 20;  // Posizione massima (lontano dal globo ma ancora visibile)
      targetZRef.current = minZ + (scrollProgress * (maxZ - minZ));
    };

    // Aggiungi event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [camera]);

  useFrame(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      // Interpola dolcemente verso la posizione Z target
      const currentZ = camera.position.z;
      const targetZ = targetZRef.current;
      const lerpFactor = 0.05;
      
      // Mantieni la camera sempre al centro (0,0) e muovi solo Z
      camera.position.set(0, 0, currentZ + (targetZ - currentZ) * lerpFactor);
      
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
}

export default function Scene({ className = "", style = {}, width = "100%", height = "100%" }: SceneProps) {
  const [performanceMode, setPerformanceMode] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
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
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
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
        <pointLight position={[0, 0, 0]} intensity={0.3} color="#4A90E2" />
        <directionalLight position={[0, 0, 5]} intensity={0.2} />
        
        {/* Ambiente per riflessi */}
        <Environment preset="night" />
        
        {/* Il nostro globo (vista dall'interno) */}
        <Globe 
          radius={3} 
          curveCount={performanceMode ? 20 : 30} 
          performanceMode={performanceMode}
        />
        
        {/* Effetti di post-processing per il glow */}
        {!performanceMode && (
          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        )}
        
      </Canvas>
    </div>
  );
}
