"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00D2FF]/40 shadow-[0_0_12px_rgba(0,210,255,0.25)] bg-[#0A0D14] shrink-0">
            <img
              src="/images/personal-logo-technical.png"
              alt="Lo Shih-Hsuan Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-tactical font-black text-sm tracking-wider text-white group-hover:text-[#FF5A5F] transition-colors">
            LO SHIH-HSUAN.
          </span>
        </a>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
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
              中文
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
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full gradient-sunset text-[#08080A] text-xs font-bold tracking-wide hover:opacity-90 transition-opacity shadow-[0_4px_16px_rgba(255,90,95,0.25)]"
          >
            <span>{t.nav.letsTalk}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
};
