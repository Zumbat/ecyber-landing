'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export default function ParticleBackground({ 
  className = '', 
  width = 800, 
  height = 600, 
  style = {} 
}: ParticleBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const linesRef = useRef<THREE.Line[]>([]);
  const originalPositionsRef = useRef<THREE.Vector3[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const verticalLineCountRef = useRef(0);
  const horizontalLineCountRef = useRef(0);
  const particlesRef = useRef<THREE.Mesh[]>([]);
  const sphereRadiusRef = useRef(0);
  const scrollYRef = useRef(0);
  const targetCameraZRef = useRef(0);

  const init = () => {
    if (!mountRef.current) return;

    // Get container dimensions
    const containerRect = mountRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width || width as number;
    const containerHeight = containerRect.height || height as number;

        // Create scene with new background color
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);
    
    // Add ambient light for MeshStandardMaterial
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    sceneRef.current = scene;

        // Create camera positioned at the center of the sphere
        const camera = new THREE.PerspectiveCamera(
          75,
          containerWidth as number / containerHeight as number,
          0.1,
          1000
        );
        camera.position.set(0, 0, 2); // Camera slightly behind center of sphere
        cameraRef.current = camera;
        targetCameraZRef.current = 2; // Initial camera Z position

    // Create renderer with enhanced settings for glow effect
    const renderer = new THREE.WebGLRenderer({ 
      alpha: false, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerWidth as number, containerHeight as number);
        renderer.setClearColor(0x111111);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2; // Slightly brighter for better glow
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create curved lines forming a sphere with network effect
    const verticalLineCount = 16; // Reduced vertical lines
    const horizontalLineCount = 32; // Keep horizontal lines
    const totalLineCount = verticalLineCount + horizontalLineCount;
    const lines: THREE.Line[] = [];
    const originalPositions: THREE.Vector3[] = [];
    const sphereRadius = 5; // Radius of the sphere

    for (let i = 0; i < totalLineCount; i++) {
      // Create curved line geometry
      const points: THREE.Vector3[] = [];
      const segments = 32; // More segments for smoother curves
      
      // Generate points for curved line following sphere surface
      for (let j = 0; j <= segments; j++) {
        const t = j / segments; // 0 to 1
        
        // Create different types of lines for network effect
        if (i < verticalLineCount) {
          // Vertical lines (meridians) - distributed around the sphere
          const phi = (i / verticalLineCount) * Math.PI * 4; // Longitude
          const theta = t * Math.PI; // Latitude from 0 to π
          
          const x = sphereRadius * Math.sin(theta) * Math.cos(phi);
          const y = sphereRadius * Math.cos(theta);
          const z = sphereRadius * Math.sin(theta) * Math.sin(phi);
          
          points.push(new THREE.Vector3(x, y, z));
        } else {
          // Horizontal lines (parallels) - distributed around the sphere
          const lineIndex = i - verticalLineCount;
          const theta = (lineIndex / horizontalLineCount) * Math.PI; // Latitude
          const phi = t * Math.PI * 2; // Longitude from 0 to 2π
          
          const x = sphereRadius * Math.sin(theta) * Math.cos(phi);
          const y = sphereRadius * Math.cos(theta) * 0.8; // Reduced Y for more spherical effect
          const z = sphereRadius * Math.sin(theta) * Math.sin(phi);
          
          points.push(new THREE.Vector3(x, y, z));
        }
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
          // Create material with glowing effect
          const material = new THREE.LineBasicMaterial({
            color: 0x3C3C3C,
            transparent: true,
            opacity: 1,
            linewidth: 10
          });

      const line = new THREE.Line(geometry, material);
      lines.push(line);
      // Store the original angle for rotation
      originalPositions.push(new THREE.Vector3((i / totalLineCount) * Math.PI * 2, 0, 0));
      scene.add(line);
    }

        // Create moving particles for horizontal lines - attach them as children of the lines
        const particles: THREE.Mesh[] = [];
        
        // Create particle geometry and material
        const coreGeometry = new THREE.SphereGeometry(0.02, 8, 6); // Core particle
        const coreMaterial = new THREE.MeshBasicMaterial({
          color: 0xE8E8E8,
          transparent: true,
          opacity: 1.0
        });

        // Add particles as children of horizontal lines
        for (let i = 0; i < horizontalLineCount; i++) {
          const lineIndex = verticalLineCount + i;
          const horizontalLine = lines[lineIndex];
          
          // Create particle and attach it to the line
          const particle = new THREE.Mesh(coreGeometry, coreMaterial);
          horizontalLine.add(particle);
          
          particles.push(particle);
        }

    linesRef.current = lines;
    originalPositionsRef.current = originalPositions;
    verticalLineCountRef.current = verticalLineCount;
    horizontalLineCountRef.current = horizontalLineCount;
    particlesRef.current = particles;
    sphereRadiusRef.current = sphereRadius;
  };

  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);
    timeRef.current += 0.01;

    if (linesRef.current && originalPositionsRef.current && cameraRef.current && sceneRef.current && rendererRef.current) {
      const lines = linesRef.current;
      const originalPositions = originalPositionsRef.current;
      const camera = cameraRef.current;
      const scene = sceneRef.current;
      const renderer = rendererRef.current;

      // Update line positions with sphere rotation
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const originalAngle = originalPositions[i].x;

        // Rotate the entire sphere
        const rotationSpeed = 0.2; // Slower rotation for better visibility
        const currentAngle = originalAngle + timeRef.current * rotationSpeed;
        
        // Apply rotation to the line
        line.rotation.y = currentAngle;
        
        // Add subtle vertical rotation for more dynamic effect
        line.rotation.x = Math.sin(timeRef.current * 0.3 + i * 0.05) * 0.05;
        
        // Temporarily disable rotation for horizontal lines to see the segment better
        if (i >= verticalLineCountRef.current) {
          line.rotation.y = 0;
          line.rotation.x = 0;
        }

            if (line.material instanceof THREE.LineBasicMaterial) {
              if (i < verticalLineCountRef.current) {
                // Vertical lines - static glow with subtle animation
                const staticGlow = 0.7 + Math.sin(timeRef.current * 0.5 + i * 0.1) * 0.1;
                line.material.opacity = staticGlow;
                line.material.color.setHex(0x3C3C3C);
              } else {
                // Horizontal lines - make them bright with subtle glow
                const horizontalGlow = 0.5 + Math.sin(timeRef.current * 0.8 + i * 0.15) * 0.1;
                line.material.opacity = horizontalGlow;
                line.material.color.setHex(0x3C3C3C);
              }
            }
      }

      // Update particle positions along horizontal lines
      if (linesRef.current) {
        const lines = linesRef.current;
        
        for (let i = 0; i < horizontalLineCountRef.current; i++) {
          const lineIndex = verticalLineCountRef.current + i;
          const horizontalLine = lines[lineIndex];
          
          if (horizontalLine && horizontalLine.children.length > 0) {
            const particle = horizontalLine.children[0] as THREE.Mesh;
            
            const segmentSpeed = 0.3; // Speed of the particle
            const delayBetweenLines = 0.05; // 0.05s delay between lines
            
            // Calculate the particle position for this line
            const lineDelay = i * delayBetweenLines;
            const segmentTime = (timeRef.current * segmentSpeed) - lineDelay;
            
            // Create a moving particle that travels clockwise
            // The particle position cycles from 0 to 1
            const segmentPosition = (1 - (segmentTime % 1 + 1) % 1); // Reverse direction for clockwise
            
            if (horizontalLine.geometry) {
              // Get the line's geometry points
              const positions = horizontalLine.geometry.attributes.position.array as Float32Array;
              const segments = positions.length / 3;
              
              // Calculate smooth position along the line using interpolation
              const exactIndex = segmentPosition * (segments - 1);
              const pointIndex = Math.floor(exactIndex);
              const nextPointIndex = Math.min(pointIndex + 1, segments - 1);
              const t = exactIndex - pointIndex; // Interpolation factor (0 to 1)
              
              // Get current and next point positions
              const pointIndex3 = pointIndex * 3;
              const nextPointIndex3 = nextPointIndex * 3;
              
              const currentX = positions[pointIndex3];
              const currentY = positions[pointIndex3 + 1];
              const currentZ = positions[pointIndex3 + 2];
              
              const nextX = positions[nextPointIndex3];
              const nextY = positions[nextPointIndex3 + 1];
              const nextZ = positions[nextPointIndex3 + 2];
              
              // Interpolate between current and next point for smooth movement
              const lineX = currentX + (nextX - currentX) * t;
              const lineY = currentY + (nextY - currentY) * t;
              const lineZ = currentZ + (nextZ - currentZ) * t;
              
              // Set particle position relative to the line (0,0,0 is the line's local origin)
              // We need to transform the world position to local position
              const worldPosition = new THREE.Vector3(lineX, lineY, lineZ);
              const localPosition = worldPosition.clone();
              
              // Apply inverse rotation to get local position
              localPosition.applyQuaternion(horizontalLine.quaternion.clone().invert());
              
              particle.position.copy(localPosition);
            }
            
            // Animate particle glow
            const glowIntensity = 0.8 + Math.sin(timeRef.current * 3 + i * 0.2) * 0.2;
            
            if (particle.material instanceof THREE.MeshBasicMaterial) {
              particle.material.opacity = glowIntensity;
            }
          }
        }
      }

          // Update camera position based on scroll
          const currentZ = camera.position.z;
          const targetZ = targetCameraZRef.current;
          const lerpFactor = 0.05; // Smooth interpolation factor
          
          // Smoothly interpolate camera Z position
          camera.position.z = currentZ + (targetZ - currentZ) * lerpFactor;
          
          // Adjust X and Y to keep sphere centered as camera moves back
          // When camera moves back (Z increases), we need to adjust X and Y to maintain center view
          const zOffset = camera.position.z - 2; // Offset from initial position (2)
          const adjustmentFactor = 0.1; // How much to adjust X and Y based on Z movement
          
          camera.position.x = zOffset * adjustmentFactor;
          camera.position.y = zOffset * adjustmentFactor * 0.5; // Less Y adjustment for natural look
          
          // Render the scene
          renderer.render(scene, camera);
    }
  };

  useEffect(() => {
    // Initialize the scene
    init();

        // Resize handler
        const handleResize = () => {
          if (cameraRef.current && rendererRef.current && mountRef.current) {
            const containerRect = mountRef.current.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;
            
            cameraRef.current.aspect = containerWidth / containerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(containerWidth, containerHeight);
          }
        };

        // Scroll handler
        const handleScroll = () => {
          if (typeof window === 'undefined') return;
          const scrollY = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = Math.min(scrollY / maxScroll, 1); // 0 to 1
          
          // Calculate target camera Z position
          // Max distance: 8 units (from 2 to 8)
          const maxDistance = 6;
          targetCameraZRef.current = 2 + (scrollProgress * maxDistance);
        };

        // Add event listeners
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', handleResize);
          window.addEventListener('scroll', handleScroll);
        }

    // Start animation loop
    animate();

        // Cleanup
        return () => {
          if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
          }
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (linesRef.current) {
        linesRef.current.forEach(line => {
          if (sceneRef.current) {
            sceneRef.current.remove(line);
          }
          line.geometry.dispose();
          if (line.material instanceof THREE.Material) {
            line.material.dispose();
          }
        });
      }
      
          if (particlesRef.current) {
            particlesRef.current.forEach(particle => {
              // Particles are now children of lines, so they'll be disposed with the lines
              if (particle.geometry) {
                particle.geometry.dispose();
              }
              if (particle.material instanceof THREE.Material) {
                particle.material.dispose();
              }
            });
          }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`pointer-events-none ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        ...style 
      }}
    />
  );
}