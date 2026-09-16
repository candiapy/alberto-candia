"use client";

import { coreStack, personalInfo } from "@/lib/data";
import AnimatedGradient from "@/components/ui/AnimatedGradient";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative py-space-xl md:py-space-2xl overflow-hidden">
      <AnimatedGradient opacity={0.12} />
      <FloatingParticles count={15} color="#983912" size={2} speed={0.2} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
        <div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
          <ScrollReveal delay={0} duration={800}>
            <div className="inline-flex items-center gap-space-sm bg-surface-container-low px-3 py-1.5 rounded">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant uppercase">
                Frontend Developer · Capiatá, Paraguay
              </span>
              <span className="text-outline-variant hidden sm:inline">—</span>
              <span className="font-label-caps text-label-caps text-secondary hidden sm:inline font-medium">
                Disponible para nuevas oportunidades
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} duration={900}>
            <TextReveal splitBy="words" stagger={60} delay={100} as="h1" className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-[1.08] mt-space-xs">
              Hola, soy <span className="italic text-primary font-normal">Alberto</span>.
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal delay={300} duration={800}>
            <TextReveal splitBy="words" stagger={40} delay={0} as="p" className="font-subhead text-subhead text-primary-container font-medium tracking-normal">
              Desarrollador Frontend Trainee especializado en React y TypeScript.
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal delay={500} duration={900}>
            <TextReveal splitBy="words" stagger={30} delay={0} as="p" className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed pt-space-xs">
              Soy estudiante de Licenciatura en Análisis de Sistemas y estoy enfocado en construir interfaces web modernas, interactivas y responsivas con código limpio, accesibilidad estructural y atención minuciosa al detalle visual.
            </TextReveal>
          </ScrollReveal>

          <ScrollReveal delay={700} duration={800}>
            <div className="flex flex-wrap items-center gap-space-md pt-space-md w-full sm:w-auto">
              <MagneticButton
                href="#proyectos"
                className="bg-inverse-surface text-inverse-on-surface hover:bg-primary px-space-md py-space-sm font-subhead text-body-md transition-colors rounded"
                strength={0.25}
              >
                <span>Ver proyectos</span>
                <span className="material-symbols-outlined text-[18px] ml-1">arrow_downward</span>
              </MagneticButton>

              <MagneticButton
                href="#contacto"
                className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-space-md py-space-sm font-subhead text-body-md transition-colors rounded"
                strength={0.25}
              >
                <span>Iniciar contacto</span>
                <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </MagneticButton>

              <a
                className="inline-flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors py-space-sm sm:ml-space-sm"
                href={personalInfo.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>github.com/candiapy</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={900} duration={800}>
            <div className="pt-space-lg w-full">
              <div className="bg-surface-container-low p-space-md rounded flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Core Stack:</span>
                  <div className="flex items-center gap-1.5">
                    {coreStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`bg-surface px-2 py-0.5 font-label-code text-label-code font-medium rounded ${tech.bg} ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-label-code text-label-code text-on-surface-variant">status: ready_to_work</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full mt-space-lg lg:mt-0">
          <ScrollReveal delay={200} duration={1000} className="w-full">
            <div className="w-full max-w-[360px] flex flex-col">
              <div className="aspect-[4/5] w-full bg-surface-container-high rounded-xl overflow-hidden shadow-2xl relative">
                <img
                  src="/perfil.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  width={360}
                  height={450}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="flex items-center justify-between pt-space-xs px-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">
                  Alberto M. Candia Galeano — 2025
                </span>
                <span className="font-label-code text-[11px] text-primary">
                  frontend_trainee.tsx
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}