"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Categorias", href: "#categorias" },
  { name: "Proceso", href: "#proceso" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-white">MC</span>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-lg font-bold leading-tight transition-colors",
                isScrolled ? "text-neutral-900" : "text-white"
              )}
            >
              Maderas
            </span>
            <span
              className={cn(
                "text-sm font-medium leading-tight transition-colors",
                isScrolled ? "text-primary" : "text-wood"
              )}
            >
              Carrera
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-neutral-600" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://wa.me/525539198342"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
              isScrolled
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            )}
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "rounded-lg p-2 lg:hidden",
            isScrolled ? "text-neutral-900" : "text-white"
          )}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-neutral-200 bg-white px-4 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-base font-medium text-neutral-700 transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/525539198342"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}