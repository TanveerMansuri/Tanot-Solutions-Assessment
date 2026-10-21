import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { DropdownMenu } from "./dropdown-menu";
import { NavigationItem } from "./navigation-item";

export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {
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

export function NavigationMenu({ className, ...props }: NavigationMenuProps) {
  return (
    <nav
      aria-label="Main Navigation"
      className={cn("hidden items-center gap-3 lg:gap-6 md:flex", className)}
      {...props}
    >
      <NavigationItem href="#case-studies">Case Studies</NavigationItem>
      <NavigationItem href="#reviews">Reviews</NavigationItem>
      <DropdownMenu label="Services" items={servicesItems} />
      <DropdownMenu label="Company" items={companyItems} />
      <NavigationItem href="#blog">Blog</NavigationItem>
    </nav>
  );
}
