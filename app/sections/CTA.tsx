"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

export default function CTA() {
  return (
    <section id="contacto" className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark to-primary px-8 py-20 text-center sm:px-16">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-wood/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-wood/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Listo para comenzar tu proyecto?
              </h2>
              <p className="mb-10 text-lg text-white/70">
                Solicita tu cotizacion ahora y recibe asesoria personalizada de
                nuestros expertos. Respuesta en menos de 24 horas.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/525539198342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wood group text-base"
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicitar cotizacion
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+525539198342"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Llamar ahora
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-wood" />
                  Cotizacion gratuita
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-wood" />
                  Sin compromiso
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-wood" />
                  Respuesta en 24h
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}