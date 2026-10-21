import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";

export interface ServiceDetailActionsProps {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
}

export function ServiceDetailActions({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: ServiceDetailActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 pt-3 sm:pt-4 w-full">
      <ButtonLink
        href={primaryHref}
        variant="primary"
        size="lg"
        className="h-[48px] sm:h-[52px] w-full sm:w-auto rounded-[12px] border border-[#168BCB] bg-[#168BCB] px-5 sm:px-6 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_4px_10px_rgba(22,139,203,0.16)] hover:bg-[#1276AE] flex items-center justify-center gap-2"
      >
        <span className="whitespace-nowrap">{primaryText}</span>
        <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
      </ButtonLink>

      <ButtonLink
        href={secondaryHref}
        variant="outline"
        size="lg"
        className="h-[48px] sm:h-[52px] w-full sm:w-auto rounded-[12px] border-2 border-[#168BCB] bg-white px-5 sm:px-6 text-[15px] sm:text-[16px] font-semibold text-[#202A35] shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:bg-[#F8FBFF] flex items-center justify-center gap-2"
      >
        <span className="whitespace-nowrap">{secondaryText}</span>
        <ArrowRight className="h-[18px] w-[18px] shrink-0 text-[#168BCB]" />
      </ButtonLink>
    </div>
  );
}
