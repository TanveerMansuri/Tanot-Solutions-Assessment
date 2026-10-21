import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";

export function ReviewActions() {
  return (
    <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[560px] mx-auto">
      <ButtonLink
        href="#reviews"
        variant="primary"
        size="lg"
        className="h-[52px] sm:h-[56px] w-full sm:w-[260px] rounded-[12px] border border-[#168BCB] bg-[#168BCB] px-4 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(22,139,203,0.16)] hover:bg-[#1276AE] flex items-center justify-center gap-2.5"
      >
        <span className="whitespace-nowrap">View All Client Reviews</span>
        <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
      </ButtonLink>

      <ButtonLink
        href="https://clutch.co/profile/tanot-solutions"
        variant="outline"
        size="lg"
        external
        className="h-[52px] sm:h-[56px] w-full sm:w-[260px] rounded-[12px] border-2 border-[#168BCB] bg-white px-4 text-[16px] font-medium leading-[1.2] text-[#202A35] shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:bg-[#F8FBFF] flex items-center justify-center gap-2.5"
      >
        <span className="whitespace-nowrap">See us on Clutch</span>
      </ButtonLink>
    </div>
  );
}
