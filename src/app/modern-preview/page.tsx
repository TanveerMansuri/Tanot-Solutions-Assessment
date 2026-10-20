import type { Metadata } from "next";

import { ModernHomePage } from "@/features/homepage/modern-ui/modern-home";

export const metadata: Metadata = {
  title: "Modern UI Concept Preview — Tanot Solutions",
  description: "Preview of the modern UI concept for Tanot Solutions",
};

export default function ModernPreviewPage() {
  return <ModernHomePage />;
}
