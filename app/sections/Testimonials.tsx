"use client";

import { Star, Quote } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Carpintero",
    company: "Muebles Mendoza",
    text: "Maderas Carrera ha sido clave para mi negocio. La calidad de los materiales es excelente y la entrega siempre es puntual. El asesoramiento tecnico que me brindan me ha ayudado a mejorar mis proyectos.",
    rating: 5,
  },
  {
    name: "Ana Garcia",
    role: "Arquitecta",
    company: "Estudio AG",
    text: "Como arquitecta, necesito materiales de calidad certificada para mis proyectos. Maderas Carrera siempre cumple con los estandares que exijo. Su servicio de cotizacion rapida me ahorra mucho tiempo.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Constructor",
    company: "Constructora Silva",
    text: "Llevamos 3 anos trabajando con ellos y nunca nos han fallado. Los precios son competitivos y el servicio de entrega a domicilio es impecable. Totalmente recomendados.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <SectionReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              Testimonios
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={testimonial.name} delay={index * 0.15}>
              <div className="relative rounded-2xl border border-neutral-100 bg-neutral-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-wood/20 hover:bg-white hover:shadow-xl">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-wood text-wood"
                    />
                  ))}
                </div>

                <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {testimonial.role} &middot; {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}