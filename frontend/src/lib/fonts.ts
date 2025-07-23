// lib/fonts.ts
import { Inter, Playfair_Display } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
