"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  splitBy?: "words" | "chars" | "lines";
  threshold?: number;
  rootMargin?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  stagger = 50,
  splitBy = "words",
  threshold = 0.1,
  rootMargin = "0px 0px -20px 0px",
  as: Component = "span",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isString = typeof children === "string";

  const hasHtml = isString && (children as string).includes("<");

  useEffect(() => {
    if (isString && !hasHtml) {
      const text = children as string;
      if (splitBy === "words") {
        setItems(text.trim().split(/\s+/).filter(Boolean));
      } else if (splitBy === "chars") {
        setItems(text.split(""));
      } else {
        setItems(text.split("\n"));
      }
    }
  }, [children, splitBy, isString, hasHtml]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, prefersReducedMotion]);

  const baseStyle = {
    display: "inline-block",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(1.2em)",
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
  } as React.CSSProperties;

  if (prefersReducedMotion || hasHtml || !isString) {
    return (
      <Component ref={ref} className={className} style={{ display: "inline-block" }}>
        {children}
      </Component>
    );
  }

  const wordStyle = {
    display: "inline-block",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(1.2em)",
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
    marginRight: "0.25em",
  } as React.CSSProperties;

  return (
    <Component ref={ref} className={className} style={{ display: "inline-block" }}>
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            ...wordStyle,
            transitionDelay: `${index * stagger + delay}ms`,
            marginRight: index === items.length - 1 ? 0 : "0.25em",
          }}
        >
          {item}
        </span>
      ))}
    </Component>
  );
}