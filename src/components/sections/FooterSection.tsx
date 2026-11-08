"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { HumanSimulatedTypeText } from "@/components/generative/HumanSimulatedTypeText";
import { Mail, MapPin, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
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
                  <HumanSimulatedTypeText
                    text={t.footer.subtitle}
                    as="p"
                    className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-sm pt-2"
                    agentName="Lead"
                    agentColor="#FF8E53"
                    frameLabel="FOOTER_SUBTITLE"
                    delay={0.4}
                    dragDuration={0.45}
                    typingSpeed={14}
                  />
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
                        <HumanSimulatedTypeText
                          text={t.footer.channelEmail}
                          as="div"
                          className="text-[10px] text-gray-500"
                          agentName="Channel"
                          agentColor="#888888"
                          frameLabel="CH_EMAIL_LABEL"
                          delay={0.3}
                          dragDuration={0.25}
                          typingSpeed={14}
                        />
                        <HumanSimulatedTypeText
                          text={personal.email}
                          as="div"
                          className="text-white font-bold"
                          agentName="Email"
                          agentColor="#FF5A5F"
                          frameLabel="CH_EMAIL_VAL"
                          delay={0.4}
                          dragDuration={0.3}
                          typingSpeed={14}
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personal.email)}
                      className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 transition-colors text-[10px]"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-xl bg-[#0C0D12] border border-white/[0.08] flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B39DDB]" />
                    <div>
                      <HumanSimulatedTypeText
                        text={t.footer.channelLocation}
                        as="div"
                        className="text-[10px] text-gray-500"
                        agentName="Channel"
                        agentColor="#888888"
                        frameLabel="CH_LOC_LABEL"
                        delay={0.45}
                        dragDuration={0.25}
                        typingSpeed={14}
                      />
                      <HumanSimulatedTypeText
                        text={t.footer.locationValue}
                        as="div"
                        className="text-white font-bold"
                        agentName="Location"
                        agentColor="#B39DDB"
                        frameLabel="CH_LOC_VAL"
                        delay={0.55}
                        dragDuration={0.3}
                        typingSpeed={14}
                      />
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
                  <HumanSimulatedTypeText
                    text={t.footer.makeItTag}
                    as="span"
                    fitContent
                    className="font-mono text-[10px] text-[#FF5A5F] tracking-widest block uppercase font-semibold"
                    agentName="Make"
                    agentColor="#FF5A5F"
                    frameLabel="CTA_MAKE_TAG"
                    delay={0.3}
                    dragDuration={0.25}
                    typingSpeed={14}
                  />
                  <HumanSimulatedTypeText
                    text={t.footer.feelAlive}
                    as="div"
                    className="text-lg font-tactical font-black text-white tracking-wider uppercase"
                    agentName="Alive"
                    agentColor="#FF5A5F"
                    frameLabel="CTA_FEEL_ALIVE"
                    delay={0.4}
                    dragDuration={0.35}
                    typingSpeed={16}
                  />
                  <HumanSimulatedTypeText
                    text={t.footer.actionDesc}
                    as="p"
                    className="text-[11px] text-gray-400 font-sans leading-relaxed"
                    agentName="Desc"
                    agentColor="#888888"
                    frameLabel="CTA_DESC"
                    delay={0.5}
                    dragDuration={0.35}
                    typingSpeed={10}
                  />

                  <div className="pt-2">
                    <a
                      href={`mailto:${personal.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-sunset text-[#08080A] text-xs font-bold tracking-wider hover:opacity-90 transition-opacity w-full justify-center shadow-lg"
                    >
                      <HumanSimulatedTypeText
                        text={t.footer.actionButton}
                        as="span"
                        fitContent
                        agentName="Action"
                        agentColor="#08080A"
                        frameLabel="CTA_BTN_TXT"
                        delay={0.6}
                        dragDuration={0.25}
                        typingSpeed={14}
                      />
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
              text="INSPIRED BY AWWWARDS EDITORIAL CANVAS • BUILT WITH NEXT.JS 14"
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
