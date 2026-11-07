"use client";

import React from "react";
import { QuantumGlassCard } from "@/components/quantum/QuantumGlassCard";

interface TacticalHudBoxProps {
  tag?: string;
  confidence?: number;
  coordinates?: string;
  active?: boolean;
  className?: string;
  badgeColor?: string;
  children: React.ReactNode;
}

/**
 * TacticalHudBox is refactored to align with the Futuristic Sci-Fi & Quantum Glass design system.
 * Removes gaming FPS reticles and military crosshairs.
 */
export const TacticalHudBox: React.FC<TacticalHudBoxProps> = ({
  tag = "QUANTUM_NODE",
  confidence,
  coordinates,
  className,
  children,
}) => {
  const subText =
    confidence !== undefined
      ? `${Math.round(confidence * 100)}% // ${coordinates || "ACTIVE"}`
      : coordinates;

  return (
    <QuantumGlassCard
      tag={tag}
      subTag={subText}
      glowColor="cyan"
      className={className}
    >
      {children}
    </QuantumGlassCard>
  );
};
