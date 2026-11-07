"use client";

import React, { useState } from "react";
import { MarqueeDragGenerator } from "@/components/generative/MarqueeDragGenerator";
import { QuantumGlassCard } from "@/components/quantum/QuantumGlassCard";
import { Eye, Plane, Car, UserCheck, Flame, Shield, ArrowUpRight } from "lucide-react";

export const VisionMatrixSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "airport-geofence",
      name: "管制區電子圍籬 (ROI)",
      tag: "AIRPORT_GEOFENCE_ROI",
      icon: Shield,
      model: "YOLOv11 + Polygonal ROI",
      desc: "針對停機坪與空側管制區，動態繪製多邊形禁區向量，入侵即時觸發毫秒級告警並擷取特徵向量。",
      conf: "99.6%",
      fps: "60 FPS",
      badge: "RESTful API",
      metrics: "3.2ms Latency // 0.01% False Positive",
    },
    {
      id: "plane-docking",
      name: "停機坪飛機精準定位",
      tag: "APRON_AIRCRAFT_DOCKING",
      icon: Plane,
      model: "YOLOv11 + ReID + ROI",
      desc: "即時辨識客機入位停靠狀態、滑行軌跡與停靠標線偏轉角，自動回傳地勤作業視窗數據。",
      conf: "99.2%",
      fps: "30 FPS",
      badge: "RESTful API",
      metrics: "Sub-pixel Precision // Realtime Kalman Filter",
    },
    {
      id: "speed-detection",
      name: "地面作業車輛區間測速",
      tag: "VEHICLE_SPEED_VECTOR",
      icon: Car,
      model: "DeepSORT + Perspective Transform",
      desc: "利用幾何透視逆變換與多攝影機連續追蹤，精準估算地勤行李車與作業載具即時航速。",
      conf: "98.8%",
      fps: "45 FPS",
      badge: "RESTful API",
      metrics: "±0.8 km/h Accuracy // Cross-Camera ReID",
    },
    {
      id: "fall-detection",
      name: "人體骨架姿態跌倒偵測",
      tag: "OPENPOSE_FALL_PREVENTION",
      icon: UserCheck,
      model: "OpenPose + Keypoint Dynamics",
      desc: "透過人體 18 個關鍵點骨架幾何連線之質心角加速度，辨識旅客突發昏厥或跌倒事件並自動通報。",
      conf: "99.5%",
      fps: "30 FPS",
      badge: "RESTful API",
      metrics: "18 Keypoints // Gravitational Acceleration Delta",
    },
    {
      id: "density-heatmap",
      name: "航廈人流擁擠密度熱力",
      tag: "DENSITY_HEATMAP_ENGINE",
      icon: Flame,
      model: "YOLOv11 Crowd Density Counter",
      desc: "動態計算報到大廳與安檢長廊空間人群密度，即時輸出色彩梯度流動分佈，輔助動態疏導決策。",
      conf: "98.4%",
      fps: "30 FPS",
      badge: "RESTful API",
      metrics: "Cell Resolution 1m² // Continuous Heat Gradient",
    },
  ];

  const activeService = services[activeTab];

  return (
    <section
      id="spatial-vision"
      className="relative py-24 bg-[#030508] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] mb-2">
              <Eye className="w-4 h-4" />
              <span>[02] SPATIAL PERCEPTION MATRIX & DIGITAL TWIN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase">
              SPATIAL <span className="text-[#00E5FF]">PERCEPTION.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-md">
            為桃園國際機場空側與航廈建構十維空間電腦視覺演算法，涵蓋即時目標偵測、骨架姿態分析與軌跡估算。
          </p>
        </div>

        {/* 滾動拖拉生成包裹核心 */}
        <MarqueeDragGenerator
          label="TAOYUAN_AIRPORT_SPATIAL_MATRIX"
          tagColor="#00E5FF"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Module Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {services.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 ${
                      isSelected
                        ? "bg-[#0A0D14] border-[#00E5FF]/60 shadow-[0_0_25px_rgba(0,229,255,0.12)] text-white"
                        : "bg-[#0A0D14]/40 border-white/[0.06] hover:border-white/[0.15] text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg border transition-colors ${
                        isSelected
                          ? "bg-[#00E5FF]/10 border-[#00E5FF] text-[#00E5FF]"
                          : "bg-white/[0.02] border-white/[0.06] text-gray-400"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-tactical font-semibold text-sm truncate text-white">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[#00E5FF]">
                          {item.conf}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-gray-400 truncate">
                        {item.tag}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: High-Tech Digital Twin Visualization Viewport */}
            <div className="lg:col-span-7">
              <QuantumGlassCard
                tag={activeService.tag}
                subTag={`PIPELINE: ${activeService.model}`}
                glowColor="cyan"
                className="shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Digital Twin Simulated Sensor Screen */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#06080E] to-[#0D121D] border border-white/[0.08] p-5 flex flex-col justify-between">
                    
                    {/* Background Subtle Spatial Coordinate Mesh */}
                    <div className="absolute inset-0 bg-quantum-grid bg-[size:32px_32px] opacity-30 pointer-events-none" />

                    {/* Top Simulated Camera Header */}
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-white font-semibold">CAM-07 // APRON NORTH RUNWAY</span>
                      </div>
                      <div className="text-gray-400 text-[10px]">
                        RESOL: 3840×2160 // {activeService.fps}
                      </div>
                    </div>

                    {/* Center Spatial Synthetic Vector Bounding */}
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <div className="relative border border-[#00E5FF]/60 bg-[#00E5FF]/[0.04] rounded-lg p-6 max-w-md w-full shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                        {/* Corner Accents */}
                        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00E5FF]" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00E5FF]" />
                        <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#00E5FF]" />
                        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00E5FF]" />

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#00E5FF]/20 pb-1.5">
                            <span className="text-[#00E5FF] font-bold">
                              {activeService.tag}
                            </span>
                            <span className="text-white">
                              CONF: {activeService.conf}
                            </span>
                          </div>
                          <p className="text-xs text-gray-200 font-sans leading-relaxed pt-1">
                            {activeService.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Digital Twin Telemetry Bar */}
                    <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-gray-400 border-t border-white/[0.06] pt-2">
                      <span className="text-[#00E5FF]">{activeService.metrics}</span>
                      <span>INFERENCE ENGINE: TENSORRT FP16</span>
                    </div>
                  </div>

                  {/* Architectural Integration Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block mb-1">
                        API FORMAT
                      </span>
                      <span className="text-white font-semibold">
                        FastAPI / RESTful
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block mb-1">
                        DEPLOYMENT
                      </span>
                      <span className="text-[#10B981] font-semibold">
                        Docker CI/CD
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                      <span className="text-[10px] text-gray-400 block mb-1">
                        CLIENT INFRA
                      </span>
                      <span className="text-[#8B5CF6] font-semibold">
                        桃園國際機場空側
                      </span>
                    </div>
                  </div>

                </div>
              </QuantumGlassCard>
            </div>

          </div>
        </MarqueeDragGenerator>

      </div>
    </section>
  );
};
