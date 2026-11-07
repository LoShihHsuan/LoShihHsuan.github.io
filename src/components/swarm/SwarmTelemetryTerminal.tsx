"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const SwarmTelemetryTerminal: React.FC = () => {
  const agents = PORTFOLIO_DATA.swarmAgents;
  const [logs, setLogs] = useState(agents.slice(0, 3));
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => {
        const nextIdx = Math.floor(Math.random() * agents.length);
        const nextAgent = agents[nextIdx];
        const newEntry = {
          ...nextAgent,
          log: `${nextAgent.log} [${new Date().toLocaleTimeString("zh-TW", {
            hour12: false,
          })}]`,
        };
        return [...prev.slice(1), newEntry];
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [agents]);

  return (
    <aside
      aria-label="Quantum Swarm Telemetry Log"
      className="fixed bottom-4 right-4 z-50 font-mono text-[11px] shadow-2xl backdrop-blur-xl transition-all duration-300"
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0D14]/90 border border-[#00E5FF]/40 text-[#00E5FF] hover:border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
          title="展開蜂群遙測終端"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="font-semibold text-xs tracking-wider">SWARM LOG [ONLINE]</span>
        </button>
      ) : (
        <div className="bg-[#0A0D14]/95 border border-white/[0.08] rounded-xl p-3.5 w-84 sm:w-96 shadow-[0_12px_40px_rgba(0,0,0,0.8)] text-gray-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]" />
              </span>
              <span className="text-xs text-[#00E5FF] font-bold tracking-wider">
                QUANTUM SWARM TELEMETRY
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray-400">
              <span className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-[#00E5FF]">
                5 AGENTS
              </span>
              <button
                onClick={() => setIsMinimized(true)}
                className="hover:text-white transition-colors px-1"
                title="最小化"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Log Stream */}
          <div className="space-y-1.5 max-h-36 overflow-hidden font-mono">
            {logs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 leading-snug">
                <span
                  style={{ color: item.color }}
                  className="font-bold shrink-0 text-[10px]"
                >
                  [{item.name}]
                </span>
                <span className="text-gray-300 truncate text-[10.5px]">
                  {item.log}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Status */}
          <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex justify-between items-center text-[9px] text-gray-400">
            <span>HITL ARCHITECT: LO SHIH-HSUAN</span>
            <span className="text-[#00E5FF] font-medium">ORCHESTRATION 100%</span>
          </div>
        </div>
      )}
    </aside>
  );
};
