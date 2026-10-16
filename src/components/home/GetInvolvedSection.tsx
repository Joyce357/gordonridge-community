import Link from "next/link";
import { involvementPathways } from "@/data/get-involved";

export default function GetInvolvedSection() {
  return (
    <section className="w-full py-20 bg-[#FFFDF0] border-y border-[#F5A623]/25" id="get-involved">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF08A] border border-[#F5A623]/40 text-[#0F243E] text-xs font-extrabold uppercase tracking-wider">
            <span>Take Action</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F243E] tracking-tight">
            GORDONRIDGE NEEDS YOU
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            There is a place for everyone in building a stronger Gordonridge. Whether you are a
            senior looking to connect, a young person interested in leadership, a parent looking
            for community support or a resident wanting to volunteer, we encourage you to get
            involved.
          </p>
        </div>

        {/* 3 Distinct Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pathway 1: PARTICIPATE */}
          <div className="card-interactive p-8 rounded-3xl bg-white border border-[#1B7A3E]/20 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D2F5D7] text-[#1B7A3E] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">how_to_reg</span>
              </div>
              <span className="text-xs font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                Pathway 01
              </span>
              <h3 className="text-2xl font-black text-[#0F243E]">PARTICIPATE</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enroll in free weekly programs, intergenerational workshops, senior wellness circles,
                or youth development activities.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <Link
                href="/get-involved#participate"
                className="btn-interactive w-full py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Join a Program</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/get-involved#seniors-registration"
                  className="btn-interactive py-2.5 px-3 rounded-xl bg-[#F0F7F2] hover:bg-[#D2F5D7] text-[#1B7A3E] font-bold text-[11px] text-center"
                >
                  Seniors Reg
                </Link>
                <Link
                  href="/get-involved#youth-registration"
                  className="btn-interactive py-2.5 px-3 rounded-xl bg-[#F0F7F2] hover:bg-[#D2F5D7] text-[#1B7A3E] font-bold text-[11px] text-center"
                >
                  Youth Reg
                </Link>
              </div>
            </div>
          </div>

          {/* Pathway 2: LEAD */}
          <div className="card-interactive p-8 rounded-3xl bg-white border border-[#F5A623]/30 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF08A] text-[#B45309] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
              </div>
              <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-wider block">
                Pathway 02
              </span>
              <h3 className="text-2xl font-black text-[#0F243E]">LEAD</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Share your skills, organize community projects, mentor younger residents, or take an
                active role in local decision-making.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <Link
                href="/get-involved#volunteer"
                className="btn-interactive w-full py-3 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#FBBF24] hover:from-[#d97706] hover:to-[#F5A623] text-[#0A1626] font-extrabold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Become a Volunteer</span>
                <span className="material-symbols-outlined text-sm">handshake</span>
              </Link>
              <Link
                href="/get-involved#resident-leader"
                className="btn-interactive w-full py-2.5 rounded-xl border border-[#F5A623] text-[#0F243E] hover:bg-[#FEF08A]/30 font-bold text-[11px] flex items-center justify-center"
              >
                Become a Resident Leader
              </Link>
            </div>
          </div>

          {/* Pathway 3: PARTNER */}
          <div className="card-interactive p-8 rounded-3xl bg-white border border-[#0F243E]/20 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DCE8F7] text-[#0F243E] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">corporate_fare</span>
              </div>
              <span className="text-xs font-extrabold text-[#0F243E] uppercase tracking-wider block">
                Pathway 03
              </span>
              <h3 className="text-2xl font-black text-[#0F243E]">PARTNER</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collaborate with Gordonridge CDI through funding, workshops, employment opportunities,
                technology, or community services.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <Link
                href="/partners"
                className="btn-interactive w-full py-3 rounded-xl bg-[#0F243E] hover:bg-[#13335A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Become a Community Partner</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <div className="text-[11px] text-center text-slate-500 pt-1">
                Supporting Gordonridge &amp; Scarborough families
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
