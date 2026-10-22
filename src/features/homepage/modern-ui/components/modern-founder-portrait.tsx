import Image from "next/image";

import { Award, TrendingUp } from "lucide-react";

export function ModernFounderPortrait() {
  return (
    <div className="relative flex w-full max-w-[440px] items-center justify-center p-4 sm:p-6">
      <div className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-[360px] overflow-hidden rounded-[16px] border border-[#D7E5DE] bg-white shadow-[0_12px_36px_rgba(18,60,58,0.08)]">
        <Image
          src="/images/renu-founder.png"
          alt="Renu Sharma, Founder & Head of SEO Strategy at Tanot Solutions"
          fill
          sizes="(max-width: 640px) 320px, 360px"
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute top-6 -right-2 sm:-right-6 z-20 flex items-center gap-2.5 rounded-[14px] border border-[#D7E5DE] bg-white/95 px-3.5 py-2.5 shadow-[0_6px_20px_rgba(18,60,58,0.08)] backdrop-blur-sm">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#DDF5E8] text-[#267C6B]">
          <TrendingUp className="h-[18px] w-[18px]" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-medium text-[#637773]">Founded</span>
          <span className="text-[12.5px] font-bold text-[#123C3A] mt-0.5">Tanot Solutions</span>
          <span className="text-[11px] text-[#637773]">in 2020</span>
        </div>
      </div>

      <div className="absolute bottom-6 -left-2 sm:-left-6 z-20 flex items-center gap-2.5 rounded-[14px] border border-[#D7E5DE] bg-white/95 px-3.5 py-2.5 shadow-[0_6px_20px_rgba(18,60,58,0.08)] backdrop-blur-sm">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#DDF5E8] text-[#267C6B]">
          <Award className="h-[18px] w-[18px]" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[13px] font-bold text-[#123C3A]">11+ Years</span>
          <span className="text-[11.5px] font-medium text-[#637773] mt-0.5">SEO &amp; Digital</span>
          <span className="text-[11px] text-[#637773]">Growth Experience</span>
        </div>
      </div>
    </div>
  );
}
