"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/40">
      <div className="h-16 max-w-[1200px] mx-auto px-margin md:px-margin-desktop flex items-center justify-between">
        <Link
          className="flex items-center gap-space-sm group text-on-surface hover:text-primary transition-colors"
          href="#sobre-mi"
        >
          <span className="font-subhead text-subhead font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
            Alberto Candia
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 border border-outline-variant/60 font-label-caps text-label-caps text-on-surface-variant bg-surface-container-low uppercase">
            dev
          </span>
        </Link>
        <div className="flex items-center gap-space-lg">
          <nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-primary font-medium underline decoration-primary underline-offset-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`font-body-md text-body-md transition-colors ${
                  pathname === link.href || (link.href !== "#sobre-mi" && pathname.startsWith(link.href))
                    ? "text-primary font-medium underline decoration-primary underline-offset-4"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-space-md pl-space-md border-l border-outline-variant/40">
            <MagneticButton
              href="https://github.com/candiapy"
              className="hidden sm:inline-flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors"
              strength={0.15}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </MagneticButton>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}