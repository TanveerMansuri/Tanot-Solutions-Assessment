import type { AnchorHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

export interface LinkTextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: "primary" | "muted" | "subtle";
  external?: boolean;
}

export function LinkText({
  href,
  children,
  variant = "primary",
  external,
  className,
  ...props
}: LinkTextProps) {
  const variants = {
    primary:
      "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline dark:text-blue-400",
    muted:
      "text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-200",
    subtle:
      "text-zinc-500 hover:text-blue-600 transition-colors dark:text-zinc-400 dark:hover:text-blue-400",
  };

  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      className={cn("text-sm font-medium", variants[variant], className)}
      {...linkProps}
      {...props}
    >
      {children}
    </Link>
  );
}
