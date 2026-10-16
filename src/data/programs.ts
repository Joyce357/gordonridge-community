export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  featured: boolean;
  image: string;
  audience: string;
  activities: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const programs: Program[] = [
  {
    slug: "intergenerational-seniors-youth",
    title: "Intergenerational Seniors & Youth Programs",
    shortDescription:
      "Our flagship initiative bringing different generations together to learn from one another, build lasting relationships, and eliminate isolation.",
    fullDescription:
      "Our seniors and youth programs bring different generations together to learn from one another, build relationships and reduce isolation. Young people gain knowledge, guidance and positive relationships with older residents, while seniors remain active, connected and involved in the community.",
    category: "Intergenerational",
    featured: true,
    image: "/images/gordonridge/community/gordonridge-community-court-aerial.jpeg",
    audience: "Seniors & Youth in Gordonridge",
    activities: [
      "Mentoring & positive relationship building",
      "Storytelling & living history exchange",
      "Technology support & digital literacy sharing",
      "Community meals & shared gatherings",
      "Interactive workshops & skill-building",
      "Cultural celebrations & activities",
      "Youth & senior collaborative leadership projects",
    ],
    ctaLabel: "Join Intergenerational Programs",
    ctaHref: "/get-involved#participate",
  },
  {
    slug: "seniors-engagement-wellness",
    title: "Seniors Engagement & Wellness",
    shortDescription:
      "Creating accessible opportunities for seniors to remain active, physically well, and socially connected with their neighbours.",
    fullDescription:
      "We create opportunities for seniors to remain active and connected through social gatherings, wellness activities, workshops, community meals, digital literacy, outings and peer support. A major focus is reaching seniors who may be isolated or have difficulty accessing services and community activities.",
    category: "Seniors",
    featured: true,
    image: "/images/gordonridge/food-support/food-support-01.jpeg",
    audience: "Seniors & Elders in Gordonridge",
    activities: [
      "Social gatherings & peer connection circles",
      "Physical wellness & health promotion activities",
      "Health, wellness & rights workshops",
      "Community meals & nutritious gatherings",
      "Digital literacy & smartphone/tablet assistance",
      "Neighbourhood outings & recreational activities",
      "Targeted outreach for isolated elders",
    ],
    ctaLabel: "Seniors Registration",
    ctaHref: "/get-involved#seniors-registration",
  },
  {
    slug: "youth-leadership-development",
    title: "Youth Leadership & Development",
    shortDescription:
      "Helping young people build confidence, practical life skills, positive pathways, and stronger ties to their neighbourhood.",
    fullDescription:
      "We help young people build confidence, leadership skills and stronger connections to their community. Youth can participate in mentoring, leadership development, volunteering, employment readiness, life-skills activities and community projects.",
    category: "Youth",
    featured: true,
    image: "/images/gordonridge/community/gordonridge-court-branding.jpeg",
    audience: "Youth & Young Adults in Gordonridge",
    activities: [
      "Youth mentorship & guidance circles",
      "Resident leadership development workshops",
      "Community volunteer hours & leadership experience",
      "Employment readiness & résumé support",
      "Essential life-skills training",
      "Youth-designed neighbourhood community projects",
    ],
    ctaLabel: "Youth Registration",
    ctaHref: "/get-involved#youth-registration",
  },
  {
    slug: "community-safety-violence-prevention",
    title: "Community Safety & Violence Prevention",
    shortDescription:
      "Promoting safer neighbourhoods through prevention, proactive relationship building, conflict resolution, and resident collaboration.",
    fullDescription:
      "We work with residents, youth, families and community partners to promote safer neighbourhoods. Our approach focuses on prevention, positive relationships, resident involvement, conflict prevention and connecting young people and families with appropriate supports.",
    category: "Community Safety",
    featured: false,
    image: "/images/gordonridge/community/gordonridge-residential-buildings.jpeg",
    audience: "Residents, Youth & Families in Gordonridge",
    activities: [
      "Proactive violence prevention & awareness",
      "Building positive neighbour-to-neighbour relationships",
      "Engaging youth and parents in community dialogue",
      "Conflict prevention & de-escalation approaches",
      "Direct referrals to tailored supportive services",
      "Collaborative initiatives with local community safety partners",
    ],
    ctaLabel: "Learn About Safety Initiatives",
    ctaHref: "/contact",
  },
  {
    slug: "family-community-support",
    title: "Family & Community Support",
    shortDescription:
      "Connecting families with essential food support, employment resources, housing assistance, and vital community services.",
    fullDescription:
      "We help residents connect with food support, employment opportunities, housing and community resources, workshops, referrals and other services. Our goal is to make it easier for families to find help when they need it.",
    category: "Family Support",
    featured: true,
    image: "/images/gordonridge/food-support/food-support-04.jpeg",
    audience: "Black Families & Gordonridge Households",
    activities: [
      "Community food hamper & fresh produce distribution",
      "Employment opportunities & career referrals",
      "Housing support navigation & resources",
      "Informational community workshops",
      "Direct referrals to specialized social services",
      "Emergency family resource assistance",
    ],
    ctaLabel: "Access Family Support",
    ctaHref: "/get-involved#participate",
  },
  {
    slug: "resident-leadership-volunteerism",
    title: "Resident Leadership & Volunteerism",
    shortDescription:
      "Empowering residents not just as participants, but as co-creators, decision-makers, and leaders shaping the future of Gordonridge.",
    fullDescription:
      "Residents are not only participants in our programs; they are part of leading the work. We create opportunities for seniors, youth, parents and other residents to volunteer, develop leadership skills, participate in community decision-making and help shape Gordonridge initiatives.",
    category: "Leadership",
    featured: false,
    image: "/images/gordonridge/food-support/food-support-05.jpeg",
    audience: "All Gordonridge Residents (Seniors, Youth, Parents)",
    activities: [
      "Community volunteer opportunities across all programs",
      "Resident leadership training & skill workshops",
      "Community organizing & planning committees",
      "Neighbourhood advisory & decision-making tables",
      "Grassroots initiative incubation & advocacy",
    ],
    ctaLabel: "Become a Resident Leader",
    ctaHref: "/get-involved#resident-leader",
  },
];
