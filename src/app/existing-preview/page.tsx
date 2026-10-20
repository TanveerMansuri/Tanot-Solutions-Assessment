import type { Metadata } from "next";

import { ExistingHomePage } from "@/features/homepage/existing-ui/existing-home";

export const metadata: Metadata = {
  title: "Existing UI Enhancement Preview — Tanot Solutions",
  description: "Preview of the enhanced existing website concept for Tanot Solutions",
};

export default function ExistingPreviewPage() {
  return <ExistingHomePage />;
}
