"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { GradientMarqueeTicker } from "@/components/sections/GradientMarqueeTicker";
import { WorkShowcaseSection } from "@/components/sections/WorkShowcaseSection";
import { BentoExperienceSection } from "@/components/sections/BentoExperienceSection";
import { SoftwarePlatformsSection } from "@/components/sections/SoftwarePlatformsSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08080A] bg-gradient-to-b from-[#0E1220] via-[#08080A] to-[#0A0D16] text-[#F4F4F6] selection:bg-[#FF5A5F] selection:text-[#08080A]">
      {/* 全域深邃氛圍漸層光暈層 (Subtle Atmospheric Ambient Gradients) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* 頂部柔和冷霧藍輝光 */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),rgba(130,80,220,0.03),transparent_70%)] blur-2xl" />
        {/* 中部左側日落微光柔和漫射 */}
        <div className="absolute top-[35%] -left-64 w-[750px] h-[750px] bg-[radial-gradient(circle,rgba(255,90,95,0.035),rgba(255,142,83,0.015),transparent_70%)] blur-3xl" />
        {/* 中下右側電光冷藍微光漫射 */}
        <div className="absolute top-[65%] -right-64 w-[750px] h-[750px] bg-[radial-gradient(circle,rgba(0,210,255,0.035),rgba(59,130,246,0.015),transparent_70%)] blur-3xl" />
        {/* 頁底深邃曜岩漸層微光 */}
        <div className="absolute bottom-0 inset-x-0 h-[650px] bg-gradient-to-t from-[#0B0E1A]/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* 1. 英雄首頁：三欄式 Figma 畫布與剪影肖像 */}
        <HeroSection />

        {/* 2. 日落漸層跑馬燈橫幅 (Sunset Gradient Ticker) */}
        <GradientMarqueeTicker />

        {/* 3. 核心展間 01：精選作品三聯卡 (Work That Moves) */}
        <WorkShowcaseSection />

        {/* 4. 核心展間 02：能力拓撲與引言 (First Frame. Last Frame.) */}
        <BentoExperienceSection />

        {/* 5. 核心展間 03：軟體平台矩陣 (Software That Works For You) */}
        <SoftwarePlatformsSection />

        {/* 6. 核心展間 04：里程碑與微小勝利 (Always Building, Always Shipping) */}
        <MilestonesSection />

        {/* 7. 頁尾：四角星跑馬燈與聯繫通道 (Let's Work Together) */}
        <FooterSection />
      </div>
    </div>
  );
}
