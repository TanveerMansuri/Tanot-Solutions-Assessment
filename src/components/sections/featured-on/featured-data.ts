export interface FeaturedLogo {
  id: string;
  name: string;
  imageSrc: string;
}

export const FEATURED_LOGOS: FeaturedLogo[] = [
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    imageSrc: "/images/featured-on/entrepreneur.png",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    imageSrc: "/images/featured-on/hubspot.png",
  },
  {
    id: "forbes",
    name: "Forbes",
    imageSrc: "/images/featured-on/forbes.png",
  },
  {
    id: "godaddy",
    name: "GoDaddy",
    imageSrc: "/images/featured-on/godaddy.png",
  },
  {
    id: "the-tribune",
    name: "The Tribune",
    imageSrc: "/images/featured-on/the-tribune.png",
  },
];
