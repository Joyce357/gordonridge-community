import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A1626] text-white overflow-hidden scroll-mt-20" id="hero">
      {/* Background imagery overlay with authentic Gordonridge aerial court photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gordonridge/community/gordonridge-community-court-aerial.jpeg"
          alt="Aerial view of Gordonridge community court with G-RIDGE lettering and surrounding apartment tower"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/95 to-[#0F243E]/80"></div>
        {/* Ambient decorative logo blooms */}
        <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-[#1B7A3E]/25 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#F5A623]/20 blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Brand Motto Badge Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#F5A623]/40 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34A853] animate-ping"></span>
              <span className="text-xs font-extrabold text-[#FEF08A] tracking-wider uppercase">
                {siteConfig.motto}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              BUILDING A STRONGER{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] via-[#48c76b] to-[#FBBF24]">
                GORDONRIDGE
              </span>{" "}
              TOGETHER
            </h1>

            {/* Supporting Verified Copy */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Gordonridge Community Development Initiative is a Black, resident-led organization
              working to strengthen families and improve the quality of life for residents in the
              Gordonridge community in Scarborough.
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Our work brings generations together, with a strong focus on seniors and youth. Through
              intergenerational programs, community safety initiatives, family support, leadership
              development and connections to resources, we help residents build a stronger and more
              connected community.
            </p>

            {/* Dual Primary/Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/programs"
                className="btn-interactive inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#1B7A3E]/40"
              >
                <span>Our Programs</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/get-involved"
                className="btn-interactive inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#FBBF24] hover:from-[#d97706] hover:to-[#F5A623] text-[#0A1626] font-extrabold text-sm tracking-wide shadow-lg"
              >
                <span className="material-symbols-outlined text-lg">handshake</span>
                <span>Get Involved</span>
              </Link>
            </div>

            {/* Identity Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/15">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#1B7A3E]/40 flex items-center justify-center text-[#34A853]">
                  <span className="material-symbols-outlined text-xl">groups</span>
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Black, Resident-Led</div>
                  <div className="text-[11px] text-slate-300">Rooted in Scarborough</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#F5A623]/30 flex items-center justify-center text-[#FBBF24]">
                  <span className="material-symbols-outlined text-xl">diversity_1</span>
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Connecting Generations</div>
                  <div className="text-[11px] text-slate-300">Seniors, youth &amp; families</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#34A853]/30 flex items-center justify-center text-[#D2F5D7]">
                  <span className="material-symbols-outlined text-xl">location_city</span>
                </div>
                <div>
                  <div className="font-bold text-xs text-white">Gordonridge Community</div>
                  <div className="text-[11px] text-slate-300">10, 20, 30 &amp; 40 G-Place</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Real Photography Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-[#1B7A3E] via-[#F5A623] to-[#34A853] shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#0A1626]">
                <img
                  src="/images/gordonridge/community/gordonridge-community-court-aerial.jpeg"
                  alt="Gordonridge community court aerial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626] via-transparent to-transparent"></div>
                
                {/* Floating Info Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl text-[#0F243E] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1B7A3E] flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined text-xl">sports_basketball</span>
                    </div>
                    <div>
                      <div className="font-extrabold text-xs text-[#0F243E]">
                        Gordonridge Community Court
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Centre of Neighborhood Recreation
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] font-extrabold text-[10px] uppercase tracking-wider">
                    Authentic
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping decorative badge */}
            <div className="absolute -top-5 -left-5 bg-[#F5A623] text-[#0A1626] font-bold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white -rotate-3">
              <span className="material-symbols-outlined text-xl">verified</span>
              <div className="text-left leading-tight">
                <div className="text-xs uppercase font-extrabold">Scarborough, ON</div>
                <div className="text-[10px] text-slate-900 font-semibold">TCH Community Hub</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
