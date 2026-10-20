import type { LucideProps } from "lucide-react";
import { BarChart3, Globe } from "lucide-react";

export function BarChartIcon(props: LucideProps) {
  return <BarChart3 className="h-4 w-4" {...props} />;
}

export function GlobeIcon(props: LucideProps) {
  return <Globe className="h-4 w-4" {...props} />;
}
