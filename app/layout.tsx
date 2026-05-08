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
  title: "AXIO AI — AI Strategy & Engineering That Ships",
  description:
    "We help startups and SMBs turn AI from a strategy doc into a product that ships. Strategy and engineering under one roof — no handoff, no gap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-gradient-to-br from-primary/10 via-white to-primary-light/10 text-foreground">
        {children}
      </body>
    </html>
  );
}