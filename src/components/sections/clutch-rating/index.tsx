import Link from "next/link";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ClutchRatingProps {
  href?: string;
  rating?: string;
  className?: string;
}

export function ClutchRating({
  href = "https://clutch.co/profile/tanot-solutions",
  rating = "5.0",
  className,
}: ClutchRatingProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reviewed on Clutch with 5.0 rating based on client reviews"
      className={cn(
        "group flex w-full h-[72px] min-h-[72px] box-border items-center justify-between rounded-[16px] border border-[#E4EAF1] bg-white px-5 py-3 shadow-[0_2px_5px_rgba(15,35,60,0.08)] transition-all select-none",
        "hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8A8F9B]">
          REVIEWED ON
        </span>
        <span className="text-[28px] font-bold tracking-tight text-[#163048] leading-none">
          Clutch
        </span>
      </div>

      <div className="mx-4 h-[36px] w-[1px] bg-[#DCE3EB]" />

      <div className="flex items-center gap-2 text-[14px] font-semibold text-zinc-900">
        <span>{rating} RATING</span>
        <div className="flex items-center gap-[3px] text-[#E92D20]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#E92D20] stroke-[#E92D20]" />
          ))}
        </div>
      </div>

      <div className="hidden mx-4 h-[36px] w-[1px] bg-[#DCE3EB] md:block" />

      <span className="hidden text-[14px] text-[#657385] font-normal md:inline">
        Based on client reviews
      </span>
    </Link>
  );
}
