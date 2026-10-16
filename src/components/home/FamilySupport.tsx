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
      alt: "Prepared food packages and grocery provisions in Gordonridge community room",
      caption:
        "Carefully prepared food provisions and grocery packages ready for Gordonridge residents and seniors.",
      category: "Family & Community Support",
      featured: true,
    },
    {
      id: "food-02",
      src: "/images/gordonridge/food-support/food-support-02.jpeg",
      alt: "Beverages, snack bars, fruit cups and provisions for community distribution",
      caption:
        "Healthy snacks, beverages, and family provisions prepared for distribution.",
      category: "Family & Community Support",
      featured: true,
    },
    {
      id: "food-01",
      src: "/images/gordonridge/food-support/food-support-01.jpeg",
      alt: "Platters of baked goods and treats set out for community social",
      caption:
        "Hospitality table and bakery platters for community gatherings and resident sessions.",
      category: "Family & Community Support",
      featured: true,
    },
  ];

  return (
    <section className="w-full py-20 bg-[#FDFBF7]" id="family-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF7F0] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
            <span>Essential Resident Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
            Family &amp; Community Support
          </h2>
          <p className="text-lg font-bold text-[#1B7A3E]">
            Making it easier for families to find help when they need it.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We help residents connect with food support, employment opportunities, housing resources,
            workshops, referrals, and other essential services. Rather than navigating complex systems
            alone, families find culturally affirming support right in the community room.
          </p>
        </div>

        {/* Real Food Support Photography Grid with Lightbox Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodCards.map((item, idx) => {
            const badges = [
              { label: "Grocery Care Packages", bg: "bg-[#1B7A3E] text-white" },
              { label: "Nutrition & Snacks", bg: "bg-[#FEF08A] text-[#0A1626]" },
              { label: "Community Hospitality", bg: "bg-[#0F243E] text-white" },
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
                      ? "Resident Food Support & Hampers"
                      : idx === 1
                      ? "Healthy Snacks & Refreshments"
                      : "Community Gatherings & Meals"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Support Pathways (Verified Content) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">
              shopping_basket
            </span>
            <div className="text-xs font-bold text-[#0F243E]">Food Support</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#F5A623]">work</span>
            <div className="text-xs font-bold text-[#0F243E]">Employment Opportunities</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">apartment</span>
            <div className="text-xs font-bold text-[#0F243E]">Housing Resources</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#0F243E]">school</span>
            <div className="text-xs font-bold text-[#0F243E]">Workshops &amp; Skills</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#1B7A3E]">
              connect_without_contact
            </span>
            <div className="text-xs font-bold text-[#0F243E]">Community Referrals</div>
          </div>
          <div className="card-static p-4 rounded-2xl bg-white border border-slate-200 text-center space-y-2">
            <span className="material-symbols-outlined text-2xl text-[#F5A623]">
              volunteer_activism
            </span>
            <div className="text-xs font-bold text-[#0F243E]">Other Services</div>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/gallery"
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#1B7A3E]/30 text-[#1B7A3E] hover:bg-[#1B7A3E] hover:text-white font-bold text-xs uppercase tracking-wider shadow-sm"
          >
            <span>View all authentic Gordonridge food support photos in our Gallery</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
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
