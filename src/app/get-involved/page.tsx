import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { involvementPathways } from "@/data/get-involved";
import GetInvolvedForm from "@/components/forms/GetInvolvedForm";

export const metadata: Metadata = {
  title: "Get Involved | Gordonridge Needs You",
  description:
    "Discover how you can participate in programs, register for seniors or youth initiatives, volunteer, become a resident leader, or partner with Gordonridge CDI.",
};

export default function GetInvolvedPage() {
  const participate = involvementPathways.filter((p) => p.pillar === "PARTICIPATE");
  const lead = involvementPathways.filter((p) => p.pillar === "LEAD");

  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-[#0A1626] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gordonridge/community/gordonridge-community-court-aerial.jpeg"
            alt="Gordonridge court backdrop"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/90 to-[#0A1626]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              <span>Community Participation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              GORDONRIDGE NEEDS YOU
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              There is a place for everyone in building a stronger Gordonridge. Whether you are a
              senior looking to connect, a young person interested in leadership, a parent looking
              for community support or a resident wanting to volunteer, we encourage you to get
              involved.
            </p>
            <div className="text-xs font-extrabold text-[#34A853] uppercase tracking-wider pt-2">
              {siteConfig.motto}
            </div>
          </div>
        </div>
      </section>

      {/* 3 DISTINCT PARTICIPATION PATHWAYS */}
      <section className="w-full py-16 sm:py-20 bg-white scroll-mt-28" id="pathways">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PATHWAY 1: PARTICIPATE / SENIORS & YOUTH REGISTRATION */}
            <div
              className="card-interactive p-8 rounded-3xl bg-[#FDFBF7] border-t-8 border-[#1B7A3E] shadow-md flex flex-col justify-between space-y-6 scroll-mt-28 relative"
              id="participate"
            >
              {/* Anchor aliases for join-program, seniors and youth registration */}
              <span id="join-program" className="absolute -top-28 block pointer-events-none" />
              <span id="seniors-registration" className="absolute -top-28 block pointer-events-none" />
              <span id="youth-registration" className="absolute -top-28 block pointer-events-none" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D2F5D7] text-[#1B7A3E] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">how_to_reg</span>
                </div>
                <span className="text-xs font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                  Pathway 01
                </span>
                <h2 className="text-2xl font-black text-[#0F243E]">JOIN A PROGRAM</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Take part in our free intergenerational sessions, senior wellness gatherings, or
                  youth mentorship and recreational activities.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-[#0F243E] uppercase tracking-wider block">
                    Available Programs:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {participate.map((p) => (
                      <li key={p.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A3E]"></span>
                        <span>{p.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <a
                  href="#form-section"
                  className="btn-interactive w-full py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Register for a Program</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </a>
                <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                  <a
                    href="#form-section"
                    className="btn-interactive p-2 rounded-lg bg-[#F0F7F2] text-[#1B7A3E] font-bold hover:bg-[#D2F5D7] transition-colors"
                  >
                    Seniors 55+
                  </a>
                  <a
                    href="#form-section"
                    className="btn-interactive p-2 rounded-lg bg-[#F0F7F2] text-[#1B7A3E] font-bold hover:bg-[#D2F5D7] transition-colors"
                  >
                    Youth Programs
                  </a>
                </div>
              </div>
            </div>

            {/* PATHWAY 2: VOLUNTEER & RESIDENT LEADER */}
            <div
              className="card-interactive p-8 rounded-3xl bg-[#FDFBF7] border-t-8 border-[#F5A623] shadow-md flex flex-col justify-between space-y-6 scroll-mt-28 relative"
              id="volunteer"
            >
              {/* Anchor alias for resident leader */}
              <span id="resident-leader" className="absolute -top-28 block pointer-events-none" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF08A] text-[#B45309] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                </div>
                <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-wider block">
                  Pathway 02
                </span>
                <h2 className="text-2xl font-black text-[#0F243E]">VOLUNTEER &amp; LEAD</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Help lead community workshops, organize family food distribution, or represent
                  your building as a resident leader on the council.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-[#0F243E] uppercase tracking-wider block">
                    Leadership Roles:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {lead.map((p) => (
                      <li key={p.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span>
                        <span>{p.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <a
                  href="#form-section"
                  className="btn-interactive w-full py-3 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#FBBF24] hover:from-[#d97706] hover:to-[#F5A623] text-[#0A1626] font-extrabold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Sign Up to Volunteer</span>
                  <span className="material-symbols-outlined text-sm">handshake</span>
                </a>
                <a
                  href="#form-section"
                  className="btn-interactive block text-center p-2 rounded-lg bg-[#FEF08A]/40 text-[#0F243E] font-bold text-[11px] hover:bg-[#FEF08A] transition-colors"
                >
                  Become a Resident Leader
                </a>
              </div>
            </div>

            {/* PATHWAY 3: PARTNER WITH US */}
            <div
              className="card-interactive p-8 rounded-3xl bg-[#FDFBF7] border-t-8 border-[#0F243E] shadow-md flex flex-col justify-between space-y-6 scroll-mt-28 relative"
              id="partner"
            >
              <span id="partner-with-us" className="absolute -top-28 block pointer-events-none" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCE8F7] text-[#0F243E] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">corporate_fare</span>
                </div>
                <span className="text-xs font-extrabold text-[#0F243E] uppercase tracking-wider block">
                  Pathway 03
                </span>
                <h2 className="text-2xl font-black text-[#0F243E]">PARTNER WITH US</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Government, foundations, corporations, schools, and local businesses collaborating
                  to strengthen Gordonridge families and Scarborough residents.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-[#0F243E] uppercase tracking-wider block">
                    Partnership Modes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F243E]"></span>
                      <span>Funding, Grants &amp; Donations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F243E]"></span>
                      <span>Youth Employment &amp; Training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F243E]"></span>
                      <span>Facility &amp; Resource Sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  href="/partners"
                  className="btn-interactive w-full py-3 rounded-xl bg-[#0F243E] hover:bg-[#13335A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Partner With Us</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link
                  href="/partners#partner-inquiry"
                  className="btn-interactive block text-center p-2 rounded-lg bg-[#DCE8F7] text-[#0F243E] font-bold text-[11px] hover:bg-slate-200 transition-colors"
                >
                  Submit Partner Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION & VOLUNTEER FORM SECTION */}
      <section
        className="w-full py-16 sm:py-20 bg-[#F0F7F2] border-t border-[#1B7A3E]/10 scroll-mt-28"
        id="form-section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <GetInvolvedForm />
        </div>
      </section>
    </>
  );
}
