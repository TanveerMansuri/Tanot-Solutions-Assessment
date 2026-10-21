"use client";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import type { FaqItem } from "./faq-data";

export interface FaqCardProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqCard({ item, isOpen, onToggle }: FaqCardProps) {
  const { id, question, answer } = item;
  const contentId = `faq-answer-${id}`;
  const buttonId = `faq-question-${id}`;

  return (
    <div
      className={cn(
        "group w-full rounded-[16px] transition-all duration-200",
        "bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]",
        isOpen
          ? "border-2 border-[#38BDF8] shadow-[0_8px_24px_rgba(56,189,248,0.12)]"
          : "border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
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
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] focus-visible:ring-offset-2 rounded-[16px]"
          )}
        >
          <span
            className={cn(
              "text-[15.5px] sm:text-[17px] font-bold leading-snug tracking-tight transition-colors",
              isOpen ? "text-[#0F172A]" : "text-[#1E293B] group-hover:text-[#0284C7]"
            )}
          >
            {question}
          </span>
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200",
              isOpen
                ? "bg-[#E0F2FE] text-[#0284C7]"
                : "bg-[#F0F7FF] text-[#0284C7] group-hover:bg-[#E0F2FE]"
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
          <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#475569] border-t border-[#F1F5F9] mt-1 pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
