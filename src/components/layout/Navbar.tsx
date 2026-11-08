"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HumanSimulatedTypeText } from "@/components/generative/HumanSimulatedTypeText";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.work, href: "#work" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.platforms, href: "#platforms" },
    { name: t.nav.journey, href: "#journey" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-[#08080A]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo - 極簡白底高對比專屬徽章 */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/40 shadow-[0_2px_14px_rgba(255,255,255,0.25)] bg-white shrink-0 ring-1 ring-black/10">
            <img
              src="/images/personal-logo-technical.png"
              alt="Lo Shih-Hsuan Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <HumanSimulatedTypeText
            text="LO SHIH-HSUAN."
            as="span"
            fitContent
            className="font-tactical font-black text-sm tracking-wider text-white group-hover:text-[#FF5A5F] transition-colors"
            agentName="Brand"
            agentColor="#00D2FF"
            frameLabel="NAV_BRAND"
            delay={0.1}
            dragDuration={0.3}
            typingSpeed={16}
          />
        </a>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              <HumanSimulatedTypeText
                text={link.name}
                as="span"
                fitContent
                agentName="Nav"
                agentColor="#FF5A5F"
                frameLabel={`NAV_${idx + 1}`}
                delay={0.15 + idx * 0.08}
                dragDuration={0.25}
                typingSpeed={14}
              />
            </a>
          ))}
        </nav>

        {/* Right Action Area: Language Switcher & Sunset Gradient Pill */}
        <div className="flex items-center gap-3">
          {/* Top-Right Language Switcher (中文 / EN) */}
          <div className="flex items-center p-0.5 rounded-full bg-[#0E1118] border border-white/[0.1] text-[11px] font-mono shadow-inner">
            <button
              onClick={() => setLocale("zh")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === "zh"
                  ? "bg-[#3B82F6] text-white font-bold shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                  : "text-gray-400 hover:text-white"
              }`}
              title="切換為繁體中文"
            >
              <HumanSimulatedTypeText
                text="中文"
                as="span"
                fitContent
                agentName="Lang"
                agentColor="#3B82F6"
                frameLabel="LANG_ZH"
                delay={0.35}
                dragDuration={0.2}
                typingSpeed={15}
              />
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === "en"
                  ? "bg-[#3B82F6] text-white font-bold shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                  : "text-gray-400 hover:text-white"
              }`}
              title="Switch to English"
            >
              <HumanSimulatedTypeText
                text="EN"
                as="span"
                fitContent
                agentName="Lang"
                agentColor="#3B82F6"
                frameLabel="LANG_EN"
                delay={0.4}
                dragDuration={0.2}
                typingSpeed={15}
              />
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full gradient-sunset text-[#08080A] text-xs font-bold tracking-wide hover:opacity-90 transition-opacity shadow-[0_4px_16px_rgba(255,90,95,0.25)]"
          >
            <HumanSimulatedTypeText
              text={t.nav.letsTalk}
              as="span"
              fitContent
              agentName="Action"
              agentColor="#FF5A5F"
              frameLabel="NAV_TALK"
              delay={0.25}
              dragDuration={0.25}
              typingSpeed={14}
            />
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
};
