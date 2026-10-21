export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  iconName: "link" | "settings" | "sparkles" | "map-pin" | "cloud" | "file-text";
  tag: string;
  title: string;
  description: string;
  supporting: string;
  benefits: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}
