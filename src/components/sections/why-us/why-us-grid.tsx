import { cn } from "@/lib/utils";

import { WhyUsCard } from "./why-us-card";
import { WHY_US_BENEFITS } from "./why-us-data";

export interface WhyUsGridProps {
  className?: string;
}

export function WhyUsGrid({ className }: WhyUsGridProps) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-5.5 items-stretch",
        className
      )}
    >
      {WHY_US_BENEFITS.map((benefit) => (
        <div key={benefit.id} className="flex flex-col h-full">
          <WhyUsCard benefit={benefit} />
        </div>
      ))}
    </div>
  );
}
