import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function OurCommunity() {
  return (
    <section className="w-full py-20 bg-[#F0F7F2] border-y border-[#1B7A3E]/10" id="our-community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B7A3E]/10 border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
            <span>Where We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F243E] tracking-tight">
            THIS IS GORDONRIDGE.
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Our work is firmly centred in the Gordonridge Toronto Community Housing community in
            Scarborough. We proudly serve residents and families living in and around:
          </p>
        </div>

        {/* 4 Tower Address Markers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="card-static p-5 rounded-2xl bg-white border border-[#1B7A3E]/15 shadow-sm text-center space-y-1">
            <span className="text-2xl font-black text-[#1B7A3E]">10</span>
            <div className="text-xs font-bold text-[#0F243E]">Gordonridge Place</div>
            <div className="text-[11px] text-slate-500">Scarborough, ON</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0F243E] text-white border border-[#34A853] shadow-md text-center space-y-1 relative">
            <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#34A853] text-[9px] font-extrabold uppercase">
              Hub
            </span>
            <span className="text-2xl font-black text-[#FEF08A]">20</span>
            <div className="text-xs font-bold text-white">Gordonridge Place</div>
            <div className="text-[11px] text-slate-300">Community Centre</div>
          </div>
          <div className="card-static p-5 rounded-2xl bg-white border border-[#1B7A3E]/15 shadow-sm text-center space-y-1">
            <span className="text-2xl font-black text-[#1B7A3E]">30</span>
            <div className="text-xs font-bold text-[#0F243E]">Gordonridge Place</div>
            <div className="text-[11px] text-slate-500">Scarborough, ON</div>
          </div>
          <div className="card-static p-5 rounded-2xl bg-white border border-[#1B7A3E]/15 shadow-sm text-center space-y-1">
            <span className="text-2xl font-black text-[#1B7A3E]">40</span>
            <div className="text-xs font-bold text-[#0F243E]">Gordonridge Place</div>
            <div className="text-[11px] text-slate-500">Scarborough, ON</div>
          </div>
        </div>

        {/* Visual Two-Column Showcase with Real Location Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Aerial Court Showcase */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0A1626] relative group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/gordonridge/community/gordonridge-community-court-aerial.jpeg"
                alt="Gordonridge Community Court Aerial View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="px-3 py-1 rounded-full bg-[#34A853] text-[10px] font-extrabold uppercase tracking-wider">
                G-RIDGE Hardcourt &amp; Track
              </span>
              <h3 className="text-xl font-bold">The Gordonridge Community Court</h3>
              <p className="text-xs text-slate-200">
                A vibrant hub where children play, youth hone basketball skills, and seniors take gentle
                morning walks alongside the high-rise towers.
              </p>
            </div>
          </div>

          {/* Community Centre Info Card */}
          <div className="card-static lg:col-span-5 p-8 rounded-3xl bg-white border border-[#1B7A3E]/20 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#D2F5D7] text-[#1B7A3E] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">home_pin</span>
              </div>
              <div>
                <span className="text-[11px] font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                  Neighborhood Anchor
                </span>
                <h3 className="text-xl font-bold text-[#0F243E]">
                  Community Centre at 20 Gordonridge
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              All community gatherings, workshops, senior circles, youth sessions, and food
              distributions are anchored right here. Residents know exactly where to walk to find
              familiar faces, practical support, and welcoming neighbors.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#1B7A3E] shrink-0">
                  meeting_room
                </span>
                <span>Community Hall for workshops, meetings &amp; social gatherings</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#F5A623] shrink-0">
                  sports_basketball
                </span>
                <span>Adjacent newly refurbished outdoor recreation court</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-base text-[#1B7A3E] shrink-0">
                  nature_people
                </span>
                <span>Lush green grounds and walking paths connecting all four towers</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/contact"
                className="btn-interactive inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F0F7F2] hover:bg-[#1B7A3E] text-[#1B7A3E] hover:text-white font-bold text-xs shadow-sm"
              >
                <span>Get Directions &amp; Contact Info</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/gallery"
                className="btn-interactive inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1B7A3E] hover:border-[#1B7A3E] font-bold text-xs shadow-sm"
              >
                <span>View Photos</span>
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
