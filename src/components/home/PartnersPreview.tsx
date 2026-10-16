import Link from "next/link";
import { partnerSectors } from "@/data/partners";

export default function PartnersPreview() {
  return (
    <section className="w-full py-20 bg-[#F0F7F2] border-t border-[#1B7A3E]/10" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
            <span>Collaborative Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
            Strong Communities Are Built Through Partnership.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Gordonridge Community Development Initiative welcomes collaboration with partners
            across government, foundations, corporations, schools, community organizations,
            service providers, and local businesses.
          </p>
        </div>

        {/* 7 Partner Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
          {partnerSectors.map((sector, idx) => {
            const colors = ["text-[#1B7A3E]", "text-[#F5A623]", "text-[#0F243E]"];
            const isLast = idx === partnerSectors.length - 1;

            return (
              <div
                key={sector.title}
                className={`card-static p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1 ${
                  isLast ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className={`material-symbols-outlined text-2xl ${colors[idx % colors.length]}`}>
                  {sector.icon}
                </span>
                <div className="text-xs font-bold text-[#0F243E]">{sector.title}</div>
              </div>
            );
          })}
        </div>

        {/* Partnership Callout Box */}
        <div className="p-8 rounded-3xl bg-white border border-[#1B7A3E]/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#0F243E]">Partner With Gordonridge CDI</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Partners support our community through funding, volunteers, employment opportunities,
              workshops, technology, professional expertise, donations, and collaborative community
              initiatives.
            </p>
          </div>
          <Link
            href="/partners"
            className="btn-interactive px-6 py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs tracking-wider uppercase shrink-0 shadow-md"
          >
            Explore Partnership Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
