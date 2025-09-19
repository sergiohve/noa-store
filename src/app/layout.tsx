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
  metadataBase: new URL('https://www.noasotonetworks.cl/'), 
  alternates: {
    canonical: './',
    languages: {
      'es-CL': 'https://www.noasotonetworks.cl/',
    },
  },
  title: {
    default: "Noa Soto Networks",
    template: "%s | Noa Soto Networks",
  },
  description: "Diseñamos y desarrollamos páginas web, e-commerce y aplicaciones móviles. Expertos en soluciones digitales a medida y postventa local en Antofagasta.", // Nueva descripción
  generator: "Next.js",
  applicationName: "Noa Soto Networks",
  keywords: [
    "Noa Soto Networks",
    "diseño web antofagasta",
    "desarrollo web antofagasta",
    "páginas web antofagasta",
    "e-commerce antofagasta",
    "aplicaciones móviles antofagasta",
    "agencia digital antofagasta",
    "desarrollo de software antofagasta",
    "soluciones digitales chile",
    "diseñador web antofagasta"
  ], 
  authors: [{ name: "Noa Soto Networks", url: "https://www.noasotonetworks.cl/" }],
  creator: 'Noa Soto Networks',
  publisher: 'Noa Soto Networks',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo' },
      { url: '/favicon.ico' },
      { url: '/apple-touch-icon.png', rel: 'apple-touch-icon' },
    ],
  },

  openGraph: {
    title: "Noa Soto Networks | Diseño y Desarrollo Digital en Antofagasta",
    description: "Expertos en la creación de páginas web, tiendas online y apps móviles. Acompañamos tu proyecto de principio a fin.", // Nueva descripción
    url: "https://www.noasotonetworks.cl/",
    siteName: "Noa Soto Networks",
    images: [
      {
        url: "https://www.noasotonetworks.cl/logo-og.png", 
        width: 1200,
        height: 630,
        alt: "Logo de Noa Soto Networks",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Noa Soto Networks | Diseño y Desarrollo Web en Antofagasta",
    description: "Somos un equipo antofagastino con más de 10 años de experiencia diseñando y desarrollando soluciones digitales.", // Nueva descripción
    images: ["https://www.noasotonetworks.cl/logo-twitter.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}