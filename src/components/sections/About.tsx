"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";

export default function About() {
  return (
    <section
      className="py-space-xl bg-surface-container-lowest my-space-lg rounded-xl p-space-md md:p-space-xl"
      id="sobre-mi"
    >
      <div className="max-w-4xl">
        <ScrollReveal delay={0} duration={700}>
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="font-label-code text-label-code text-primary font-medium tracking-wider">
              01
            </span>
            <span className="text-outline-variant font-label-code">/</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Un poco sobre mí
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg pt-space-xs">
          <ScrollReveal delay={100} duration={800} className="md:col-span-7">
            <div className="flex flex-col space-y-space-md">
              <TextReveal
                splitBy="words"
                stagger={30}
                delay={0}
                as="p"
                className="font-body-lg text-body-lg text-on-surface leading-relaxed font-normal"
              >
                Soy estudiante de la carrera de{" "}
                <strong className="font-semibold text-primary">
                  Licenciatura en Análisis de Sistemas
                </strong>{" "}
                con un enfoque decidido en el desarrollo web frontend. Construyo
                aplicaciones modernas centradas en la consistencia de diseño,
                usando de forma cotidiana React, TypeScript y Tailwind CSS.
              </TextReveal>

              <TextReveal
                splitBy="words"
                stagger={25}
                delay={100}
                as="p"
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
              >
                Concibo el código de interfaz como un punto de encuentro entre
                la rigurosidad lógica de la ingeniería de software y la
                sensibilidad visual del diseño editorial. Mi meta como
                desarrollador trainee es integrarme a un equipo donde pueda
                sumar valor operativo de inmediato, asimilar metodologías ágiles
                y continuar elevando el estándar de mi código.
              </TextReveal>

              <div className="bg-surface-container-low p-space-md rounded-lg mt-space-sm">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    verified
                  </span>
                  <div>
                    <span className="font-label-caps text-label-caps text-primary uppercase font-semibold block mb-1">
                      Búsqueda Activa
                    </span>
                    <TextReveal
                      splitBy="words"
                      stagger={20}
                      delay={0}
                      as="p"
                      className="font-subhead text-body-md text-on-surface leading-normal"
                    >
                      Actualmente buscando mi primera oportunidad laboral formal
                      como{" "}
                      <strong className="font-semibold">
                        desarrollador frontend trainee / junior
                      </strong>{" "}
                      para aportar valor constructivo, aprender mejores
                      prácticas de arquitectura y crecer profesionalmente.
                    </TextReveal>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} duration={800} className="md:col-span-5">
            <div className="bg-surface p-space-md rounded-lg flex flex-col justify-between">
              <div>
                <div className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase pb-space-sm">
                  FICHA TÉCNICA · PERFIL
                </div>
                <div className="space-y-space-sm divide-y-0">
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                      Ubicación
                    </span>
                    <span className="font-subhead text-body-md text-on-surface font-medium">
                      {personalInfo.location}
                    </span>
                    <span className="font-label-code text-[11px] text-on-surface-variant block">
                      (Disponible para trabajo presencial / remoto / híbrido)
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                      Formación Universitaria
                    </span>
                    <span className="font-subhead text-body-md text-on-surface font-medium">
                      Lic. en Análisis de Sistemas
                    </span>
                    <span className="font-label-code text-[11px] text-primary block">
                      En curso · Nivel Superior
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                      Enfoque de Ingeniería
                    </span>
                    <span className="font-subhead text-body-md text-on-surface font-medium">
                      Arquitectura de Componentes, Accesibilidad y Tipografía
                      Web
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                      Idiomas
                    </span>
                    <span className="font-subhead text-body-md text-on-surface font-medium">
                      Español{" "}
                      <span className="text-on-surface-variant font-normal">
                        (Nativo)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
                <span>Última actualización</span>
                <span>Q1 / 2025</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
