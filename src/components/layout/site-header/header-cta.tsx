import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";

export interface HeaderCTAProps {
  href?: string;
  label?: string;
}

export function HeaderCTA({ href = "#audit", label = "Book a Free Call" }: HeaderCTAProps) {
  return (
    <ButtonLink
      href={href}
      variant="dark"
      size="md"
      className="inline-flex bg-[#071A33] hover:bg-[#0E2442] text-white text-[14px] sm:text-[17px] font-semibold h-[42px] sm:h-[56px] w-[140px] xs:w-[155px] min-[420px]:w-[164px] sm:w-auto px-3 sm:px-7 rounded-[10px] sm:rounded-[14px] shadow-xs whitespace-nowrap items-center justify-center gap-2 sm:gap-2.5 shrink-0"
    >
      <span className="truncate">{label}</span>
      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.2] shrink-0" />
    </ButtonLink>
  );
}
