import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "primary" | "neutral" | "badge";
}

export function Eyebrow({ children, variant = "primary", className, ...props }: EyebrowProps) {
  const variants = {
    primary: "text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400",
    neutral: "text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400",
    badge:
      "inline-flex items-center justify-center rounded-[999px] bg-[#D9ECFF] px-4 py-2.5 text-[16px] font-semibold text-[#168BCB] leading-[1.4] tracking-wide select-none",
  };

  return (
    <span className={cn(variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
