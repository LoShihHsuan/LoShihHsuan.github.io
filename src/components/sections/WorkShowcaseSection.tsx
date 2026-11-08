"use client";

import React from "react";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { HumanSimulatedTypeText } from "@/components/generative/HumanSimulatedTypeText";
import { ArrowUpRight, Compass, Eye, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const WorkShowcaseSection: React.FC = () => {
  const { t } = useLanguage();
  const works = t.workShowcase.works;

  const cardAgents = [
    { name: "Flight", color: "#FF5A5F", label: "CARD_01_PX4" },
    { name: "Vision", color: "#FF8E53", label: "CARD_02_AIRPORT" },
    { name: "System", color: "#A78BFA", label: "CARD_03_RAG" },
  ];

  return (
    <section id="work" className="relative py-28 bg-gradient-to-b from-[#08080A] via-[#120E16]/90 to-[#08080A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <HumanSimulatedDragSection
          agentName="Claude"
          agentColor="#38BDF8"
          frameLabel="FRAME_WORK_THAT_MOVES"
          dragDuration={0.8}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <HumanSimulatedTypeText
                text={t.workShowcase.sectionNum}
                as="div"
                className="text-[11px] font-mono font-semibold text-[#FF5A5F] tracking-widest uppercase mb-2"
                agentName="Index"
                agentColor="#FF5A5F"
                frameLabel="WORK_NUM"
                delay={0.15}
                dragDuration={0.4}
                typingSpeed={16}
              />
              <HumanSimulatedTypeText
                text={t.workShowcase.sectionTitle}
                as="h2"
                className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase"
                agentName="Claude"
                agentColor="#38BDF8"
                frameLabel="WORK_TITLE"
                delay={0.25}
                dragDuration={0.5}
                typingSpeed={20}
              />
            </div>
          </div>
        </HumanSimulatedDragSection>

        {/* 3 Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, idx) => {
            const agent = cardAgents[idx % cardAgents.length];
            return (
              <HumanSimulatedDragSection
                key={work.id}
                agentName={agent.name}
                agentColor={agent.color}
                frameLabel={agent.label}
                delay={idx * 0.18}
                dragDuration={0.9}
                className="h-full"
              >
                <FigmaCanvasFrame
                  label={`CARD_${work.id}`}
                  showHandles={true}
                  className="h-full"
                >
                  <div className="card-studio rounded-2xl overflow-hidden p-6 flex flex-col justify-between h-full group">
                    
                    {/* Visual Area corresponding to video 1 */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0F1118] border border-white/[0.06] mb-6 flex items-center justify-center">
                      
                      {work.visualType === "sphere-arc" && (
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center group/video">
                          <video
                            src="/videos/px4-drone-flight.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                          {/* HUD Flight Overlays */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                          
                          {/* Live Flight Badge */}
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#FF5A5F]/90 text-white font-mono text-[9px] font-bold tracking-wider flex items-center gap-1 shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <HumanSimulatedTypeText
                              text="LIVE FLIGHT"
                              as="span"
                              fitContent
                              agentName="Flight"
                              agentColor="#FF5A5F"
                              frameLabel="HUD_FLIGHT"
                              delay={0.4}
                              dragDuration={0.25}
                              typingSpeed={14}
                            />
                          </div>

                          {/* Flight Telemetry Stamp */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[9px] font-mono text-gray-300">
                            <HumanSimulatedTypeText
                              text="MavSDK OFFBOARD"
                              as="span"
                              fitContent
                              agentName="SDK"
                              agentColor="#38BDF8"
                              frameLabel="HUD_OFFBOARD"
                              delay={0.5}
                              dragDuration={0.25}
                              typingSpeed={12}
                            />
                            <HumanSimulatedTypeText
                              text="TARGET-LOCK // STRIKE"
                              as="span"
                              fitContent
                              className="text-[#FF5A5F] font-bold"
                              agentName="Lock"
                              agentColor="#FF5A5F"
                              frameLabel="HUD_LOCK"
                              delay={0.6}
                              dragDuration={0.25}
                              typingSpeed={12}
                            />
                          </div>
                        </div>
                      )}

                      {work.visualType === "isometric-box" && (
                        <div className="relative w-44 h-44 flex flex-col items-center justify-center">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E2230] to-[#0A0C14] border border-[#FF8E53]/40 flex items-center justify-center transform -rotate-12 shadow-2xl">
                            <Eye className="w-10 h-10 text-[#FF8E53]" />
                          </div>
                          <HumanSimulatedTypeText
                            text="10-CV MATRIX"
                            as="span"
                            fitContent
                            className="font-mono text-[10px] text-gray-400 mt-3 tracking-widest"
                            agentName="CV"
                            agentColor="#FF8E53"
                            frameLabel="CV_MATRIX"
                            delay={0.5}
                            dragDuration={0.25}
                            typingSpeed={14}
                          />
                        </div>
                      )}

                      {work.visualType === "video-wiki" && (
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center group/video">
                          <video
                            src="/videos/llm-wiki-demo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                          {/* HUD Overlays */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                          
                          {/* Live Status Badge */}
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#A78BFA]/90 text-white font-mono text-[9px] font-bold tracking-wider flex items-center gap-1 shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <HumanSimulatedTypeText
                              text="LLM WIKI DEMO"
                              as="span"
                              fitContent
                              agentName="LLM"
                              agentColor="#A78BFA"
                              frameLabel="HUD_WIKI"
                              delay={0.4}
                              dragDuration={0.25}
                              typingSpeed={14}
                            />
                          </div>

                          {/* Telemetry Stamp */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[9px] font-mono text-gray-300">
                            <HumanSimulatedTypeText
                              text="AUTONOMOUS KNOWLEDGE VAULT"
                              as="span"
                              fitContent
                              agentName="Vault"
                              agentColor="#A78BFA"
                              frameLabel="HUD_VAULT"
                              delay={0.5}
                              dragDuration={0.25}
                              typingSpeed={12}
                            />
                            <HumanSimulatedTypeText
                              text="INSTANT Q&A"
                              as="span"
                              fitContent
                              className="text-[#A78BFA] font-bold"
                              agentName="QA"
                              agentColor="#A78BFA"
                              frameLabel="HUD_QA"
                              delay={0.6}
                              dragDuration={0.25}
                              typingSpeed={12}
                            />
                          </div>
                        </div>
                      )}

                      {/* Corner Code Tag */}
                      <span className="absolute top-3 left-3 text-[10px] font-mono text-gray-400">
                        <HumanSimulatedTypeText
                          text={work.code}
                          as="span"
                          fitContent
                          agentName="Code"
                          agentColor="#888888"
                          frameLabel={`CARD_${work.id}_CODE`}
                          delay={idx * 0.12 + 0.15}
                          dragDuration={0.25}
                          typingSpeed={14}
                        />
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="space-y-3">
                      <HumanSimulatedTypeText
                        text={work.title}
                        as="div"
                        className="text-[11px] font-mono text-[#FF5A5F] font-semibold tracking-wider"
                        agentName={agent.name}
                        agentColor={agent.color}
                        frameLabel={`CARD_${work.id}_KICKER`}
                        delay={idx * 0.12 + 0.15}
                        dragDuration={0.4}
                        typingSpeed={18}
                      />
                      <HumanSimulatedTypeText
                        text={work.subtitle}
                        as="h3"
                        className="text-lg font-tactical font-bold text-white group-hover:text-[#FF5A5F] transition-colors leading-snug"
                        agentName={agent.name}
                        agentColor={agent.color}
                        frameLabel={`CARD_${work.id}_TITLE`}
                        delay={idx * 0.12 + 0.3}
                        dragDuration={0.45}
                        typingSpeed={18}
                      />
                      <HumanSimulatedTypeText
                        text={work.description}
                        as="p"
                        className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-3"
                        agentName={agent.name}
                        agentColor={agent.color}
                        frameLabel={`CARD_${work.id}_DESC`}
                        delay={idx * 0.12 + 0.45}
                        dragDuration={0.4}
                        typingSpeed={8}
                      />

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {work.tags.map((tag, tagIdx) => (
                          <div
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-gray-300"
                          >
                            <HumanSimulatedTypeText
                              text={tag}
                              as="span"
                              fitContent
                              agentName="Tag"
                              agentColor={agent.color}
                              frameLabel={`TAG_${work.id}_${tagIdx + 1}`}
                              delay={idx * 0.12 + 0.5 + tagIdx * 0.05}
                              dragDuration={0.25}
                              typingSpeed={14}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </FigmaCanvasFrame>
              </HumanSimulatedDragSection>
            );
          })}
        </div>

        {/* Figma Timeline Slider Bar Tracker (matching frame_14 of video 1) */}
        <HumanSimulatedDragSection
          agentName="Timeline"
          agentColor="#34D399"
          frameLabel="FRAME_TIMELINE_TRACKER"
          dragDuration={0.8}
        >
          <div className="pt-6 border-t border-white/[0.08] relative select-none">
            <div className="relative h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full w-1/3 gradient-sunset rounded-full" />
            </div>
            <div className="flex items-center justify-between mt-2 font-mono text-[9px] text-gray-500">
              <HumanSimulatedTypeText
                text="DRAG TIMELINE // 01 TO 03"
                as="span"
                fitContent
                agentName="Bar"
                agentColor="#888888"
                frameLabel="TIMELINE_LEFT"
                delay={0.4}
                dragDuration={0.3}
                typingSpeed={14}
              />
              <div className="px-2 py-0.5 rounded bg-[#3B82F6] text-white font-bold">
                <HumanSimulatedTypeText
                  text="FRAME: 01_SELECTED_WORK"
                  as="span"
                  fitContent
                  agentName="Frame"
                  agentColor="#3B82F6"
                  frameLabel="TIMELINE_TAG"
                  delay={0.5}
                  dragDuration={0.3}
                  typingSpeed={14}
                />
              </div>
              <HumanSimulatedTypeText
                text="PRESS TAB OR SWIPE"
                as="span"
                fitContent
                agentName="Bar"
                agentColor="#888888"
                frameLabel="TIMELINE_RIGHT"
                delay={0.6}
                dragDuration={0.3}
                typingSpeed={14}
              />
            </div>
          </div>
        </HumanSimulatedDragSection>

      </div>
    </section>
  );
};
