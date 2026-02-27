import type { Metadata } from "next";
import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "The Cockroach Diet — M. Scott Mortensen, MD",
  description:
    "Superhuman Protocols for a Super Toxic World. Science-backed protocols from peptides and hormesis to mitochondrial hacking. By Dr. M. Scott Mortensen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
