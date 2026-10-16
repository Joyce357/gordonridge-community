export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  primaryMessage: string;
  motto: string;
  mission: string;
  vision: string;
  values: string[];
  contact: {
    communityCentre: string;
    street: string;
    city: string;
    province: string;
    postalCodePlaceholder: string;
    fullAddress: string;
    email: string;
    phone: string;
    website: string;
  };
  locations: string[];
  socialLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
  navigation: NavGroup[];
  footer: {
    description: string;
    copyrightYear: number;
    disclaimer: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Gordonridge Community Development Initiative",
  shortName: "Gordonridge CDI",
  tagline: "Connecting Generations, Strengthening Gordonridge",
  primaryMessage: "Connecting Generations. Strengthening Gordonridge.",
  motto: "Strong People. Strong Families. Stronger Community.",
  mission:
    "Our mission is to improve the well-being of Black families and residents in Gordonridge by connecting generations, strengthening families, developing local leadership and creating access to opportunities, resources and community support.",
  vision:
    "A strong, safe and connected Gordonridge where seniors, youth and families are supported, residents have a voice, and different generations work together to strengthen their community.",
  values: [
    "Community",
    "Inclusion",
    "Leadership",
    "Opportunity",
    "Safety",
    "Respect",
    "Accountability",
  ],
  contact: {
    communityCentre: "Community Centre",
    street: "20 Gordonridge Place",
    city: "Scarborough",
    province: "Ontario",
    postalCodePlaceholder: "",
    fullAddress: "Community Centre, 20 Gordonridge Place, Scarborough, Ontario",
    email: "", // Neutral placeholder: to be updated with official client address
    phone: "", // Neutral placeholder: to be updated with official client phone
    website: "https://gordonridge.ca", // Domain placeholder
  },
  locations: [
    "10 Gordonridge Place",
    "20 Gordonridge Place (Community Centre)",
    "30 Gordonridge Place",
    "40 Gordonridge Place",
  ],
  socialLinks: [
    { name: "Instagram", href: "/contact", icon: "photo_camera" },
    { name: "Facebook", href: "/contact", icon: "public" },
    { name: "LinkedIn", href: "/contact", icon: "work" },
  ],
  navigation: [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Programs", href: "/#programs" },
    { label: "Impact", href: "/#impact" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Get Involved", href: "/#get-involved" },
    { label: "Contact", href: "/#contact" },
  ],
  footer: {
    description:
      "Gordonridge Community Development Initiative is a Black, resident-led organization working to strengthen families, connect seniors and youth, and improve quality of life across the Gordonridge community in Scarborough.",
    copyrightYear: new Date().getFullYear(),
    disclaimer:
      "Gordonridge Community Development Initiative is a resident-led organization serving residents and families of the Gordonridge community.",
  },
};
