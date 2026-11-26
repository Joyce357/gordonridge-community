import Link from "next/link";
import { impactPillars } from "@/data/impact";

export default function ImpactSection() {
  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[#0A1626] text-white overflow-hidden scroll-mt-20"
      id="impact"
    >
      {/* Glow blooms */}
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-[#1B7A3E]/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-14">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#34A853]/40 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
            <span>Community Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            GENERATIONS WORKING TOGETHER
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our goal is to build a community where residents feel connected, supported and involved.
            Every initiative is evaluated by the tangible difference it creates in the lives of our
            neighbors.
          </p>
        </div>

        {/* 3 Clean Editorial Columns (Borderless Dark Typography, No Heavy Card Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {impactPillars.map((pillar) => {
            const topRule =
              pillar.id === "connected-generations"
                ? "border-[#34A853]"
                : pillar.id === "opportunity-leadership"
                ? "border-[#F5A623]"
                : "border-[#D2F5D7]";
            const labelColor =
              pillar.id === "connected-generations"
                ? "text-[#34A853]"
                : pillar.id === "opportunity-leadership"
                ? "text-[#FBBF24]"
                : "text-[#D2F5D7]";

            return (
              <div
                key={pillar.id}
                className={`pt-6 border-t-2 ${topRule} space-y-5`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold uppercase tracking-wider ${labelColor}`}>
                    {pillar.number} &middot; {pillar.title}
                  </span>
                  <span className={`material-symbols-outlined text-xl ${labelColor}`}>
                    {pillar.icon}
                  </span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className={`material-symbols-outlined text-sm shrink-0 mt-1 ${labelColor}`}
                      >
                        check_circle
                      </span>
                      <span>
                        <strong className="text-white">{outcome.highlight}</strong>{" "}
                        {outcome.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/impact"
            className="btn-interactive inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0A1626] font-bold text-xs tracking-wider uppercase shadow-md"
          >
            <span>Read Complete Impact Framework &amp; Stories</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
