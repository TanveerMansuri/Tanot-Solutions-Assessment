"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { BlogCard } from "./blog-card";
import { BLOG_POSTS } from "./blog-data";

export interface BlogCarouselProps {
  className?: string;
}

export function BlogCarousel({ className }: BlogCarouselProps) {
  // Mobile / tablet pagination index (0 to BLOG_POSTS.length - 1)
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : BLOG_POSTS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < BLOG_POSTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={cn("relative w-full flex flex-col items-center", className)}>
      {/* Outer wrapper with left and right navigation buttons on desktop/tablet */}
      <div className="relative w-full flex items-center justify-center">
        {/* Previous Button (Left Arrow) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous articles"
          className={cn(
            "hidden md:flex lg:hidden absolute -left-5 z-20 h-10 w-10 items-center justify-center rounded-full select-none",
            "bg-[#F0F7FF] text-[#0284C7] shadow-[0_2px_8px_rgba(2,132,199,0.12)] border border-[#BAE6FD]",
            "hover:bg-[#E0F2FE] hover:scale-105 active:scale-95 transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
          )}
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Desktop 3-Card Grid */}
        <div className="hidden lg:grid w-full grid-cols-3 gap-6 xl:gap-7 items-stretch">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col h-full">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider Container */}
        <div className="lg:hidden w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="w-full shrink-0 px-1 sm:px-2">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button (Right Arrow) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next articles"
          className={cn(
            "hidden md:flex lg:hidden absolute -right-5 z-20 h-10 w-10 items-center justify-center rounded-full select-none",
            "bg-[#F0F7FF] text-[#0284C7] shadow-[0_2px_8px_rgba(2,132,199,0.12)] border border-[#BAE6FD]",
            "hover:bg-[#E0F2FE] hover:scale-105 active:scale-95 transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2"
          )}
        >
          <ChevronRight className="h-5 w-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Pagination Dots Row: Hidden on Desktop (>=1024px) since all 3 cards are visible simultaneously */}
      <div
        className="mt-8 sm:mt-9 flex lg:hidden items-center justify-center gap-2 select-none"
        role="tablist"
      >
        {BLOG_POSTS.map((post, idx) => (
          <button
            key={post.id}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none",
              activeIndex === idx
                ? "w-8 bg-[#0284C7]"
                : "w-2.5 bg-[#BAE6FD] hover:bg-[#7DD3FC]"
            )}
          />
        ))}
      </div>
    </div>
  );
}
