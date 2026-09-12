"use client";

import { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // degrees of tilt (default 12)
}

export function TiltCard({ children, className = "", intensity = 12 }: TiltCardProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [shaking, setShaking] = useState(false);
  const shakeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    // Play shake once on enter
    setShaking(true);
    if (shakeTimeoutRef.current) clearTimeout(shakeTimeoutRef.current);
    shakeTimeoutRef.current = setTimeout(() => setShaking(false), 500);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = innerRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 → +0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `
        perspective(900px)
        rotateX(${-y * intensity}deg)
        rotateY(${x * intensity}deg)
        scale(1.03)
      `;
      card.style.transition = "transform 0.08s ease";

      // Subtle highlight shift
      card.style.backgroundImage = `radial-gradient(
        circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%,
        color-mix(in oklab, rgb(var(--accentA)) 6%, transparent),
        transparent 65%
      )`;
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    const card = innerRef.current;
    if (!card) return;
    card.style.transform = "";
    card.style.backgroundImage = "";
    card.style.transition = "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)";
  }, []);

  return (
    <div
      ref={outerRef}
      className={`${shaking ? "card-shake" : ""} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform" }}
    >
      <div
        ref={innerRef}
        style={{ willChange: "transform", borderRadius: "inherit", height: "100%" }}
      >
        {children}
      </div>
    </div>
  );
}
