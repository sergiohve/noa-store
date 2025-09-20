import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noasotostore.cl/"),
  alternates: {
    canonical: "./",
    languages: {
      "es-CL": "https://www.noasotostore.cl/",
    },
  },
  title: {
    default: "Noa Soto Store",
    template: "%s | Noa Soto Store",
  },
  description:
    "Tu tienda en línea de confianza. Envíos rápidos y la mejor selección de productos. Calidad y servicio al cliente garantizados.",
  generator: "Next.js",
  applicationName: "Noa Soto Store",
  keywords: [
    "Noa Soto Store",
    "tienda en línea",
    "e-commerce",
    "compras online",
    "productos",
    "ofertas",
    "envíos rápidos",
    "seguridad en línea",
    "mejor precio",
    "variedad de productos",
  ],
  authors: [
    {
      name: "Noa Soto Store",
      url: "https://www.noasotostore.cl/",
    },
  ],
  creator: "Noa Soto Store",
  publisher: "Noa Soto Store",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-noa-header.png" },
      { url: "/favicon.ico" },
      {
        url: "/apple-touch-icon.png",
        rel: "apple-touch-icon",
      },
    ],
  },

  openGraph: {
    title: "Noa Soto Store | Tienda en Línea",
    description:
      "Encuentra una amplia variedad de productos con las mejores ofertas y promociones. Compras seguras y envíos a todo Chile.",
    url: "https://www.noasotostore.cl/",
    siteName: "Noa Soto Store",
    images: [
      {
        url: "/logo-noa-header.png",
        width: 1200,
        height: 630,
        alt: "Logo de Noa Soto Store",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Noa Soto Store | Compras online",
    description:
      "Descubre nuestra selección de productos, desde electrónica hasta moda. ¡Compra fácil y seguro!",
    images: [
      "https://www.noasotostore.cl/logo-twitter.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
