import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/common/button-link";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0-.01-3.26 1.63 1.63 0 0 0 .01 3.26m1.4 9.74V9.93H5.06v8.57h2.8Z" />
    </svg>
  );
}

export function FounderActions() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2 w-full sm:w-auto">
      <ButtonLink
        href="#audit"
        variant="primary"
        size="lg"
        className="h-[50px] sm:h-[54px] rounded-[12px] border border-[#168BCB] bg-[#168BCB] px-6 text-[15.5px] sm:text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(22,139,203,0.16)] hover:bg-[#1276AE] flex items-center justify-center gap-2"
      >
        <span className="whitespace-nowrap">Book a call with Renu</span>
        <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
      </ButtonLink>

      <ButtonLink
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="lg"
        className="h-[50px] sm:h-[54px] rounded-[12px] border-2 border-[#168BCB] bg-white px-5 sm:px-6 text-[15.5px] sm:text-[16px] font-medium leading-[1.2] text-[#168BCB] shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:bg-[#F8FBFF] flex items-center justify-center gap-2"
      >
        <LinkedInIcon className="h-4 w-4 shrink-0 fill-[#168BCB]" />
        <span className="whitespace-nowrap">Connect on LinkedIn</span>
      </ButtonLink>
    </div>
  );
}
