import type { HTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

export interface ModernNavigationItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

export function ModernNavigationItem({
  href,
  children,
  isActive = false,
  className,
  ...props
}: ModernNavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-[17px] font-semibold leading-normal transition-colors select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#267C6B]",
        isActive ? "text-[#267C6B]" : "text-[#123C3A] hover:text-[#267C6B]",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
