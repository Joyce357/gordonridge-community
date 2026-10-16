export interface Partner {
  name: string;
  logo?: string;
  website?: string;
  description: string;
  category: PartnerCategory;
}

export type PartnerCategory =
  | "Government"
  | "Foundations"
  | "Corporations"
  | "Schools & Academic"
  | "Community Organizations"
  | "Service Providers"
  | "Local Businesses";

export interface PartnerSector {
  title: string;
  description: string;
  icon: string;
}

export const partnerSectors: PartnerSector[] = [
  {
    title: "Government",
    description:
      "Municipal, provincial, and federal partners supporting public infrastructure, community safety, and local revitalization.",
    icon: "account_balance",
  },
  {
    title: "Foundations",
    description:
      "Philanthropic organizations investing in Black youth leadership, seniors health, food security, and grassroots equity.",
    icon: "volunteer_activism",
  },
  {
    title: "Corporations",
    description:
      "Corporate partners providing corporate sponsorship, recreational infrastructure, digital technology, and volunteer teams.",
    icon: "corporate_fare",
  },
  {
    title: "Schools & Educational Institutions",
    description:
      "Scarborough schools and educators collaborating on youth mentorship, tutoring, and family engagement.",
    icon: "school",
  },
  {
    title: "Community Organizations",
    description:
      "Allied grassroots organizations working collectively across Scarborough to empower residents and share resources.",
    icon: "groups",
  },
  {
    title: "Service Providers",
    description:
      "Specialized healthcare, legal, housing, and social service agencies providing direct support referrals for families.",
    icon: "medical_services",
  },
  {
    title: "Local Businesses",
    description:
      "Neighbourhood merchants and employers offering local hiring, donations, and in-kind event support.",
    icon: "storefront",
  },
];

export const partnershipWays = [
  {
    title: "Program Funding & Grants",
    description:
      "Sponsor intergenerational initiatives, seniors wellness gatherings, youth leadership cohorts, and emergency family food relief.",
    icon: "paid",
  },
  {
    title: "Volunteer Mobilization",
    description:
      "Engage your team in community food hamper distribution, court clean-ups, senior check-ins, or workshop facilitation.",
    icon: "diversity_3",
  },
  {
    title: "Employment & Internships",
    description:
      "Open positive employment pathways, apprentice roles, and youth job placements for talented Gordonridge youth.",
    icon: "work",
  },
  {
    title: "Workshops & Skill Building",
    description:
      "Lead digital literacy, financial wellness, health education, or career development sessions for residents.",
    icon: "psychology",
  },
  {
    title: "Technology & Equipment",
    description:
      "Donate laptops, tablets, educational software, or sports equipment for seniors and youth programs.",
    icon: "devices",
  },
  {
    title: "Donations & Food Supplies",
    description:
      "Contribute non-perishable goods, fresh produce, gift cards, or hygiene essentials for resident family support.",
    icon: "inventory_2",
  },
];

/**
 * Confirmed partner organizations.
 * Neutral list pending formal logo and link authorizations from Gordonridge leadership.
 */
export const partners: Partner[] = [];
