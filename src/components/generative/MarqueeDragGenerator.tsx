"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeDragGeneratorProps {
  label?: string;
  tagColor?: string;
  className?: string;
  children: React.ReactNode;
}

export const MarqueeDragGenerator: React.FC<MarqueeDragGeneratorProps> = ({
  label = "SYSTEM_MODULE",
  tagColor = "#00E5FF",
  className = "",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragBoxRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [status, setStatus] = useState<"IDLE" | "GENERATING" | "MATERIALIZED">("IDLE");

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect mobile touch device: on mobile touch screens, provide smooth progressive reveal
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      const totalWidth = container.offsetWidth || 1100;
      const totalHeight = container.offsetHeight || 600;

      // Initialize dimensions display
      setDimensions({ w: 0, h: 0 });

      // GSAP ScrollTrigger timeline linked to scroll scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: isMobile ? "top 90%" : "top 80%",
          end: isMobile ? "top 45%" : "top 25%",
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            const currentW = Math.round(totalWidth * p);
            const currentH = Math.round(totalHeight * p);

            setDimensions({ w: currentW, h: currentH });

            if (p <= 0.05) {
              setStatus("IDLE");
            } else if (p < 0.85) {
              setStatus("GENERATING");
            } else {
              setStatus("MATERIALIZED");
            }
          },
        },
      });

      // 階段 1: 虛擬游標切入並定位起始點
      tl.fromTo(
        cursorRef.current,
        { opacity: 0, x: 0, y: 0, scale: 0.6 },
        { opacity: 1, x: 10, y: 10, scale: 1, duration: 0.15, ease: "power1.out" }
      )
        // 階段 2: 游標斜向拖拉，框線自 (0, 0) 同步拉伸至全尺寸
        .fromTo(
          dragBoxRef.current,
          { width: "0%", height: "0%", opacity: 0 },
          {
            width: "100%",
            height: "100%",
            opacity: 1,
            duration: 1.6,
            ease: "power2.inOut",
          }
        )
        // 游標伴隨右下角移動
        .to(
          cursorRef.current,
          {
            x: isMobile ? totalWidth * 0.9 : totalWidth - 40,
            y: isMobile ? totalHeight * 0.9 : totalHeight - 40,
            duration: 1.6,
            ease: "power2.inOut",
          },
          "<"
        )
        // 階段 3: 拖拉就位，內部核心內容解碼具象化浮現 (Blur 8px -> 0px, Scale 0.97 -> 1.0, Opacity 0 -> 1)
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.97,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // 階段 4: 游標完成生成後淡出隱藏，框線轉為優雅細緻的晶體邊界
        .to(
          cursorRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
          },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full my-8 ${className}`}
      data-generative-section={label}
    >
      {/* 拖拉選框遮罩層 (Marquee Drag Layer) */}
      <div
        ref={dragBoxRef}
        className="absolute inset-0 pointer-events-none z-30 transition-colors"
        style={{
          border: `1px solid ${
            status === "MATERIALIZED"
              ? "rgba(0, 229, 255, 0.2)"
              : "rgba(0, 229, 255, 0.85)"
          }`,
          backgroundColor:
            status === "MATERIALIZED"
              ? "transparent"
              : "rgba(0, 229, 255, 0.02)",
          boxShadow:
            status === "GENERATING"
              ? `0 0 25px rgba(0, 229, 255, 0.15)`
              : "none",
        }}
        aria-hidden="true"
      >
        {/* 四個極簡量子錨點 */}
        <span
          className="absolute -top-1 -left-1 w-2 h-2 transition-opacity duration-300"
          style={{
            backgroundColor: tagColor,
            opacity: status === "IDLE" ? 0 : 1,
            boxShadow: `0 0 8px ${tagColor}`,
          }}
        />
        <span
          className="absolute -top-1 -right-1 w-2 h-2 transition-opacity duration-300"
          style={{
            backgroundColor: tagColor,
            opacity: status === "IDLE" ? 0 : 1,
            boxShadow: `0 0 8px ${tagColor}`,
          }}
        />
        <span
          className="absolute -bottom-1 -left-1 w-2 h-2 transition-opacity duration-300"
          style={{
            backgroundColor: tagColor,
            opacity: status === "IDLE" ? 0 : 1,
            boxShadow: `0 0 8px ${tagColor}`,
          }}
        />
        <span
          className="absolute -bottom-1 -right-1 w-2 h-2 transition-opacity duration-300"
          style={{
            backgroundColor: tagColor,
            opacity: status === "IDLE" ? 0 : 1,
            boxShadow: `0 0 8px ${tagColor}`,
          }}
        />

        {/* 頂部即時尺寸與狀態標籤 */}
        {status !== "IDLE" && (
          <div
            className="absolute -top-7 left-0 flex items-center gap-2 px-2.5 py-0.5 font-mono text-[10px] tracking-wider font-semibold rounded-t backdrop-blur-md transition-all duration-300"
            style={{
              backgroundColor:
                status === "MATERIALIZED"
                  ? "rgba(10, 13, 20, 0.85)"
                  : tagColor,
              color: status === "MATERIALIZED" ? tagColor : "#030508",
              border:
                status === "MATERIALIZED"
                  ? `1px solid ${tagColor}40`
                  : "none",
            }}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status === "GENERATING" ? "animate-ping" : ""
              }`}
              style={{
                backgroundColor:
                  status === "MATERIALIZED" ? tagColor : "#030508",
              }}
            />
            <span>{label}</span>
            <span className="opacity-75">
              // {dimensions.w} × {dimensions.h} PX
            </span>
            <span className="font-bold">
              {status === "GENERATING" ? "[ DRAGGING... ]" : "[ READY ]"}
            </span>
          </div>
        )}
      </div>

      {/* 虛擬拖拉游標 (Virtual Drag Cursor) */}
      <div
        ref={cursorRef}
        className="absolute pointer-events-none z-40 flex items-center gap-2 will-change-transform opacity-0"
        aria-hidden="true"
      >
        <svg
          className="w-5 h-5 drop-shadow-[0_0_10px_#00E5FF]"
          style={{ color: tagColor }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 0l16 12-7 2-3 8z" />
        </svg>
        <span
          className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest shadow-lg"
          style={{
            backgroundColor: tagColor,
            color: "#030508",
          }}
        >
          GENERATING...
        </span>
      </div>

      {/* 內部真實內容層 (Materialized Content) */}
      <div ref={contentRef} className="relative z-10 w-full h-full opacity-0">
        {children}
      </div>
    </div>
  );
};
