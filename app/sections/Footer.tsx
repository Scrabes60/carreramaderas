"use client";

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Catalogo", href: "#categorias" },
  { name: "Proceso", href: "#proceso" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

const categories = [
  { name: "Melaminas", href: "#" },
  { name: "MDF", href: "#" },
  { name: "Triplay", href: "#" },
  { name: "OSB", href: "#" },
  { name: "Maderas", href: "#" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom mx-auto section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-white">MC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Maderas</span>
                <span className="text-sm font-medium leading-tight text-wood">
                  Carrera
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Distribuidor de madera, tableros y productos para carpinteria.
              Calidad, confianza y entrega a domicilio.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-wood"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-wood"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Links rapidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-neutral-400 transition-colors hover:text-wood"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Categorias
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-wood"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/525539198342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-wood"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +52 55 3919 8342
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@maderascarrera.com"
                  className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-wood"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  contacto@maderascarrera.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Distribucion en toda la Republica Mexicana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Maderas Carrera. Todos los derechos
              reservados.
            </p>
            <a
              href="#"
              className="text-sm text-neutral-500 transition-colors hover:text-wood"
            >
              Aviso de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}