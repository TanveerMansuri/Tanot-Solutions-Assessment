import type { HTMLAttributes, ReactNode } from "react";
import type { ElementType } from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  as?: ElementType;
}

const sizeClasses = {
  xs: "text-lg font-semibold tracking-tight",
  sm: "text-xl font-semibold tracking-tight",
  md: "text-2xl sm:text-3xl font-bold tracking-tight",
  lg: "text-3xl sm:text-4xl font-bold tracking-tight",
  xl: "text-4xl sm:text-5xl font-extrabold tracking-tight",
  "2xl": "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
};

export function Heading({ children, level = 2, size, as, className, ...props }: HeadingProps) {
  const Tag = (as || `h${level}`) as ElementType;
  const computedSize = size || (level === 1 ? "2xl" : level === 2 ? "lg" : "md");

  return (
    <Tag
      className={cn("text-zinc-900 dark:text-zinc-50", sizeClasses[computedSize], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
