import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  hasError?: boolean;
}

export function Input({ id, hasError = false, className, disabled, ...props }: InputProps) {
  return (
    <input
      id={id}
      disabled={disabled}
      aria-invalid={hasError ? "true" : undefined}
      aria-describedby={hasError ? `${id}-error` : undefined}
      className={cn(
        "h-11 w-full rounded-xl border border-zinc-200 bg-white/90 px-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all",
        "focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20",
        "disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:opacity-60",
        "dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-100 dark:placeholder:text-zinc-500",
        "dark:focus:border-blue-500 dark:focus:ring-blue-500/20",
        hasError && "border-red-500 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500",
        className
      )}
      {...props}
    />
  );
}
