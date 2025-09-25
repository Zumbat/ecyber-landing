'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface GlobeProps {
  radius?: number;
  curveCount?: number;
  performanceMode?: boolean;
}

export default function Globe({ radius = 3, curveCount = 60, performanceMode = false }: GlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Genera le curve e le particelle una sola volta con useMemo
  const { curves, particles } = useMemo(() => {
    const generatedCurves: Array<{
      points: THREE.Vector3[];
      color: string;
    }> = [];

    const allParticles: THREE.Vector3[] = [];

    // Genera linee meridiane (verticali) per creare la struttura del globo
    const meridianCount = Math.floor(curveCount * 0.4);
    for (let i = 0; i < meridianCount; i++) {
      const theta = (i / meridianCount) * Math.PI * 2;
      const points: THREE.Vector3[] = [];
      
      // Crea una linea meridiana completa con meno punti per performance
      const pointCount = performanceMode ? 10 : 15;
      for (let j = 0; j <= pointCount; j++) {
        const phi = (j / pointCount) * Math.PI;
        const point = new THREE.Vector3();
        point.setFromSphericalCoords(radius, phi, theta);
        points.push(point);
      }
      
      // Aggiungi particelle lungo la linea meridiana
      for (let k = 0; k < points.length; k += 2) {
        const particle = points[k].clone();
        particle.add(new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        ));
        allParticles.push(particle);
      }

      // Genera colori con gradiente blu/viola
      const colors = ['#e8e8e8', '#3c3c3c']; // Verde acqua, Viola, Rosa
      const hue = colors[Math.floor(Math.random() * colors.length)];
      const saturation = 60;
      const lightness = 40;
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      generatedCurves.push({
        points,
        color
      });
    }

    // Genera linee parallele (orizzontali) per completare il globo
    const parallelCount = Math.floor(curveCount * 0.4);
    for (let i = 0; i < parallelCount; i++) {
      const phi = (i / parallelCount) * Math.PI;
      const points: THREE.Vector3[] = [];
      
      // Crea una linea parallela completa con meno punti per performance
      const pointCount = performanceMode ? 10 : 15;
      for (let j = 0; j <= pointCount; j++) {
        const theta = (j / pointCount) * Math.PI * 2;
        const point = new THREE.Vector3();
        point.setFromSphericalCoords(radius, phi, theta);
        points.push(point);
      }
      
      // Aggiungi particelle lungo la linea parallela
      for (let k = 0; k < points.length; k += 2) {
        const particle = points[k].clone();
        particle.add(new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        ));
        allParticles.push(particle);
      }

      // Genera colori con gradiente blu/viola
      const colors = ['#a1a1a1', '#919fa3']; // Verde acqua, Viola, Rosa
      const hue = colors[Math.floor(Math.random() * colors.length)];
      const saturation = 60;
      const lightness = 40;
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      generatedCurves.push({
        points,
        color
      });
    }

    // // Genera alcune linee casuali per aggiungere complessità
    // const randomCount = curveCount - meridianCount - parallelCount;
    // for (let i = 0; i < randomCount; i++) {
    //   // Genera punti casuali sulla superficie della sfera
    //   const startPoint = new THREE.Vector3();
    //   const endPoint = new THREE.Vector3();
      
    //   // Usa coordinate sferiche per punti sulla superficie
    //   const startTheta = Math.random() * Math.PI * 2;
    //   const startPhi = Math.acos(2 * Math.random() - 1);
    //   const endTheta = Math.random() * Math.PI * 2;
    //   const endPhi = Math.acos(2 * Math.random() - 1);

    //   startPoint.setFromSphericalCoords(radius, startPhi, startTheta);
    //   endPoint.setFromSphericalCoords(radius, endPhi, endTheta);

    //   // Genera punti di controllo intermedi per curve più fluide
    //   const midPoint1 = new THREE.Vector3();
    //   const midPoint2 = new THREE.Vector3();
      
    //   const midTheta1 = startTheta + (endTheta - startTheta) * 0.33;
    //   const midPhi1 = startPhi + (endPhi - startPhi) * 0.33;
    //   const midTheta2 = startTheta + (endTheta - startTheta) * 0.66;
    //   const midPhi2 = startPhi + (endPhi - startPhi) * 0.66;

    //   // Punti di controllo sulla superficie per curve naturali
    //   midPoint1.setFromSphericalCoords(radius, midPhi1, midTheta1);
    //   midPoint2.setFromSphericalCoords(radius, midPhi2, midTheta2);

    //   // Crea la curva usando CatmullRomCurve3
    //   const curve = new THREE.CatmullRomCurve3([
    //     startPoint,
    //     midPoint1,
    //     midPoint2,
    //     endPoint
    //   ]);

    //   // Genera punti lungo la curva
    //   const pointCount = performanceMode ? 40 : 60;
    //   const points = curve.getPoints(pointCount);

    //   // Aggiungi particelle lungo la curva
    //   for (let j = 0; j < points.length; j += 3) {
    //     const particle = points[j].clone();
    //     // Aggiungi un po' di variazione casuale
    //     particle.add(new THREE.Vector3(
    //       (Math.random() - 0.5) * 0.05,
    //       (Math.random() - 0.5) * 0.05,
    //       (Math.random() - 0.5) * 0.05
    //     ));
    //     allParticles.push(particle);
    //   }

    //   // Genera colori con gradiente blu/viola
    //   const colors = ['#e8e8e8', '#3c3c3c']; // Verde acqua, Viola, Rosa
    //   const hue = colors[Math.floor(Math.random() * colors.length)];
    //   const saturation = 70; // 70-100%
    //   const lightness = 60 + Math.random() * 30; // 60-90%
    //   const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    //   generatedCurves.push({
    //     points,
    //     color
    //   });
    // }

    return { curves: generatedCurves, particles: allParticles };
  }, [radius, curveCount, performanceMode]);

  // Animazione di rotazione lenta solo sull'asse Y
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotazione più lenta per performance
      groupRef.current.rotation.y += delta * (performanceMode ? 0.02 : 0.03);
    }

    // Animazione delle particelle (anche solo asse Y)
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * (performanceMode ? 0.01 : 0.02);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Renderizza tutte le curve con blending additivo */}
      {curves.map((curve, index) => (
        <Line
          key={index}
          points={curve.points}
          color={curve.color}
          lineWidth={performanceMode ? 1.5 : 2.5}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      ))}

      {/* Particelle distribuite sulle curve */}
      <Points ref={pointsRef} positions={new Float32Array(particles.flatMap(p => [p.x, p.y, p.z]))} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#919fa3"
          size={performanceMode ? 0.02 : 0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}
