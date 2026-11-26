import Link from "next/link";

export default function OurCommunity() {
  return (
    <section
      className="w-full py-20 bg-[#F0F7F2] border-y border-[#1B7A3E]/10 scroll-mt-20"
      id="our-community"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ONE Strong Neighbourhood / Location Photograph */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#0A1626] relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/gordonridge/community/gordonridge-court-branding.jpeg"
                  alt="G-RIDGE outdoor community recreation court in Gordonridge, Scarborough"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white flex flex-wrap items-end justify-between gap-3">
                <div>
                  <span className="text-[11px] font-extrabold text-[#FEF08A] uppercase tracking-wider block">
                    Scarborough, Ontario
                  </span>
                  <div className="text-lg sm:text-xl font-bold">
                    The Gordonridge Community
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1B7A3E] text-white text-[11px] font-bold">
                  TCH Neighbourhood Hub
                </span>
              </div>
            </div>
          </div>

          {/* Clean Location Typography + Community Centre Highlight (No 4 Address Cards) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
                <span>Where We Serve</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
                Our Gordonridge Community
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our work is centred in the Gordonridge Toronto Community Housing neighbourhood in
                Scarborough, serving residents and families living across all four buildings and
                surrounding communities.
              </p>
            </div>

            {/* Clean Location Typography */}
            <div className="py-4 border-y border-[#1B7A3E]/20 space-y-1.5">
              <span className="text-[11px] font-extrabold text-[#1B7A3E] uppercase tracking-wider block">
                Residential Addresses Served
              </span>
              <p className="text-lg sm:text-xl font-black text-[#0F243E] tracking-tight">
                10 &middot; 20 &middot; 30 &middot; 40 Gordonridge Place
              </p>
            </div>

            {/* Community Centre Highlight */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-[#1B7A3E] shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-[#1B7A3E] font-extrabold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">home_pin</span>
                <span>Community Centre Hub</span>
              </div>
              <div className="font-bold text-base text-[#0F243E]">
                20 Gordonridge Place, Scarborough
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The anchor space for community gatherings, seniors socials, youth activities,
                workshops, and food support efforts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="btn-interactive inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F243E] hover:bg-[#1B7A3E] text-white font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                <span>Visit or Contact Us</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-bold text-[#1B7A3E] hover:text-[#0F243E] uppercase tracking-wider"
              >
                <span>About Gordonridge CDI</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
