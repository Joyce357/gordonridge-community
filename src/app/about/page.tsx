import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { leadership, leadershipPhilosophy } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Who We Are | About Gordonridge CDI",
  description: siteConfig.mission,
};

export default function AboutPage() {
  const exec = leadership.find((l) => l.category === "executive");
  const board = leadership.filter((l) => l.category === "board");
  const staff = leadership.filter((l) => l.category === "staff" || l.category === "community");

  const valueIcons: Record<string, string> = {
    Community: "groups",
    Inclusion: "diversity_1",
    Leadership: "military_tech",
    Opportunity: "trending_up",
    Safety: "shield",
    Respect: "handshake",
    Accountability: "verified",
  };

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
              <span>Rooted in Scarborough</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Who We Are &amp; What We Stand For
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Gordonridge Community Development Initiative is a Black, resident-led organization
              working to strengthen families and improve the quality of life for residents in the
              Gordonridge community in Scarborough.
            </p>
            <div className="text-xs font-extrabold text-[#FEF08A] uppercase tracking-wider pt-2">
              {siteConfig.motto}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="w-full py-16 sm:py-20 bg-white scroll-mt-28" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
                <span>Resident-Led Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
                Rooted in the Everyday Realities of Gordonridge
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Gordonridge Community Development Initiative was created by residents who
                  understand the strengths, challenges and everyday realities of the Gordonridge
                  community.
                </p>
                <p>
                  Gordonridge is a Toronto Community Housing community in Scarborough and is home to
                  many Black families, including first- and second-generation Black immigrant
                  families.
                </p>
                <p>
                  We believe residents should have a strong voice in shaping their own community. Our
                  organization brings seniors, youth, families, volunteers and community partners
                  together to address local needs, develop resident leadership and create
                  opportunities for people to support one another.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FDFBF7] bg-[#0A1626]">
                <img
                  src="/images/gordonridge/community/gordonridge-residential-buildings.jpeg"
                  alt="Gordonridge Place residential buildings"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0F243E] text-white p-5 rounded-2xl shadow-xl border-l-4 border-[#34A853] max-w-xs hidden sm:block">
                <div className="font-bold text-xs text-[#FEF08A] uppercase tracking-wider">
                  Scarborough, Ontario
                </div>
                <div className="text-xs text-slate-200 mt-1">
                  Serving 10, 20, 30 &amp; 40 Gordonridge Place
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section
        className="w-full py-16 sm:py-20 bg-[#F0F7F2] border-y border-[#1B7A3E]/10 scroll-mt-28 relative"
        id="mission-vision"
      >
        <span id="mission" className="absolute -top-28 block pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Our Purpose</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MISSION */}
            <div className="card-static p-8 sm:p-10 rounded-3xl bg-white border-t-8 border-[#1B7A3E] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D2F5D7] text-[#1B7A3E] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h3 className="text-2xl font-black text-[#0F243E]">OUR MISSION</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {siteConfig.mission}
              </p>
            </div>

            {/* VISION */}
            <div className="card-static p-8 sm:p-10 rounded-3xl bg-white border-t-8 border-[#F5A623] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FEF08A] text-[#B45309] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="text-2xl font-black text-[#0F243E]">OUR VISION</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {siteConfig.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-16 sm:py-20 bg-white scroll-mt-28" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              These seven foundational values guide our resident council, our volunteer programs,
              and how we engage every neighbor.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {siteConfig.values.map((val, idx) => {
              const icon = valueIcons[val] || "check_circle";
              const colors = [
                "text-[#1B7A3E] border-[#1B7A3E]/20",
                "text-[#D97706] border-[#F5A623]/30",
                "text-[#0F243E] border-[#0F243E]/20",
              ];
              const color = colors[idx % colors.length];

              return (
                <div
                  key={val}
                  className={`card-static p-5 rounded-2xl bg-[#FDFBF7] border text-center space-y-2 ${color}`}
                >
                  <span className={`material-symbols-outlined text-2xl ${color.split(" ")[0]}`}>
                    {icon}
                  </span>
                  <div className="font-extrabold text-sm text-[#0F243E]">{val}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP STRUCTURE */}
      <section
        className="w-full py-16 sm:py-20 bg-[#F0F7F2] border-t border-[#1B7A3E]/10 scroll-mt-28"
        id="leadership"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Our Leadership Structure
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {leadershipPhilosophy.statement}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Director: Nicola Bynoe */}
            {exec && (
              <div className="card-static p-8 rounded-3xl bg-white border-l-8 border-[#1B7A3E] shadow-md space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] font-extrabold text-xs uppercase">
                  Executive Leadership
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[#0F243E]">{exec.name}</h3>
                  <div className="text-xs font-bold text-[#1B7A3E] uppercase tracking-wider mt-0.5">
                    {exec.role}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{exec.description}</p>
              </div>
            )}

            {/* Board of Directors */}
            <div className="card-static p-8 rounded-3xl bg-white border-l-8 border-[#F5A623] shadow-md space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#FEF08A] text-[#0A1626] font-extrabold text-xs uppercase">
                Governance &amp; Oversight
              </span>
              <div>
                <h3 className="text-2xl font-black text-[#0F243E]">Board of Directors</h3>
                <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mt-0.5">
                  Resident-Led Board
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                {board.map((item) => (
                  <li key={item.role} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1B7A3E]"></span>
                    <span>{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Staff & Resident Leaders */}
            <div className="card-static p-8 rounded-3xl bg-white border-l-8 border-[#0F243E] shadow-md space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#DCE8F7] text-[#0F243E] font-extrabold text-xs uppercase">
                Community Team
              </span>
              <div>
                <h3 className="text-2xl font-black text-[#0F243E]">Operations &amp; Volunteers</h3>
                <div className="text-xs font-bold text-[#0F243E] uppercase tracking-wider mt-0.5">
                  Frontline Care
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-700 font-medium pt-2">
                {staff.map((s) => (
                  <div key={s.role} className="p-2.5 rounded-xl bg-[#FDFBF7] border border-slate-200">
                    {s.role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTNERS SECTION */}
      <section
        className="w-full py-16 sm:py-20 bg-white border-t border-[#1B7A3E]/10 scroll-mt-28"
        id="partners"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
                <span>Community Partners</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
                Working in Partnership
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Gordonridge Community Development Initiative actively collaborates with government,
                foundations, corporations, schools, community organizations, and local businesses
                to create lasting positive change for residents in Scarborough.
              </p>
            </div>
            <Link
              href="/partners"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B7A3E] hover:bg-[#135C2E] text-white font-bold text-xs uppercase tracking-wider shadow-md shrink-0 self-start md:self-auto"
            >
              <span>Explore All Partners &amp; Collaboration</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="card-static p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200 text-center space-y-1">
              <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">corporate_fare</span>
              <div className="text-xs font-bold text-[#0F243E]">Jumpstart Foundation</div>
              <div className="text-[11px] text-slate-500">Court Revitalization</div>
            </div>
            <div className="card-static p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200 text-center space-y-1">
              <span className="material-symbols-outlined text-2xl text-[#F5A623]">apartment</span>
              <div className="text-xs font-bold text-[#0F243E]">TCH Community Hub</div>
              <div className="text-[11px] text-slate-500">Facility &amp; Community Space</div>
            </div>
            <div className="card-static p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200 text-center space-y-1">
              <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">school</span>
              <div className="text-xs font-bold text-[#0F243E]">Scarborough Schools</div>
              <div className="text-[11px] text-slate-500">Youth Education &amp; Mentoring</div>
            </div>
            <div className="card-static p-6 rounded-2xl bg-[#FDFBF7] border border-slate-200 text-center space-y-1">
              <span className="material-symbols-outlined text-2xl text-[#0F243E]">store</span>
              <div className="text-xs font-bold text-[#0F243E]">Local Businesses</div>
              <div className="text-[11px] text-slate-500">Employment &amp; In-Kind Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Join Us in Strengthening Gordonridge</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            There are meaningful roles for youth, seniors, parents, and community partners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/get-involved"
              className="btn-interactive px-7 py-3.5 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Get Involved Today
            </Link>
            <Link
              href="/programs"
              className="btn-interactive px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0A1626] font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
