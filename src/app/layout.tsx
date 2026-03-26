import type { Metadata } from "next";
import { Nunito, Space_Mono, Yellowtail } from "next/font/google";
import "./globals.css";

/* Nunito = placeholder for Savate (rounded bold sans-serif from brandbook).
   Replace with Savate when font file is available. */
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rilaxx — Follow the Foxx, Chill & Drink",
  description:
    "Rilaxx es la experiencia que estabas buscando. Cocktails con vodka, vibra nocturna y una comunidad que no para.",
  openGraph: {
    title: "Rilaxx — Follow the Foxx, Chill & Drink",
    description: "Zorro Vibes, Zero Stress. Descubre los sabores Rilaxx.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${nunito.variable} ${spaceMono.variable} ${yellowtail.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
