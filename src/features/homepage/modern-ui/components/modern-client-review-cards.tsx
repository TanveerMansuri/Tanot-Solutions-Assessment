import Link from "next/link";

import { ArrowRight, Star } from "lucide-react";

import { CLIENT_REVIEWS_DATA } from "@/components/sections/testimonials/reviews-data";

export function ModernClientReviewCards() {
  return (
    <div className="mt-12 sm:mt-16 w-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
        {CLIENT_REVIEWS_DATA.map((review) => (
          <div key={review.id} className="flex flex-col h-full">
            <div className="flex h-full flex-col justify-between rounded-[22px] sm:rounded-[24px] border border-[#D7E5DE] bg-white p-6 sm:p-7 lg:p-8 shadow-[0_6px_24px_rgba(18,60,58,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(18,60,58,0.08)] hover:border-[#267C6B]">
              <div>
                <div className="flex items-center gap-1.5 text-[#F59E0B]">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-[18px] sm:w-[18px] fill-[#F59E0B] stroke-[#F59E0B]"
                    />
                  ))}
                </div>
                <p className="mt-4 sm:mt-5 text-left text-[14.5px] sm:text-[15.5px] leading-[1.65] font-normal text-[#263B39]">
                  {review.content}
                </p>
              </div>
              <div>
                <div className="my-5 sm:my-6 h-[1px] w-full bg-[#D7E5DE]" />
                <div className="flex flex-col text-left">
                  <span className="text-[16px] sm:text-[17px] font-bold text-[#123C3A] tracking-tight">
                    {review.author.name}
                  </span>
                  <span className="text-[13px] sm:text-[14px] text-[#637773] font-normal mt-0.5">
                    {review.author.role}, {review.author.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[560px] mx-auto">
        <Link
          href="#reviews"
          className="h-[52px] sm:h-[56px] w-full sm:w-[260px] rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-4 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(38,124,107,0.2)] flex items-center justify-center gap-2.5 transition-colors"
        >
          <span className="whitespace-nowrap">View All Client Reviews</span>
          <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
        </Link>
        <Link
          href="https://clutch.co/profile/tanot-solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[52px] sm:h-[56px] w-full sm:w-[260px] rounded-[12px] border-2 border-[#267C6B] bg-white px-4 text-[16px] font-medium leading-[1.2] text-[#123C3A] shadow-[0_2px_6px_rgba(18,60,58,0.04)] hover:bg-[#DDF5E8]/30 flex items-center justify-center gap-2.5 transition-colors"
        >
          <span className="whitespace-nowrap">See us on Clutch</span>
        </Link>
      </div>
    </div>
  );
}
