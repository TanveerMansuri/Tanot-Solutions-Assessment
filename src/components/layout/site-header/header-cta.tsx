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
      className="hidden sm:inline-flex bg-[#071A33] hover:bg-[#0E2442] text-white text-[17px] font-semibold h-[56px] px-7 rounded-[14px] shadow-xs whitespace-nowrap flex items-center justify-center gap-2.5"
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
    </ButtonLink>
  );
}
