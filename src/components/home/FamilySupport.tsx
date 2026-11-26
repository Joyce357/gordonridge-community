"use client";

import { useState } from "react";
import Link from "next/link";
import LightboxModal from "@/components/shared/LightboxModal";
import { GalleryItem } from "@/data/gallery";

const foodPhotos: GalleryItem[] = [
  {
    id: "food-nutrition-meal-service",
    src: "/images/gordonridge/nutrition/seniors-meal-service-01.jpeg",
    alt: "Resident volunteers serving warm meals and refreshments to seniors and neighbours at the community centre",
    caption:
      "Resident volunteers serving warm meals and sharing community supplies in a welcoming, dignified space.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "food-support-packs",
    src: "/images/gordonridge/food-support/food-support-03.jpeg",
    alt: "Prepared food support boxes and pantry supply packages for Gordonridge households",
    caption:
      "Essential pantry supplies and food support packages organized for Gordonridge families and seniors.",
    category: "Family & Community Support",
    featured: true,
  },
  {
    id: "food-nutrition-snacks",
    src: "/images/gordonridge/food-support/food-support-02.jpeg",
    alt: "Organized food supplies, fruit cups, snack bars, and beverages for resident support",
    caption:
      "Nutritious snacks, fruit cups, beverages, and community supplies supporting children and families.",
    category: "Family & Community Support",
    featured: true,
  },
];

const supportFocuses = [
  "Nutritious Meals & Snacks",
  "Food Support",
  "Essential Supplies",
  "Family Wellbeing",
  "Community Resources",
  "Employment & Housing Referrals",
];

export default function FamilySupport() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[#FDFBF7] scroll-mt-20"
      id="family-support"
    >
      <span id="food-security" className="absolute -top-28 block pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Top Split: Narrative Left + Nutritious Meals & Snacks Feature Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF7F0] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Food Security &amp; Nutrition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
              Supporting Food Security in Gordonridge
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Access to nutritious food is an important part of healthy children, strong families
              and community wellbeing. Gordonridge Community Development Initiative works to address
              food insecurity by improving access to nutritious meals and snacks, food support,
              essential supplies and community resources for children and families.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Through community-based nutrition and support initiatives, we aim to help families
              access practical resources in a welcoming and dignified environment.
            </p>
          </div>

          {/* Nutritious Meals & Snacks Feature Callout */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-white border-t-4 border-[#F5A623] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#1B7A3E] text-2xl">
                nutrition
              </span>
              <h3 className="font-extrabold text-base text-[#0F243E]">
                Nutritious Meals &amp; Snacks for Children and Families
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Alongside household food support and essential supplies, we emphasize accessible
              nutritious meals, fruit cups, wholesome snacks, and shared community hospitality so
              children, seniors, and families feel supported without stigma.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {supportFocuses.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-[#F0F7F2] text-[#1B7A3E] text-[11px] font-bold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Authentic Food Security & Meal Service Photography Strip (No Heavy Card Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foodPhotos.map((item, idx) => {
            const labels = [
              "Community Meals & Care",
              "Food Support & Essential Supplies",
              "Nutritious Snacks & Provisions",
            ];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group text-left space-y-3 focus:outline-none"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white p-2 rounded-full material-symbols-outlined text-lg">
                      zoom_in
                    </span>
                  </div>
                </div>
                <div className="space-y-1 px-1">
                  <h3 className="font-bold text-sm text-[#0F243E] group-hover:text-[#1B7A3E] transition-colors">
                    {labels[idx]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.caption}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Concise Footer Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Part of our broader <strong className="text-[#0F243E]">Family &amp; Community Support</strong>{" "}
            work connecting households with food support, employment, housing, and local services.
          </p>
          <Link
            href="/programs#family-community-support"
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs uppercase tracking-wider shadow-sm"
          >
            <span>Family &amp; Community Support</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>

      <LightboxModal
        item={selectedImage}
        items={foodPhotos}
        onNavigate={setSelectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
