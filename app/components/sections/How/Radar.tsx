"use client";
import { useEffect, useRef, useState } from "react";

const Radar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas
    canvas.width = 500;
    canvas.height = 500;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    let angle = 0;

    // Colore brand
    const COLOR = "#2d8c80";
    const COLOR_RGBA_STRONG = "rgba(45,140,128,0.9)";
    const COLOR_RGBA_MED = "rgba(45,140,128,0.4)";
    const COLOR_RGBA_SOFT = "rgba(45,140,128,0.25)";

    // PUNTI: 25% in meno -> 19 (entro cerchio)
    const points = Array.from({ length: 19 }, () => {
      const t = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * (radius * 0.95);
      return {
        x: centerX + r * Math.cos(t),
        y: centerY + r * Math.sin(t),
      };
    });

    const drawRadar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sfondo
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cerchio esterno + leggero glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = COLOR;
      ctx.shadowBlur = 10;
      ctx.shadowColor = COLOR_RGBA_SOFT;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Cerchi concentrici (più scuri)
      ctx.setLineDash([3, 6]);
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 4) * i, 0, Math.PI * 2);
        ctx.strokeStyle = COLOR_RGBA_MED; // scuriti
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Linee radiali (più scure)
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + radius * Math.cos((i * Math.PI) / 4),
          centerY + radius * Math.sin((i * Math.PI) / 4)
        );
        ctx.strokeStyle = COLOR_RGBA_MED; // scurite
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // CLIP: tutto entro il cerchio
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      // Fascio (50°) con colore #3c3c3c
      const beamAngle = (50 * Math.PI) / 180;
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0, centerX, centerY, radius
      );
      gradient.addColorStop(0, "rgba(45,140,128,0.35)");
      gradient.addColorStop(1, "rgba(45,140,128,0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + beamAngle);
      ctx.closePath();
      ctx.fill();

      // (RIMOSSA) linea bisettrice del fascio

      // Punti
      const twoPI = Math.PI * 2;
      const endAngle = (angle + beamAngle) % twoPI;
      const isInBeam = (a: number) => {
        if (angle <= endAngle) return a >= angle && a <= endAngle;
        return a >= angle || a <= endAngle;
      };

      points.forEach((p) => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const pointAngle = Math.atan2(dy, dx);
        const normalized = pointAngle >= 0 ? pointAngle : twoPI + pointAngle;
        const inBeam = isInBeam(normalized);

        ctx.beginPath();
        ctx.arc(p.x, p.y, inBeam ? 6 : 3, 0, twoPI);

        if (inBeam) {
          ctx.fillStyle = COLOR_RGBA_STRONG;
          ctx.shadowBlur = 10;
          ctx.shadowColor = COLOR_RGBA_STRONG;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = COLOR_RGBA_SOFT;
          ctx.fill();
        }
      });

      // Fine clip
      ctx.restore();

      // Punto centrale
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fillStyle = COLOR;
      ctx.shadowBlur = 10;
      ctx.shadowColor = COLOR_RGBA_SOFT;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Animazione (già rallentata del 50% nella versione precedente)
      angle += 0.005;
      if (angle > twoPI) angle -= twoPI;

      requestAnimationFrame(drawRadar);
    };

    drawRadar();
  }, [isInView]);

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      {isInView && <canvas ref={canvasRef} className="rounded-full shadow-lg" />}
    </div>
  );
};

export default Radar;
