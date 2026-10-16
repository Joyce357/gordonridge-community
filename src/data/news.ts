export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image?: string;
  category: string;
  publishedDate: string;
  featured?: boolean;
}

/**
 * Verified community news and updates.
 * Maintained with verified posts only.
 * The site gracefully renders an informative empty state when no items are published.
 */
export const news: NewsItem[] = [];

export const newsEmptyState = {
  title: "News & Community Announcements",
  message: "Community news and announcements will be shared here.",
  subtext:
    "Stay tuned for updates on seniors activities, youth opportunities, community meals, and special announcements.",
  ctaLabel: "Get in Touch",
  ctaHref: "/contact",
};
