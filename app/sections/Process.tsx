"use client";

import { FileText, Headphones, CheckCircle, Truck } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Solicita tu cotizacion",
    description:
      "Cuentanos que necesitas por WhatsApp o formulario. Incluye tipo de material, medidas y cantidad.",
  },
  {
    number: "02",
    icon: Headphones,
    title: "Recibe asesoria",
    description:
      "Nuestro equipo te contacta para confirmar detalles, sugerir alternativas y optimizar tu pedido.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Confirmamos tu pedido",
    description:
      "Te enviamos tu cotizacion formal. Al confirmar, procesamos tu orden y coordinamos la entrega.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Entregamos en tu domicilio",
    description:
      "Tu material llega directo a tu obra o taller. Rastreo disponible y entrega puntual garantizada.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        <SectionReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-wood">
              Como funciona
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Proceso simple y rapido
            </h2>
            <p className="mt-4 text-lg text-white/60">
              De la cotizacion a la entrega en 4 pasos
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <div className="absolute top-24 left-0 right-0 hidden h-0.5 bg-white/10 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <SectionReveal key={step.number} delay={index * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <step.icon className="h-8 w-8 text-wood" />
                  </div>

                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-wood px-3 py-1 text-xs font-bold text-white lg:left-auto lg:right-0 lg:translate-x-0">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}