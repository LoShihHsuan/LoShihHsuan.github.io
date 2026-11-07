"use client";

import React from "react";
import { MarqueeDragGenerator } from "@/components/generative/MarqueeDragGenerator";
import { QuantumGlassCard } from "@/components/quantum/QuantumGlassCard";
import { BrainCircuit, GitCommit, Database, Layers, Sparkles, Network, Cpu } from "lucide-react";

export const CognitiveSystemsSection: React.FC = () => {
  return (
    <section
      id="cognitive-systems"
      className="relative py-24 bg-[#030508] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6] mb-2">
              <BrainCircuit className="w-4 h-4" />
              <span>[03] AGENTIC KNOWLEDGE VAULTS & COGNITIVE TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase">
              COGNITIVE <span className="text-[#8B5CF6]">SYSTEMS.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-md">
            整合 Google Antigravity IDE、Obsidian 雙向拓撲、企業級 AIDMS 平台與離線高隱私 LLM RAG 智能架構。
          </p>
        </div>

        {/* 滾動拖拉生成包裹核心 */}
        <MarqueeDragGenerator
          label="NEURAL_COGNITIVE_TOPOLOGY_VAULT"
          tagColor="#8B5CF6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: LLM Wiki & Antigravity Knowledge Vault */}
            <QuantumGlassCard
              tag="KNOWLEDGE_TOPOLOGY"
              subTag="ANTIGRAVITY // OBSIDIAN"
              glowColor="violet"
            >
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/[0.06] pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-[#8B5CF6]">
                      <GitCommit className="w-4 h-4" />
                      <span>DAILY COMMIT AUTOMATION</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-purple-300">
                      翔宇動力研發核心
                    </span>
                  </div>

                  <h3 className="text-lg font-tactical font-bold text-white mb-2">
                    LLM Wiki & 自動化代碼審核星系
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    為翔宇動力研發團隊設計高階雙向鏈結知識星系。整合 Google Antigravity 代理人工作流與 Git Hook，於工程師每日 Commit 時自動調用 LLM 審核差異代碼、萃取技術專利並即時更新至 Obsidian 知識拓撲庫。
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">KNOWLEDGE GRAPH</span>
                      <span className="text-white font-semibold">1,200+ Nodes</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">AUDIT PIPELINE</span>
                      <span className="text-[#8B5CF6] font-semibold">Pre-commit CI/CD</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 font-mono text-[10px] border-t border-white/[0.06]">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    Obsidian Vault
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    Google Antigravity IDE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    Git Workflow
                  </span>
                </div>
              </div>
            </QuantumGlassCard>

            {/* Card 2: AIDMS Enterprise Management Platform */}
            <QuantumGlassCard
              tag="ENTERPRISE_AIDMS"
              subTag="LIFECYCLE MANAGEMENT"
              glowColor="cyan"
            >
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/[0.06] pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-[#00E5FF]">
                      <Database className="w-4 h-4" />
                      <span>AI DEVELOPMENT PLATFORM</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-cyan-300">
                      MLOps Core
                    </span>
                  </div>

                  <h3 className="text-lg font-tactical font-bold text-white mb-2">
                    AIDMS 企業級人工智慧開發管理系統
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    主導設計企業專用 AIDMS 平臺架構，完整打通資料標註、模型訓練分散式調度、版本權重管理與邊緣板卡一鍵部署管線，提供工程團隊標準化 MLOps 協作環境。
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">TRAINING PIPELINE</span>
                      <span className="text-white font-semibold">PyTorch Distributed</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">MODEL ARTIFACTS</span>
                      <span className="text-[#00E5FF] font-semibold">ONNX / TensorRT</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 font-mono text-[10px] border-t border-white/[0.06]">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    MLOps Platform
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    Docker Swarm
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    FastAPI
                  </span>
                </div>
              </div>
            </QuantumGlassCard>

            {/* Card 3: Air-Gapped Local LLM RAG System */}
            <QuantumGlassCard
              tag="SECURE_RAG_ENGINE"
              subTag="AIR-GAPPED COMPLIANCE"
              glowColor="emerald"
            >
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/[0.06] pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-[#10B981]">
                      <Sparkles className="w-4 h-4" />
                      <span>ISOLATED LLM INFERENCE</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-emerald-300">
                      Local Host
                    </span>
                  </div>

                  <h3 className="text-lg font-tactical font-bold text-white mb-2">
                    離線高機密企業 RAG 檢索生成系統
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    採用開源繁中強化大型語言模型（Llama 3.3 / Qwen 2.5），結合 FAISS 稠密向量索引與混合檢索（BM25 + Dense Vector），建置企業級實體隔離 RAG 內部知識庫系統，杜絕資料外流。
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">RETRIEVAL ENGINE</span>
                      <span className="text-white font-semibold">FAISS + Hybrid Rank</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">SECURITY LEVEL</span>
                      <span className="text-[#10B981] font-semibold">100% Air-Gapped</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 font-mono text-[10px] border-t border-white/[0.06]">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    Llama 3.3
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    Vector DB
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    Ollama / vLLM
                  </span>
                </div>
              </div>
            </QuantumGlassCard>

            {/* Card 4: Swarm Microservices & CI/CD Pipeline */}
            <QuantumGlassCard
              tag="SWARM_PIPELINE"
              subTag="CONTAINERIZED MICROSERVICES"
              glowColor="cyan"
            >
              <div className="space-y-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/[0.06] pb-2 mb-3">
                    <span className="flex items-center gap-1.5 text-[#00E5FF]">
                      <Network className="w-4 h-4" />
                      <span>AUTONOMOUS ORCHESTRATION</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-cyan-300">
                      Multi-Agent
                    </span>
                  </div>

                  <h3 className="text-lg font-tactical font-bold text-white mb-2">
                    多代理人蜂群協同與邊緣端發布
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    基於 Docker 與微服務拓撲，建構跨無人機、邊緣 Jetson 與伺服器之分散式排程。實現模型自動重訓、單元測試、靜態安全掃描到自動化部署的一站式流水線。
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">CONTAINERIZATION</span>
                      <span className="text-white font-semibold">Docker Multi-Arch</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block">AUTOMATION</span>
                      <span className="text-[#00E5FF] font-semibold">GitHub Actions CI</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 font-mono text-[10px] border-t border-white/[0.06]">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Multi-Agent Orchestration
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-300">
                    CI/CD Automated Test
                  </span>
                </div>
              </div>
            </QuantumGlassCard>

          </div>
        </MarqueeDragGenerator>

      </div>
    </section>
  );
};
