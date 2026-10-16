import Link from "next/link";
import { programs } from "@/data/programs";

export default function ProgramsSection() {
  const flagship = programs.find((p) => p.slug === "intergenerational-seniors-youth") || programs[0];
  const supportingPrograms = programs.filter((p) => p.slug !== flagship.slug);

  const icons: Record<string, { icon: string; bg: string; text: string }> = {
    "seniors-engagement-wellness": {
      icon: "elderly",
      bg: "bg-[#D2F5D7]",
      text: "text-[#1B7A3E]",
    },
    "youth-leadership-development": {
      icon: "sports_basketball",
      bg: "bg-[#FEF08A]",
      text: "text-[#B45309]",
    },
    "community-safety-violence-prevention": {
      icon: "shield",
      bg: "bg-[#DCE8F7]",
      text: "text-[#0F243E]",
    },
    "family-community-support": {
      icon: "family_restroom",
      bg: "bg-[#D2F5D7]",
      text: "text-[#1B7A3E]",
    },
    "resident-leadership-volunteerism": {
      icon: "how_to_reg",
      bg: "bg-[#FEF08A]",
      text: "text-[#B45309]",
    },
  };

  return (
    <section className="w-full py-20 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Our Core Program Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Resident-led initiatives designed specifically to strengthen families, engage seniors,
              empower youth, and foster local leadership.
            </p>
          </div>
          <Link
            href="/programs"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0F7F2] text-[#1B7A3E] font-bold text-xs border border-[#1B7A3E]/30 hover:bg-[#1B7A3E] hover:text-white shadow-sm self-start md:self-auto"
          >
            <span>View All Program Details</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* 1. Large Flagship Featured Program Block: INTERGENERATIONAL SENIORS & YOUTH */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F243E] to-[#13335A] text-white overflow-hidden shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <img
                src={flagship.image}
                alt={flagship.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0F243E] via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F5A623] text-[#0A1626] font-extrabold text-xs uppercase tracking-wide shadow-md">
                ★ Primary Featured Program
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#1B7A3E] text-white font-bold text-xs uppercase tracking-wider">
                  All Generations Welcome
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] font-semibold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#F5A623]">
                    location_on
                  </span>
                  20 Gordonridge Place Community Centre
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {flagship.title}
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {flagship.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                {flagship.activities.slice(0, 4).map((act, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#34A853]">
                      check_circle
                    </span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
                <div className="text-xs text-slate-300">
                  Young people gain guidance; seniors stay connected and active.
                </div>
                <Link
                  href={`/programs#${flagship.slug}`}
                  className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs tracking-wide shadow-lg"
                >
                  <span>Program Information</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. The 5 Supporting Verified Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportingPrograms.map((prog) => {
            const iconConfig = icons[prog.slug] || {
              icon: "star",
              bg: "bg-[#D2F5D7]",
              text: "text-[#1B7A3E]",
            };
            const isWide = prog.slug === "resident-leadership-volunteerism";

            return (
              <div
                key={prog.slug}
                className={`card-interactive p-7 rounded-3xl bg-[#FDFBF7] border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-2xl ${iconConfig.bg} ${iconConfig.text} flex items-center justify-center`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {iconConfig.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                    {prog.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F243E]">{prog.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.fullDescription}
                  </p>
                </div>
                <Link
                  href={`/programs#${prog.slug}`}
                  className="btn-interactive inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-[#1B7A3E]/20 text-[#1B7A3E] font-bold text-xs shadow-sm hover:bg-[#1B7A3E] hover:text-white"
                >
                  <span>{prog.ctaLabel}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
