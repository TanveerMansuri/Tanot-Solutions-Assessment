import { Star } from "lucide-react";

import type { ClientReviewItem } from "./reviews-data";

export interface ReviewCardProps {
  review: ClientReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const { stars, content, author } = review;

  return (
    <div className="flex h-full flex-col justify-between rounded-[22px] sm:rounded-[24px] border border-[#E3EDF7] bg-white p-6 sm:p-7 lg:p-8 shadow-[0_6px_24px_rgba(20,45,75,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,45,75,0.08)] hover:border-[#CFE2F4]">
      <div>
        {/* Five Gold Stars */}
        <div className="flex items-center gap-1.5 text-[#F59E0B]">
          {[...Array(stars)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 sm:h-[18px] sm:w-[18px] fill-[#F59E0B] stroke-[#F59E0B]"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="mt-4 sm:mt-5 text-left text-[14.5px] sm:text-[15.5px] leading-[1.65] font-normal text-[#2A3F5B]">
          {content}
        </p>
      </div>

      <div>
        {/* Subtle Divider */}
        <div className="my-5 sm:my-6 h-[1px] w-full bg-[#E5EEF7]" />

        {/* Author Details */}
        <div className="flex flex-col text-left">
          <span className="text-[16px] sm:text-[17px] font-bold text-[#102544] tracking-tight">
            {author.name}
          </span>
          <span className="text-[13px] sm:text-[14px] text-[#657385] font-normal mt-0.5">
            {author.role}, {author.company}
          </span>
        </div>
      </div>
    </div>
  );
}
