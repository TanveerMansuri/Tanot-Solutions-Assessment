import { Award, BarChart3, Clock, Network } from "lucide-react";

import type { StatItem } from "./types";

export const STATS_ITEMS: StatItem[] = [
  {
    id: "clients-served",
    value: "150+",
    label: "Clients Served",
    icon: <Network className="h-6 w-6 text-white stroke-[2.2]" />,
  },
  {
    id: "client-satisfaction",
    value: "98%",
    label: "Client Satisfaction",
    icon: <Award className="h-6 w-6 text-white stroke-[2.2]" />,
  },
  {
    id: "years-experience",
    value: "11+",
    label: "Years of SEO Experience",
    icon: <Clock className="h-6 w-6 text-white stroke-[2.2]" />,
  },
  {
    id: "client-retention",
    value: "02+",
    label: "Years average client retention",
    icon: <BarChart3 className="h-6 w-6 text-white stroke-[2.2]" />,
  },
];
