"use client";

import { useState } from "react";
import Link from "next/link";
import { galleryItems, GalleryItem } from "@/data/gallery";
import LightboxModal from "@/components/shared/LightboxModal";

export default function GalleryPreview() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Show up to 6 authentic featured items on the homepage
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="w-full py-20 bg-white border-t border-slate-200/80 scroll-mt-20" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Authentic Community Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Moments from Gordonridge
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A look at our community court, residential towers, volunteer food hamper sorting, and
              intergenerational care in Scarborough.
            </p>
          </div>
          <Link
            href="/gallery"
            className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0F7F2] text-[#1B7A3E] font-bold text-xs border border-[#1B7A3E]/30 hover:bg-[#1B7A3E] hover:text-white shadow-sm self-start md:self-auto"
          >
            <span>Explore Full Photo Gallery</span>
            <span className="material-symbols-outlined text-sm">photo_library</span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group card-interactive-dark cursor-pointer rounded-3xl overflow-hidden bg-[#0A1626] border border-[#1B7A3E]/20 shadow-md relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-[#1B7A3E] text-[10px] font-extrabold uppercase">
                    {item.category}
                  </span>
                  <p className="text-xs text-slate-200 mt-2 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#1B7A3E] transition-colors">
                  <span className="material-symbols-outlined text-sm">fullscreen</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal with Keyboard Close */}
      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
