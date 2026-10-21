import { Heading } from "@/components/common/heading";
import { cn } from "@/lib/utils";

import { CaseStudyEyebrow } from "./case-study-eyebrow";

export interface CaseStudyHeaderProps {
  className?: string;
}

export function CaseStudyHeader({ className }: CaseStudyHeaderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center text-center max-w-[1050px] mx-auto",
        className
      )}
    >
      <CaseStudyEyebrow />

      <Heading
        level={2}
        className="mt-3.5 sm:mt-4 text-center text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-bold tracking-tight leading-[1.14] text-[#102544]"
      >
        <span>How an HR company grew from </span>
        <span className="bg-gradient-to-r from-[#0877D1] via-[#168BCB] to-[#49B4F0] bg-clip-text text-transparent">
          zero to 6200 monthly visitors
        </span>
        <span> in 8 months</span>
      </Heading>
    </div>
  );
}
