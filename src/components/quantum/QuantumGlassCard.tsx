"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface QuantumGlassCardProps {
  tag?: string;
  subTag?: string;
  glowColor?: "cyan" | "violet" | "emerald";
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}

export const QuantumGlassCard: React.FC<QuantumGlassCardProps> = ({
  tag,
  subTag,
  glowColor = "cyan",
  className,
  interactive = true,
  children,
}) => {
  const colorMap = {
    cyan: {
      accent: "#00E5FF",
      borderHover: "rgba(0, 229, 255, 0.35)",
      glow: "rgba(0, 229, 255, 0.12)",
    },
    violet: {
      accent: "#8B5CF6",
      borderHover: "rgba(139, 92, 246, 0.35)",
      glow: "rgba(139, 92, 246, 0.12)",
    },
    emerald: {
      accent: "#10B981",
      borderHover: "rgba(16, 185, 129, 0.35)",
      glow: "rgba(16, 185, 129, 0.12)",
    },
  };

  const currentTheme = colorMap[glowColor];

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden bg-[#0A0D14]/80 backdrop-blur-xl border border-white/[0.08] transition-all duration-300",
        interactive &&
          "hover:border-[var(--hover-border)] hover:shadow-[0_12px_40px_var(--glow)]",
        className
      )}
      style={
        {
          "--hover-border": currentTheme.borderHover,
          "--glow": currentTheme.glow,
        } as React.CSSProperties
      }
    >
      {/* Top Header Tag Bar (if provided) */}
      {(tag || subTag) && (
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.06] bg-white/[0.015] font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: currentTheme.accent,
                boxShadow: `0 0 6px ${currentTheme.accent}`,
              }}
            />
            <span className="font-semibold tracking-wider text-white">
              {tag}
            </span>
          </div>
          {subTag && (
            <span className="text-gray-400 font-normal tracking-wide">
              {subTag}
            </span>
          )}
        </div>
      )}

      {/* Internal Content */}
      <div className="p-6">{children}</div>
    </div>
  );
};
