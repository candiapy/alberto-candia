"use client";

import { useRef, useEffect, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  type = "button",
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const ref = href ? anchorRef : buttonRef;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = me.clientX - rect.left - rect.width / 2;
      const y = me.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, href]);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: isHovering ? "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform",
  };

  if (href) {
    return (
      <a
        ref={anchorRef}
        href={href}
        target={target}
        rel={rel}
        className={`inline-flex items-center justify-center ${className}`}
        style={style}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`inline-flex items-center justify-center ${className}`}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </button>
  );
}