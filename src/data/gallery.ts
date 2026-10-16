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
    alt: "Essential food support hampers and fresh groceries for Gordonridge families",
    caption:
      "Food support hampers and fresh grocery provisions organized for community distribution to Gordonridge families and seniors.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "food-support-02",
    src: "/images/gordonridge/food-support/food-support-02.jpeg",
    alt: "Fresh produce and grocery provisions organized for community delivery",
    caption:
      "Nutritious groceries and food security provisions prepared for distribution across 10, 20, 30, and 40 Gordonridge Place.",
    category: "Family & Community Support",
    featured: false,
  },
  {
    id: "food-support-03",
    src: "/images/gordonridge/food-support/food-support-03.jpeg",
    alt: "Community food hampers prepared by resident volunteers",
    caption:
      "Resident volunteers organizing and assembling vital food packages to assist neighbours and eliminate barriers to essential nutrition.",
    category: "Resident Leaders & Volunteers",
    featured: false,
  },
  {
    id: "food-support-04",
    src: "/images/gordonridge/food-support/food-support-04.jpeg",
    alt: "Gordonridge community food distribution initiative supporting local households",
    caption:
      "Family & community food relief initiative providing direct household assistance and connecting residents with community resources.",
    category: "Families & Community Events",
    featured: true,
  },
  {
    id: "food-support-05",
    src: "/images/gordonridge/food-support/food-support-05.jpeg",
    alt: "Resident volunteer packaging and sorting food hampers for seniors and families",
    caption:
      "Dedicated resident volunteer packaging and sorting food hampers to ensure seniors and families receive essential nourishment.",
    category: "Resident Leaders & Volunteers",
    featured: true,
  },
];
