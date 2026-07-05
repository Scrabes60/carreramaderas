"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, FileText } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-neutral-900" />

      <div className="container-custom relative mx-auto flex min-h-screen items-center px-4 py-32 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-wood backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-wood" />
              Distribuidor autorizado de las mejores marcas
            </motion.div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Madera y tableros
              <br />
              <span className="text-wood">para cada proyecto.</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white/70 sm:text-xl">
              Distribuimos madera, tableros y productos para carpinteria con
              entrega a domicilio. Solicita tu cotizacion y recibe asesoria
              personalizada de expertos.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/525539198342"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wood group"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar cotizacion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                <FileText className="h-5 w-5" />
                Ver catalogo
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/50">Proyectos atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/50">Productos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-sm text-white/50">Cotizacion express</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Carpinteria moderna con maderas de calidad"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wood/10">
                  <MessageCircle className="h-6 w-6 text-wood" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    Cotizacion rapida
                  </div>
                  <div className="text-xs text-neutral-500">
                    Responde en minutos
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}