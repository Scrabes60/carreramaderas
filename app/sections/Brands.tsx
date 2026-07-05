"use client";

import SectionReveal from "../components/SectionReveal";

const brands = [
  { name: "Kronospan", color: "#0055A4" },
  { name: "Arauco", color: "#E87722" },
  { name: "Duraplay", color: "#1B5E20" },
  { name: "Tecnotabla", color: "#00695C" },
  { name: "Bozovich", color: "#2E7D32" },
  { name: "Formica", color: "#C62828" },
  { name: "GlossMAX", color: "#8D6E63" },
  { name: "MattPlus", color: "#37474F" },
  { name: "FENIX", color: "#212121" },
  { name: "Ralph Wilson", color: "#B71C1C" },
];

export default function Brands() {
  return (
    <section className="section-padding overflow-hidden bg-neutral-50">
      <div className="container-custom mx-auto">
        <SectionReveal>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              Marcas
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Trabajamos con las mejores marcas
            </h2>
          </div>
        </SectionReveal>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-12">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex shrink-0 items-center justify-center rounded-2xl bg-white px-10 py-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}