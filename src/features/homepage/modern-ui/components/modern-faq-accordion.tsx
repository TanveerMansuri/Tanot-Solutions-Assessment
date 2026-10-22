"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { FAQ_ITEMS } from "@/components/sections/faq/faq-data";
import type { FaqItem } from "@/components/sections/faq/faq-data";
import { cn } from "@/lib/utils";

function ModernFaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { id, question, answer } = item;
  const contentId = `modern-faq-answer-${id}`;
  const buttonId = `modern-faq-question-${id}`;

  return (
    <div
      className={cn(
        "group w-full rounded-[16px] sm:rounded-[18px] transition-all duration-200",
        "bg-white shadow-[0_2px_12px_rgba(18,60,58,0.03)]",
        isOpen
          ? "border border-[#267C6B] shadow-[0_6px_20px_rgba(38,124,107,0.10)]"
          : "border border-[#D7E5DE] hover:border-[#267C6B] hover:shadow-[0_4px_16px_rgba(18,60,58,0.05)]"
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className={cn(
            "flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left select-none transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#267C6B] focus-visible:ring-offset-2 rounded-[16px] sm:rounded-[18px]"
          )}
        >
          <span
            className={cn(
              "text-[15.5px] sm:text-[17px] font-bold leading-snug tracking-tight transition-colors",
              isOpen ? "text-[#123C3A]" : "text-[#263B39] group-hover:text-[#267C6B]"
            )}
          >
            {question}
          </span>
          <div
            className={cn(
              "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200",
              isOpen
                ? "bg-[#DDF5E8] text-[#267C6B]"
                : "bg-[#F7FAF7] text-[#267C6B] group-hover:bg-[#DDF5E8]"
            )}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 stroke-[2.4] transition-transform duration-300 motion-reduce:transition-none",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-all duration-300 ease-in-out motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#637773] border-t border-[#D7E5DE] pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ModernFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("how-grow-business");

  return (
    <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
      {FAQ_ITEMS.map((item) => (
        <ModernFaqCard
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}
