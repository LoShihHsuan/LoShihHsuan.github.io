"use client";

import React, { useState } from "react";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { Sparkles, Quote, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const BentoExperienceSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const { t } = useLanguage();

  const capabilities = t.bento.capabilities;

  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-[#08080A] via-[#090C16]/90 to-[#08080A] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <HumanSimulatedDragSection
          agentName="Type"
          agentColor="#FBBF24"
          frameLabel="FRAME_EXPERIENCE"
          dragDuration={0.8}
        >
          <div className="flex items-baseline gap-3">
            <h2 className="text-4xl sm:text-6xl font-tactical font-black text-white tracking-tight uppercase">
              {t.bento.headerTitle1}
            </h2>
            <span className="font-editorial italic text-4xl sm:text-6xl text-[#FF5A5F]">
              {t.bento.headerTitle2}
            </span>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 tracking-widest uppercase">
            {t.bento.headerSubtitle}
          </p>
        </HumanSimulatedDragSection>

        {/* 2-Column Bento Layout as in video 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Roles & Skills Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <HumanSimulatedDragSection
              agentName="Structure"
              agentColor="#38BDF8"
              frameLabel="ROLES_AND_CAPABILITIES"
              delay={0.15}
              dragDuration={0.95}
            >
              <FigmaCanvasFrame label="ROLES_AND_CAPABILITIES" showHandles={true}>
                <div className="space-y-3">
                  {capabilities.map((cap, idx) => {
                    const isExpanded = activeSkill === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveSkill(idx)}
                        className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isExpanded
                            ? "bg-[#0E1017] border-[#FF5A5F]/50 shadow-lg"
                            : "bg-[#0C0D12] border-white/[0.06] hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-tactical font-bold text-sm text-white flex items-center gap-2">
                            <span className="text-[#FF5A5F] text-xs font-mono">
                              0{idx + 1}
                            </span>
                            {cap.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400">
                            {cap.meta}
                          </span>
                        </div>

                        <p
                          className={`text-xs text-gray-400 font-sans leading-relaxed pt-2 transition-all duration-300 ${
                            isExpanded ? "block" : "hidden sm:line-clamp-1"
                          }`}
                        >
                          {cap.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

          {/* Right Column: Isometric Asset & Testimonial Quote Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quote Card (matching frame_18 of video 1) */}
            <HumanSimulatedDragSection
              agentName="Quote"
              agentColor="#FF5A5F"
              frameLabel="FRAME_TESTIMONIAL_CARD"
              delay={0.3}
              dragDuration={0.9}
            >
              <FigmaCanvasFrame label="TESTIMONIAL_CARD" showHandles={true}>
                <div className="p-7 rounded-2xl bg-gradient-to-br from-[#12141F] to-[#0A0B10] border border-white/[0.08] relative overflow-hidden shadow-2xl">
                  <Quote className="w-8 h-8 text-[#FF5A5F]/40 mb-4" />
                  <p className="font-editorial italic text-xl sm:text-2xl text-gray-200 leading-relaxed">
                    &ldquo;{t.bento.quoteText}&rdquo;
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
                    <div>
                      <div className="font-bold text-white tracking-wider">
                        {t.bento.quoteAuthor}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        AI ALGORITHM ARCHITECT // NTNU PH.D.
                      </div>
                    </div>
                    <span className="text-[10px] text-[#FF5A5F] font-bold">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>

            {/* NVIDIA DLI Accredited Instructor Certificate Card */}
            <HumanSimulatedDragSection
              agentName="Instructor"
              agentColor="#10B981"
              frameLabel="FRAME_DLI_CERTIFICATE"
              delay={0.45}
              dragDuration={0.85}
            >
              <FigmaCanvasFrame label="DLI_CERTIFICATE" showHandles={true}>
                <div className="rounded-2xl bg-[#0C0D12] border border-white/[0.08] overflow-hidden group">
                  {/* Certificate Image Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                    <img
                      src="/images/dli-cert.jpg"
                      alt={t.bento.certTitle}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12] via-transparent to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Official Badge Pill */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#10B981]/90 text-white font-mono text-[9px] font-bold tracking-wider shadow-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>NVIDIA DLI CERTIFIED</span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-5 pt-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#10B981] uppercase tracking-widest font-semibold">
                        {t.bento.certTag}
                      </div>
                      <div className="font-tactical font-bold text-base text-white mt-0.5">
                        {t.bento.certTitle}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 font-sans">
                        {t.bento.certDesc}
                      </div>
                    </div>

                    <a
                      href="/images/dli-cert.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors flex items-center gap-1 text-[10px] font-mono"
                      title="檢視證書原件"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
                    </a>
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
