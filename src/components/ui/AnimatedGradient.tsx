"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedGradient({
  className = "",
  opacity = 0.15,
}: {
  className?: string;
  opacity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const colors = [
      { r: 152, g: 57, b: 18 },
      { r: 0, g: 95, b: 121 },
      { r: 80, g: 99, b: 88 },
    ];

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: 150 + Math.random() * 200,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: colors[i % colors.length],
      phase: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      timeRef.current += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        const breathe = Math.sin(timeRef.current + blob.phase) * 0.15 + 1;
        const currentR = blob.r * breathe;

        if (blob.x - currentR > width) blob.x = -currentR;
        if (blob.x + currentR < 0) blob.x = width + currentR;
        if (blob.y - currentR > height) blob.y = -currentR;
        if (blob.y + currentR < 0) blob.y = height + currentR;

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, currentR
        );
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity})`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, currentR, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          const dx = blobs[i].x - blobs[j].x;
          const dy = blobs[i].y - blobs[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 350;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * opacity * 0.3;
            ctx.strokeStyle = `rgba(152, 57, 18, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(blobs[i].x, blobs[i].y);
            ctx.lineTo(blobs[j].x, blobs[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [opacity, prefersReducedMotion, mounted]);

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    />
  );
}