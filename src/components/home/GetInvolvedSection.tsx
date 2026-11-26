import Link from "next/link";

const pathways = [
  {
    number: "01",
    title: "Participate in a Program",
    description:
      "Join seniors gatherings, youth leadership, intergenerational activities, or family support.",
    href: "/get-involved#participate",
    cta: "Join a Program",
    accent: "text-[#1B7A3E]",
  },
  {
    number: "02",
    title: "Volunteer & Lead",
    description:
      "Share your time, help with community meals and workshops, or become a resident leader.",
    href: "/get-involved#volunteer",
    cta: "Become a Volunteer",
    accent: "text-[#B45309]",
  },
  {
    number: "03",
    title: "Partner With Us",
    description:
      "Collaborate with Gordonridge CDI through funding, expertise, workshops, or community resources.",
    href: "/partners",
    cta: "Partner With Us",
    accent: "text-[#0F243E]",
  },
];

export default function GetInvolvedSection() {
  return (
    <section
      className="w-full py-20 lg:py-24 bg-[#FFFDF0] border-y border-[#F5A623]/25 scroll-mt-20"
      id="get-involved"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Resident Volunteer & Community Photograph */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#0A1626] relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/gordonridge/community/resident-volunteers-community-01.jpeg"
                  alt="Smiling Gordonridge resident volunteers and youth gathered together in the community centre"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-extrabold text-[#FEF08A] uppercase tracking-wider block">
                  Resident Leaders &amp; Volunteers
                </span>
                <p className="text-xs sm:text-sm text-slate-100 mt-0.5">
                  Residents are not only participants &mdash; they help lead the work in Gordonridge.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Heading + 3 Stacked Interactive Pathway Rows (No Card Grid) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF08A] border border-[#F5A623]/40 text-[#0F243E] text-xs font-extrabold uppercase tracking-wider">
                <span>Get Involved</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F243E] tracking-tight">
                GORDONRIDGE NEEDS YOU
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Whether you are a senior looking to connect, a young person interested in
                leadership, a parent seeking support, or a resident ready to volunteer, there is a
                place for you here.
              </p>
            </div>

            <div className="divide-y divide-[#F5A623]/30 border-y border-[#F5A623]/30">
              {pathways.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1 max-w-md">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-black ${item.accent}`}>{item.number}</span>
                      <h3 className="text-base font-extrabold text-[#0F243E] group-hover:text-[#1B7A3E] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1B7A3E] uppercase tracking-wider shrink-0">
                    <span>{item.cta}</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
