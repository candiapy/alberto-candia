"use client";

import { experienceItems } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";

const typeStyles = {
  work: {
    labelColor: "text-primary",
    accentColor: "bg-primary-container/20 text-on-primary",
    borderColor: "border-primary/20",
  },
  education: {
    labelColor: "text-secondary",
    accentColor: "bg-secondary-container/20 text-on-secondary",
    borderColor: "border-secondary/20",
  },
  "self-taught": {
    labelColor: "text-tertiary",
    accentColor: "bg-tertiary-container/20 text-on-tertiary",
    borderColor: "border-tertiary/20",
  },
};

export default function Experience() {
  return (
    <section className="py-space-xl" id="experiencia">
      <ScrollReveal delay={0} duration={700}>
        <div className="flex items-center gap-space-sm mb-space-lg">
          <span className="font-label-code text-label-code text-primary font-medium tracking-wider">03</span>
          <span className="text-outline-variant font-label-code">/</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Experiencia & Trayectoria</h2>
        </div>
      </ScrollReveal>

      <div className="space-y-space-md">
        {experienceItems.map((item, index) => {
          const styles = typeStyles[item.type];
          return (
            <ScrollReveal key={index} delay={100 + index * 150} duration={800}>
              <div className={`bg-surface-container-low p-space-lg rounded-xl border ${styles.borderColor} hover:shadow-xl hover:shadow-primary/5 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-space-xs mb-space-xs">
                  <div>
                    <span className={`font-label-caps text-label-caps font-semibold uppercase tracking-wider ${styles.labelColor}`}>
                      {item.title}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">{item.role}</h3>
                  </div>
                  <span className="font-label-code text-label-code text-on-surface-variant bg-surface px-2.5 py-1 rounded self-start md:self-auto">
                    {item.period}
                  </span>
                </div>
                <TextReveal splitBy="words" stagger={20} delay={0} as="p" className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed mt-space-sm">
                  {item.description}
                </TextReveal>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-space-md">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-surface-container-highest px-2 py-0.5 font-label-code text-[11px] text-on-surface rounded hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}