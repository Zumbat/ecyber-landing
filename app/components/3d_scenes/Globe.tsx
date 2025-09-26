'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface GlobeProps {
  radius?: number;
  performanceMode?: boolean;
}

export default function Globe({ radius = 3, performanceMode = false }: GlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Genera particelle per ogni linea orizzontale (parallela)
  const particles = useRef<THREE.Vector3[]>([]);
  const particleTrails = useRef<THREE.Vector3[][]>([]);

  // Inizializza le particelle una sola volta
  if (particles.current.length === 0) {
    // Crea una particella per ogni linea orizzontale (16 linee)
    for (let i = 0; i < 16; i++) {
      const phi = (i / 16) * Math.PI; // Da 0 a π
      const theta = 0; // Iniziamo a theta=0
      
      const particle = new THREE.Vector3();
      particle.setFromSphericalCoords(radius, phi, theta);
      particles.current.push(particle);
      
      // Crea la scia per questa particella (ultimi 10 punti)
      particleTrails.current.push([]);
    }
  }

  // Animazione di rotazione lenta solo sull'asse Y
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotazione solo sull'asse Y
      groupRef.current.rotation.y += delta * 0.08;
    }

    // Anima le particelle lungo le linee orizzontali
    particles.current.forEach((particle, index) => {
      const phi = (index / 16) * Math.PI; // Mantieni la stessa altezza
      const theta = (state.clock.elapsedTime * 0.5 + index * 0.1) % (Math.PI * 2); // Muovi lungo la circonferenza
      
      // Aggiorna la posizione della particella
      particle.setFromSphericalCoords(radius, phi, theta);
      
      // Aggiorna la scia
      const trail = particleTrails.current[index];
      trail.push(particle.clone());
      
      // Mantieni solo gli ultimi 10 punti della scia
      if (trail.length > 10) {
        trail.shift();
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Sfera reticolare usando wireframe - solo meridiane e parallele */}
      <mesh>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshStandardMaterial 
          color="#3C3C3C" 
          wireframe={true}
          transparent
          opacity={1}
          emissive="#1a1a1a"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Particelle principali */}
      <Points ref={pointsRef} positions={new Float32Array(particles.current.flatMap(p => [p.x, p.y, p.z]))} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3C3C3C"
          size={performanceMode ? 0.02 : 0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Scie luminose delle particelle */}
      {particleTrails.current.map((trail, trailIndex) => 
        trail.length > 1 && (
          <mesh key={trailIndex}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array(trail.flatMap(p => [p.x, p.y, p.z])), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#3C3C3C"
              transparent
              opacity={0.4}
              linewidth={1}
            />
          </mesh>
        )
      )}
    </group>
  );
}