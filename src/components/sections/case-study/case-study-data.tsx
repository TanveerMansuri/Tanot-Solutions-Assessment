import type { ReactNode } from "react";

import { BarChart3, TrendingUp, Users } from "lucide-react";

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
}

export const CASE_STUDY_METRICS: MetricItem[] = [
  {
    id: "monthly-visitors",
    label: "Monthly Visitors",
    value: "0 → 6200",
    leftIcon: <Users className="h-5 w-5 text-[#168BCB]" />,
    rightIcon: <BarChart3 className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "ai-visibility",
    label: "AI visibility",
    value: "0 → 1.3K Citations",
    leftIcon: (
      <svg
        className="h-5 w-5 text-[#168BCB]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    rightIcon: <TrendingUp className="h-5 w-5 text-[#168BCB]" />,
  },
  {
    id: "ranking-keywords",
    label: "Ranking keywords",
    value: "0 → 1.6K",
    leftIcon: (
      <svg
        className="h-5 w-5 text-[#168BCB]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="12" width="4" height="8" rx="1" />
        <rect x="10" y="8" width="4" height="12" rx="1" />
        <rect x="17" y="4" width="4" height="16" rx="1" />
      </svg>
    ),
    rightIcon: <BarChart3 className="h-5 w-5 text-[#168BCB]" />,
  },
];
