export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  featured: boolean;
}

export type GalleryCategory =
  | "All"
  | "Gordonridge Community"
  | "Youth Leadership"
  | "Family & Community Support"
  | "Families & Community Events"
  | "Resident Leaders & Volunteers"
  | "Community Partners"
  | "Seniors in the Community"
  | "Seniors & Youth Together";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Gordonridge Community",
  "Youth Leadership",
  "Family & Community Support",
  "Families & Community Events",
  "Resident Leaders & Volunteers",
  "Community Partners",
  "Seniors in the Community",
  "Seniors & Youth Together",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "seniors-community-meal-01",
    src: "/images/gordonridge/seniors/seniors-community-meal-01.jpeg",
    alt: "Seniors and residents seated together enjoying a shared community meal at the Gordonridge Community Centre",
    caption:
      "Seniors and neighbours sharing a warm community meal and conversation inside the Gordonridge Community Centre.",
    category: "Seniors in the Community",
    featured: true,
  },
  {
    id: "resident-volunteers-community-01",
    src: "/images/gordonridge/community/resident-volunteers-community-01.jpeg",
    alt: "Smiling Gordonridge resident volunteers and youth gathered together in the community centre",
    caption:
      "Resident volunteers and young community members coming together to support neighbourhood initiatives at 20 Gordonridge Place.",
    category: "Resident Leaders & Volunteers",
    featured: true,
  },
  {
    id: "seniors-meal-service-01",
    src: "/images/gordonridge/nutrition/seniors-meal-service-01.jpeg",
    alt: "Resident volunteers serving warm meals and refreshments to seniors and neighbours at the community centre",
    caption:
      "Resident volunteers serving warm meals and organizing community supplies to support food security and neighbourly care.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "seniors-community-connection-01",
    src: "/images/gordonridge/seniors/seniors-community-connection-01.jpeg",
    alt: "Gordonridge seniors and residents talking together inside the sunlit community centre",
    caption:
      "Neighbours connecting in conversation and building welcoming relationships at the Gordonridge Community Centre.",
    category: "Seniors in the Community",
    featured: true,
  },
  {
    id: "seniors-community-gathering-01",
    src: "/images/gordonridge/seniors/seniors-community-gathering-01.jpeg",
    alt: "Seniors and resident volunteers sharing food and hospitality during a Gordonridge community gathering",
    caption:
      "Seniors, residents, and volunteers gathering over a shared meal in a welcoming community space.",
    category: "Families & Community Events",
    featured: true,
  },
  {
    id: "seniors-community-meal-02",
    src: "/images/gordonridge/seniors/seniors-community-meal-02.jpeg",
    alt: "Wide view of an inclusive community meal and gathering in the Gordonridge Community Centre gymnasium",
    caption:
      "An inclusive, accessible community gathering bringing seniors, residents, and volunteers together at 20 Gordonridge Place.",
    category: "Seniors in the Community",
    featured: true,
  },
  {
    id: "court-aerial",
    src: "/images/gordonridge/community/gordonridge-community-court-aerial.jpeg",
    alt: "Aerial view of the revitalized Gordonridge community sports court and recreation space",
    caption:
      "Aerial view of the revitalized Gordonridge community sports court, providing recreation and positive gathering space for local youth and families.",
    category: "Gordonridge Community",
    featured: true,
  },
  {
    id: "court-branding",
    src: "/images/gordonridge/community/gordonridge-court-branding.jpeg",
    alt: "Gordonridge community court branding celebrating resident youth recreation",
    caption:
      "Dedicated Gordonridge community court branding celebrating youth leadership, active living, and neighbourhood recreation.",
    category: "Youth Leadership",
    featured: true,
  },
  {
    id: "residential-buildings",
    src: "/images/gordonridge/community/gordonridge-residential-buildings.jpeg",
    alt: "Gordonridge community residential towers in Scarborough",
    caption:
      "The Gordonridge residential community in Scarborough, home to Black families, seniors, youth, and multi-generational households.",
    category: "Gordonridge Community",
    featured: true,
  },
  {
    id: "food-support-01",
    src: "/images/gordonridge/food-support/food-support-01.jpeg",
    alt: "Community food support table and organized supply packages for Gordonridge residents",
    caption:
      "Food support items, refreshments, and boxed community supplies prepared for Gordonridge residents and families.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "food-support-02",
    src: "/images/gordonridge/food-support/food-support-02.jpeg",
    alt: "Organized food supplies, fruit cups, snack bars, and beverages for resident support",
    caption:
      "Community supplies, pantry items, and nutritious snacks organized to support food security and family wellbeing across Gordonridge.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "food-support-03",
    src: "/images/gordonridge/food-support/food-support-03.jpeg",
    alt: "Prepared food support boxes and pantry supply packages for Gordonridge households",
    caption:
      "Carefully assembled food support packages and essential pantry supplies prepared for Gordonridge families and seniors.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "food-support-04",
    src: "/images/gordonridge/food-support/food-support-04.jpeg",
    alt: "Fruit cups, snack bars, beverages, and food support provisions arranged for community care",
    caption:
      "Food access and community care supplies prepared to support resident wellbeing and welcoming neighbourhood gatherings.",
    category: "Families & Community Events",
    featured: true,
  },
  {
    id: "food-support-05",
    src: "/images/gordonridge/food-support/food-support-05.jpeg",
    alt: "Assorted baked goods and refreshments arranged for Gordonridge community support gatherings",
    caption:
      "Community hospitality and shared refreshments supporting resident connection, care, and neighbourhood wellbeing.",
    category: "Families & Community Events",
    featured: true,
  },
];
