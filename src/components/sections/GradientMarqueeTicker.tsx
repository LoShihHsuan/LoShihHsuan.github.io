"use client";

import React from "react";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";

export const GradientMarqueeTicker: React.FC = () => {
  const items = [
    "DATA ENGINEERING",
    "PX4 AUTONOMOUS FLIGHT",
    "3D & WEBGL",
    "NVIDIA JETSON EDGE AI",
    "SCROLL FILMS",
    "AI AGENTS & SWARMS",
    "SPATIAL COMPUTER VISION",
    "MOTION DESIGN",
    "LLM RAG COGNITION",
    "CREATIVE TECHNOLOGY",
    "3X NVIDIA DLI INSTRUCTOR",
    "MAVSDK SUB-10MS FEEDBACK",
  ];

  return (
    <HumanSimulatedDragSection
      agentName="Pixel"
      agentColor="#FF8E53"
      frameLabel="FRAME_MARQUEE_STRIP"
      dragDuration={0.8}
      className="relative z-20"
    >
      <div
        aria-label="Expertise Marquee Ticker"
        className="relative w-full overflow-hidden py-3.5 gradient-sunset shadow-lg select-none"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-sans font-black text-xs sm:text-sm tracking-wider text-[#08080A]">
          {items.concat(items).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="uppercase">{item}</span>
              <span className="text-[#08080A]/60 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>
    </HumanSimulatedDragSection>
  );
};
