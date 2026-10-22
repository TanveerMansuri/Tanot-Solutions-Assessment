import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";

export interface ModernHeaderCTAProps {
  href?: string;
  label?: string;
}

export function ModernHeaderCTA({
  href = "#audit",
  label = "Book a Free Call",
}: ModernHeaderCTAProps) {
  return (
    <ButtonLink
      href={href}
      size="md"
      className="inline-flex bg-[#267C6B] hover:bg-[#123C3A] text-white text-[14px] sm:text-[17px] font-semibold h-[42px] sm:h-[56px] w-[140px] xs:w-[155px] min-[420px]:w-[164px] sm:w-auto px-3 sm:px-7 rounded-[10px] sm:rounded-[14px] shadow-xs whitespace-nowrap items-center justify-center gap-2 sm:gap-2.5 shrink-0 transition-colors"
    >
      <span className="truncate">{label}</span>
      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.2] shrink-0" />
    </ButtonLink>
  );
}
