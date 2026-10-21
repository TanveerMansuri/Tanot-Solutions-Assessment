import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface FormErrorProps extends HTMLAttributes<HTMLDivElement> {
  error?: string | null;
}

export function FormError({ error, className, ...props }: FormErrorProps) {
  if (!error) return null;

  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300",
        className
      )}
      {...props}
    >
      {error}
    </div>
  );
}
