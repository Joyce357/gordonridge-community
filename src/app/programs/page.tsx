import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Programs | Gordonridge CDI",
  description:
    "Explore the six core community program areas of Gordonridge Community Development Initiative in Scarborough.",
};

export default function ProgramsPage() {
  const flagship =
    programs.find((p) => p.slug === "intergenerational-seniors-youth") || programs[0];
  const supportingPrograms = programs.filter((p) => p.slug !== flagship.slug);

  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-[#0A1626] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gordonridge/community/gordonridge-court-branding.jpeg"
            alt="G-Ridge court markings"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/90 to-[#0A1626]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              <span>Verified Program Framework</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Community Programs
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Connecting generations, strengthening families, and developing resident leadership
              through six core community program areas in Scarborough.
            </p>
            <div className="text-xs font-extrabold text-[#34A853] uppercase tracking-wider pt-2">
              {siteConfig.primaryMessage}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM 1 (PRIMARY FEATURED): INTERGENERATIONAL SENIORS & YOUTH */}
      <section className="w-full py-16 sm:py-20 bg-white scroll-mt-28 relative" id="seniors-youth">
        <span id="intergenerational-seniors-youth" className="absolute -top-28 block pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="rounded-3xl bg-gradient-to-r from-[#0F243E] to-[#13335A] text-white overflow-hidden shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-full min-h-[400px]">
                <img
                  src={flagship.image}
                  alt={flagship.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0F243E] via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#F5A623] text-[#0A1626] font-extrabold text-xs uppercase tracking-wide shadow-md">
                  ★ Primary Featured Program
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#1B7A3E] text-white font-bold text-xs uppercase tracking-wider">
                  Signature Program Area
                </span>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  {flagship.title}
                </h2>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {flagship.fullDescription}
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-200 pt-1">
                  <div className="font-bold text-[#FEF08A] uppercase tracking-wider text-xs">
                    Activities Include:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {flagship.activities.map((act, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#34A853]">
                          check_circle
                        </span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-slate-300 italic pt-2">
                  &ldquo;Young people gain knowledge, guidance and positive relationships with older
                  residents, while seniors remain active, connected and involved in the
                  community.&rdquo;
                </p>
                <div className="pt-4 border-t border-white/15">
                  <Link
                    href={flagship.ctaHref}
                    className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#34A853] hover:bg-[#1B7A3E] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
                  >
                    <span>{flagship.ctaLabel}</span>
                    <span className="material-symbols-outlined text-base">how_to_reg</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 5 OTHER VERIFIED PROGRAMS */}
      <section className="w-full py-16 sm:py-20 bg-[#FDFBF7]" id="all-programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-14">
          {supportingPrograms.map((prog, idx) => {
            const isFamilySupport = prog.slug === "family-community-support";
            const badges = [
              { label: "Program Area 02", pill: "bg-[#D2F5D7] text-[#1B7A3E]", border: "border-[#1B7A3E]/20" },
              { label: "Program Area 03", pill: "bg-[#FEF08A] text-[#B45309]", border: "border-[#F5A623]/30" },
              { label: "Program Area 04", pill: "bg-[#DCE8F7] text-[#0F243E]", border: "border-[#0F243E]/20" },
              { label: "Program Area 05", pill: "bg-[#D2F5D7] text-[#1B7A3E]", border: "border-[#1B7A3E]/20" },
              { label: "Program Area 06", pill: "bg-[#FEF08A] text-[#B45309]", border: "border-[#F5A623]/30" },
            ];
            const badge = badges[idx % badges.length];

            const shortSlugMap: Record<string, string> = {
              "seniors-engagement-wellness": "seniors-engagement",
              "youth-leadership-development": "youth-leadership",
              "community-safety-violence-prevention": "community-safety",
              "family-community-support": "family-community-support",
              "resident-leadership-volunteerism": "resident-leadership",
            };
            const targetId = shortSlugMap[prog.slug] || prog.slug;

            if (isFamilySupport) {
              return (
                <div
                  key={prog.slug}
                  className="card-static p-8 sm:p-12 rounded-3xl bg-white border border-[#1B7A3E]/20 shadow-md space-y-8 scroll-mt-28 relative"
                  id={targetId}
                >
                  <span id={prog.slug} className="absolute -top-28 block pointer-events-none" />
                  <span id="family-support" className="absolute -top-28 block pointer-events-none" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
                        <span>{badge.label}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E]">
                        {prog.title}
                      </h3>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {prog.fullDescription}
                      </p>
                      <div className="p-4 rounded-2xl bg-[#FFFDF0] border border-[#F5A623]/30 font-bold text-xs sm:text-sm text-[#0F243E]">
                        Our goal is to make it easier for families to find help when they need it.
                      </div>
                      <div className="space-y-1.5 pt-2">
                        <span className="text-xs font-bold text-[#0F243E] uppercase tracking-wider block">
                          Key Support Resources:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {prog.activities.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-sm text-[#1B7A3E]">
                                check_circle
                              </span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                      <img
                        src="/images/gordonridge/food-support/food-support-02.jpeg"
                        alt="Food provisions and beverage supplies"
                        className="w-full h-40 object-cover rounded-2xl shadow-sm"
                      />
                      <img
                        src="/images/gordonridge/food-support/food-support-03.jpeg"
                        alt="Food packages prepared for residents"
                        className="w-full h-40 object-cover rounded-2xl shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-600">
                      Connect with food provisions, emergency assistance, and local referrals.
                    </span>
                    <Link
                      href={prog.ctaHref}
                      className="btn-interactive px-6 py-3 rounded-xl bg-[#1B7A3E] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#135c2e]"
                    >
                      {prog.ctaLabel}
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={prog.slug}
                className={`card-static grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-white border ${badge.border} shadow-md scroll-mt-28 relative`}
                id={targetId}
              >
                <span id={prog.slug} className="absolute -top-28 block pointer-events-none" />
                <div className="lg:col-span-8 space-y-4">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badge.pill}`}
                  >
                    <span>{badge.label}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E]">
                    {prog.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {prog.fullDescription}
                  </p>
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-[#0F243E] uppercase tracking-wider block">
                      Activities &amp; Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {prog.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-[#34A853]">
                            check_circle
                          </span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
                  <Link
                    href={prog.ctaHref}
                    className="btn-interactive w-full py-3.5 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs text-center uppercase tracking-wider shadow-md"
                  >
                    {prog.ctaLabel}
                  </Link>
                  <div className="text-[11px] text-center text-slate-500">
                    Community Centre · 20 Gordonridge Place
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Take Part in Gordonridge Programs?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            All programs are free and open to residents and families in Gordonridge and surrounding
            Scarborough communities.
          </p>
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="btn-interactive inline-block px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Get Involved &amp; Register Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
