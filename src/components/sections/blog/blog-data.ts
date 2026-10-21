export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "SEO" | "LINK BUILDING" | "AI SEARCH" | "CASE STUDY";
  imageSrc: string;
  imageAlt: string;
  publishedAt: string;
  author: {
    name: string;
    avatarSrc?: string;
  };
  readTime?: string;
  href: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "geo-agencies-ai-search",
    slug: "geo-agencies-ai-search",
    title: "11 Best GEO Agencies Helping B2B Brands Win AI Search",
    excerpt:
      "Explore the top GEO agencies helping B2B brands improve visibility in AI search and drive qualified leads.",
    category: "SEO",
    imageSrc: "/images/blog/geo-agencies-ai-search.png",
    imageAlt: "Two business partners shaking hands representing B2B generative engine optimization",
    publishedAt: "October 16, 2026",
    author: {
      name: "Renu Sharma",
      avatarSrc: "/images/renu-founder.png",
    },
    readTime: "6 min read",
    href: "#blog-geo-agencies",
  },
  {
    id: "link-building-startups",
    slug: "link-building-startups",
    title: "Link Building For Startups: How To Get Quality Backlinks On A Budget",
    excerpt:
      "Learn practical link building strategies for startups to get high-quality backlinks without overspending.",
    category: "LINK BUILDING",
    imageSrc: "/images/blog/link-building-startups.png",
    imageAlt: "Rocket launching over growth bar charts illustrating startup link building acceleration",
    publishedAt: "October 6, 2026",
    author: {
      name: "Renu Sharma",
      avatarSrc: "/images/renu-founder.png",
    },
    readTime: "8 min read",
    href: "#blog-link-building-startups",
  },
  {
    id: "white-hat-seo-techniques",
    slug: "white-hat-seo-techniques",
    title: "13 White Hat SEO Techniques: How To Rank Higher On Google & AI Search",
    excerpt:
      "Discover proven white hat SEO techniques to improve your rankings on Google and AI search platforms.",
    category: "SEO",
    imageSrc: "/images/blog/white-hat-seo-techniques.png",
    imageAlt: "Digital specialist optimizing content near an AI search bot robot interface",
    publishedAt: "October 2, 2026",
    author: {
      name: "Renu Sharma",
      avatarSrc: "/images/renu-founder.png",
    },
    readTime: "7 min read",
    href: "#blog-white-hat-seo",
  },
];
