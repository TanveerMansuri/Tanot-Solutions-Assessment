import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";

export function CaseStudyActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full pt-1">
      <ButtonLink
        href="#case-study-details"
        variant="primary"
        size="lg"
        className="h-[52px] sm:h-[56px] w-full sm:flex-1 rounded-[12px] border border-[#168BCB] bg-[#168BCB] px-4 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(22,139,203,0.16)] hover:bg-[#1276AE] flex items-center justify-center gap-2"
      >
        <span className="whitespace-nowrap">Read full case study</span>
        <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
      </ButtonLink>

      <ButtonLink
        href="#case-studies"
        variant="outline"
        size="lg"
        className="h-[52px] sm:h-[56px] w-full sm:flex-1 rounded-[12px] border-2 border-[#168BCB] bg-white px-4 text-[16px] font-medium leading-[1.2] text-[#202A35] shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:bg-[#F8FBFF] flex items-center justify-center gap-2"
      >
        <span className="whitespace-nowrap">All Case Studies</span>
        <ArrowRight className="h-[18px] w-[18px] shrink-0 text-[#168BCB]" />
      </ButtonLink>
    </div>
  );
}
