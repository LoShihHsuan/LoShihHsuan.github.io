"use client";

import React from "react";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { HumanSimulatedTypeText } from "@/components/generative/HumanSimulatedTypeText";
import { Layers, Cpu, Database, Network, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SoftwarePlatformsSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, typeof Database> = {
    aidms: Database,
    mavsdk: Cpu,
    airport: Layers,
    wiki: Network,
  };

  const platforms = t.platforms.items.map((item) => ({
    ...item,
    icon: iconMap[item.id] || Database,
  }));

  return (
    <section id="platforms" className="relative py-28 bg-gradient-to-b from-[#08080A] via-[#140F19]/90 to-[#08080A] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <HumanSimulatedDragSection
          agentName="Code"
          agentColor="#A78BFA"
          frameLabel="FRAME_SOFTWARE_MATRIX"
          dragDuration={0.8}
        >
          <div className="flex items-baseline gap-2 flex-wrap">
            <HumanSimulatedTypeText
              text={t.platforms.headerTitle1}
              as="h2"
              className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase"
              agentName="Code"
              agentColor="#A78BFA"
              frameLabel="PLATFORMS_TITLE_1"
              delay={0.15}
              dragDuration={0.45}
              typingSpeed={20}
            />
            <HumanSimulatedTypeText
              text={t.platforms.headerTitle2}
              as="span"
              className="font-editorial italic text-3xl sm:text-5xl text-[#FF8E53]"
              agentName="Accent"
              agentColor="#FF8E53"
              frameLabel="PLATFORMS_TITLE_2"
              delay={0.3}
              dragDuration={0.45}
              typingSpeed={20}
            />
          </div>
          <HumanSimulatedTypeText
            text={t.platforms.headerSubtitle}
            as="p"
            className="text-xs font-mono text-gray-400 mt-2 tracking-widest uppercase"
            agentName="Sub"
            agentColor="#38BDF8"
            frameLabel="PLATFORMS_SUB"
            delay={0.4}
            dragDuration={0.4}
            typingSpeed={16}
          />
        </HumanSimulatedDragSection>

        {/* 4 Cards Grid matching video 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((item, idx) => {
            const Icon = item.icon;
            const cardAgents = ["Deploy", "Pilot", "Sensor", "Graph"];
            return (
              <HumanSimulatedDragSection
                key={item.id}
                agentName={cardAgents[idx % cardAgents.length]}
                agentColor={item.color}
                frameLabel={`CARD_${item.id.toUpperCase()}`}
                delay={idx * 0.15}
                dragDuration={0.85}
                className="h-full"
              >
                <FigmaCanvasFrame
                  label={item.id.toUpperCase()}
                  showHandles={true}
                  className="h-full"
                >
                  <div className="card-studio rounded-2xl p-6 flex flex-col justify-between h-full group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border"
                          style={{
                            backgroundColor: `${item.color}15`,
                            borderColor: `${item.color}40`,
                            color: item.color,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400">
                          <HumanSimulatedTypeText
                            text={item.badge}
                            as="span"
                            fitContent
                            agentName="Badge"
                            agentColor={item.color}
                            frameLabel={`CARD_${item.id.toUpperCase()}_BADGE`}
                            delay={idx * 0.12 + 0.1}
                            dragDuration={0.25}
                            typingSpeed={14}
                          />
                        </div>
                      </div>

                      <div>
                        <HumanSimulatedTypeText
                          text={item.name}
                          as="h3"
                          className="font-tactical font-bold text-base text-white group-hover:text-[#FF5A5F] transition-colors"
                          agentName={cardAgents[idx % cardAgents.length]}
                          agentColor={item.color}
                          frameLabel={`CARD_${item.id.toUpperCase()}_TITLE`}
                          delay={idx * 0.12 + 0.15}
                          dragDuration={0.4}
                          typingSpeed={18}
                        />
                        <HumanSimulatedTypeText
                          text={item.tagline}
                          as="p"
                          className="font-mono text-xs text-[#FF8E53] mt-1"
                          agentName={cardAgents[idx % cardAgents.length]}
                          agentColor="#FF8E53"
                          frameLabel={`CARD_${item.id.toUpperCase()}_TAG`}
                          delay={idx * 0.12 + 0.3}
                          dragDuration={0.4}
                          typingSpeed={16}
                        />
                      </div>

                      <HumanSimulatedTypeText
                        text={item.desc}
                        as="p"
                        className="text-xs text-gray-400 font-sans leading-relaxed"
                        agentName={cardAgents[idx % cardAgents.length]}
                        agentColor={item.color}
                        frameLabel={`CARD_${item.id.toUpperCase()}_DESC`}
                        delay={idx * 0.12 + 0.45}
                        dragDuration={0.4}
                        typingSpeed={8}
                      />
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-gray-400">
                      <HumanSimulatedTypeText
                        text="PRODUCTION READY"
                        as="span"
                        fitContent
                        agentName="Status"
                        agentColor="#10B981"
                        frameLabel={`CARD_${item.id.toUpperCase()}_STATUS`}
                        delay={idx * 0.12 + 0.55}
                        dragDuration={0.25}
                        typingSpeed={14}
                      />
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </FigmaCanvasFrame>
              </HumanSimulatedDragSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
