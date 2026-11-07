"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FigmaCanvasFrameProps {
  label?: string;
  dimensionText?: string;
  showHandles?: boolean;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FigmaCanvasFrame: React.FC<FigmaCanvasFrameProps> = ({
  label,
  dimensionText,
  showHandles = true,
  active = true,
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          w: Math.round(entry.contentRect.width),
          h: Math.round(entry.contentRect.height),
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const currentDimText = dimensionText || `${size.w} × ${size.h}`;

  return (
    <div
      ref={containerRef}
      className={cn("relative group transition-all duration-300", className)}
    >
      {active && (
        <div
          className="absolute -inset-1.5 pointer-events-none z-20 border border-transparent group-hover:border-[#3B82F6]/60 transition-colors duration-200"
          aria-hidden="true"
        >
          {showHandles && (
            <>
              {/* Corner Figma Resize Anchor Nodes */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#3B82F6] rounded-sm shadow-sm" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#3B82F6] rounded-sm shadow-sm" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#3B82F6] rounded-sm shadow-sm" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#3B82F6] rounded-sm shadow-sm" />

              {/* Edge Midpoint Nodes */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white border border-[#3B82F6] rounded-sm" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white border border-[#3B82F6] rounded-sm" />

              {/* Corner coordinate crosshairs */}
              <span className="absolute -top-3 -left-3 text-[#3B82F6]/50 font-mono text-[10px] leading-none select-none">
                +
              </span>
              <span className="absolute -bottom-3 -right-3 text-[#3B82F6]/50 font-mono text-[10px] leading-none select-none">
                +
              </span>
            </>
          )}
        </div>
      )}

      {/* Internal Content */}
      {children}
    </div>
  );
};
