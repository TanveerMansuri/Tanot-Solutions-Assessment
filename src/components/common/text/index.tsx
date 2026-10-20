import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface TextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "muted";
  className?: string;
}

export function Text({ children, variant = "body", className }: TextProps) {
  const styles = {
    h1: "text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
    h2: "text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
    h3: "text-xl font-semibold text-zinc-900 dark:text-zinc-100",
    body: "text-base text-zinc-700 dark:text-zinc-300",
    muted: "text-sm text-zinc-500 dark:text-zinc-400",
  };

  return <p className={cn(styles[variant], className)}>{children}</p>;
}
