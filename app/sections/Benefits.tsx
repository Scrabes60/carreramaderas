"use client";

import { Truck, Layers, Headphones, TrendingDown, MessageCircle } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const benefits = [
  {
    icon: Truck,
    title: "Entrega rapida",
    description: "Enviamos tu pedido directo a tu obra o taller en tiempo record.",
  },
  {
    icon: Layers,
    title: "Amplio catalogo",
    description: "Mas de 50 productos de las mejores marcas del mercado.",
  },
  {
    icon: Headphones,
    title: "Asesoria personalizada",
    description: "Te ayudamos a elegir el material ideal para tu proyecto.",
  },
  {
    icon: TrendingDown,
    title: "Precios competitivos",
    description: "Los mejores precios del mercado sin intermediarios.",
  },
  {
    icon: MessageCircle,
    title: "Atencion por WhatsApp",
    description: "Cotiza al instante. Responde en minutos, no en horas.",
  },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <SectionReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              Ventajas
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Por que comprar con nosotros?
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <SectionReveal key={benefit.title} delay={index * 0.1}>
              <div className="group relative rounded-2xl border border-neutral-100 bg-neutral-50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-wood/20 hover:bg-white hover:shadow-xl hover:shadow-wood/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-wood/10">
                  <benefit.icon className="h-6 w-6 text-primary transition-colors group-hover:text-wood" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {benefit.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}