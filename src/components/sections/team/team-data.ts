export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "vikas-sharma",
    name: "Vikas Sharma",
    role: "Co-Founder and Head of Operations",
    imageSrc: "/images/team/vikas-sharma.png",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    id: "pradeep",
    name: "Pradeep",
    role: "Content Manager",
    imageSrc: "/images/team/pradeep.png",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    id: "ravina-jangid",
    name: "Ravina Jangid",
    role: "Link Building Expert",
    imageSrc: "/images/team/ravina-jangid.png",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    id: "aniket-mukherjee",
    name: "Aniket Mukherjee",
    role: "Link Building Expert",
    imageSrc: "/images/team/aniket-mukherjee.png",
    linkedinUrl: "https://www.linkedin.com",
  },
];
