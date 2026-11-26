import Link from "next/link";
import { programs } from "@/data/programs";

export default function ProgramsSection() {
  const flagship =
    programs.find((p) => p.slug === "intergenerational-seniors-youth") || programs[0];
  const supportingPrograms = programs.filter((p) => p.slug !== flagship.slug);

  return (
    <section className="w-full py-20 bg-white scroll-mt-20" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Six Core Program Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A preview of our resident-led work supporting seniors, youth leadership, community
              safety, and family wellbeing.
            </p>
          </div>
          <Link
            href="/programs"
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs uppercase tracking-wider shadow-sm self-start md:self-auto"
          >
            <span>Explore Programs</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* 1. Prominent Featured Flagship Program: INTERGENERATIONAL SENIORS & YOUTH */}
        <div className="rounded-3xl bg-[#0F243E] text-white overflow-hidden shadow-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[280px]">
              <img
                src="/images/gordonridge/seniors/seniors-community-meal-02.jpeg"
                alt="Inclusive Gordonridge community gathering and shared meal at 20 Gordonridge Place"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0F243E] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F5A623] text-[#0A1626] font-extrabold text-xs uppercase tracking-wide shadow-md">
                Featured Program
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <span className="text-xs font-extrabold text-[#34A853] uppercase tracking-wider block">
                Program Area 01 &middot; Flagship Initiative
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {flagship.title}
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {flagship.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-200">
                {flagship.activities.slice(0, 4).map((act) => (
                  <span
                    key={act}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10"
                  >
                    {act}
                  </span>
                ))}
              </div>
              <div className="pt-3">
                <Link
                  href={`/programs#${flagship.slug}`}
                  className="btn-interactive inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FEF08A] hover:text-white"
                >
                  <span>Read full program details</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Clean Typographic Preview List of the 5 Supporting Programs (No Heavy Card Grid) */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {supportingPrograms.map((prog, idx) => (
            <div
              key={prog.slug}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center group"
            >
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-extrabold text-[#1B7A3E] tabular-nums">
                  0{idx + 2}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0F243E] group-hover:text-[#1B7A3E] transition-colors">
                  {prog.title}
                </h3>
              </div>
              <p className="md:col-span-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {prog.shortDescription}
              </p>
              <div className="md:col-span-2 md:text-right">
                <Link
                  href={`/programs#${prog.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1B7A3E] hover:text-[#0F243E] uppercase tracking-wider"
                >
                  <span>Details</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
