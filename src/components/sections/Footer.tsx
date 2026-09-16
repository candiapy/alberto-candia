"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/40 bg-surface-container-lowest mt-space-2xl">
      <div className="max-w-[1200px] mx-auto px-margin md:px-margin-desktop py-space-xl flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg border-b border-outline-variant/30">
          <div className="flex flex-col sm:flex-row sm:items-center gap-space-md">
            <span className="font-headline-md text-headline-md text-on-surface">
              {personalInfo.name}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 font-label-caps text-label-caps border border-secondary/30 bg-secondary-container/40 text-on-secondary-fixed-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Disponible para trabajar
            </span>
          </div>
          <div className="flex items-center gap-space-sm font-label-code text-label-code text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
            <span>{personalInfo.location}</span>
            <span className="text-outline-variant">—</span>
            <span>{personalInfo.timezone}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md font-body-md text-body-md text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-space-lg">
            <MagneticButton
              href={personalInfo.github}
              className="hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4 hover:decoration-primary font-body-md text-body-md"
              strength={0.15}
            >
              GitHub
            </MagneticButton>
            <MagneticButton
              href={personalInfo.linkedin}
              className="hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4 hover:decoration-primary font-body-md text-body-md"
              strength={0.15}
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary transition-colors font-label-code text-label-code"
              strength={0.15}
            >
              {personalInfo.email}
            </MagneticButton>
            <MagneticButton
              href={`https://wa.me/595971645923`}
              className="hover:text-primary transition-colors font-label-code text-label-code"
              strength={0.15}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.phone}
            </MagneticButton>
          </div>
          <div className="font-label-code text-label-code text-on-surface-variant/80">
            © 2025 Alberto Candia. Editorial Portfolio.
          </div>
        </div>
      </div>
    </footer>
  );
}