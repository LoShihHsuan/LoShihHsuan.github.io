"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#0E1220]/90 via-[#08080A]/95 to-[#08080A]">
      {/* Background Ambience: Warm Sunset Atmospheric Rim Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-sunset-glow opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Editorial Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <HumanSimulatedDragSection
              agentName="Editor"
              agentColor="#FF5A5F"
              frameLabel="HERO_STATEMENT"
              delay={0.1}
              dragDuration={1.0}
            >
              <FigmaCanvasFrame label="HERO_STATEMENT" showHandles={true}>
                <div className="space-y-4">
                  <p className="font-editorial italic text-3xl sm:text-4xl text-gray-300 tracking-wide">
                    {t.hero.kicker}
                  </p>

                  <div className="relative inline-block">
                    <h1 className="text-5xl sm:text-7xl font-tactical font-black text-white tracking-tight uppercase leading-none">
                      {personal.enName.toUpperCase()}.
                    </h1>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded bg-[#FF5A5F]/10 border border-[#FF5A5F]/20 text-[#FF5A5F] text-[11px] font-mono font-semibold tracking-wider uppercase">
                    {t.hero.roleTag}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-sm pt-1">
                    {t.hero.bioIntro} <strong className="text-white font-medium">{t.hero.bioDrone}</strong>、
                    <strong className="text-white font-medium">{t.hero.bioEdge}</strong> 與{" "}
                    <strong className="text-white font-medium">{t.hero.bioLlm}</strong>
                    {t.hero.bioEducation}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#work"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-sunset text-[#08080A] text-xs font-bold tracking-wider hover:opacity-95 transition-opacity shadow-[0_8px_24px_rgba(255,90,95,0.25)]"
                    >
                      <span>{t.hero.seeWork}</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

          {/* Center Column: Portrait in 520x520 Figma Canvas Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <HumanSimulatedDragSection
              agentName="Designer"
              agentColor="#FF8E53"
              frameLabel="PORTRAIT_FRAME"
              className="w-full max-w-[460px]"
              delay={0.35}
              dragDuration={1.1}
            >
              <FigmaCanvasFrame
                label="PORTRAIT_FRAME"
                dimensionText="520 × 520"
                showHandles={true}
                className="w-full"
              >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#14161F] to-[#0A0B0E] border border-white/[0.08] flex items-end justify-center shadow-2xl group">
                {/* Soft Sunset Backlight behind portrait */}
                <div className="absolute top-1/4 inset-x-8 bottom-4 rounded-full bg-gradient-to-t from-[#FF5A5F]/20 via-[#FF8E53]/15 to-transparent blur-3xl pointer-events-none z-10" />

                {/* Subtle Geometric Design Guides */}
                <div className="absolute inset-4 border border-dashed border-white/[0.08] rounded-xl pointer-events-none z-20" />
                <span className="absolute top-2 left-2 text-white/30 font-mono text-[9px] z-20">+</span>
                <span className="absolute top-2 right-2 text-white/30 font-mono text-[9px] z-20">+</span>
                <span className="absolute bottom-2 left-2 text-white/30 font-mono text-[9px] z-20">+</span>
                <span className="absolute bottom-2 right-2 text-white/30 font-mono text-[9px] z-20">+</span>

                {/* Real Portrait Photo */}
                <img
                  src="/images/portrait.jpg"
                  alt={`${personal.name} (${personal.enName})`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Personal AI Engineering Insignia Badge */}
                <div className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full overflow-hidden border border-[#00D2FF]/50 shadow-[0_0_20px_rgba(0,210,255,0.35)] bg-[#08080A]/85 backdrop-blur-md p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/images/personal-logo-technical.png"
                    alt="Lo Shih-Hsuan AI Insignia"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Dark Vignette Scrim for bottom name tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent z-10 pointer-events-none" />

                {/* Stylized Overlay with Name & Title */}
                <div className="relative z-20 w-full p-6 text-center">
                  <h2 className="font-tactical font-black text-xl text-white tracking-widest uppercase drop-shadow-lg">
                    {t.hero.portraitName}
                  </h2>
                  <p className="font-mono text-xs text-[#FF5A5F] mt-1 font-semibold tracking-wider drop-shadow-md">
                    {t.hero.portraitTitle}
                  </p>
                </div>
              </div>
            </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

          {/* Right Column: Key Stats & Credentials (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <HumanSimulatedDragSection
              agentName="Architect"
              agentColor="#38BDF8"
              frameLabel="METRIC_CARDS"
              delay={0.6}
              dragDuration={1.0}
            >
              <FigmaCanvasFrame label="METRIC_CARDS" showHandles={true}>
                <div className="space-y-4">
                  
                  {/* Metric 1 */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] relative">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-tactical font-black text-white">
                        {t.hero.metric1Number}
                      </span>
                      <span className="text-xs font-mono text-[#FF5A5F] font-bold">
                        {t.hero.metric1Tag}
                      </span>
                    </div>
                    <div className="text-xs font-sans text-gray-300 font-semibold mt-1">
                      {t.hero.metric1Title}
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                      {t.hero.metric1Sub}
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] relative">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-tactical font-black text-white">
                        {t.hero.metric2Title}
                      </span>
                      <span className="text-xs font-mono text-[#B39DDB] font-bold">
                        {t.hero.metric2Tag}
                      </span>
                    </div>
                    <div className="text-xs font-sans text-gray-300 font-semibold mt-1">
                      {t.hero.metric2School}
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                      {t.hero.metric2Sub}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="p-3.5 rounded-xl bg-[#0C0D12] border border-white/[0.08] flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[10.5px] font-mono text-gray-300 tracking-wider">
                      {t.hero.statusTag}
                    </span>
                  </div>

                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

        </div>
      </div>
    </section>
  );
};
