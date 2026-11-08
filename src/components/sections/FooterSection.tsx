"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { HumanSimulatedTypeText } from "@/components/generative/HumanSimulatedTypeText";
import { Mail, MapPin, Copy, Check, ArrowUpRight, Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FooterSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
    <footer id="contact" className="relative py-24 bg-gradient-to-b from-[#0C0810] via-[#0F0A14] to-[#070509] border-t border-white/[0.08] overflow-hidden select-none">
      
      {/* 1. Large Hollow Star Outline Marquee Banner */}
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
                <HumanSimulatedTypeText
                  text={word}
                  as="span"
                  fitContent
                  agentName="Star"
                  agentColor="#FF8E53"
                  frameLabel={`BANNER_WORD_${idx + 1}`}
                  delay={0.1}
                  dragDuration={0.2}
                  typingSpeed={20}
                />
                <span className="text-white text-xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </HumanSimulatedDragSection>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Editorial Headline & Status (5 cols) */}
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
                  {/* Emblem Insignia */}
                  <div className="flex items-center gap-3 pb-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/40 shadow-[0_4px_20px_rgba(255,255,255,0.25)] bg-white shrink-0 ring-1 ring-black/10">
                      <img
                        src="/images/personal-logo-technical.png"
                        alt="Lo Shih-Hsuan Emblem"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <HumanSimulatedTypeText
                      text={t.footer.insigniaLabel}
                      as="span"
                      fitContent
                      className="font-mono text-[10px] text-[#00D2FF] tracking-widest uppercase font-semibold"
                      agentName="Badge"
                      agentColor="#00D2FF"
                      frameLabel="FOOTER_INSIGNIA"
                      delay={0.15}
                      dragDuration={0.3}
                      typingSpeed={14}
                    />
                  </div>

                  {/* Header Title */}
                  <div className="text-4xl sm:text-6xl font-tactical font-black text-white tracking-tight uppercase leading-none">
                    <HumanSimulatedTypeText
                      text={t.footer.headerTitle1}
                      as="h2"
                      agentName="Letter"
                      agentColor="#34D399"
                      frameLabel="FOOTER_TITLE_1"
                      delay={0.15}
                      dragDuration={0.45}
                      typingSpeed={20}
                    />
                    <div className="h-1 sm:h-2" />
                    <HumanSimulatedTypeText
                      text={t.footer.headerTitle2}
                      as="div"
                      agentName="Letter"
                      agentColor="#38BDF8"
                      frameLabel="FOOTER_TITLE_2"
                      delay={0.3}
                      dragDuration={0.45}
                      typingSpeed={20}
                    />
                  </div>

                  {/* Subtitle Description */}
                  <HumanSimulatedTypeText
                    text={t.footer.subtitle}
                    as="p"
                    className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-md pt-2"
                    agentName="Lead"
                    agentColor="#FF8E53"
                    frameLabel="FOOTER_SUBTITLE"
                    delay={0.4}
                    dragDuration={0.45}
                    typingSpeed={14}
                  />

                  {/* Real-time Status Badge with Emerald Pulsing Beacon */}
                  <div className="pt-2">
                    <div className="p-3.5 rounded-xl bg-[#0E121B] border border-[#10B981]/25 flex items-start gap-3 shadow-[0_4px_16px_rgba(16,185,129,0.08)]">
                      <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                      </span>
                      <div className="space-y-0.5">
                        <HumanSimulatedTypeText
                          text={t.footer.statusTag}
                          as="div"
                          className="text-[9px] font-mono tracking-widest text-[#10B981] uppercase font-bold"
                          agentName="Status"
                          agentColor="#10B981"
                          frameLabel="FOOTER_STATUS_TAG"
                          delay={0.45}
                          dragDuration={0.25}
                          typingSpeed={14}
                        />
                        <HumanSimulatedTypeText
                          text={t.footer.statusText}
                          as="div"
                          className="text-[11px] text-gray-300 font-sans leading-snug"
                          agentName="Status"
                          agentColor="#10B981"
                          frameLabel="FOOTER_STATUS_VAL"
                          delay={0.5}
                          dragDuration={0.3}
                          typingSpeed={12}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </FigmaCanvasFrame>
            </HumanSimulatedDragSection>
          </div>

          {/* Right Column: Redesigned Contact Hub & Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <HumanSimulatedDragSection
              agentName="Connect"
              agentColor="#38BDF8"
              frameLabel="FRAME_CONTACT_MATRIX"
              delay={0.25}
              dragDuration={0.9}
            >
              <FigmaCanvasFrame label="FRAME_CONTACT_MATRIX" showHandles={true}>
                <div className="space-y-4">

                  {/* 1. Primary Direct Email Card with Dual Actions */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#12141F] to-[#0A0D14] border border-white/[0.09] shadow-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#FF5A5F]">
                        <Mail className="w-4 h-4" />
                        <HumanSimulatedTypeText
                          text={t.footer.channelEmailTitle}
                          as="span"
                          className="tracking-wider uppercase font-semibold text-[11px]"
                          agentName="Email"
                          agentColor="#FF5A5F"
                          frameLabel="CH_EMAIL_TITLE"
                          delay={0.2}
                          dragDuration={0.25}
                          typingSpeed={14}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.06]">
                        DIRECT LINE
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                      <HumanSimulatedTypeText
                        text={personal.email}
                        as="span"
                        fitContent
                        className="text-base sm:text-lg font-mono font-bold text-white tracking-wide"
                        agentName="Email"
                        agentColor="#FF5A5F"
                        frameLabel="CH_EMAIL_VAL"
                        delay={0.3}
                        dragDuration={0.3}
                        typingSpeed={16}
                      />
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => copyToClipboard(personal.email)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-200 transition-colors text-xs font-mono font-medium border border-white/[0.08]"
                          title="Copy Email"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedEmail ? t.footer.copied : t.footer.copyEmailBtn}</span>
                        </button>
                        <a
                          href={`mailto:${personal.email}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg gradient-sunset text-[#08080A] text-xs font-mono font-bold hover:opacity-90 transition-opacity shadow-[0_2px_12px_rgba(255,90,95,0.25)]"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{t.footer.sendEmailBtn}</span>
                        </a>
                      </div>
                    </div>

                    <HumanSimulatedTypeText
                      text={t.footer.channelEmailDesc}
                      as="p"
                      className="text-[11px] text-gray-400 font-sans leading-relaxed pt-1"
                      agentName="Email"
                      agentColor="#888888"
                      frameLabel="CH_EMAIL_DESC"
                      delay={0.4}
                      dragDuration={0.3}
                      typingSpeed={12}
                    />
                  </div>

                  {/* 2. Academic Lab & Location */}
                  <div className="p-4 rounded-xl bg-[#0C0D14] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#B39DDB] mt-0.5 shrink-0" />
                      <div className="space-y-0.5">
                        <HumanSimulatedTypeText
                          text={t.footer.channelLocationTitle}
                          as="div"
                          className="text-[10px] font-mono text-gray-500 uppercase tracking-wider"
                          agentName="Channel"
                          agentColor="#888888"
                          frameLabel="CH_LOC_TITLE"
                          delay={0.35}
                          dragDuration={0.25}
                          typingSpeed={14}
                        />
                        <HumanSimulatedTypeText
                          text={t.footer.channelLocationLab}
                          as="div"
                          className="text-xs sm:text-sm text-white font-bold font-sans"
                          agentName="Location"
                          agentColor="#B39DDB"
                          frameLabel="CH_LOC_VAL"
                          delay={0.45}
                          dragDuration={0.3}
                          typingSpeed={14}
                        />
                        <div className="text-[11px] text-gray-400 font-sans flex items-center gap-2">
                          <span>{t.footer.channelLocationCity}</span>
                          <span className="text-gray-600">•</span>
                          <span className="font-mono text-[10px] text-gray-500">{t.footer.channelLocationMeta}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#B39DDB] bg-[#B39DDB]/10 px-2.5 py-1 rounded-full self-start sm:self-center shrink-0 border border-[#B39DDB]/20">
                      TAIPEI / TAOYUAN
                    </span>
                  </div>

                  {/* 3. Collaboration Scope Matrix */}
                  <div className="p-4 rounded-xl bg-[#0C0D14] border border-white/[0.08] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <HumanSimulatedTypeText
                        text={t.footer.scopeTitle}
                        as="span"
                        fitContent
                        className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold"
                        agentName="Scope"
                        agentColor="#38BDF8"
                        frameLabel="CH_SCOPE_TITLE"
                        delay={0.4}
                        dragDuration={0.25}
                        typingSpeed={14}
                      />
                      <span className="text-[10px] font-mono text-[#10B981] flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AVAILABLE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                      {t.footer.scopeItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.06] transition-colors"
                        >
                          <HumanSimulatedTypeText
                            text={item}
                            as="span"
                            className="text-xs font-sans text-gray-200 block"
                            agentName="ScopeItem"
                            agentColor="#FF8E53"
                            frameLabel={`SCOPE_ITEM_${idx + 1}`}
                            delay={0.45 + idx * 0.06}
                            dragDuration={0.25}
                            typingSpeed={14}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Direct Fast Transmission Button */}
                  <div className="pt-1">
                    <a
                      href={`mailto:${personal.email}`}
                      className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-xl gradient-sunset text-[#08080A] text-xs sm:text-sm font-bold tracking-wider hover:opacity-95 transition-opacity w-full shadow-[0_6px_20px_rgba(255,90,95,0.25)]"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <HumanSimulatedTypeText
                          text={t.footer.quickActionBtn}
                          as="span"
                          fitContent
                          agentName="Action"
                          agentColor="#08080A"
                          frameLabel="FOOTER_ACTION_BTN"
                          delay={0.55}
                          dragDuration={0.25}
                          typingSpeed={14}
                        />
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
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
            <HumanSimulatedTypeText
              text={t.footer.copyright}
              as="div"
              agentName="Copy"
              agentColor="#888888"
              frameLabel="FOOTER_COPYRIGHT"
              delay={0.5}
              dragDuration={0.3}
              typingSpeed={12}
            />
          </div>
          <div className="flex items-center gap-3">
            <HumanSimulatedTypeText
              text={t.footer.bottomTag}
              as="div"
              agentName="Tech"
              agentColor="#888888"
              frameLabel="FOOTER_TECH_TAG"
              delay={0.6}
              dragDuration={0.3}
              typingSpeed={12}
            />
          </div>
        </div>

      </div>
    </footer>
  );
};
