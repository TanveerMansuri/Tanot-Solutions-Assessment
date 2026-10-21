import { cn } from "@/lib/utils";

import { ReviewActions } from "./review-actions";
import { ReviewCard } from "./review-card";
import { CLIENT_REVIEWS_DATA } from "./reviews-data";

export interface ClientReviewCardsProps {
  className?: string;
}

export function ClientReviewCards({ className }: ClientReviewCardsProps) {
  return (
    <div className={cn("mt-12 sm:mt-16 w-full", className)}>
      {/* 3 Review Cards in 1 horizontal row on desktop */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
        {CLIENT_REVIEWS_DATA.map((review) => (
          <div key={review.id} className="flex flex-col h-full">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <ReviewActions />
    </div>
  );
}
