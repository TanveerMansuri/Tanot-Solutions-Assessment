import Image from "next/image";

import { cn } from "@/lib/utils";

import type { AwardItem } from "./awards-data";

export interface AwardCardProps {
  award: AwardItem;
  className?: string;
}

export function AwardCard({ award, className }: AwardCardProps) {
  const { title, description, imageSrc, imageAlt } = award;

  return (
    <div
      className={cn(
        "flex h-full flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5",
        "rounded-[16px] border border-[#DCE7F2] bg-white p-4 sm:p-5",
        "shadow-[0_2px_12px_rgba(20,45,75,0.03)]",
        "transition-all duration-200 hover:-translate-y-1 hover:border-[#168BCB]/60 hover:shadow-[0_8px_24px_rgba(22,139,203,0.08)]",
        className
      )}
    >
      {/* Award Image Container on Left */}
      <div className="relative flex h-[100px] sm:h-[110px] w-[110px] sm:w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[10px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="120px"
          className="object-contain"
          priority
        />
      </div>

      {/* Title, Accent Line, and Description on Right */}
      <div className="flex flex-1 flex-col justify-center text-left">
        <h3 className="text-[15.5px] sm:text-[16.5px] font-bold tracking-tight text-[#102544] leading-snug">
          {title}
        </h3>

        {/* Short Blue Accent Line */}
        <div aria-hidden="true" className="my-2 h-[2px] w-8 rounded-full bg-[#168BCB]" />

        <p className="text-[13px] sm:text-[13.5px] font-normal leading-[1.55] text-[#4F647E]">
          {description}
        </p>
      </div>
    </div>
  );
}
