import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#FDFBF7] scroll-mt-20" id="about">
      <span id="who-we-are" className="absolute -top-28 block pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Image Column with Real Gordonridge Towers */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0F243E]">
              <img
                src="/images/gordonridge/community/gordonridge-residential-buildings.jpeg"
                alt="Gordonridge Place residential buildings in Scarborough"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#0A1626]/85 backdrop-blur-md text-[#FEF08A] font-extrabold text-xs">
                10, 20, 30 &amp; 40 Gordonridge Place
              </div>
            </div>

            {/* Floating Editorial Quote Card */}
            <div className="absolute -bottom-8 -right-4 max-w-xs p-6 rounded-2xl bg-[#0F243E] text-white shadow-2xl border-l-4 border-[#34A853]">
              <span className="material-symbols-outlined text-[#F5A623] text-3xl">format_quote</span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed mt-1 text-slate-100">
                &ldquo;Residents should have a strong voice in shaping their own community.&rdquo;
              </p>
              <p className="text-[11px] text-[#34A853] font-bold uppercase tracking-wider mt-3">
                — Gordonridge CDI Principle
              </p>
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30">
              <span className="w-2 h-2 rounded-full bg-[#1B7A3E]"></span>
              <span className="text-xs font-extrabold text-[#1B7A3E] uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight leading-tight">
              Created by Residents. Rooted in Gordonridge.
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Gordonridge Community Development Initiative was created by residents who know the
                strengths, challenges, and everyday realities of this Toronto Community Housing
                neighbourhood in Scarborough &mdash; home to many first- and second-generation Black
                immigrant families.
              </p>
              <p>
                We bring seniors, youth, families, volunteers, and partners together so residents
                lead the solutions that strengthen our community from within.
              </p>
            </div>

            {/* 3 Concise Typographic Supporting Points (No Card Row) */}
            <div className="space-y-3 pt-2 border-t border-slate-200/80">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1B7A3E] text-lg shrink-0 mt-0.5">
                  check_circle
                </span>
                <p className="text-sm text-slate-700">
                  <strong className="text-[#0F243E]">Resident Voice:</strong> Local priorities shaped
                  by lived experience and community decision-making.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#F5A623] text-lg shrink-0 mt-0.5">
                  check_circle
                </span>
                <p className="text-sm text-slate-700">
                  <strong className="text-[#0F243E]">Local Leadership:</strong> Developing resident
                  leaders across generations to guide neighbourhood work.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1B7A3E] text-lg shrink-0 mt-0.5">
                  check_circle
                </span>
                <p className="text-sm text-slate-700">
                  <strong className="text-[#0F243E]">Strengthening From Within:</strong> Centering
                  the dignity, wellbeing, and aspirations of Black families in Gordonridge.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F0F7F2] hover:bg-[#1B7A3E] text-[#1B7A3E] hover:text-white font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                <span>Our Mission, Vision &amp; Leadership</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
