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

        {/* 3 Visual Clusters for Verified Client Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  pillar.id === "connected-generations"
                    ? "bg-[#1B7A3E]/30 text-[#34A853]"
                    : pillar.id === "opportunity-leadership"
                    ? "bg-[#F5A623]/30 text-[#FBBF24]"
                    : "bg-[#34A853]/30 text-[#D2F5D7]"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
              </div>
              <div>
                <span
                  className={`text-[11px] font-extrabold uppercase tracking-wider ${
                    pillar.id === "connected-generations"
                      ? "text-[#34A853]"
                      : pillar.id === "opportunity-leadership"
                      ? "text-[#FBBF24]"
                      : "text-[#D2F5D7]"
                  }`}
                >
                  Theme {pillar.number}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{pillar.title}</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                {pillar.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className={`material-symbols-outlined text-sm shrink-0 mt-0.5 ${
                        pillar.id === "connected-generations"
                          ? "text-[#34A853]"
                          : pillar.id === "opportunity-leadership"
                          ? "text-[#FBBF24]"
                          : "text-[#34A853]"
                      }`}
                    >
                      check_circle
                    </span>
                    <span>
                      <strong>{outcome.highlight}</strong> {outcome.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
