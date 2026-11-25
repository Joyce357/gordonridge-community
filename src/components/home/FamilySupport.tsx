"use client";

import { useState } from "react";
import Link from "next/link";
import LightboxModal from "@/components/shared/LightboxModal";
import { GalleryItem } from "@/data/gallery";

export default function FamilySupport() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const foodCards: GalleryItem[] = [
    {
      id: "food-03",
      src: "/images/gordonridge/food-support/food-support-03.jpeg",
      alt: "Prepared food support boxes and pantry supply packages for Gordonridge households",
      caption:
        "Carefully assembled food support packages and essential pantry supplies prepared for Gordonridge families and seniors.",
      category: "Family & Community Support",
      featured: true,
    },
    {
      id: "food-02",
      src: "/images/gordonridge/food-support/food-support-02.jpeg",
      alt: "Organized food supplies, fruit cups, snack bars, and beverages for resident support",
      caption:
        "Community supplies, pantry items, and nutritious snacks organized to support food security and family wellbeing across Gordonridge.",
      category: "Family & Community Support",
      featured: true,
    },
    {
      id: "food-01",
      src: "/images/gordonridge/food-support/food-support-01.jpeg",
      alt: "Community food support table and organized supply packages for Gordonridge residents",
      caption:
        "Food support items, refreshments, and boxed community supplies organized in the community room to care for neighbours.",
      category: "Family & Community Support",
      featured: true,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#FDFBF7] scroll-mt-20" id="family-support">
      <span id="food-security" className="absolute -top-28 block pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF7F0] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
            <span>Food Security &middot; Family &amp; Community Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
            Supporting Food Security in Gordonridge
          </h2>
          <p className="text-lg font-bold text-[#1B7A3E]">
            Helping residents and families access food support, community supplies, and essential resources.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Food security is an important part of community wellbeing. Gordonridge Community
            Development Initiative helps residents and families access food support, community
            supplies, and essential resources through resident-focused support efforts, partnerships,
            and community-based initiatives.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            As part of our broader Family &amp; Community Support work, we also connect households
            with employment opportunities, housing resources, workshops, and community referrals
            &mdash; making it easier for families to find help when they need it.
          </p>
        </div>

        {/* Real Food Support Photography Grid with Lightbox Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodCards.map((item, idx) => {
            const badges = [
              { label: "Food Support", bg: "bg-[#1B7A3E] text-white" },
              { label: "Community Supplies", bg: "bg-[#FEF08A] text-[#0A1626]" },
              { label: "Community Care", bg: "bg-[#0F243E] text-white" },
            ];

            return (
              <div
                key={item.id}
                className="card-interactive group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div
                  className="relative h-64 overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full font-extrabold text-[11px] ${badges[idx].bg}`}>
                    {badges[idx].label}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white p-2 rounded-full material-symbols-outlined text-lg">
                      zoom_in
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-base text-[#0F243E]">
                    {idx === 0
                      ? "Food Support & Supply Packages"
                      : idx === 1
                      ? "Community Supplies & Wellbeing"
                      : "Food Access & Resident Care"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Support Pathways (Food Security + Broader Family & Community Support) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">
              shopping_basket
            </span>
            <div className="text-xs font-bold text-[#0F243E]">Food Security &amp; Support</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#F5A623]">inventory_2</span>
            <div className="text-xs font-bold text-[#0F243E]">Community Supplies</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">
              volunteer_activism
            </span>
            <div className="text-xs font-bold text-[#0F243E]">Essential Resources</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#0F243E]">work</span>
            <div className="text-xs font-bold text-[#0F243E]">Employment Opportunities</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">apartment</span>
            <div className="text-xs font-bold text-[#0F243E]">Housing Resources</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#F5A623]">
              connect_without_contact
            </span>
            <div className="text-xs font-bold text-[#0F243E]">Workshops &amp; Referrals</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/programs#family-community-support"
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs uppercase tracking-wider shadow-sm"
          >
            <span>Explore Family &amp; Community Support</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
          <Link
            href="/gallery"
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] hover:bg-[#1B7A3E] hover:text-white font-bold text-xs uppercase tracking-wider shadow-sm"
          >
            <span>View authentic Gordonridge food support photos</span>
            <span className="material-symbols-outlined text-base">photo_library</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
