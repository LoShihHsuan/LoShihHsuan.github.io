"use client";

import React, { useState } from "react";
import { MarqueeDragGenerator } from "@/components/generative/MarqueeDragGenerator";
import { QuantumGlassCard } from "@/components/quantum/QuantumGlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Phone, Copy, Check, RotateCcw, Send, MapPin, Sparkles } from "lucide-react";

export const FooterContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const replayDragGeneration = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative py-24 bg-[#030508] border-t border-white/[0.06] font-mono overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 滾動拖拉生成包裹核心 */}
        <MarqueeDragGenerator
          label="SECURE_COMMUNICATION_CHANNELS"
          tagColor="#00E5FF"
        >
          <div className="space-y-10">
            
            {/* Center Slogan Banner */}
            <div className="p-8 sm:p-14 rounded-2xl bg-gradient-to-b from-[#0A0D14] to-[#04060A] border border-white/[0.08] text-center space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-quantum-grid bg-[size:40px_40px] opacity-25 pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#030508]/80 border border-white/[0.08] text-[11px] text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="tracking-widest">TRANSMISSION LINK: STANDBY // READY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase leading-tight">
                BUILT BY SWARMS. <br className="hidden sm:inline" />
                <span className="text-[#00E5FF]">MASTERED BY LO SHIH-HSUAN.</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed">
                透過自主智慧體蜂群即時演算構建，並由資深 AI 演算法工程師與博士研究員嚴密掌控驗證。
                歡迎前瞻 AI 落地、無人機自主飛控或跨領域邊緣運算專案諮詢與技術合作。
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={replayDragGeneration}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A0D14] hover:bg-[#121722] border border-white/[0.12] hover:border-[#00E5FF] text-white text-xs font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                >
                  <RotateCcw className="w-4 h-4 text-[#00E5FF]" />
                  <span>REPLAY DRAG GENERATION ↻</span>
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00E5FF] hover:bg-[#38EFFF] text-[#030508] text-xs font-bold tracking-wider transition-all shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)]"
                >
                  <Send className="w-4 h-4" />
                  <span>DIRECT TRANSMISSION</span>
                </a>
              </div>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Email Card */}
              <div className="p-5 rounded-xl bg-[#0A0D14]/80 backdrop-blur-md border border-white/[0.08] flex items-center justify-between hover:border-[#00E5FF]/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">PRIMARY TRANSMISSION</div>
                    <div className="text-xs font-bold text-white tracking-wide truncate max-w-[160px] sm:max-w-none">
                      {personal.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, "email")}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-gray-300 flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-xl bg-[#0A0D14]/80 backdrop-blur-md border border-white/[0.08] flex items-center justify-between hover:border-[#10B981]/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">VOICE FREQUENCY</div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      {personal.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-gray-300 flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedPhone ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-xl bg-[#0A0D14]/80 backdrop-blur-md border border-white/[0.08] flex items-center gap-3.5 hover:border-[#8B5CF6]/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">RESEARCH LOCATION</div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    {personal.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Meta & Stack Bar */}
            <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <div>
                © {new Date().getFullYear()} {personal.enName} (羅世軒). All rights reserved.
              </div>
              <div className="flex items-center gap-4 text-[10px]">
                <span>NEXT.JS 14</span>
                <span>•</span>
                <span>TYPESCRIPT</span>
                <span>•</span>
                <span>THREE.JS (R3F)</span>
                <span>•</span>
                <span>GSAP SCROLLTRIGGER</span>
                <span>•</span>
                <span>TAILWIND CSS</span>
              </div>
            </div>

          </div>
        </MarqueeDragGenerator>

      </div>
    </footer>
  );
};
