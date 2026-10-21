export interface ClientReviewItem {
  id: string;
  stars: number;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
}

export const CLIENT_REVIEWS_DATA: ClientReviewItem[] = [
  {
    id: "sandeep-das",
    stars: 5,
    content:
      "After we started link building with Tanot Solutions, they helped our CRM's high-converting product page rank higher with an impressive 80% increase in traffic and an equally exceptional 80% increase in the total number of sign-ups every day.",
    author: {
      name: "Sandeep Das",
      role: "Marketing Manager",
      company: "CRM SaaS Company",
    },
  },
  {
    id: "michael-dunlop",
    stars: 5,
    content:
      "We've been impressed by their ability to consistently build high-quality backlinks, which are very challenging to achieve. We work with highly reputed brands, where quality guidelines are stringent and difficult for many agencies to meet. However, Tanot Solutions consistently meets these standards.",
    author: {
      name: "Michael Dunlop",
      role: "Director",
      company: "LinkBuilder.io",
    },
  },
  {
    id: "marko-spasic",
    stars: 5,
    content:
      "Since we started working with Tanot Solutions on our link-building efforts, we've seen steady increases in our organic traffic MoM over the past 6 months. I can also honestly say that Renu and the team are very responsive and punctual, something I really appreciate from our partners.",
    author: {
      name: "Marko Spasic",
      role: "Marketing Manager",
      company: "Hosting company",
    },
  },
];
