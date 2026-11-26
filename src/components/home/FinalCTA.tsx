import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[#0A1626] text-white overflow-hidden"
      id="final-cta"
    >
      {/* Clean ambient brand blooms (no recycled photo backdrop) */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#1B7A3E]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#FBBF24]/50 text-[#FEF08A] font-extrabold text-xs uppercase tracking-widest">
          Strong People &middot; Strong Families &middot; Stronger Community
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          THERE&apos;S A PLACE FOR YOU IN GORDONRIDGE.
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Connect with our resident-led team at 20 Gordonridge Place to join a program, volunteer,
          or partner in support of Scarborough families.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <Link
            href="/get-involved"
            className="btn-interactive px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#FBBF24] hover:from-[#d97706] hover:to-[#F5A623] text-[#0A1626] font-extrabold text-sm tracking-wide shadow-2xl transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">handshake</span>
            <span>Get Involved</span>
          </Link>
          <Link
            href="/contact"
            className="btn-interactive px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0F243E] font-extrabold text-sm tracking-wide shadow-xl transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg text-[#1B7A3E]">mail</span>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
