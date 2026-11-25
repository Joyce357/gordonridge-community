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
