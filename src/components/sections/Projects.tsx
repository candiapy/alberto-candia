"use client";

import { projects, personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const statusStyles = {
  live: "bg-secondary-container/50 text-on-secondary-fixed-variant",
  "open-code": "bg-surface-container-high text-on-surface-variant",
};

export default function Projects() {
  return (
    <section className="py-space-xl" id="proyectos">
      <ScrollReveal delay={0} duration={700}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg gap-space-xs">
          <div>
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-label-code text-label-code text-primary font-medium tracking-wider">04</span>
              <span className="text-outline-variant font-label-code">/</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Proyectos seleccionados</h2>
            </div>
            <TextReveal splitBy="words" stagger={25} delay={100} as="p" className="font-body-md text-body-md text-on-surface-variant">
              Soluciones construidas con foco en calidad de código, interactividad y precisión de maquetado.
            </TextReveal>
          </div>
          <MagneticButton
            href={personalInfo.github}
            className="font-label-code text-label-code text-primary hover:underline underline-offset-4 flex items-center gap-1"
            strength={0.2}
          >
            <span>Ver todos en GitHub</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </MagneticButton>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {projects.map((project) => (
          <ScrollReveal key={project.id} delay={150 + project.id * 100} duration={800}>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 border border-transparent hover:border-primary/20">
              <div>
                <div className="flex items-center justify-between pb-space-sm">
                  <span className="font-label-code text-label-code text-primary font-bold">
                    {project.id.toString().padStart(2, "0")} // REPO
                  </span>
                  <span className={`font-label-caps text-[10px] px-2 py-0.5 rounded font-medium ${statusStyles[project.status]}`}>
                    {project.status === "live" ? "LIVE" : "OPEN CODE"}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <TextReveal splitBy="words" stagger={20} delay={0} as="p" className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                  {project.description}
                </TextReveal>
                <div className="pt-space-md flex flex-wrap gap-1.5">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="font-label-code text-[11px] bg-surface-container-low px-2 py-0.5 rounded text-on-surface hover:bg-primary/10 hover:text-primary transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-space-lg flex items-center justify-between font-label-code text-label-code">
                <MagneticButton
                  href={project.codeUrl}
                  className="text-on-surface-variant hover:text-primary flex items-center gap-1"
                  strength={0.15}
                >
                  <span>Código</span>
                  <span className="material-symbols-outlined text-[14px]">terminal</span>
                </MagneticButton>
                <MagneticButton
                  href={project.demoUrl}
                  className="text-primary font-medium flex items-center gap-1"
                  strength={0.15}
                >
                  <span>Ver Demo</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}