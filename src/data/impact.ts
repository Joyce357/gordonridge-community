export interface ImpactPillar {
  id: string;
  number: string;
  title: string;
  icon: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  outcomes: {
    highlight: string;
    description: string;
  }[];
}

export interface ImpactStat {
  value: string;
  label: string;
  detail?: string;
}

/**
 * Community Impact goals, themes, and verified outcomes.
 * No fabricated numerical statistics — structured for future verified metrics when supplied by client leadership.
 */
export const impactPillars: ImpactPillar[] = [
  {
    id: "connected-generations",
    number: "01",
    title: "CONNECTED GENERATIONS",
    icon: "diversity_1",
    accentColor: "border-[#1B7A3E]",
    badgeBg: "bg-[#D2F5D7]",
    badgeText: "text-[#1B7A3E]",
    outcomes: [
      {
        highlight: "Reduce social isolation",
        description: "among Black seniors and elders who live alone in Gordonridge.",
      },
      {
        highlight: "Build stronger relationships",
        description: "between seniors and youth through shared storytelling, mentoring, and community meals.",
      },
      {
        highlight: "Help seniors become comfortable using technology",
        description: "to access essential services and stay in touch with loved ones.",
      },
    ],
  },
  {
    id: "opportunity-leadership",
    number: "02",
    title: "OPPORTUNITY & LEADERSHIP",
    icon: "military_tech",
    accentColor: "border-[#F5A623]",
    badgeBg: "bg-[#FEF08A]",
    badgeText: "text-[#B45309]",
    outcomes: [
      {
        highlight: "Develop youth and resident leaders",
        description: "who take active roles in guiding community programs and advisory circles.",
      },
      {
        highlight: "Create positive opportunities for young people",
        description: "through athletic recreation, mentoring, and life-skills workshops.",
      },
      {
        highlight: "Connect residents with employment",
        description: "training, internships, and educational advancement opportunities.",
      },
    ],
  },
  {
    id: "stronger-community",
    number: "03",
    title: "STRONGER COMMUNITY",
    icon: "shield",
    accentColor: "border-[#0F243E]",
    badgeBg: "bg-[#DCE8F7]",
    badgeText: "text-[#0F243E]",
    outcomes: [
      {
        highlight: "Increase volunteering and participation",
        description: "across 10, 20, 30, and 40 Gordonridge Place residential towers.",
      },
      {
        highlight: "Connect families with food support, housing, and social services",
        description: "to reduce daily household pressures and food insecurity.",
      },
      {
        highlight: "Improve community safety and belonging",
        description: "and strengthen the collective voice of Gordonridge residents.",
      },
    ],
  },
];

/**
 * Verified statistics can be appended here once audited and confirmed by Gordonridge leadership.
 */
export const impactStats: ImpactStat[] = [];
