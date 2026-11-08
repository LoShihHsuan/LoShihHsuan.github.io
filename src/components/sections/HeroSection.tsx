"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { HumanSimulatedTypeText } from "@/components/generative/HumanSimulatedTypeText";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#16111C]/90 via-[#09080B]/95 to-[#08080A]">
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
                  <HumanSimulatedTypeText
                    text={t.hero.kicker}
                    as="p"
                    className="font-editorial italic text-3xl sm:text-4xl text-gray-300 tracking-wide"
                    agentName="Editor"
                    agentColor="#FF8E53"
                    frameLabel="HERO_KICKER"
                    delay={0.15}
                    dragDuration={0.45}
                    typingSpeed={20}
                  />

                  <div className="relative inline-block w-full">
                    <HumanSimulatedTypeText
                      text={`${personal.enName.toUpperCase()}.`}
                      as="h1"
                      className="text-5xl sm:text-7xl font-tactical font-black text-white tracking-tight uppercase leading-none"
                      agentName="Lead"
                      agentColor="#FF5A5F"
                      frameLabel="HERO_TITLE"
                      delay={0.25}
                      dragDuration={0.5}
                      typingSpeed={22}
                    />
                  </div>

                  <div>
                    <HumanSimulatedTypeText
                      text={t.hero.roleTag}
                      as="div"
                      className="inline-block px-2.5 py-1 rounded bg-[#FF5A5F]/10 border border-[#FF5A5F]/20 text-[#FF5A5F] text-[11px] font-mono font-semibold tracking-wider uppercase"
                      agentName="Badge"
                      agentColor="#FF5A5F"
                      frameLabel="ROLE_TAG"
                      delay={0.35}
                      dragDuration={0.4}
                      typingSpeed={16}
                    />
                  </div>

                  <HumanSimulatedTypeText
                    segments={[
                      { text: `${t.hero.bioIntro} ` },
                      { text: t.hero.bioDrone, bold: true },
                      { text: `、` },
                      { text: t.hero.bioEdge, bold: true },
                      { text: ` 與 ` },
                      { text: t.hero.bioLlm, bold: true },
                      { text: t.hero.bioEducation },
                    ]}
                    as="p"
                    className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-sm pt-1"
                    agentName="Bio"
                    agentColor="#38BDF8"
                    frameLabel="BIO_STATEMENT"
                    delay={0.45}
                    dragDuration={0.5}
                    typingSpeed={12}
                  />

                  <div className="pt-2">
                    <a
                      href="#work"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-sunset text-[#08080A] text-xs font-bold tracking-wider hover:opacity-95 transition-opacity shadow-[0_8px_24px_rgba(255,90,95,0.25)]"
                    >
                      <HumanSimulatedTypeText
                        text={t.hero.seeWork}
                        as="span"
                        fitContent
                        agentName="Action"
                        agentColor="#FF5A5F"
                        frameLabel="CTA_SEE_WORK"
                        delay={0.55}
                        dragDuration={0.3}
                        typingSpeed={16}
                      />
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

                {/* Personal AI Engineering Insignia Badge - 極簡白底高對比專屬微標 */}
                <div className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full overflow-hidden border border-white/50 shadow-[0_4px_24px_rgba(255,255,255,0.35)] bg-white p-0.5 group-hover:scale-110 transition-transform duration-300 ring-1 ring-black/10">
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
                  <HumanSimulatedTypeText
                    text={t.hero.portraitName}
                    as="h2"
                    className="font-tactical font-black text-xl text-white tracking-widest uppercase drop-shadow-lg"
                    agentName="Name"
                    agentColor="#FF5A5F"
                    frameLabel="PORTRAIT_NAME"
                    delay={0.5}
                    dragDuration={0.4}
                    typingSpeed={20}
                  />
                  <HumanSimulatedTypeText
                    text={t.hero.portraitTitle}
                    as="p"
                    className="font-mono text-xs text-[#FF5A5F] mt-1 font-semibold tracking-wider drop-shadow-md"
                    agentName="Title"
                    agentColor="#FF8E53"
                    frameLabel="PORTRAIT_TITLE"
                    delay={0.65}
                    dragDuration={0.4}
                    typingSpeed={18}
                  />
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
                      <HumanSimulatedTypeText
                        text={t.hero.metric1Number}
                        as="span"
                        fitContent
                        className="text-4xl font-tactical font-black text-white"
                        agentName="Count"
                        agentColor="#FF5A5F"
                        frameLabel="M1_COUNT"
                        delay={0.55}
                        dragDuration={0.3}
                        typingSpeed={20}
                      />
                      <HumanSimulatedTypeText
                        text={t.hero.metric1Tag}
                        as="span"
                        fitContent
                        className="text-xs font-mono text-[#FF5A5F] font-bold"
                        agentName="Tag"
                        agentColor="#FF5A5F"
                        frameLabel="M1_TAG"
                        delay={0.65}
                        dragDuration={0.3}
                        typingSpeed={15}
                      />
                    </div>
                    <HumanSimulatedTypeText
                      text={t.hero.metric1Title}
                      as="div"
                      className="text-xs font-sans text-gray-300 font-semibold mt-1"
                      agentName="Stat"
                      agentColor="#FF5A5F"
                      frameLabel="METRIC_1"
                      delay={0.7}
                      dragDuration={0.35}
                      typingSpeed={16}
                    />
                    <HumanSimulatedTypeText
                      text={t.hero.metric1Sub}
                      as="div"
                      className="text-[10px] text-gray-500 font-mono mt-0.5"
                      agentName="Sub"
                      agentColor="#888888"
                      frameLabel="M1_SUB"
                      delay={0.8}
                      dragDuration={0.35}
                      typingSpeed={14}
                    />
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] relative">
                    <div className="flex items-baseline gap-2">
                      <HumanSimulatedTypeText
                        text={t.hero.metric2Title}
                        as="span"
                        fitContent
                        className="text-3xl font-tactical font-black text-white"
                        agentName="Degree"
                        agentColor="#B39DDB"
                        frameLabel="M2_DEGREE"
                        delay={0.6}
                        dragDuration={0.3}
                        typingSpeed={20}
                      />
                      <HumanSimulatedTypeText
                        text={t.hero.metric2Tag}
                        as="span"
                        fitContent
                        className="text-xs font-mono text-[#B39DDB] font-bold"
                        agentName="Tag"
                        agentColor="#B39DDB"
                        frameLabel="M2_TAG"
                        delay={0.7}
                        dragDuration={0.3}
                        typingSpeed={15}
                      />
                    </div>
                    <HumanSimulatedTypeText
                      text={t.hero.metric2School}
                      as="div"
                      className="text-xs font-sans text-gray-300 font-semibold mt-1"
                      agentName="School"
                      agentColor="#B39DDB"
                      frameLabel="METRIC_2"
                      delay={0.75}
                      dragDuration={0.35}
                      typingSpeed={16}
                    />
                    <HumanSimulatedTypeText
                      text={t.hero.metric2Sub}
                      as="div"
                      className="text-[10px] text-gray-500 font-mono mt-0.5"
                      agentName="Sub"
                      agentColor="#888888"
                      frameLabel="M2_SUB"
                      delay={0.85}
                      dragDuration={0.35}
                      typingSpeed={14}
                    />
                  </div>

                  {/* Status Indicator */}
                  <div className="p-3.5 rounded-xl bg-[#0C0D12] border border-white/[0.08] flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <HumanSimulatedTypeText
                      text={t.hero.statusTag}
                      as="span"
                      fitContent
                      className="text-[10.5px] font-mono text-gray-300 tracking-wider"
                      agentName="Radar"
                      agentColor="#10B981"
                      frameLabel="HERO_STATUS"
                      delay={0.9}
                      dragDuration={0.4}
                      typingSpeed={14}
                    />
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
