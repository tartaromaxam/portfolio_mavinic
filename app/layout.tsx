import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAVINIC DIGITAL - Contemporary Creative Studio",
  description: "Design digital com precisão estética e estratégia. Sites modernos, minimalistas e estrategicamente projetados para marcas que valorizam presença.",
  keywords: [
    "Mavinic Digital",
    "Design Digital",
    "Web Design",
    "Sites Profissionais",
    "Design Minimalista",
    "Marcelo",
    "Estúdio Criativo",
    "Landing Pages",
    "SEO",
    "Portfolio",
  ],
  authors: [{ name: "Marcelo - Mavinic Digital" }],
  creator: "Mavinic Digital",
  publisher: "Mavinic Digital",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mavinicdigital.com",
    title: "MAVINIC DIGITAL - Contemporary Creative Studio",
    description: "Design digital com precisão estética e estratégia.",
    siteName: "Mavinic Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAVINIC DIGITAL - Contemporary Creative Studio",
    description: "Design digital com precisão estética e estratégia.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://mavinicdigital.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
