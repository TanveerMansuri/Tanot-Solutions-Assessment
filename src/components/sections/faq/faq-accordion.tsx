"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { FaqCard } from "./faq-card";
import { FAQ_ITEMS } from "./faq-data";

export interface FaqAccordionProps {
  className?: string;
  defaultOpenId?: string;
}

export function FaqAccordion({
  className,
  defaultOpenId = "how-grow-business",
}: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("flex flex-col gap-3 sm:gap-3.5 w-full", className)}>
      {FAQ_ITEMS.map((item) => (
        <FaqCard
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
