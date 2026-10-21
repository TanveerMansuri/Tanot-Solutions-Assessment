import Image from "next/image";

import { cn } from "@/lib/utils";

import type { FeaturedLogo } from "./featured-data";

export interface FeaturedLogoCardProps {
  logo: FeaturedLogo;
  className?: string;
}

export function FeaturedLogoCard({ logo, className }: FeaturedLogoCardProps) {
  const { name, imageSrc } = logo;

  return (
    <div
      className={cn(
        "group relative flex h-[72px] sm:h-[78px] w-[180px] sm:w-[210px] shrink-0 items-center justify-center",
        "rounded-[16px] border border-[#E1EDF9] bg-white px-5 sm:px-6 py-2.5",
        "shadow-[0_2px_8px_rgba(20,45,75,0.04)] select-none",
        "transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#B7D7F6] motion-safe:hover:shadow-[0_8px_20px_rgba(20,45,75,0.08)]",
        className
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={imageSrc}
          alt={`${name} logo`}
          fill
          sizes="(max-width: 640px) 140px, 180px"
          className="object-contain object-center"
          priority
        />
      </div>
    </div>
  );
}
