import Link from "next/link";
import { partnerSectors } from "@/data/partners";

export default function PartnersPreview() {
  return (
    <section
      className="w-full py-16 lg:py-20 bg-[#F0F7F2] border-t border-[#1B7A3E]/10 scroll-mt-20"
      id="partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Partners</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E] tracking-tight">
              Strong Communities Are Built Through Partnership.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We welcome collaboration through funding, volunteers, employment opportunities,
              workshops, technology, donations, and shared community initiatives.
            </p>
            {/* Clean Inline Sector Pills (No 7-Card Grid) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {partnerSectors.map((sector) => (
                <span
                  key={sector.title}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#0F243E]"
                >
                  {sector.title}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/partners"
              className="btn-interactive inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs tracking-wider uppercase shadow-md"
            >
              <span>Partner With Us</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
