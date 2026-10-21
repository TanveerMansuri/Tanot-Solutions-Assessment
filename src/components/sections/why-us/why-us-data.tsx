import type { ReactNode } from "react";

import { BarChart3, Coins, FileText, Shield, Sparkles, Users } from "lucide-react";

export interface WhyUsBenefit {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export const WHY_US_BENEFITS: WhyUsBenefit[] = [
  {
    id: "results-not-vanity",
    title: "Results, not vanity metrics",
    description: "Every campaign is tied to rankings, AI visibility, leads, sales and revenue.",
    icon: <BarChart3 className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "performance-pricing",
    title: "Performance-based pricing",
    description: "No upfront payment. Pay only for verified deliverables.",
    icon: <Coins className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "enterprise-quality",
    title: "Enterprise-grade quality",
    description: "Links and strategy that meet global brand standards, at scale.",
    icon: <Shield className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "transparent-process",
    title: "100% transparent process",
    description:
      "You approve everything including content, links, technical changes before we go ahead.",
    icon: <FileText className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "ai-first-seo",
    title: "AI-first SEO",
    description: "Visible in AI Overviews, ChatGPT and Perplexity, not just Google.",
    icon: <Sparkles className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "team-extension",
    title: "An extension of your team",
    description: "Dedicated specialists, clear communication, genuine relationship.",
    icon: <Users className="h-5 w-5 text-[#168BCB]" />,
  },
];
