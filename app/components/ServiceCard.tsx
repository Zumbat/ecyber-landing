'use client';

import { useState, useRef } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({ title, description, className = '' }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 10; // Divide by 10 for subtle movement
    const deltaY = (e.clientY - centerY) / 10;
    
    // Limit movement to max 3px
    const limitedX = Math.max(-3, Math.min(3, deltaX));
    const limitedY = Math.max(-3, Math.min(3, deltaY));
    
    setMousePosition({ x: limitedX, y: limitedY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative p-6 rounded-xl border border-[#3C3C3C] bg-transparent text-[#E8E8E8]
        transition-all duration-300 ease-out cursor-pointer 
        hover:bg-[#3C3C3C10] hover:shadow-sm
        ${className}
      `}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        boxShadow: isHovered ? '0 2px 10px rgba(44, 44, 44, 0.15)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-bold mb-4 text-[#E8E8E8]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
