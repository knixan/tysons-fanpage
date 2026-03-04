// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyson Fanpage",
  description: "Svart Labrador — bästa kompisen",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}