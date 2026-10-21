import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { CaseStudyActions } from "./case-study-actions";
import { CASE_STUDY_METRICS } from "./case-study-data";
import { MetricCard } from "./metric-card";

export interface CaseStudyDetailsProps {
  className?: string;
}

export function CaseStudyDetails({ className }: CaseStudyDetailsProps) {
  return (
    <div className={cn("flex h-full flex-col justify-between gap-5 sm:gap-6 text-left", className)}>
      {/* Supporting Narrative */}
      <Text className="text-[15.5px] sm:text-[17px] font-normal leading-[1.65] text-[#3A506B]">
        Starting from a domain with almost no authority, we built a steady flow of niche-relevant
        editorial links with required technical SEO and content changes and the traffic tanked up
        from zero to 6200 visitors in 8 months.
      </Text>

      {/* 3 Stacked Equal-Height Metric Cards */}
      <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
        {CASE_STUDY_METRICS.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Two Action CTA Buttons */}
      <CaseStudyActions />
    </div>
  );
}
