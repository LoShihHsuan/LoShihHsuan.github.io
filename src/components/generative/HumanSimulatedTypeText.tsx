"use client";

import React, { useRef, useEffect, useState, useMemo, useContext } from "react";
import gsap from "gsap";
import { DragSectionContext } from "@/components/generative/HumanSimulatedDragSection";

export interface TextSegment {
  text: string;
  className?: string;
  bold?: boolean;
}

export interface HumanSimulatedTypeTextProps {
  text?: string;
  segments?: TextSegment[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  wrapperClassName?: string;
  fitContent?: boolean;
  agentName?: string;
  agentColor?: string;
  frameLabel?: string;
  delay?: number;
  dragDuration?: number;
  typingSpeed?: number;
  threshold?: number;
  rootMargin?: string;
  resetKey?: any;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export const HumanSimulatedTypeText: React.FC<HumanSimulatedTypeTextProps> = ({
  text,
  segments,
  as: Component = "p",
  className = "",
  wrapperClassName = "",
  fitContent = false,
  agentName = "Type",
  agentColor = "#38BDF8",
  frameLabel = "TEXT_AREA",
  delay = 0.05,
  dragDuration = 0.38,
  typingSpeed = 16,
  threshold = 0.05,
  rootMargin = "0px 0px 40px 0px",
  resetKey,
  onComplete,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragBoxRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dimensionTagRef = useRef<HTMLSpanElement>(null);

  const { isSectionReady } = useContext(DragSectionContext);

  const [hasMounted, setHasMounted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [status, setStatus] = useState<"IDLE" | "DRAGGING" | "TYPING" | "COMPLETED">("IDLE");
  const [displayedChars, setDisplayedChars] = useState(0);

  // Consolidate full plain text from text prop, segments, or string children
  const fullText = useMemo(() => {
    if (text) return text;
    if (segments && segments.length > 0) {
      return segments.map((s) => s.text).join("");
    }
    if (typeof children === "string") return children;
    return "";
  }, [text, segments, children]);

  const totalLength = fullText.length;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If resetKey changes (e.g. accordion expanded), reset and re-trigger
  useEffect(() => {
    if (resetKey !== undefined && hasMounted) {
      setHasTriggered(false);
      setStatus("IDLE");
      setDisplayedChars(0);
    }
  }, [resetKey, hasMounted]);

  // Trigger on scroll ONLY when parent section is ready/revealed
  useEffect(() => {
    if (!hasMounted || !containerRef.current || hasTriggered) return;
    if (!isSectionReady) return;

    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          observer.disconnect();
          startDragAndTypeSequence();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMounted, hasTriggered, isSectionReady, threshold, rootMargin]);

  // When text changes (e.g. Language switch), display full text if already completed
  useEffect(() => {
    if (hasTriggered && status === "COMPLETED") {
      setDisplayedChars(totalLength);
    }
  }, [fullText, hasTriggered, status, totalLength]);

  const startDragAndTypeSequence = () => {
    if (!containerRef.current || !dragBoxRef.current || !cursorRef.current) {
      setStatus("COMPLETED");
      setDisplayedChars(totalLength);
      return;
    }

    const container = containerRef.current;
    const finalW = container.offsetWidth || 120;
    const finalH = container.offsetHeight || 28;

    setStatus("DRAGGING");
    setDisplayedChars(0);

    const tl = gsap.timeline({ delay });

    // 1. Initialize cursor & wireframe box
    tl.set(dragBoxRef.current, {
      width: "0%",
      height: "0%",
      opacity: 1,
      display: "block",
    })
      .set(cursorRef.current, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.7,
        display: "flex",
      })
      // 2. Cursor glides into position
      .to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.12,
        ease: "power1.out",
      })
      // 3. Mouse cursor drags out the text area wireframe box
      .to(
        dragBoxRef.current,
        {
          width: "100%",
          height: "100%",
          duration: dragDuration,
          ease: "power2.inOut",
          onUpdate: function () {
            const prog = this.progress();
            if (dimensionTagRef.current) {
              const curW = Math.round(finalW * prog);
              const curH = Math.round(finalH * prog);
              dimensionTagRef.current.innerText = `${curW} × ${curH}`;
            }
          },
        },
        "+=0.02"
      )
      .to(
        cursorRef.current,
        {
          x: Math.max(0, finalW - 10),
          y: Math.max(0, finalH - 10),
          duration: dragDuration,
          ease: "power2.inOut",
        },
        "<"
      )
      // 4. Mouse finishes dragging bounding box and switches to typing state
      .call(() => {
        setStatus("TYPING");
      });
  };

  // Character-by-character typing loop during "TYPING" state
  useEffect(() => {
    if (status !== "TYPING") return;

    if (displayedChars < totalLength) {
      // Dynamic speed scaling: long paragraphs stream slightly faster so user doesn't wait
      const effectiveSpeed = totalLength > 100 ? Math.max(6, Math.round(typingSpeed * 0.55)) : typingSpeed;
      const timer = setTimeout(() => {
        setDisplayedChars((prev) => Math.min(totalLength, prev + 1));
      }, effectiveSpeed);
      return () => clearTimeout(timer);
    } else {
      // Completed typing! Dissolve the wireframe box and cursor cleanly
      if (dragBoxRef.current && cursorRef.current) {
        gsap.to([dragBoxRef.current, cursorRef.current], {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            if (dragBoxRef.current) dragBoxRef.current.style.display = "none";
            if (cursorRef.current) cursorRef.current.style.display = "none";
            setStatus("COMPLETED");
            if (onComplete) onComplete();
          },
        });
      } else {
        setStatus("COMPLETED");
        if (onComplete) onComplete();
      }
    }
  }, [status, displayedChars, totalLength, typingSpeed, onComplete]);

  // Render the typed text based on displayedChars count
  const renderedContent = useMemo(() => {
    // If not mounted (SSR), render complete content for SEO and test suites
    if (!hasMounted) {
      if (segments && segments.length > 0) {
        return segments.map((seg, i) =>
          seg.bold ? (
            <strong key={i} className={`font-semibold text-white ${seg.className || ""}`}>
              {seg.text}
            </strong>
          ) : (
            <span key={i} className={seg.className || ""}>
              {seg.text}
            </span>
          )
        );
      }
      return text || children;
    }

    // Client-side rendering based on displayedChars
    if (segments && segments.length > 0) {
      let remaining = displayedChars;
      return segments.map((seg, idx) => {
        if (remaining <= 0) return null;
        const take = Math.min(remaining, seg.text.length);
        const sub = seg.text.slice(0, take);
        remaining -= take;

        return seg.bold ? (
          <strong key={idx} className={`font-semibold text-white ${seg.className || ""}`}>
            {sub}
          </strong>
        ) : (
          <span key={idx} className={seg.className || ""}>
            {sub}
          </span>
        );
      });
    }

    return fullText.slice(0, displayedChars);
  }, [hasMounted, segments, text, children, displayedChars, fullText]);

  const containerClasses = fitContent
    ? `relative inline-block ${wrapperClassName}`
    : `relative inline-block w-full max-w-full ${wrapperClassName}`;

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      data-human-type-frame={frameLabel}
    >
      {/* Figma Selection Wireframe Box during dragging & typing */}
      <div
        ref={dragBoxRef}
        className="absolute top-0 left-0 pointer-events-none z-20"
        style={{
          display: status === "IDLE" ? "none" : "block",
          border: `1px dashed ${agentColor}`,
          backgroundColor: `${agentColor}0a`,
          borderRadius: "6px",
        }}
        aria-hidden="true"
      >
        {/* 4 Corner Nodes */}
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

        {/* Dynamic Dimension Tag */}
        <div
          className="absolute -top-5 left-0 px-2 py-0.2 rounded text-[9px] font-mono text-white flex items-center gap-1 shadow-sm select-none whitespace-nowrap"
          style={{ backgroundColor: agentColor }}
        >
          <span>[T]</span>
          <span>{frameLabel}</span>
          <span ref={dimensionTagRef} className="opacity-80">
            0 × 0
          </span>
        </div>
      </div>

      {/* Simulated Human Drag Mouse Cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 pointer-events-none z-50 items-start gap-1 will-change-transform"
        style={{ display: "none" }}
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
          className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-tight text-[#08080A] shadow-md select-none whitespace-nowrap"
          style={{ backgroundColor: agentColor }}
        >
          {agentName}: {status === "DRAGGING" ? "Draw Box" : "Type"}
        </div>
      </div>

      {/* The Typography Element with Ghost Placeholder for Perfect Zero-Shift Layout */}
      <Component className={className}>
        {renderedContent}
        {/* Blinking Typing Cursor Caret */}
        {hasMounted && status === "TYPING" && (
          <span
            className="inline-block w-[2px] h-[0.9em] ml-0.5 translate-y-[1px] animate-pulse rounded-sm"
            style={{ backgroundColor: agentColor }}
            aria-hidden="true"
          />
        )}
        {/* Invisible Ghost Text maintains 100% stable geometry before & during typing */}
        {hasMounted && status !== "COMPLETED" && (
          <span className="invisible select-none pointer-events-none" aria-hidden="true">
            {fullText.slice(displayedChars)}
          </span>
        )}
      </Component>
    </div>
  );
};
