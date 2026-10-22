import Link from "next/link";

import { ArrowRight } from "lucide-react";

export function ModernSeoCtaButtons() {
  return (
    <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 lg:gap-[18px] shrink-0">
      <Link
        href="#audit"
        className="inline-flex items-center justify-center gap-3 h-[54px] sm:h-[62px] lg:h-[68px] w-full sm:w-[210px] lg:w-[228px] rounded-[16px] bg-white text-[#123C3A] text-[16px] sm:text-[18px] lg:text-[19px] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-[#F7FAF7] transition-all"
      >
        <span>Book a Call</span>
        <ArrowRight className="h-4.5 w-4.5 lg:h-5 lg:w-5 stroke-[2.5] text-[#123C3A]" />
      </Link>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center gap-3 h-[54px] sm:h-[62px] lg:h-[68px] w-full sm:w-[210px] lg:w-[224px] rounded-[16px] border-2 border-[#DDF5E8] bg-white/[0.04] text-white text-[16px] sm:text-[18px] lg:text-[19px] font-bold backdrop-blur-xs hover:bg-white/15 transition-all"
      >
        <span>Contact Us</span>
        <ArrowRight className="h-4.5 w-4.5 lg:h-5 lg:w-5 stroke-[2.5] text-white" />
      </Link>
    </div>
  );
}
