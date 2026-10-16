"use client";

import { useState } from "react";
import { galleryItems, GalleryItem, GalleryCategory } from "@/data/gallery";
import LightboxModal from "@/components/shared/LightboxModal";

export default function GalleryViewer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { label: "All Photos", target: "All" },
    { label: "Our Community & Court", target: "Gordonridge Community" },
    { label: "Food & Family Support", target: "Family & Community Support" },
    { label: "Youth Leadership", target: "Youth Leadership" },
    { label: "Resident Leaders & Volunteers", target: "Resident Leaders & Volunteers" },
    { label: "Families & Community Events", target: "Families & Community Events" },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === selectedCategory ||
            (selectedCategory === "Gordonridge Community" &&
              (item.category === "Gordonridge Community" || item.category === "Youth Leadership")) ||
            (selectedCategory === "Family & Community Support" &&
              (item.category === "Family & Community Support" ||
                item.category === "Resident Leaders & Volunteers" ||
                item.category === "Families & Community Events"))
        );

  return (
    <div className="space-y-10">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-[#F0F7F2] p-2 rounded-2xl border border-[#1B7A3E]/15">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.target;
          return (
            <button
              key={tab.target}
              onClick={() => setSelectedCategory(tab.target)}
              className={`btn-interactive px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-[#0F243E] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:text-[#1B7A3E]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group card-interactive-dark cursor-pointer rounded-3xl overflow-hidden bg-[#0A1626] border border-[#1B7A3E]/20 shadow-md"
            onClick={() => setActiveItem(item)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
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

      {/* Lightbox Modal */}
      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}
