import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atfro — Brand Growth Partner",
  description: "Full-stack digital growth for businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceMono.variable} min-h-screen bg-white font-sans text-[#0A0A0A] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
