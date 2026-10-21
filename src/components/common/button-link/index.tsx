import type { AnchorHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/common/button";
import { cn } from "@/lib/utils";

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = false,
  className,
  ...props
}: ButtonLinkProps) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      className={cn(
        buttonBaseStyles,
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && "w-full",
        className
      )}
      {...linkProps}
      {...props}
    >
      {children}
    </Link>
  );
}
