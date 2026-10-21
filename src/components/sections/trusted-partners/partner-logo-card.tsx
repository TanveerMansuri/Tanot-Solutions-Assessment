import { cn } from "@/lib/utils";

import type { PartnerBrand } from "./types";

export interface PartnerLogoCardProps {
  brand: PartnerBrand;
  index: number;
  isVisible: boolean;
}

export function PartnerLogoCard({ brand, index, isVisible }: PartnerLogoCardProps) {
  // Cascading delay of 85ms between cards (0 to 15 * 85ms)
  const delay = `${index * 85}ms`;

  // Stagger continuous subtle float on selected cards (only when visible)
  const floatClasses = ["animate-float-1", "animate-float-2", "animate-float-3"];
  const floatClass = isVisible && index % 2 === 0 ? floatClasses[index % 3] : "";

  return (
    <div
      title={brand.name}
      style={{
        animationDelay: isVisible ? delay : "0ms",
        transitionDelay: isVisible ? delay : "0ms",
      }}
      className={cn(
        "group relative flex h-[72px] sm:h-[78px] w-full items-center justify-center rounded-[16px] border border-[#E1EDF9] bg-white px-3 py-2 shadow-[0_2px_8px_rgba(20,45,75,0.04)] select-none",
        "transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#B7D7F6] motion-safe:hover:shadow-[0_8px_20px_rgba(20,45,75,0.08)]",
        isVisible
          ? "animate-waterfall opacity-100"
          : "opacity-0 translate-y-7 scale-[0.96] pointer-events-none",
        floatClass
      )}
    >
      <div className="flex items-center justify-center transition-transform duration-200 motion-safe:group-hover:scale-105">
        {brand.logo}
      </div>
    </div>
  );
}
