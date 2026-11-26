"use client";

import { useState } from "react";
import Link from "next/link";
import { galleryItems, GalleryItem } from "@/data/gallery";
import LightboxModal from "@/components/shared/LightboxModal";

export default function GalleryPreview() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Show 4 distinct authentic gallery moments not already used as primary hero visuals above
  const featuredIds = [
    "food-support-01",
    "food-support-04",
    "food-support-05",
    "seniors-community-gathering-01",
  ];
  const previewItems = featuredIds
    .map((id) => galleryItems.find((item) => item.id === id))
    .filter((item): item is GalleryItem => Boolean(item));

  return (
    <section className="w-full py-20 bg-white border-t border-slate-200/80 scroll-mt-20" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Photo Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Moments from Gordonridge
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Authentic glimpses of community gatherings, food support, and everyday life across
              Gordonridge in Scarborough.
            </p>
          </div>
          <Link
            href="/gallery"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0F7F2] text-[#1B7A3E] font-bold text-xs border border-[#1B7A3E]/30 hover:bg-[#1B7A3E] hover:text-white shadow-sm self-start md:self-auto"
          >
            <span>Explore Full Gallery ({galleryItems.length} Photos)</span>
            <span className="material-symbols-outlined text-sm">photo_library</span>
          </Link>
        </div>

        {/* Clean 4-Column Visual Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0A1626] shadow-sm relative text-left focus:outline-none focus:ring-2 focus:ring-[#1B7A3E]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <p className="text-xs text-slate-100 line-clamp-2 leading-snug font-medium">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#1B7A3E] transition-colors">
                  <span className="material-symbols-outlined text-sm">fullscreen</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <LightboxModal
        item={activeItem}
        items={previewItems}
        onNavigate={setActiveItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
}
