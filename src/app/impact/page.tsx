import type { Metadata } from "next";
import Link from "next/link";
import { impactPillars } from "@/data/impact";

export const metadata: Metadata = {
  title: "Community Impact | Generations Working Together",
  description:
    "Explore how Gordonridge Community Development Initiative builds stronger families, reduces senior isolation, and develops youth leaders.",
};

export default function ImpactPage() {
  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-[#0A1626] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gordonridge/community/gordonridge-residential-buildings.jpeg"
            alt="Gordonridge towers backdrop"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/90 to-[#0A1626]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              <span>Verified Impact Outcomes</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Community Impact
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Gordonridge Community Development Initiative evaluates every initiative by the tangible
              positive difference it creates in the lives of residents across 10, 20, 30, and 40
              Gordonridge Place in Scarborough.
            </p>
          </div>
        </div>
      </section>

      {/* THREE VERIFIED PILLARS OF IMPACT */}
      <section className="w-full py-16 sm:py-20 bg-white" id="impact-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Impact Dimensions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Verified Goals &amp; Outcomes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Rather than relying on abstract numbers, Gordonridge Community Development Initiative
              measures its real-world success through the tangible improvements in connection,
              dignity, leadership, and safety experienced by residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactPillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`card-static p-8 rounded-3xl bg-[#FDFBF7] border-t-8 ${pillar.accentColor} shadow-md space-y-6`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${pillar.badgeBg} ${pillar.badgeText} flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <div>
                  <span className={`text-xs font-extrabold ${pillar.badgeText} uppercase tracking-wider`}>
                    Pillar {pillar.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F243E] mt-1">{pillar.title}</h3>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {pillar.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className={`material-symbols-outlined ${pillar.badgeText} text-base shrink-0 mt-0.5`}
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
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Help Us Build a Stronger Gordonridge</h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every volunteer hour, shared meal, and community workshop brings generations closer.
          </p>
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="btn-interactive inline-block px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
