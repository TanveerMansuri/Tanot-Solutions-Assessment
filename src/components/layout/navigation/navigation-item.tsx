import type { HTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

export interface NavigationItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

export function NavigationItem({
  href,
  children,
  isActive = false,
  className,
  ...props
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-[17px] font-semibold leading-normal transition-colors select-none",
        "hover:text-[#168BCB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        isActive ? "text-[#168BCB]" : "text-[#172033] hover:text-[#168BCB]",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
