import type { ReactNode } from "react";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

import { StoreProvider } from "@/store/providers";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanot Solutions — Website Redesign",
  description: "Tanot Solutions Website Redesign Assessment Concepts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
