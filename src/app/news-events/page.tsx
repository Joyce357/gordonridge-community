import type { Metadata } from "next";
import Link from "next/link";
import { events, eventsEmptyState } from "@/data/events";
import { news, newsEmptyState } from "@/data/news";
import EmptyState from "@/components/shared/EmptyState";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "News & Events | Community Updates",
  description:
    "Stay connected with seniors activities, youth opportunities, community meals, and announcements in Gordonridge.",
};

export default function NewsEventsPage() {
  const upcomingCategories = [
    { title: "Seniors Activities", icon: "elderly", desc: "Wellness circles, peer socials, and digital literacy" },
    { title: "Youth Opportunities", icon: "sports_basketball", desc: "Mentorship, leadership cohorts, and recreation" },
    { title: "Intergenerational Programs", icon: "diversity_1", desc: "Storytelling, technology support, and shared projects" },
    { title: "Community Meetings", icon: "groups", desc: "Resident assemblies, building councils, and consultations" },
    { title: "Workshops & Skill Building", icon: "school", desc: "Health, financial literacy, and community rights" },
    { title: "Employment Opportunities", icon: "work", desc: "Local hiring notices, training sessions, and referrals" },
    { title: "Community Meals", icon: "restaurant", desc: "Shared breakfasts, holiday dinners, and hospitality" },
    { title: "Volunteer Opportunities", icon: "volunteer_activism", desc: "Food hamper packing, event setup, and peer check-ins" },
    { title: "Special Events", icon: "celebration", desc: "Court tournaments, summer block parties, and celebrations" },
    { title: "Community Announcements", icon: "campaign", desc: "Building updates, resource navigations, and safety notices" },
  ];

  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-[#0A1626] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gordonridge/community/gordonridge-community-court-aerial.jpeg"
            alt="Gordonridge community court backdrop"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/90 to-[#0A1626]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              <span>Community Bulletin</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              News &amp; Events
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Stay connected with what is happening in Gordonridge. Find schedules for seniors
              wellness, youth sports, workshops, and community dinners.
            </p>
            <div className="text-xs font-extrabold text-[#34A853] uppercase tracking-wider pt-2">
              Community Centre · 20 Gordonridge Place
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS & NEWS LISTINGS / PROFESSIONAL EMPTY STATES */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          {/* Upcoming Events Section */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                  Calendar Schedule
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E]">
                  Upcoming Community Events
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Centred at 20 Gordonridge Place
              </span>
            </div>

            {events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((ev) => (
                  <div
                    key={ev.slug}
                    className="card-interactive p-6 rounded-3xl bg-[#FDFBF7] border border-slate-200 shadow-sm"
                  >
                    <span className="text-xs font-bold text-[#1B7A3E] uppercase">
                      {ev.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F243E] mt-1">{ev.title}</h3>
                    <p className="text-xs text-slate-600 mt-2">{ev.shortDescription}</p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon="event_upcoming"
                title={eventsEmptyState.title}
                message={eventsEmptyState.message}
                subtext={eventsEmptyState.subtext}
                ctaLabel={eventsEmptyState.ctaLabel}
                ctaHref={eventsEmptyState.ctaHref}
              />
            )}
          </div>

          {/* Latest News & Announcements Section */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-wider block">
                  Dispatches &amp; Announcements
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E]">
                  Latest Community News
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">Verified Updates</span>
            </div>

            {news.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((item) => (
                  <div
                    key={item.slug}
                    className="card-interactive p-6 rounded-3xl bg-[#FDFBF7] border border-slate-200 shadow-sm"
                  >
                    <span className="text-xs font-bold text-[#1B7A3E] uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F243E] mt-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-2">{item.excerpt}</p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon="campaign"
                title={newsEmptyState.title}
                message={newsEmptyState.message}
                subtext={newsEmptyState.subtext}
                ctaLabel={newsEmptyState.ctaLabel}
                ctaHref={newsEmptyState.ctaHref}
              />
            )}
          </div>

          {/* Featured Activity Areas (Verified Client Categories) */}
          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                What to Expect on this Page
              </span>
              <h3 className="text-2xl font-bold text-[#0F243E]">
                Regular Activities &amp; Community Gatherings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As dates and seasonal sessions are confirmed by Gordonridge resident leadership,
                announcements and schedules will appear across these 10 verified categories:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {upcomingCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="card-static p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200 shadow-sm space-y-2"
                >
                  <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">
                    {cat.icon}
                  </span>
                  <div className="font-bold text-xs text-[#0F243E]">{cat.title}</div>
                  <p className="text-[11px] text-slate-500 leading-snug">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Want to Host or Share an Announcement?</h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach out to our Community &amp; Administrative Coordinator at 20 Gordonridge Place to
            connect about upcoming resident sessions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-interactive inline-block px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Contact Community Desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
