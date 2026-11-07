"use client";

import React from "react";
import { MarqueeDragGenerator } from "@/components/generative/MarqueeDragGenerator";
import { QuantumGlassCard } from "@/components/quantum/QuantumGlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Award, GraduationCap, CheckCircle2, BookOpen, ExternalLink, Sparkles } from "lucide-react";

export const LecturesCertSection: React.FC = () => {
  const { certifications, education } = PORTFOLIO_DATA;

  return (
    <section
      id="dli-instructor"
      className="relative py-24 bg-[#030508] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] mb-2">
              <Award className="w-4 h-4" />
              <span>[04] NVIDIA DLI CERTIFIED INSTRUCTOR & ACADEMIC RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase">
              CREDENTIALS & <span className="text-[#10B981]">LECTURES.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-md">
            擁有 NVIDIA 深度學習學院 3 張官方永久授課講師認證，並於逢甲大學等多所大專院校進行前沿技術演講。
          </p>
        </div>

        {/* 滾動拖拉生成包裹核心 */}
        <MarqueeDragGenerator
          label="NVIDIA_DLI_ACCREDITATION_MATRIX"
          tagColor="#10B981"
        >
          <div className="space-y-8">
            
            {/* 3x NVIDIA DLI Badges Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications
                .filter((c) => c.category === "NVIDIA_DLI")
                .map((cert) => (
                  <QuantumGlassCard
                    key={cert.id}
                    tag="NVIDIA_DLI_CERTIFIED"
                    subTag="ACCREDITED INSTRUCTOR"
                    glowColor="emerald"
                    className="h-full"
                  >
                    <div className="space-y-4 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                          <Award className="w-6 h-6" />
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-[#10B981] font-semibold tracking-wider">
                            OFFICIAL ACCREDITATION
                          </div>
                          <h3 className="text-base font-tactical font-bold text-white mt-1 leading-snug">
                            {cert.name}
                          </h3>
                        </div>

                        <p className="text-xs text-gray-300 font-sans leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-gray-400">
                        <span className="flex items-center gap-1 text-[#10B981]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>永久合格授課證照</span>
                        </span>
                        <span>{cert.validity}</span>
                      </div>
                    </div>
                  </QuantumGlassCard>
                ))}
            </div>

            {/* Academic Research & Keynote Lectures Bento Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: NTNU AI Ph.D. Research */}
              <div className="lg:col-span-6">
                <QuantumGlassCard
                  tag="ACADEMIC_RESEARCH"
                  subTag="DOCTORAL PROGRAM"
                  glowColor="violet"
                  className="h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-tactical font-bold text-white">
                          國立臺灣師範大學 AI 跨域博士生
                        </h3>
                        <div className="text-xs font-mono text-purple-300">
                          National Taiwan Normal University // Ph.D. Candidate
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 font-sans leading-relaxed">
                      投入深度學習、神經特徵表示與跨模態感測器融合研究。專注於如何將巨量視覺特徵以超輕量神經拓撲映射至無人機低算力端點，實現毫秒級無延遲定位導航。
                    </p>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-1">
                      <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                        <span className="text-[10px] text-gray-400 block">MAJOR</span>
                        <span className="text-white font-semibold">AI 跨域應用</span>
                      </div>
                      <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                        <span className="text-[10px] text-gray-400 block">STATUS</span>
                        <span className="text-purple-300 font-semibold">博士班在讀</span>
                      </div>
                    </div>
                  </div>
                </QuantumGlassCard>
              </div>

              {/* Right: Invited Technical Lectures */}
              <div className="lg:col-span-6">
                <QuantumGlassCard
                  tag="INVITED_LECTURES"
                  subTag="UNIVERSITY & INDUSTRY"
                  glowColor="cyan"
                  className="h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF]">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-tactical font-bold text-white">
                          大專院校客座與產業特聘演講
                        </h3>
                        <div className="text-xs font-mono text-[#00E5FF]">
                          Feng Chia University & Tech Forums
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 font-sans leading-relaxed">
                      受逢甲大學等多所學術機構邀請，擔任生成式 AI、多模態大模型、電腦視覺演算法與無人機邊緣嵌入式系統之客座主講人，分享第一線工程實務與專利架構。
                    </p>

                    <div className="space-y-2 pt-1 font-mono text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/[0.05]">
                        <span className="text-white">逢甲大學技術專題演講</span>
                        <span className="text-gray-400 text-[10px]">生成式 AI 與邊緣運算</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/[0.05]">
                        <span className="text-white">NVIDIA DLI 實體工作坊</span>
                        <span className="text-[#00E5FF] text-[10px]">官方指定認證講師</span>
                      </div>
                    </div>
                  </div>
                </QuantumGlassCard>
              </div>

            </div>

          </div>
        </MarqueeDragGenerator>

      </div>
    </section>
  );
};
