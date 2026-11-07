"use client";

import React, { useEffect, useRef, useState } from "react";

interface AgentParticle {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  angle: number;
  actionText: string;
  offsetX: number;
  offsetY: number;
}

export const MultiplayerSwarmCursors: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const userMouseRef = useRef({ x: 400, y: 300, active: false, lastMove: Date.now() });
  const scrollRef = useRef({ lastY: 0, deltaY: 0 });

  const [, setRenderTrigger] = useState(0);

  const agentsRef = useRef<AgentParticle[]>([
    {
      id: "type",
      name: "Type",
      color: "#FBBF24",
      x: 200,
      y: 200,
      vx: 0,
      vy: 0,
      targetX: 200,
      targetY: 200,
      angle: 0,
      actionText: "Aligning",
      offsetX: -80,
      offsetY: -60,
    },
    {
      id: "pixel",
      name: "Pixel",
      color: "#34D399",
      x: 500,
      y: 250,
      vx: 0,
      vy: 0,
      targetX: 500,
      targetY: 250,
      angle: 0,
      actionText: "Rendering",
      offsetX: 70,
      offsetY: -50,
    },
    {
      id: "motion",
      name: "Motion",
      color: "#F472B6",
      x: 800,
      y: 220,
      vx: 0,
      vy: 0,
      targetX: 800,
      targetY: 220,
      angle: 0,
      actionText: "Tracking",
      offsetX: 90,
      offsetY: 70,
    },
    {
      id: "claude",
      name: "Claude",
      color: "#38BDF8",
      x: 350,
      y: 450,
      vx: 0,
      vy: 0,
      targetX: 350,
      targetY: 450,
      angle: 0,
      actionText: "Reviewing",
      offsetX: -90,
      offsetY: 60,
    },
    {
      id: "code",
      name: "Code",
      color: "#A78BFA",
      x: 700,
      y: 400,
      vx: 0,
      vy: 0,
      targetX: 700,
      targetY: 400,
      angle: 0,
      actionText: "Optimizing",
      offsetX: 0,
      offsetY: 100,
    },
  ]);

  useEffect(() => {
    // 1. Track real user mouse movements
    const handleMouseMove = (e: MouseEvent) => {
      userMouseRef.current.x = e.clientX;
      userMouseRef.current.y = e.clientY;
      userMouseRef.current.active = true;
      userMouseRef.current.lastMove = Date.now();
    };

    // 2. Track scroll impulses to drift swarm with page velocity
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollRef.current.deltaY = currentScrollY - scrollRef.current.lastY;
      scrollRef.current.lastY = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationFrameId: number;
    let time = 0;

    // 3. Autonomous Swarm & Physics Engine Loop (60 FPS)
    const updatePhysics = () => {
      time += 0.02;
      const now = Date.now();
      const userActive = userMouseRef.current.active && now - userMouseRef.current.lastMove < 2500;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      agentsRef.current.forEach((agent, idx) => {
        // Target calculation:
        // If user is actively moving mouse, swarm clusters around user cursor with dynamic spring offset
        // If user is idle, agents perform organic autonomous wandering around canvas
        if (userActive) {
          const orbitAngle = time * 0.8 + (idx * Math.PI * 2) / 5;
          const radius = 60 + (idx % 3) * 35;
          agent.targetX = userMouseRef.current.x + Math.cos(orbitAngle) * radius + agent.offsetX * 0.4;
          agent.targetY = userMouseRef.current.y + Math.sin(orbitAngle) * radius + agent.offsetY * 0.4;
        } else {
          // Autonomous Lissajous & Perlin wandering path across viewport
          const wx = Math.sin(time * 0.5 + idx * 1.6) * (screenW * 0.35);
          const wy = Math.cos(time * 0.4 + idx * 2.1) * (screenH * 0.28);
          agent.targetX = screenW * 0.5 + wx + agent.offsetX;
          agent.targetY = screenH * 0.45 + wy + agent.offsetY;
        }

        // Apply scroll impulse
        if (Math.abs(scrollRef.current.deltaY) > 0.1) {
          agent.vy += scrollRef.current.deltaY * 0.08;
          scrollRef.current.deltaY *= 0.85; // damp scroll impulse
        }

        // Spring physics (Acceleration -> Velocity -> Position)
        const spring = 0.035;
        const damping = 0.84;

        const ax = (agent.targetX - agent.x) * spring;
        const ay = (agent.targetY - agent.y) * spring;

        agent.vx = (agent.vx + ax) * damping;
        agent.vy = (agent.vy + ay) * damping;

        agent.x += agent.vx;
        agent.y += agent.vy;

        // Boundary reflection dampening
        if (agent.x < 20) { agent.x = 20; agent.vx *= -0.5; }
        if (agent.x > screenW - 60) { agent.x = screenW - 60; agent.vx *= -0.5; }
        if (agent.y < 20) { agent.y = 20; agent.vy *= -0.5; }
        if (agent.y > screenH - 60) { agent.y = screenH - 60; agent.vy *= -0.5; }

        // Dynamic Angle Rotation Calculation based on movement vector (atan2)
        const speed = Math.hypot(agent.vx, agent.vy);
        if (speed > 0.4) {
          // Direct arrow heading in velocity direction
          const targetAngle = (Math.atan2(agent.vy, agent.vx) * 180) / Math.PI + 90;
          // Smooth angle interpolation
          let angleDiff = targetAngle - agent.angle;
          while (angleDiff > 180) angleDiff -= 360;
          while (angleDiff < -180) angleDiff += 360;
          agent.angle += angleDiff * 0.18;
        }

        // Direct DOM update via ref for 60 FPS performance without React re-render lag
        const el = document.getElementById(`agent-cursor-particle-${agent.id}`);
        const arrowEl = document.getElementById(`agent-arrow-${agent.id}`);
        if (el) {
          el.style.transform = `translate3d(${agent.x}px, ${agent.y}px, 0)`;
        }
        if (arrowEl) {
          arrowEl.style.transform = `rotate(${agent.angle}deg)`;
        }
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {agentsRef.current.map((agent) => (
        <div
          key={agent.id}
          id={`agent-cursor-particle-${agent.id}`}
          className="absolute top-0 left-0 flex items-start gap-1 will-change-transform opacity-85 transition-opacity hover:opacity-100"
          style={{
            transform: `translate3d(${agent.x}px, ${agent.y}px, 0)`,
          }}
        >
          {/* Dynamically Rotating Figma Arrow Pointer */}
          <div
            id={`agent-arrow-${agent.id}`}
            className="transition-transform duration-75 will-change-transform origin-top-left"
            style={{
              transform: `rotate(${agent.angle}deg)`,
            }}
          >
            <svg
              className="w-4 h-4 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"
              style={{ color: agent.color }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 0l16 12-7 2-3 8z" />
            </svg>
          </div>

          {/* Named Badge Pill with Contextual Micro-Action */}
          <div
            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight text-[#08080A] shadow-lg select-none"
            style={{ backgroundColor: agent.color }}
          >
            <span>{agent.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/40 animate-ping" />
          </div>
        </div>
      ))}
    </div>
  );
};
