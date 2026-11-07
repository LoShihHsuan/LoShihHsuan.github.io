"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FooterSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const { t } = useLanguage();
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

  const bannerWords = [
    "CODE",
    "AUTONOMY",
    "FLIGHT",
    "AGENTS",
    "RESEARCH",
    "INNOVATION",
  ];

  return (
    <footer id="contact" className="relative py-24 bg-gradient-to-b from-[#07080E] via-[#080A12] to-[#040508] border-t border-white/[0.08] overflow-hidden select-none">
      
      {/* 1. Large Hollow Star Outline Marquee Banner matching frame_35 of video 1 */}
      <HumanSimulatedDragSection
        agentName="Star"
        agentColor="#FF8E53"
        frameLabel="FRAME_STAR_MARQUEE"
        dragDuration={0.8}
        className="w-full mb-16"
      >
        <div className="w-full overflow-hidden py-4 border-b border-white/[0.06] opacity-30 hover:opacity-75 transition-opacity">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-tactical font-black text-2xl sm:text-4xl tracking-widest text-transparent [text-stroke:1px_rgba(255,255,255,0.4)] [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">
            {bannerWords.concat(bannerWords).map((word, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span>{word}</span>
                <span className="text-white text-xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </HumanSimulatedDragSection>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Let's Work Together (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <HumanSimulatedDragSection
              agentName="Hub"
              agentColor="#34D399"
              frameLabel="FRAME_COMMUNICATION"
              delay={0.15}
              dragDuration={0.9}
            >
              <FigmaCanvasFrame label="FRAME_COMMUNICATION" showHandles={true}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00D2FF]/40 shadow-[0_0_15px_rgba(0,210,255,0.25)] bg-[#0A0D14] shrink-0">
                      <img
                        src="/images/personal-logo-technical.png"
                        alt="Lo Shih-Hsuan Emblem"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-mono text-[10px] text-[#00D2FF] tracking-widest uppercase font-semibold">
                      {t.footer.insigniaLabel}
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-tactical font-black text-white tracking-tight uppercase leading-none">
                    {t.footer.headerTitle1} <br />
                    {t.footer.headerTitle2}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-sm pt-2">
                    {t.footer.subtitle}
                  </p>
                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

          {/* Center: Communication Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <HumanSimulatedDragSection
              agentName="Connect"
              agentColor="#38BDF8"
              frameLabel="CHANNELS_BOX"
              delay={0.3}
              dragDuration={0.85}
            >
              <FigmaCanvasFrame label="CHANNELS_BOX" showHandles={true}>
                <div className="space-y-3">
                  {/* Email */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#FF5A5F]" />
                      <div>
                        <div className="text-[10px] text-gray-500">{t.footer.channelEmail}</div>
                        <div className="text-white font-bold">{personal.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personal.email, "email")}
                      className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 transition-colors text-[10px]"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#FF8E53]" />
                      <div>
                        <div className="text-[10px] text-gray-500">{t.footer.channelPhone}</div>
                        <div className="text-white font-bold">{personal.phone}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personal.phone, "phone")}
                      className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 transition-colors text-[10px]"
                    >
                      {copiedPhone ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B39DDB]" />
                    <div>
                      <div className="text-[10px] text-gray-500">{t.footer.channelLocation}</div>
                      <div className="text-white font-bold">{t.footer.locationValue}</div>
                    </div>
                  </div>
                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

          {/* Right: Make It Feel Alive CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <HumanSimulatedDragSection
              agentName="Relay"
              agentColor="#FF5A5F"
              frameLabel="CARD_TRANSMISSION"
              delay={0.45}
              dragDuration={0.85}
            >
              <FigmaCanvasFrame label="CARD_TRANSMISSION" showHandles={true}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141F] to-[#0A0B10] border border-white/[0.08] text-center space-y-3">
                  <span className="font-mono text-[10px] text-[#FF5A5F] tracking-widest block uppercase font-semibold">
                    {t.footer.makeItTag}
                  </span>
                  <div className="text-lg font-tactical font-black text-white tracking-wider uppercase">
                    {t.footer.feelAlive}
                  </div>
                  <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                    {t.footer.actionDesc}
                  </p>

                  <div className="pt-2">
                    <a
                      href={`mailto:${personal.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-sunset text-[#08080A] text-xs font-bold tracking-wider hover:opacity-90 transition-opacity w-full justify-center shadow-lg"
                    >
                      <span>{t.footer.actionButton}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-3">
            <span>INSPIRED BY AWWWARDS EDITORIAL CANVAS</span>
            <span>•</span>
            <span>BUILT WITH NEXT.JS 14</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
