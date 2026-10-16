export interface EventItem {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  shortDescription: string;
  description: string;
  image?: string;
  category: string;
  featured?: boolean;
  registrationLink?: string;
}

/**
 * Verified community events.
 * Currently empty pending confirmed dates and schedules from Gordonridge leadership.
 * The site gracefully handles an empty events array by showing an informative empty state.
 */
export const events: EventItem[] = [];

export const eventsEmptyState = {
  title: "Upcoming Community Events",
  message: "Upcoming community events will be posted here.",
  subtext:
    "We regularly host intergenerational gatherings, community meals, workshops, and youth activities. Check back soon or contact us to stay informed.",
  ctaLabel: "Contact Us to Learn More",
  ctaHref: "/contact",
};
