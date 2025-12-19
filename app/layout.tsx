import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PAYNALA - Solutions de votre transformation digitale en Afrique",
  description: "PAYNALA simplifie la digitalisation des paiements pour les entreprises et gouvernements africains. Agrégation multi-opérateurs, TPE interopérable et intégration mobile money.",
  icons: {
    icon: "/paynala30x30.png",
    shortcut: "/paynala30x30.png",
    apple: "/paynala30x30.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}