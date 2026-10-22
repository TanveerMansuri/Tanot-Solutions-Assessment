import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { ModernDropdownMenu } from "./modern-dropdown-menu";
import { ModernNavigationItem } from "./modern-navigation-item";

export interface ModernNavigationMenuProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const servicesItems = [
  { label: "Search Engine Optimization (SEO)", href: "#seo" },
  { label: "AI Search Optimization (AIO)", href: "#aio" },
  { label: "Content Marketing", href: "#content" },
  { label: "Digital PR & Link Building", href: "#link-building" },
];

const companyItems = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

export function ModernNavigationMenu({ className, ...props }: ModernNavigationMenuProps) {
  return (
    <nav
      aria-label="Main Navigation"
      className={cn("hidden items-center gap-3 lg:gap-6 md:flex", className)}
      {...props}
    >
      <ModernNavigationItem href="#case-studies">Case Studies</ModernNavigationItem>
      <ModernNavigationItem href="#reviews">Reviews</ModernNavigationItem>
      <ModernDropdownMenu label="Services" items={servicesItems} />
      <ModernDropdownMenu label="Company" items={companyItems} />
      <ModernNavigationItem href="#blog">Blog</ModernNavigationItem>
    </nav>
  );
}
