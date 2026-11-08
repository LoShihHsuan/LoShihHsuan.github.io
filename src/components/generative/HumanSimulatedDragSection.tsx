"use client";

import React, { useRef, useEffect, useState, createContext } from "react";
import gsap from "gsap";

export const DragSectionContext = createContext<{ isSectionReady: boolean }>({
  isSectionReady: true,
});

interface HumanSimulatedDragSectionProps {
  agentName?: string;
  agentColor?: string;
  frameLabel?: string;
  className?: string;
  delay?: number;
  dragDuration?: number;
  threshold?: number;
  rootMargin?: string;
  children: React.ReactNode;
}

export const HumanSimulatedDragSection: React.FC<HumanSimulatedDragSectionProps> = ({
  agentName = "Designer",
  agentColor = "#3B82F6",
  frameLabel = "CANVAS_SECTION",
  className = "",
  delay = 0,
  dragDuration = 1.05,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragBoxRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dimensionTagRef = useRef<HTMLDivElement>(null);

  const [hasTriggered, setHasTriggered] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [status, setStatus] = useState<"IDLE" | "DRAGGING" | "COMPLETED">("IDLE");
  const [isSectionReady, setIsSectionReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasTriggered) return;

    const el = containerRef.current;

    // Use IntersectionObserver to trigger exactly when user scrolls to this element
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          observer.disconnect();

          // Execute simulated human drag sequence
          executeHumanDragSequence();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasTriggered, threshold, rootMargin]);

  const executeHumanDragSequence = () => {
    if (!containerRef.current || !dragBoxRef.current || !cursorRef.current || !contentRef.current)
      return;

    const container = containerRef.current;
    const finalW = container.offsetWidth || 400;
    const finalH = container.offsetHeight || 240;

    setStatus("DRAGGING");

    const tl = gsap.timeline({ delay });

    // 1. Virtual Mouse appears at (0, 0)
    tl.set(cursorRef.current, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.7,
    })
      .to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power1.out",
      })
      // 2. Simulating Human Drag: Cursor drags from (0,0) to (finalW, finalH)
      // Simultaneously expanding the wireframe box
      .to(
        dragBoxRef.current,
        {
          width: "100%",
          height: "100%",
          opacity: 1,
          duration: dragDuration,
          ease: "power2.inOut",
          onUpdate: function () {
            const prog = this.progress();
            setDimensions({
              w: Math.round(finalW * prog),
              h: Math.round(finalH * prog),
            });
          },
        },
        "+=0.03"
      )
      .to(
        cursorRef.current,
        {
          x: Math.max(0, finalW - 16),
          y: Math.max(0, finalH - 16),
          duration: dragDuration,
          ease: "power2.inOut",
        },
        "<"
      )
      // 3. Container complete! Content dynamically materializes
      .fromTo(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.98,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.55,
          ease: "power2.out",
          onStart: () => {
            setIsSectionReady(true);
          },
        },
        "-=0.2"
      )
      // 4. WORK DONE: The simulated mouse automatically fades out and completely disappears!
      .to(
        cursorRef.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setStatus("COMPLETED");
          },
        },
        "+=0.08"
      );
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      data-human-drag-section={frameLabel}
    >
      {/* Figma Selection Wireframe Box */}
      <div
        ref={dragBoxRef}
        className="absolute top-0 left-0 pointer-events-none z-30 transition-colors"
        style={{
          width: "0%",
          height: "0%",
          opacity: 0,
          border:
            status === "COMPLETED"
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : `1px solid ${agentColor}`,
          boxShadow:
            status === "DRAGGING"
              ? `0 0 25px ${agentColor}33`
              : "none",
        }}
        aria-hidden="true"
      >
        {/* 4 Corner Resize Nodes */}
        {status !== "COMPLETED" && (
          <>
            <span
              className="absolute -top-1 -left-1 w-2 h-2 bg-white border rounded-sm"
              style={{ borderColor: agentColor }}
            />
            <span
              className="absolute -top-1 -right-1 w-2 h-2 bg-white border rounded-sm"
              style={{ borderColor: agentColor }}
            />
            <span
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border rounded-sm"
              style={{ borderColor: agentColor }}
            />
            <span
              className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border rounded-sm"
              style={{ borderColor: agentColor }}
            />

            {/* Dynamic Dimension Tag updating while dragging */}
            <div
              ref={dimensionTagRef}
              className="absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-white font-mono text-[9px] font-bold tracking-wider shadow-md whitespace-nowrap"
              style={{ backgroundColor: agentColor }}
            >
              {frameLabel} // {dimensions.w} × {dimensions.h} px
            </div>
          </>
        )}
      </div>

      {/* Simulated Human Drag Mouse Actor (Disappears on completion!) */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 pointer-events-none z-40 flex items-start gap-1 will-change-transform opacity-0"
        aria-hidden="true"
      >
        <svg
          className="w-4 h-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] -rotate-12"
          style={{ color: agentColor }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 0l16 12-7 2-3 8z" />
        </svg>

        <div
          className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight text-[#08080A] shadow-md select-none"
          style={{ backgroundColor: agentColor }}
        >
          {agentName}: Dragging
        </div>
      </div>

      {/* Actual Section Content (Reveals dynamically as window finishes) */}
      <div
        ref={contentRef}
        className="relative z-10 w-full h-full opacity-0"
      >
        <DragSectionContext.Provider value={{ isSectionReady: isSectionReady || status === "COMPLETED" }}>
          {children}
        </DragSectionContext.Provider>
      </div>
    </div>
  );
};
