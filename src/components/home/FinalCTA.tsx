import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-24 bg-[#0A1626] text-white overflow-hidden" id="final-cta">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gordonridge/community/gordonridge-community-court-aerial.jpeg"
          alt="Gordonridge court backdrop"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#1B7A3E]/85 to-[#0F243E]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FBBF24]/50 text-[#FEF08A] font-extrabold text-xs uppercase tracking-widest">
          Join Hands With Neighbors
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          THERE&apos;S A PLACE FOR YOU IN GORDONRIDGE.
        </h2>

        <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
          Whether you want to join a program, volunteer with seniors and youth, or partner on
          community initiatives — your voice and participation strengthen our neighborhood.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/get-involved"
            className="btn-interactive px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#FBBF24] hover:from-[#d97706] hover:to-[#F5A623] text-[#0A1626] font-extrabold text-sm tracking-wide shadow-2xl transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">handshake</span>
            <span>Get Involved</span>
          </Link>
          <Link
            href="/programs"
            className="btn-interactive px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0F243E] font-extrabold text-sm tracking-wide shadow-xl transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg text-[#1B7A3E]">explore</span>
            <span>Explore Programs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
