# Gordonridge Community Development Initiative — Content Guide

Welcome to the content guide for the **Gordonridge Community Development Initiative** website.

This website was built with a file-managed content architecture (no database, no backend CMS, no complicated dashboard). All text, programs, events, leadership, news, gallery photos, and contact information are managed inside simple, typed TypeScript files in the `src/data/` folder and real images inside `public/images/`.

Anyone can easily update content directly or through Antigravity prompts without writing code or redesigning components.

---

## Quick Reference Summary

| What do you want to update? | File to open |
| :--- | :--- |
| **Site Name, Motto, Mission, Vision, Values, Address** | [`src/data/site.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/site.ts) |
| **Programs & Activities (6 Core Areas)** | [`src/data/programs.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/programs.ts) |
| **Community Impact Themes & Outcomes** | [`src/data/impact.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/impact.ts) |
| **Upcoming Events Calendar** | [`src/data/events.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/events.ts) |
| **Community News & Announcements** | [`src/data/news.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/news.ts) |
| **Photo Gallery (Authentic Gordonridge Images)** | [`src/data/gallery.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/gallery.ts) |
| **Partners & Collaborative Organizations** | [`src/data/partners.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/partners.ts) |
| **Leadership (Executive Director, Board, Staff)** | [`src/data/leadership.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/leadership.ts) |
| **Get Involved Pathways (Participate, Lead, Partner)** | [`src/data/get-involved.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/get-involved.ts) |
| **Homepage Section Ordering** | [`src/app/page.tsx`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/app/page.tsx) |
| **Email SMTP & Recipient Configuration** | [`.env.local`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/.env.local) (see [`.env.example`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/.env.example)) |

---

## 1. Where Images Should Be Placed & How to Replace an Image

All images are stored in the `public/` directory so they can be referenced directly:

- **Branding & Logos**: `public/gordonridge-logo.png`
- **Community & Architecture**: `public/images/gordonridge/community/`
- **Food Support & Hampers**: `public/images/gordonridge/food-support/`
- **Gallery Photos**: `public/images/gordonridge/gallery/`
- **Partner Logos**: `public/images/gordonridge/partners/`

### How to Replace an Existing Image:
1. Identify the image path used in the component or data file (e.g. `/images/gordonridge/community/gordonridge-residential-buildings.jpeg`).
2. Replace that file directly in the corresponding `public/...` directory with your new image using the same file name, OR save your new photo with a new name (e.g. `buildings-2026.jpg`) and update the `src` or `image` string in the corresponding data file.
3. **Note**: Always use authentic Gordonridge community photography. Never use stock photos or AI-generated people.

---

## 2. How to Update Contact Information

1. Open [`src/data/site.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/site.ts)
2. Locate the `contact` block inside `siteConfig`:
```typescript
contact: {
  communityCentre: "Community Centre",
  street: "20 Gordonridge Place",
  city: "Scarborough",
  province: "Ontario",
  postalCodePlaceholder: "",
  fullAddress: "Community Centre, 20 Gordonridge Place, Scarborough, Ontario",
  email: "info@gordonridge.ca", // Update when official email is ready
  phone: "(416) 000-0000",      // Update when official phone is ready
  website: "https://gordonridge.ca",
},
```
3. Save the file. The homepage contact section, contact page, and site footer will reflect the change immediately.

---

## 3. How to Update Social Links

1. Open [`src/data/site.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/site.ts)
2. Locate `socialLinks`:
```typescript
socialLinks: [
  { name: "Instagram", href: "https://instagram.com/gordonridge", icon: "photo_camera" },
  { name: "Facebook", href: "https://facebook.com/gordonridge", icon: "public" },
  { name: "LinkedIn", href: "https://linkedin.com/company/gordonridge", icon: "work" },
],
```
3. Update the `href` URLs to Gordonridge's verified profiles.
4. Save the file.

---

## 4. How to Add or Update a Program

1. Open [`src/data/programs.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/programs.ts)
2. To update an existing program, find its entry (e.g. `intergenerational-seniors-youth` or `seniors-engagement-wellness`) and modify the text:
   - `title`: Display name of the program.
   - `shortDescription`: Summary shown on preview cards.
   - `fullDescription`: Complete description shown on the program page.
   - `activities`: The list of bullet points detailing the program activities.
   - `image`: Path to the authentic photo in `public/...`.
3. To add a new verified program, append a new `Program` object to the `programs` array:
```typescript
{
  slug: "new-program-slug",
  title: "New Program Title",
  shortDescription: "Short summary...",
  fullDescription: "Detailed description...",
  category: "Community",
  featured: false,
  image: "/images/gordonridge/community/gordonridge-residential-buildings.jpeg",
  audience: "Gordonridge Residents",
  activities: [
    "Activity point 1",
    "Activity point 2",
  ],
  ctaLabel: "Sign Up for This Program",
  ctaHref: "/#get-involved",
}
```
4. Save the file.

---

## 5. How to Add a Community Event

1. Open [`src/data/events.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/events.ts).
2. Inside the `events` array, add a new event object:
```typescript
export const events: EventItem[] = [
  {
    slug: "intergenerational-community-dinner-july-2026",
    title: "Intergenerational Community Dinner & Storytelling",
    date: "Saturday, July 18, 2026",
    time: "1:00 PM – 3:30 PM",
    location: "20 Gordonridge Place Community Centre",
    shortDescription: "Join Gordonridge seniors, youth, and families for a nutritious shared meal and storytelling circle.",
    description: "Detailed description of the gathering...",
    image: "/images/gordonridge/food-support/food-support-01.jpeg",
    category: "Intergenerational",
    featured: true,
    registrationLink: "/#get-involved",
  },
];
```
3. Save the file.
4. If `events` is empty `[]`, the website automatically displays the verified message:
   *"Upcoming Gordonridge community events will be posted here."*

---

## 6. How to Add Community News

1. Open [`src/data/news.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/news.ts).
2. Inside the `news` array, add a news item:
```typescript
export const news: NewsItem[] = [
  {
    slug: "gordonridge-court-summer-recreation",
    title: "Gordonridge Community Court Open for Youth Recreation",
    excerpt: "Residents gathered at the revitalized court for positive summer basketball and recreation.",
    body: "Full article text detailing the community activity...",
    image: "/images/gordonridge/community/gordonridge-community-court-aerial.jpeg",
    category: "Youth Leadership",
    publishedDate: "Summer 2026",
    featured: true,
  },
];
```
3. Save the file.

---

## 7. How to Add Gallery Images

1. Place your authentic photo in `public/images/gordonridge/gallery/` (e.g. `community-gathering.jpg`).
2. Open [`src/data/gallery.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/gallery.ts).
3. Inside `galleryItems`, add a new photo entry:
```typescript
{
  id: "community-gathering",
  src: "/images/gordonridge/gallery/community-gathering.jpg",
  alt: "Gordonridge residents participating in community gathering",
  caption: "Seniors and youth sharing conversation at the 20 Gordonridge Place Community Centre.",
  category: "Seniors & Youth Together", // Pick from galleryCategories
  featured: true,
}
```
4. Save the file. The image will automatically appear on the homepage gallery and the dedicated gallery page, with full category filtering and an accessible lightbox modal with keyboard close (Escape key).

---

## 8. How to Add a Confirmed Partner

1. Place the partner's logo in `public/images/gordonridge/partners/` (e.g. `partner-logo.png`).
2. Open [`src/data/partners.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/partners.ts).
3. Inside `partners`, add the new collaborator:
```typescript
export const partners: Partner[] = [
  {
    name: "Organization Name",
    logo: "/images/gordonridge/partners/partner-logo.png",
    website: "https://example-partner.org",
    description: "Collaborating with Gordonridge CDI on resident support and youth recreation.",
    category: "Foundations",
  },
];
```
4. Save the file.

---

## 9. How to Update Leadership Information

1. Open [`src/data/leadership.ts`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/data/leadership.ts).
2. The Executive Director is verified as **Nicola Bynoe**:
```typescript
{
  role: "Executive Director",
  name: "Nicola Bynoe",
  category: "executive",
  description: "Executive Director of Gordonridge Community Development Initiative, leading resident-driven support and intergenerational programs.",
}
```
3. When official Board member names or coordinators are appointed by Gordonridge leadership, add the `name` property to the corresponding role object (e.g. Board Chair, Treasurer, Community Coordinator).
4. Save the file.

---

## 10. How to Change Homepage Content & Ordering

1. Open [`src/app/page.tsx`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/src/app/page.tsx).
2. The homepage contains the 13 verified sections in order:
   - `<Hero />` (`#hero`)
   - `<WhoWeAre />` (`#about`)
   - `<IntergenerationalFeature />` (Connecting Generations)
   - `<ProgramsSection />` (`#programs`)
   - `<OurCommunity />` (Our Gordonridge Community)
   - `<FamilySupport />` (Family & Community Support)
   - `<ImpactSection />` (`#impact`)
   - `<GalleryPreview />` (`#gallery`)
   - `<NewsEventsPreview />` (`#news-events`)
   - `<GetInvolvedSection />` (`#get-involved`)
   - `<PartnersPreview />` (`#partners`)
   - `<ContactSection />` (`#contact`)
   - `<FinalCTA />`
3. You can adjust the order of these sections or customize the text in their respective components under `src/components/home/`.

---

## 11. How to Configure Email & Form Delivery

1. Create a file called `.env.local` in the project root (see [`.env.example`](file:///c:/Users/Admin%20Lenovo/Desktop/Thejoycetech/Projects/Gordonridge-Comunity/.env.example)).
2. Add your Gmail SMTP credentials:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
GORDONRIDGE_RECIPIENT_EMAIL=info@gordonridge.ca
```
- **How to create a Gmail App Password**:
  1. Go to your Google Account (myaccount.google.com).
  2. Click **Security** -> Enable **2-Step Verification** if not already enabled.
  3. Search for **App passwords**.
  4. Generate a new app password named "Gordonridge Website".
  5. Copy the 16-character code into `GMAIL_APP_PASSWORD`.
3. When configured, form submissions from the Contact Form and Get Involved Form are sent directly to `GORDONRIDGE_RECIPIENT_EMAIL`, and the visitor automatically receives a confirmation email.
4. If no `.env.local` is present, the website runs in **safe simulation mode** (submissions are logged to the console and return success, so forms never crash during development or demo).

---

## 12. Verification & Build Command

After making any changes, verify that the site compiles cleanly with:

```bash
npm run build
```

This ensures zero broken links, validates all TypeScript types, and compiles an optimized production build.
