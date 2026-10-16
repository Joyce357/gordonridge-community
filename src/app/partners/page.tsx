import type { Metadata } from "next";
import Link from "next/link";
import { partnershipWays } from "@/data/partners";
import PartnerInquiryForm from "@/components/forms/PartnerInquiryForm";

export const metadata: Metadata = {
  title: "Community Partners | Gordonridge CDI",
  description:
    "Gordonridge Community Development Initiative welcomes partnerships with government, foundations, corporations, schools, community organizations, and local businesses.",
};

export default function PartnersPage() {
  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-[#0A1626] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gordonridge/community/gordonridge-court-branding.jpeg"
            alt="G-Ridge court markings"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/90 to-[#0A1626]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              <span>Collaborative Growth</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Partner With Us
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Strong communities are built through partnership. Gordonridge Community Development
              Initiative welcomes collaboration with organizations committed to strengthening Black
              families and Scarborough residents.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OVERVIEW & SECTORS */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E]">
              How Partners Support Gordonridge
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Gordonridge Community Development Initiative welcomes partnerships with government,
              foundations, corporations, schools, community organizations, service providers and
              local businesses.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Partners can support our community through funding, volunteers, employment
              opportunities, workshops, technology, professional expertise, donations and
              collaborative community initiatives.
            </p>
          </div>

          {/* Partnership Opportunity Modes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipWays.map((way, idx) => {
              const colors = ["text-[#1B7A3E]", "text-[#D97706]", "text-[#0F243E]"];
              const color = colors[idx % colors.length];

              return (
                <div
                  key={way.title}
                  className="card-static p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200 shadow-sm space-y-2"
                >
                  <span className={`material-symbols-outlined text-3xl ${color}`}>
                    {way.icon}
                  </span>
                  <h3 className="font-bold text-sm text-[#0F243E]">{way.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{way.description}</p>
                </div>
              );
            })}
          </div>

          {/* Neutral Collaborators Display */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F0F7F2] border border-[#1B7A3E]/20 text-center space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B7A3E]">
              Our Valued Collaborators
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F243E]">
              Working Alongside Community Champions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              We collaborate with civic partners such as the Canadian Tire Jumpstart Foundation
              (featured on our community court revitalization) and local community service networks.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-4">
              <div className="card-static p-6 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#0F243E] flex items-center justify-center">
                Jumpstart Foundation
              </div>
              <div className="card-static p-6 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#0F243E] flex items-center justify-center">
                TCH Community Hub
              </div>
              <div className="card-static p-6 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#0F243E] flex items-center justify-center">
                Scarborough Civic Partners
              </div>
              <div className="card-static p-6 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#0F243E] flex items-center justify-center">
                Local Business Champions
              </div>
            </div>
          </div>

          {/* Partner Inquiry Form */}
          <PartnerInquiryForm />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Invest in a Stronger Gordonridge</h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Join hands with our resident-led team to create measurable, positive change in
            Scarborough.
          </p>
          <div className="pt-2">
            <Link
              href="#partner-inquiry"
              className="btn-interactive inline-block px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Contact Our Leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
