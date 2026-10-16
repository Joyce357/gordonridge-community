import type { Metadata } from "next";
import Link from "next/link";
import GalleryViewer from "@/components/gallery/GalleryViewer";

export const metadata: Metadata = {
  title: "Photo Gallery | Gordonridge CDI",
  description:
    "Explore authentic photography of Gordonridge community landmarks, food support initiatives, and neighborhood facilities in Scarborough.",
};

export default function GalleryPage() {
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
              <span>Authentic Community Visuals</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Community Photo Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Real moments from Gordonridge — featuring our place-based landmarks, food support
              initiatives, resident gatherings, and neighborhood facilities.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <GalleryViewer />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">
            Be Part of Our Next Community Gathering
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Join us at the 20 Gordonridge Place Community Centre for workshops, sports, and shared meals.
          </p>
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="btn-interactive inline-block px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
