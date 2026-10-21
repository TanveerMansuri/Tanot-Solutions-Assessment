import Image from "next/image";

import { Award, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

export interface FounderPortraitProps {
  className?: string;
}

export function FounderPortrait({ className }: FounderPortraitProps) {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[440px] items-center justify-center p-4 sm:p-6",
        className
      )}
    >
      {/* Main Founder Portrait Container */}
      <div className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-[360px] overflow-hidden rounded-[16px] border border-[#DCE8F5] bg-white shadow-[0_12px_36px_rgba(20,45,75,0.08)]">
        <Image
          src="/images/renu-founder.png"
          alt="Renu Sharma, Founder & Head of SEO Strategy at Tanot Solutions"
          fill
          sizes="(max-width: 640px) 320px, 360px"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Floating Badge 1 (Top Right): Founded Tanot Solutions in 2020 */}
      <div className="absolute top-6 -right-2 sm:-right-6 z-20 flex items-center gap-2.5 rounded-[14px] border border-[#DEECF8] bg-white/95 px-3.5 py-2.5 shadow-[0_6px_20px_rgba(20,45,75,0.08)] backdrop-blur-sm">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EBF5FE] text-[#168BCB]">
          <TrendingUp className="h-[18px] w-[18px]" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-medium text-[#64748B]">Founded</span>
          <span className="text-[12.5px] font-bold text-[#102544] mt-0.5">Tanot Solutions</span>
          <span className="text-[11px] text-[#64748B]">in 2020</span>
        </div>
      </div>

      {/* Floating Badge 2 (Bottom Left): 11+ Years SEO & Digital Growth Experience */}
      <div className="absolute bottom-6 -left-2 sm:-left-6 z-20 flex items-center gap-2.5 rounded-[14px] border border-[#DEECF8] bg-white/95 px-3.5 py-2.5 shadow-[0_6px_20px_rgba(20,45,75,0.08)] backdrop-blur-sm">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EBF5FE] text-[#168BCB]">
          <Award className="h-[18px] w-[18px]" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[13px] font-bold text-[#102544]">11+ Years</span>
          <span className="text-[11.5px] font-medium text-[#64748B] mt-0.5">SEO &amp; Digital</span>
          <span className="text-[11px] text-[#64748B]">Growth Experience</span>
        </div>
      </div>
    </div>
  );
}
