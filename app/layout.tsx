import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maderas Carrera | Madera, Tableros y Productos para Carpinteria",
  description:
    "Distribuidor de madera, tableros y productos para carpinteria. Solicita tu cotizacion por WhatsApp. Entrega rapida, precios competitivos y asesoria personalizada.",
  keywords: [
    "madera",
    "tableros",
    "melamina",
    "MDF",
    "triplay",
    "OSB",
    "carpinteria",
    "pisos",
    "deck",
    "laminados",
    "distribuidor madera",
    "maderas Mexico",
  ],
  authors: [{ name: "Maderas Carrera" }],
  creator: "Maderas Carrera",
  metadataBase: new URL("https://maderascarrera.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://maderascarrera.com",
    siteName: "Maderas Carrera",
    title: "Maderas Carrera | Madera, Tableros y Productos para Carpinteria",
    description:
      "Distribuidor de madera, tableros y productos para carpinteria. Solicita tu cotizacion por WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maderas Carrera - Madera y tableros para cada proyecto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maderas Carrera | Madera, Tableros y Productos para Carpinteria",
    description:
      "Distribuidor de madera, tableros y productos para carpinteria. Solicita tu cotizacion por WhatsApp.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "TU-CODIGO-DE-VERIFICACION",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maderas Carrera",
  description:
    "Distribuidor de madera, tableros y productos para carpinteria en Mexico",
  url: "https://maderascarrera.com",
  telephone: "+525539198342",
  email: "contacto@maderascarrera.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}