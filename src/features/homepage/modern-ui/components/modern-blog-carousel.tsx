"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { BLOG_POSTS } from "@/components/sections/blog/blog-data";
import { cn } from "@/lib/utils";

import { ModernBlogCard } from "./modern-blog-card";

export function ModernBlogCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : BLOG_POSTS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < BLOG_POSTS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous articles"
          className={cn(
            "hidden md:flex lg:hidden absolute -left-5 z-20 h-10 w-10 items-center justify-center rounded-full select-none",
            "bg-[#DDF5E8] text-[#267C6B] shadow-[0_2px_8px_rgba(38,124,107,0.12)] border border-[#D7E5DE]",
            "hover:bg-[#267C6B] hover:text-white transition-all duration-200"
          )}
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
        </button>

        <div className="hidden lg:grid w-full grid-cols-3 gap-6 xl:gap-7 items-stretch">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col h-full">
              <ModernBlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="lg:hidden w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="w-full shrink-0 px-1 sm:px-2">
                <ModernBlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next articles"
          className={cn(
            "hidden md:flex lg:hidden absolute -right-5 z-20 h-10 w-10 items-center justify-center rounded-full select-none",
            "bg-[#DDF5E8] text-[#267C6B] shadow-[0_2px_8px_rgba(38,124,107,0.12)] border border-[#D7E5DE]",
            "hover:bg-[#267C6B] hover:text-white transition-all duration-200"
          )}
        >
          <ChevronRight className="h-5 w-5 stroke-[2.5]" />
        </button>
      </div>

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
                ? "w-8 bg-[#267C6B]"
                : "w-2.5 bg-[#DDF5E8] hover:bg-[#267C6B]/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
