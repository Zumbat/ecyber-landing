"use client";
import React, { useState } from "react";
import { Button } from "./moving-border";
import { cn } from "../../lib/utils";

interface HoverMovingBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  duration?: number;
  onClick?: () => void;
}

export default function HoverMovingBorderButton({
  children,
  className,
  borderRadius = "0.75rem",
  duration = 2000,
  onClick,
  ...props
}: HoverMovingBorderButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block"
    >
      {isHovered ? (
        <Button
          borderRadius={borderRadius}
          duration={duration}
          className={cn(
            "border-[#E8E8E8] text-[#E8E8E8] hover:border-none hover:bg-[#333333] hover:text-[#e8e8e8] font-semibold py-2 px-4 text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E8E8E8]/25",
            className
          )}
          innerClassName="bg-transparent border-[#E8E8E8] text-[#E8E8E8] hover:bg-[#333333] hover:text-[#e8e8e8] font-semibold py-2 px-4 text-sm"
          onClick={onClick}
          {...props}
        >
          {children}
        </Button>
      ) : (
        <button
          className={cn(
            "border border-[#E8E8E8] text-[#E8E8E8] hover:bg-[#333333] hover:text-[#e8e8e8] font-semibold py-2 px-4 rounded-xl text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E8E8E8]/25",
            className
          )}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      )}
    </div>
  );
}

