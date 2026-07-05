"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const categories = [
  {
    name: "Melaminas",
    description: "Acabados decorativos de alta resistencia",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    href: "#",
  },
  {
    name: "MDF",
    description: "Tablero de fibra de densidad media",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    href: "#",
  },
  {
    name: "Triplay",
    description: "Tablero de madera contrachapada",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    href: "#",
  },
  {
    name: "OSB",
    description: "Tablero orientado de fibras",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    href: "#",
  },
  {
    name: "Maderas",
    description: "Madera natural en diversas especies",
    image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600",
    href: "#",
  },
  {
    name: "Pisos",
    description: "Pisos de madera y laminados",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600",
    href: "#",
  },
  {
    name: "Deck",
    description: "Madera para exteriores y terrazas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600",
    href: "#",
  },
  {
    name: "Laminados",
    description: "Superficies decorativas de alta calidad",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600",
    href: "#",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="section-padding bg-neutral-50">
      <div className="container-custom mx-auto">
        <SectionReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              Catalogo
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Nuestras categorias
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Todo lo que necesitas para tu proyecto en un solo lugar
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <SectionReveal key={category.name} delay={index * 0.08}>
              <a
                href={category.href}
                className="group relative block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-1 text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {category.description}
                  </p>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}