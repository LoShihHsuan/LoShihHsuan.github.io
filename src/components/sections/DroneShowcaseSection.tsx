"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { MarqueeDragGenerator } from "@/components/generative/MarqueeDragGenerator";
import { QuantumGlassCard } from "@/components/quantum/QuantumGlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Compass, Radio, Activity, Cpu, Shield, Zap } from "lucide-react";

// 3D 模擬前衛工業四軸無人機 (Aerospace Matte Titanium Quadcopter)
function DroneQuadcopter() {
  const droneGroupRef = useRef<THREE.Group>(null);
  const rotorRefs = [
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
  ];

  useFrame((_, delta) => {
    // 螺旋槳高速平滑旋轉
    rotorRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 28;
      }
    });

    // 機身隨機浮動微調姿態
    if (droneGroupRef.current) {
      droneGroupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={droneGroupRef}>
      {/* 機身主幹：一體成型鈦合金消光座艙 (Matte Titanium Chassis) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.3, 0.22, 1.3]} />
        <meshStandardMaterial color="#0F131C" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* 機腹核心運算盒：Nvidia Jetson Companion Computer (Emerald Pulse) */}
      <mesh position={[0, -0.18, 0]}>
        <boxGeometry args={[0.75, 0.14, 0.75]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#10B981"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* 前端光學水晶感知鏡頭 (Optical Crystal Sensor Array) */}
      <mesh position={[0, -0.06, 0.75]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 四條碳纖維骨架機臂 (Carbon Composite Arms) */}
      <mesh position={[0.95, 0, 0.95]} rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.7]} />
        <meshStandardMaterial color="#1E2433" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-0.95, 0, -0.95]} rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.7]} />
        <meshStandardMaterial color="#1E2433" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* 四具無刷馬達與半透明空氣動力旋翼 (Motors & Rotors) */}
      {[
        [1.15, 0.14, 1.15],
        [-1.15, 0.14, 1.15],
        [1.15, 0.14, -1.15],
        [-1.15, 0.14, -1.15],
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]}>
          {/* 馬達筒 */}
          <mesh>
            <cylinderGeometry args={[0.11, 0.11, 0.18]} />
            <meshStandardMaterial color="#2A3245" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* 旋翼葉片 (Translucent Quantum Cyan) */}
          <mesh ref={rotorRefs[idx]} position={[0, 0.1, 0]}>
            <boxGeometry args={[1.3, 0.015, 0.1]} />
            <meshStandardMaterial
              color="#00E5FF"
              opacity={0.7}
              transparent
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export const DroneShowcaseSection: React.FC = () => {
  const droneProject = PORTFOLIO_DATA.projects.find(
    (p) => p.id === "drone-autonomy"
  );

  return (
    <section
      id="drone-autonomy"
      className="relative py-24 border-t border-white/[0.06] bg-[#030508] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] mb-2">
              <Compass className="w-4 h-4" />
              <span>[01] AUTONOMOUS FLIGHT & COMPANION COMPUTING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-tactical font-black text-white tracking-tight uppercase">
              AUTONOMOUS <span className="text-[#00E5FF]">FLIGHT.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-md">
            PX4 飛控開源架構深度整合 MavSDK Python，於邊緣端實現次毫秒自主動態路徑規劃與避障控制。
          </p>
        </div>

        {/* 滾動拖拉生成包裹核心 */}
        <MarqueeDragGenerator
          label="PX4_AUTONOMOUS_COMPANION_SUBSYSTEM"
          tagColor="#00E5FF"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 3D 伴飛無人機即時視口 (Interactive 3D Viewport) */}
            <div className="lg:col-span-7 h-[460px] sm:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0A0D14] to-[#04060A] border border-white/[0.08] relative group shadow-2xl">
              
              {/* Telemetry Corner Overlays */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[11px] space-y-1">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#030508]/80 backdrop-blur-md border border-white/[0.08] text-[#00E5FF]">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>MAVLINK 2.0 // UDP 14540 [CONNECTED]</span>
                </div>
                <div className="text-gray-400 text-[10px] pl-1">
                  FREQ: 50Hz // HEARTBEAT: 0.98s
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20 font-mono text-[10px] text-right space-y-1">
                <div className="px-2.5 py-1 rounded bg-[#030508]/80 backdrop-blur-md border border-white/[0.08] text-[#10B981]">
                  LATENCY: 7.8ms [SUB-10MS]
                </div>
                <div className="text-gray-400 text-[9px] pr-1">
                  GPS: 18 SATS (3D FIX)
                </div>
              </div>

              {/* R3F 3D Canvas */}
              <Canvas
                camera={{ position: [3, 2, 4], fov: 42 }}
                className="cursor-grab active:cursor-grabbing"
              >
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00E5FF" />
                <pointLight position={[0, 2, 0]} intensity={1.2} color="#10B981" />

                <Float
                  speed={2.2}
                  rotationIntensity={0.3}
                  floatIntensity={0.6}
                  floatingRange={[-0.1, 0.1]}
                >
                  <DroneQuadcopter />
                </Float>
              </Canvas>

              {/* Bottom Sensor Telemetry Strip */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-[#030508]/85 backdrop-blur-md border border-white/[0.08] font-mono text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-gray-400 text-[10px] block">FLIGHT MODE</span>
                    <span className="text-white font-bold">OFFBOARD AUTO</span>
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div>
                    <span className="text-gray-400 text-[10px] block">COMPANION SOC</span>
                    <span className="text-[#10B981] font-bold">Jetson Orin NX</span>
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div>
                    <span className="text-gray-400 text-[10px] block">OPTICAL FLOW</span>
                    <span className="text-[#00E5FF] font-bold">LOCKED</span>
                  </div>
                </div>

                <div className="text-[10px] text-gray-400">
                  CLICK & DRAG TO INSPECT 3D CHASSIS
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Highlights & Verified Capabilities */}
            <div className="lg:col-span-5 space-y-4">
              
              <QuantumGlassCard
                tag="FLIGHT_CORE"
                subTag="PX4 + MAVSDK PYTHON"
                glowColor="cyan"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#00E5FF]" />
                    <h3 className="text-lg font-tactical font-bold text-white">
                      次毫秒離機自主決策環路
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    透過 Jetson 邊緣運算電腦與 Pixhawk 飛控之高頻串列通訊，實作 MavSDK 離機導航協定。避開傳統地面站延遲，使無人機能在未知無 GPS 訊號環境下自主避障。
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#00E5FF]">
                      MavSDK-Python
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-white">
                      Offboard Control
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-gray-400">
                      PX4 v1.14
                    </span>
                  </div>
                </div>
              </QuantumGlassCard>

              <QuantumGlassCard
                tag="EDGE_ACCELERATION"
                subTag="TENSORRT OPTIMIZATION"
                glowColor="emerald"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#10B981]" />
                    <h3 className="text-lg font-tactical font-bold text-white">
                      Nvidia Jetson 邊緣端神經加速
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    整合 Jetson Nano 與 Orin 邊緣板卡，運用 TensorRT FP16 浮點量化，將 4K 空間感知視覺推論延遲壓制在 10ms 以內，滿足即時飛控動態避障要求。
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#10B981]">
                      CUDA / TensorRT
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-white">
                      JetPack 5.x/6.x
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-gray-400">
                      Docker Containers
                    </span>
                  </div>
                </div>
              </QuantumGlassCard>

              <QuantumGlassCard
                tag="ENTERPRISE_DEPLOY"
                subTag="COMMERCIAL ARCHITECTURE"
                glowColor="violet"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#8B5CF6]" />
                    <h3 className="text-lg font-tactical font-bold text-white">
                      翔宇動力工業級自駕無人機研發
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    負責高載重商業四軸及六軸巡檢無人機之軟硬體整合架構，實現全自動起降、航線巡弋、動態特徵追蹤與安全返航協議。
                  </p>
                </div>
              </QuantumGlassCard>

            </div>

          </div>
        </MarqueeDragGenerator>

      </div>
    </section>
  );
};
