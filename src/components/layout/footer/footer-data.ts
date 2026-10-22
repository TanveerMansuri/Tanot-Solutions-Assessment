export interface FooterLinkItem {
  label: string;
  href: string;
}

export const COMPANY_LINKS: FooterLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Case Studies", href: "#case-study" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export const SERVICES_LINKS: FooterLinkItem[] = [
  { label: "Link Building", href: "#services" },
  { label: "Technical SEO", href: "#services" },
  { label: "Content Marketing", href: "#services" },
  { label: "AI Search Optimization", href: "#services" },
  { label: "Local SEO", href: "#services" },
  { label: "SEO Consulting", href: "#services" },
];

export const RESOURCES_LINKS: FooterLinkItem[] = [
  { label: "Choose an Agency", href: "#faq" },
  { label: "SEO Checklist", href: "#resources" },
  { label: "Link Building Guide", href: "#resources" },
  { label: "AI Search Guide", href: "#resources" },
  { label: "White Label SEO", href: "#resources" },
  { label: "Help Center", href: "#help" },
];
