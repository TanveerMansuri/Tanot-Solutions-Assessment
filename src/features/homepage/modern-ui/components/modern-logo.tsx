import type { HTMLAttributes } from "react";

import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export interface ModernLogoProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function ModernLogo({ href = "/modern-preview", size = "md", className, ...props }: ModernLogoProps) {
  return (
    <Logo
      href={href}
      size={size}
      className={cn("focus-visible:ring-[#267C6B]", className)}
      {...props}
    />
  );
}
