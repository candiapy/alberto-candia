"use client";

import { useEffect, useRef, useState } from "react";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  color?: string;
  opacity?: number;
}

export default function Spotlight({
  children,
  className = "",
  radius = 400,
  color = "#983912",
  opacity = 0.08,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: me.clientX - rect.left,
        y: me.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const gradient = isInside
    ? `radial-gradient(circle ${radius}px at ${mousePos.x}px ${mousePos.y}px, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")}, transparent 70%)`
    : "none";

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: gradient,
        transition: "background 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}