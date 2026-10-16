export interface InvolvementPathway {
  id: string;
  pillar: "PARTICIPATE" | "LEAD" | "PARTNER";
  title: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaAnchor: string;
  icon: string;
}

export const involvementPathways: InvolvementPathway[] = [
  // Pillar 1: PARTICIPATE
  {
    id: "join-a-program",
    pillar: "PARTICIPATE",
    title: "Join a Program",
    description:
      "Take part in intergenerational gatherings, community safety workshops, wellness sessions, and social dinners across Gordonridge.",
    benefits: [
      "Access free resident-centred community activities",
      "Meet neighbours and form lasting multi-generational connections",
      "Connect with community resources and family support",
    ],
    ctaLabel: "Sign Up for Programs",
    ctaAnchor: "#get-involved-form",
    icon: "event_available",
  },
  {
    id: "seniors-registration",
    pillar: "PARTICIPATE",
    title: "Seniors Registration",
    description:
      "Dedicated registration for Gordonridge seniors and elders seeking wellness activities, peer circles, outings, and tech support.",
    benefits: [
      "Active health, wellness, and recreation sessions",
      "Warm, supportive peer social gatherings & nutritious meals",
      "One-on-one digital literacy support with youth volunteers",
    ],
    ctaLabel: "Register as a Senior",
    ctaAnchor: "#get-involved-form",
    icon: "elderly",
  },
  {
    id: "youth-registration",
    pillar: "PARTICIPATE",
    title: "Youth Registration",
    description:
      "Join our youth cohort for mentorship, leadership development, volunteer hours, and community-building projects.",
    benefits: [
      "Mentorship from community elders and experienced leaders",
      "Gain certified high school volunteer community hours",
      "Job readiness support, life skills, and leadership roles",
    ],
    ctaLabel: "Register as Youth",
    ctaAnchor: "#get-involved-form",
    icon: "school",
  },

  // Pillar 2: LEAD
  {
    id: "become-a-volunteer",
    pillar: "LEAD",
    title: "Become a Volunteer",
    description:
      "Help pack food hampers, support event setup, assist seniors with technology, or share your special skills with neighbours.",
    benefits: [
      "Directly support your neighbours and strengthen Gordonridge",
      "Flexible volunteer shifts around your work or school schedule",
      "Join a welcoming, passionate grassroots team of changemakers",
    ],
    ctaLabel: "Sign Up to Volunteer",
    ctaAnchor: "#get-involved-form",
    icon: "volunteer_activism",
  },
  {
    id: "become-a-resident-leader",
    pillar: "LEAD",
    title: "Become a Resident Leader",
    description:
      "Step forward to represent your building, organize neighbourhood initiatives, and help make decisions about Gordonridge's future.",
    benefits: [
      "Represent resident voices at planning and advisory tables",
      "Co-design community safety and intergenerational initiatives",
      "Build organizational governance and civic leadership skills",
    ],
    ctaLabel: "Step Forward to Lead",
    ctaAnchor: "#get-involved-form",
    icon: "campaign",
  },

  // Pillar 3: PARTNER
  {
    id: "become-a-community-partner",
    pillar: "PARTNER",
    title: "Become a Community Partner",
    description:
      "Collaborate with Gordonridge CDI through funding, program delivery, donations, apprenticeships, or specialized services.",
    benefits: [
      "Invest directly into grassroots, Black resident-led community impact",
      "Partner with an authentic, trusted, on-the-ground community leadership",
      "Create lasting systemic opportunities for Scarborough families",
    ],
    ctaLabel: "Partner With Us",
    ctaAnchor: "/partners#partner-inquiry",
    icon: "handshake",
  },
];
