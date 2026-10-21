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
        "grid w-full grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4.5",
        className
      )}
    >
      {WHY_US_BENEFITS.map((benefit) => (
        <div key={benefit.id} className="flex flex-col">
          <WhyUsCard benefit={benefit} />
        </div>
      ))}
    </div>
  );
}
