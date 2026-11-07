"use client";

import React, { useState, useEffect } from "react";

export const AgentLogDrawer: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [logs, setLogs] = useState([
    { time: "00:00:2", agent: "Hub", role: "built the Hub card", color: "#FBBF24" },
    { time: "00:01:1", agent: "Claude", role: "built the Hero canvas", color: "#38BDF8" },
    { time: "00:01:4", agent: "Pixel", role: "painted the sunset gradient", color: "#34D399" },
    { time: "00:01:8", agent: "Motion", role: "orchestrated the 3D arc sphere", color: "#F472B6" },
  ]);

  useEffect(() => {
    const streamItems = [
      { agent: "Coder", role: "calibrated MavSDK sub-10ms feedback", color: "#A78BFA" },
      { agent: "Type", role: "aligned editorial typography contrast", color: "#FBBF24" },
      { agent: "Pixel", role: "rendered airport spatial digital twin", color: "#34D399" },
      { agent: "Claude", role: "verified 3x NVIDIA DLI badges", color: "#38BDF8" },
    ];

    const timer = setInterval(() => {
      setLogs((prev) => {
        const next = streamItems[Math.floor(Math.random() * streamItems.length)];
        const seconds = Math.floor(Math.random() * 5);
        const millis = Math.floor(Math.random() * 9);
        const newEntry = {
          time: `00:0${seconds}:${millis}`,
          agent: next.agent,
          role: next.role,
          color: next.color,
        };
        return [...prev.slice(1), newEntry];
      });
    }, 3600);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside
      aria-label="Agent Build Log HUD"
      className="fixed bottom-5 right-5 z-50 font-mono text-[11px] shadow-2xl transition-all duration-300"
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D12]/95 border border-white/10 text-white shadow-xl hover:border-[#FF5A5F] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5A5F] animate-pulse" />
          <span className="font-semibold text-xs tracking-wider">AGENT LOG [18 / 30]</span>
        </button>
      ) : (
        <div className="bg-[#0C0D12]/95 border border-white/10 rounded-xl p-3.5 w-80 sm:w-88 shadow-2xl text-gray-300 backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wider">
                AGENT LOG
              </span>
              <span className="text-[10px] text-gray-500 font-normal">
                BUILT 18 / 30
              </span>
            </div>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-white transition-colors text-xs px-1"
              title="縮小日誌"
            >
              ✕
            </button>
          </div>

          {/* Chronological Stream */}
          <div className="space-y-1.5 max-h-32 overflow-hidden text-[10.5px]">
            {logs.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 leading-snug">
                <span className="text-gray-500 text-[10px] shrink-0 font-mono">
                  {item.time}
                </span>
                <span
                  style={{ color: item.color }}
                  className="font-bold shrink-0 text-[10px]"
                >
                  {item.agent}
                </span>
                <span className="text-gray-300 truncate">
                  {item.role}
                </span>
              </div>
            ))}
          </div>

          {/* Skip Button */}
          <div className="mt-3 pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-full py-1.5 rounded-lg bg-black/60 hover:bg-black border border-white/10 text-white font-mono text-[10px] font-bold tracking-widest transition-colors"
            >
              SKIP
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
