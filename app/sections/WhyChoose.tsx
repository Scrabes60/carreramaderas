"use client";

import Image from "next/image";
import { Award, Shield, UserCheck, Clock, Truck } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const reasons = [
  {
    icon: Award,
    title: "Mas de 10 anos de experiencia",
    description:
      "Conocemos cada material y su aplicacion ideal. Te asesoramos con conocimiento real.",
  },
  {
    icon: Shield,
    title: "Materiales certificados",
    description:
      "Trabajamos solo con marcas reconocidas que cumplen con estandares de calidad internacional.",
  },
  {
    icon: UserCheck,
    title: "Atencion personalizada",
    description:
      "No somos una tienda mas. Cada cliente recibe atencion directa y asesoria tecnica.",
  },
  {
    icon: Clock,
    title: "Cotizacion en menos de 24h",
    description:
      "Recibe tu cotizacion detallada el mismo dia. Sin esperas, sin complicaciones.",
  },
  {
    icon: Truck,
    title: "Entrega confiable a domicilio",
    description:
      "Llevamos tu material directo a tu obra o taller. Rastreo en tiempo real disponible.",
  },
];

export default function WhyChoose() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <SectionReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                  alt="Taller de carpinteria profesional"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 rounded-2xl bg-primary p-8 text-white shadow-2xl">
                <div className="text-5xl font-bold">10+</div>
                <div className="mt-1 text-sm font-medium opacity-80">
                  Anos de<br />experiencia
                </div>
              </div>
            </div>
          </SectionReveal>

          <div>
            <SectionReveal>
              <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                Sobre nosotros
              </span>
              <h2 className="mb-6 text-3xl font-bold text-neutral-900 sm:text-4xl">
                Por que elegir{" "}
                <span className="text-primary">Maderas Carrera</span>?
              </h2>
              <p className="mb-10 text-lg text-neutral-500">
                Somos distribuidores especializados en madera y tableros.
                Nuestro compromiso es brindarte los mejores materiales con el
                mejor servicio.
              </p>
            </SectionReveal>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <SectionReveal key={reason.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                        {reason.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-500">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}