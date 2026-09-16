"use client";

import { useState } from "react";
import { contactInfo, personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-space-xl md:py-space-2xl bg-surface-container-lowest rounded-xl p-space-md md:p-space-xl my-space-lg" id="contacto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <ScrollReveal delay={0} duration={800} className="lg:col-span-6">
          <div className="flex flex-col space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-code text-label-code text-primary font-medium tracking-wider">05</span>
              <span className="text-outline-variant font-label-code">/</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Contacto</h2>
            </div>
            <TextReveal splitBy="words" stagger={30} delay={100} as="p" className="font-subhead text-subhead text-on-surface font-medium leading-snug">
              ¿Tienes una vacante trainee o te interesa conversar sobre algún proyecto técnico? Mi bandeja de entrada siempre está abierta.
            </TextReveal>
            <TextReveal splitBy="words" stagger={25} delay={200} as="p" className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Estoy disponible para sumarme a equipos de producto, agencias digitales o empresas de software que busquen un desarrollador disciplinado, proactivo y comprometido con la mejora constante.
            </TextReveal>
            <div className="space-y-space-sm pt-space-xs">
              {contactInfo.map((contact, index) => (
                <MagneticButton
                  key={index}
                  href={contact.href}
                  className="bg-surface p-space-sm rounded-lg flex items-center justify-between group hover:bg-surface-container-low hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                  strength={0.15}
                  target={contact.type !== "email" ? "_blank" : undefined}
                  rel={contact.type !== "email" ? "noopener noreferrer" : undefined}
                >
                  <div className="flex items-center gap-space-sm">
                    <span className={`material-symbols-outlined text-[20px] ${contact.color}`}>{contact.icon}</span>
                    <div>
                      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                        {contact.label}
                      </span>
                      <span
                        className={
                          contact.type === "phone"
                            ? "font-label-code text-body-md text-on-surface font-medium select-all cursor-pointer"
                            : contact.type === "email"
                            ? "font-label-code text-body-md text-on-surface font-medium select-all cursor-pointer"
                            : "font-body-md text-body-md text-on-surface font-medium"
                        }
                        onClick={contact.type === "phone" ? handleCopyPhone : contact.type === "email" ? () => navigator.clipboard.writeText(personalInfo.email) : undefined}
                      >
                        {contact.value}
                      </span>
                    </div>
                  </div>
                  {contact.type !== "email" && contact.type !== "phone" && (
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary transition-colors">
                      arrow_outward
                    </span>
                  )}
                  {contact.type === "phone" && (
                    <button
                      className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-caps text-label-caps uppercase rounded transition-colors"
                      onClick={handleCopyPhone}
                      type="button"
                    >
                      {copied ? "Copiado!" : "Copiar"}
                    </button>
                  )}
                </MagneticButton>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} duration={800} className="lg:col-span-6">
          <div className="bg-surface p-space-lg rounded-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700">
            <div className="pb-space-sm">
              <span className="font-label-caps text-label-caps text-primary uppercase font-semibold">Disponibilidad</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Listo para empezar</h3>
            </div>
            <div className="space-y-space-md">
              <div className="bg-surface-container-low p-space-md rounded-lg">
                <div className="flex items-center gap-space-sm mb-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                  <span className="font-label-caps text-label-caps text-primary uppercase font-semibold">Horario preferido</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Lunes a Viernes · 08:00 - 18:00 (GMT-4)
                </p>
                <p className="font-label-code text-[11px] text-on-surface-variant mt-1">
                  Flexible para entrevistas técnicas y reuniones
                </p>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg">
                <div className="flex items-center gap-space-sm mb-2">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">work</span>
                  <span className="font-label-caps text-label-caps text-tertiary uppercase font-semibold">Modalidad</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-tertiary-container/50 text-on-tertiary-fixed-variant px-2 py-0.5 font-label-caps text-label-caps rounded">Presencial</span>
                  <span className="bg-tertiary-container/50 text-on-tertiary-fixed-variant px-2 py-0.5 font-label-caps text-label-caps rounded">Remoto</span>
                  <span className="bg-tertiary-container/50 text-on-tertiary-fixed-variant px-2 py-0.5 font-label-caps text-label-caps rounded">Híbrido</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg">
                <div className="flex items-center gap-space-sm mb-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">rocket_launch</span>
                  <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Disponibilidad</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface font-medium text-primary">
                  Inmediata
                </p>
                <p className="font-label-code text-[11px] text-on-surface-variant mt-1">
                  Período de preaviso: 0 semanas
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}