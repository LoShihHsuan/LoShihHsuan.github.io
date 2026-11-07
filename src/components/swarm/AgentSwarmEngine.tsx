"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const AgentSwarmEngine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const agents = PORTFOLIO_DATA.swarmAgents;

  useEffect(() => {
    if (!containerRef.current) return;

    // 為每位 Agent 賦予仿生隨機巡弋與蜂群協同運動
    const ctx = gsap.context(() => {
      agents.forEach((agent, idx) => {
        const el = document.getElementById(`agent-cursor-${agent.id}`);
        if (!el) return;

        // 計算初始分布位置
        const offsetX = (idx % 3) * 320 + 80;
        const offsetY = Math.floor(idx / 3) * 220 + 120;
        gsap.set(el, { x: offsetX, y: offsetY });

        // 平滑貝茲曲線蜂群漫遊
        gsap.to(el, {
          x: `+=${(idx % 2 === 0 ? 1 : -1) * 160}`,
          y: `+=${(idx % 2 === 0 ? -1 : 1) * 110}`,
          duration: 3 + idx * 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [agents]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
      aria-hidden="true"
    >
      {agents.map((agent) => (
        <div
          key={agent.id}
          id={`agent-cursor-${agent.id}`}
          className="absolute flex items-center gap-1.5 will-change-transform opacity-90 transition-opacity hover:opacity-100"
        >
          {/* 游標指針箭頭 (SVG) */}
          <svg
            className="w-4 h-4 drop-shadow-[0_0_10px_currentColor] -rotate-12"
            style={{ color: agent.color }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 0l16 12-7 2-3 8z" />
          </svg>

          {/* Agent 彩色名牌標籤 */}
          <div
            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight text-black shadow-lg backdrop-blur-md"
            style={{ backgroundColor: agent.color }}
          >
            <span>{agent.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/40 animate-ping" />
          </div>
        </div>
      ))}
    </div>
  );
};
