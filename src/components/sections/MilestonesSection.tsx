"use client";

import React from "react";
import { FigmaCanvasFrame } from "@/components/figma/FigmaCanvasFrame";
import { HumanSimulatedDragSection } from "@/components/generative/HumanSimulatedDragSection";
import { CheckCircle2, Award, GraduationCap, Building2, Cpu, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const MilestonesSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [GraduationCap, Cpu, Building2, Layers, Award];

  const milestones = t.milestones.items.map((m, idx) => ({
    ...m,
    icon: icons[idx % icons.length],
  }));

  return (
    <section id="journey" className="relative py-28 bg-gradient-to-b from-[#08080A] via-[#0A0D16]/90 to-[#07080E] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header matching frame_32 of video 1 */}
        <HumanSimulatedDragSection
          agentName="Motion"
          agentColor="#FF5A5F"
          frameLabel="FRAME_MILESTONES"
          dragDuration={0.8}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase">
                {t.milestones.headerTitle}
              </h2>
              <p className="text-xs font-mono text-gray-500 mt-2 tracking-widest uppercase">
                {t.milestones.headerSubtitle}
              </p>
            </div>

            <div className="text-right">
              <span className="font-editorial italic text-2xl sm:text-3xl text-[#FF5A5F]">
                {t.milestones.kicker}
              </span>
            </div>
          </div>
        </HumanSimulatedDragSection>

        {/* Milestones Timeline Rows with Individual Drag Actors */}
        <div className="space-y-4">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const rowAgents = [
              { name: "Academic", color: "#818CF8", label: "ROW_NTNU_PHD" },
              { name: "Drone", color: "#FF5A5F", label: "ROW_SKY_DYNAMIC" },
              { name: "Engineer", color: "#F59E0B", label: "ROW_RUIXIN_AI" },
              { name: "Enterprise", color: "#38BDF8", label: "ROW_LEADTEK_AI" },
              { name: "Instructor", color: "#10B981", label: "ROW_NVIDIA_DLI" },
            ];
            const agent = rowAgents[idx % rowAgents.length];
            return (
              <HumanSimulatedDragSection
                key={idx}
                agentName={agent.name}
                agentColor={agent.color}
                frameLabel={agent.label}
                delay={idx * 0.15}
                dragDuration={0.8}
              >
                <FigmaCanvasFrame label={agent.label} showHandles={true}>
                  <div className="p-5 sm:p-6 rounded-2xl card-studio flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#FF5A5F] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-[#FF8E53] font-bold">
                            {m.period}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="font-tactical font-bold text-sm sm:text-base text-white">
                            {m.title}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-[#B39DDB]">
                          {m.role}
                        </div>
                        <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-2xl pt-1">
                          {m.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 md:self-center">
                      <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-gray-300">
                        {m.tag}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#FF5A5F]/10 border border-[#FF5A5F]/30 text-[9px] font-mono text-[#FF5A5F] font-bold">
                        {m.status}
                      </span>
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
