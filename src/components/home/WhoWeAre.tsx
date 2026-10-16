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
              Created by Residents. Dedicated to Our Families.
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="font-medium text-[#0F243E]">
                Gordonridge Community Development Initiative was created by residents who understand
                the strengths, challenges and everyday realities of the Gordonridge community.
              </p>
              <p>
                Gordonridge is a Toronto Community Housing community in Scarborough and is home to
                many Black families, including first- and second-generation Black immigrant
                families.
              </p>
              <p>
                We believe residents should have a strong voice in shaping their own community. Our
                organization brings seniors, youth, families, volunteers and community partners
                together to address local needs, develop resident leadership and create opportunities
                for people to support one another.
              </p>
            </div>

            {/* 3 Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="card-static p-5 rounded-2xl bg-white border border-[#1B7A3E]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#D2F5D7] text-[#1B7A3E] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">campaign</span>
                </div>
                <h3 className="font-bold text-sm text-[#0F243E] mb-1">Resident Voice</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Local priorities steered directly by lived community experience and resident decision-making.
                </p>
              </div>

              <div className="card-static p-5 rounded-2xl bg-white border border-[#F5A623]/30 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FEF08A] text-[#B45309] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">diversity_2</span>
                </div>
                <h3 className="font-bold text-sm text-[#0F243E] mb-1">Cultural Roots</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Centering the dignity, aspirations, and intergenerational wellness of Black families.
                </p>
              </div>

              <div className="card-static p-5 rounded-2xl bg-white border border-[#0F243E]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#DCE8F7] text-[#0F243E] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">handshake</span>
                </div>
                <h3 className="font-bold text-sm text-[#0F243E] mb-1">Mutual Care</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Developing local leadership so neighbors can lift, mentor, and support one another.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F0F7F2] hover:bg-[#1B7A3E] text-[#1B7A3E] hover:text-white font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                <span>Learn more about our mission &amp; leadership</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
