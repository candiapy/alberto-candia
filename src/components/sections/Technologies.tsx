"use client";

import { techItems } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";

export default function Technologies() {
  const [featuredTechs, otherTechs] = [techItems.slice(0, 2), techItems.slice(2)];

  return (
    <section className="py-space-xl" id="tecnologias">
      <ScrollReveal delay={0} duration={700}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-label-code text-label-code text-primary font-medium tracking-wider">02</span>
              <span className="text-outline-variant font-label-code">/</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Tecnologías & Herramientas</h2>
            </div>
            <TextReveal splitBy="words" stagger={25} delay={100} as="p" className="font-body-md text-body-md text-on-surface-variant">
              Herramientas que utilizo activamente en proyectos personales, académicos y prácticas de desarrollo.
            </TextReveal>
          </div>
          <div className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-low px-3 py-1 rounded">
            Sin porcentajes arbitrarios · Uso práctico
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
        {featuredTechs.map((tech, index) => (
          <ScrollReveal key={index} delay={150 + index * 100} duration={800}>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-primary/20">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className={`w-8 h-8 rounded flex items-center justify-center font-label-code text-subhead font-bold ${tech.color || "bg-primary-container text-on-primary"}`}>
                      {tech.icon}
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">{tech.label}</span>
                  </div>
                  <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded uppercase font-semibold ${tech.categoryColor || "bg-primary/10 text-primary"}`}>
                    {tech.category}
                  </span>
                </div>
                <TextReveal splitBy="words" stagger={20} delay={0} as="p" className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-space-xs">
                  {tech.description}
                </TextReveal>
              </div>
              {tech.highlights && (
                <div className="pt-space-md flex items-center gap-space-xs font-label-code text-[12px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  <span>{tech.highlights[0]}</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}

        {otherTechs.map((tech, index) => (
          <ScrollReveal key={index} delay={350 + index * 50} duration={600}>
            <div className="bg-surface-container-lowest p-space-md rounded-lg hover:bg-surface-container-low hover:shadow-md hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-primary/10">
              <div className="flex items-center justify-between mb-1">
                <span className="font-subhead text-body-md font-semibold text-on-surface">{tech.label}</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">{tech.category}</span>
              </div>
              <TextReveal splitBy="words" stagger={15} delay={0} as="p" className="font-body-md text-[13px] text-on-surface-variant leading-snug">
                {tech.description}
              </TextReveal>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}