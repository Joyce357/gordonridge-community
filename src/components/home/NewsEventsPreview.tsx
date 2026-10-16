import Link from "next/link";
import { events } from "@/data/events";
import { news } from "@/data/news";

export default function NewsEventsPreview() {
  const hasPublishedItems = events.length > 0 || news.length > 0;

  return (
    <section className="w-full py-20 bg-white" id="news-events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Community Bulletin</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Stay Connected in Gordonridge
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Find out about upcoming programs, resident meetings, workshops, and community
              announcements at 20 Gordonridge Place.
            </p>
          </div>
          <Link
            href="/news-events"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0F7F2] text-[#1B7A3E] font-bold text-xs border border-[#1B7A3E]/30 hover:bg-[#1B7A3E] hover:text-white shadow-sm self-start md:self-auto"
          >
            <span>All News &amp; Events</span>
            <span className="material-symbols-outlined text-sm">calendar_month</span>
          </Link>
        </div>

        {hasPublishedItems ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((item) => (
              <div
                key={item.slug}
                className="card-interactive p-6 rounded-3xl bg-[#FDFBF7] border border-[#1B7A3E]/20 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] font-extrabold text-xs">
                      {item.category}
                    </span>
                    <span className="material-symbols-outlined text-[#1B7A3E]">calendar_today</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block mb-1">
                      {item.date} {item.time ? `· ${item.time}` : ""}
                    </span>
                    <h3 className="text-lg font-bold text-[#0F243E]">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#1B7A3E]">
                        location_on
                      </span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/news-events"
                  className="btn-interactive w-full py-2.5 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Event Details</span>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* Structured Community Notices from Client Content when no live dynamic events exist */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Notice 1 */}
            <div className="card-interactive p-6 rounded-3xl bg-[#FDFBF7] border border-[#1B7A3E]/20 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] font-extrabold text-xs">
                    Seniors &amp; Youth
                  </span>
                  <span className="material-symbols-outlined text-[#1B7A3E]">calendar_today</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">
                    Community Activity Focus
                  </span>
                  <h3 className="text-lg font-bold text-[#0F243E]">
                    Intergenerational Storytelling &amp; Technology Circles
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Youth and seniors gathering in the Community Room to share stories, learn tablet
                    and smartphone skills, and build mutual bonds.
                  </p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#1B7A3E]">
                      location_on
                    </span>
                    <span>Community Centre, 20 Gordonridge Place</span>
                  </div>
                </div>
              </div>
              <Link
                href="/news-events"
                className="btn-interactive w-full py-2.5 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>View Bulletin</span>
              </Link>
            </div>

            {/* Notice 2 */}
            <div className="card-interactive p-6 rounded-3xl bg-[#FDFBF7] border border-[#F5A623]/25 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FEF08A] text-[#0A1626] font-extrabold text-xs">
                    Family Support
                  </span>
                  <span className="material-symbols-outlined text-[#F5A623]">restaurant</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">
                    Resident Initiative
                  </span>
                  <h3 className="text-lg font-bold text-[#0F243E]">
                    Community Hospitality &amp; Food Support Day
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Food provisions, refreshments, and connection to employment and housing resources
                    for Gordonridge families.
                  </p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#F5A623]">
                      location_on
                    </span>
                    <span>20 Gordonridge Place Community Room</span>
                  </div>
                </div>
              </div>
              <Link
                href="/news-events"
                className="btn-interactive w-full py-2.5 rounded-xl bg-[#0F243E] hover:bg-[#1B7A3E] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Details &amp; Timing</span>
              </Link>
            </div>

            {/* Notice 3 */}
            <div className="card-interactive p-6 rounded-3xl bg-[#FDFBF7] border border-[#0F243E]/20 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#DCE8F7] text-[#0F243E] font-extrabold text-xs">
                    Resident Voice
                  </span>
                  <span className="material-symbols-outlined text-[#0F243E]">groups</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">
                    Monthly Forum
                  </span>
                  <h3 className="text-lg font-bold text-[#0F243E]">
                    Resident Leadership Forum &amp; Community Planning
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    An open space for residents across 10, 20, 30, and 40 Gordonridge Place to
                    discuss neighborhood initiatives and volunteer roles.
                  </p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#0F243E]">
                      location_on
                    </span>
                    <span>Gordonridge CDI Community Centre</span>
                  </div>
                </div>
              </div>
              <Link
                href="/news-events"
                className="btn-interactive w-full py-2.5 rounded-xl bg-white border border-slate-300 hover:border-[#1B7A3E] hover:text-[#1B7A3E] text-[#0F243E] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>RSVP / Participate</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
