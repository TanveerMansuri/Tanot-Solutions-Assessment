import { cn } from "@/lib/utils";

import { AwardCard } from "./award-card";
import { AWARDS_DATA } from "./awards-data";

export interface AwardsGridProps {
  className?: string;
}

export function AwardsGrid({ className }: AwardsGridProps) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch",
        className
      )}
    >
      {AWARDS_DATA.map((award) => (
        <div key={award.id} className="flex flex-col h-full">
          <AwardCard award={award} />
        </div>
      ))}
    </div>
  );
}
