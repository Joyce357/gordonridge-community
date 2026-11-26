"use client";

import { useState } from "react";
import Link from "next/link";
import LightboxModal from "@/components/shared/LightboxModal";
import { GalleryItem } from "@/data/gallery";

const seniorPhotos: GalleryItem[] = [
  {
    id: "seniors-meal-featured",
    src: "/images/gordonridge/seniors/seniors-community-meal-01.jpeg",
    alt: "Seniors and neighbours seated together enjoying a shared community meal at the Gordonridge Community Centre",
    caption:
      "Seniors and residents sharing a warm community meal and conversation inside the Gordonridge Community Centre.",
    category: "Seniors in the Community",
    featured: true,
  },
  {
    id: "seniors-connection-support",
    src: "/images/gordonridge/seniors/seniors-community-connection-01.jpeg",
    alt: "Gordonridge seniors and residents talking together inside the sunlit community centre",
    caption:
      "Neighbours connecting in conversation and building welcoming relationships at 20 Gordonridge Place.",
    category: "Seniors in the Community",
    featured: true,
  },
  {
    id: "seniors-gathering-support",
    src: "/images/gordonridge/seniors/seniors-community-gathering-01.jpeg",
    alt: "Seniors and resident volunteers sharing hospitality during a Gordonridge community gathering",
    caption:
      "Seniors, residents, and volunteers gathering together in an accessible, welcoming community space.",
    category: "Seniors in the Community",
    featured: true,
  },
];

const seniorThemes = [
  {
    title: "Stay Connected",
    description:
      "Social gatherings, peer support, outings, and outreach for seniors who may experience isolation.",
  },
  {
    title: "Community Meals",
    description:
      "Welcoming shared meals and hospitality that bring older adults and neighbours together.",
  },
  {
    title: "Wellness & Activities",
    description:
      "Workshops, active living, intergenerational activities, and accessible connections to local resources.",
  },
  {
    title: "Digital Confidence",
    description:
      "Patient, practical digital literacy and technology support to help seniors stay in touch and access services.",
  },
];

export default function SeniorsSection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section
      className="w-full py-20 lg:py-24 bg-[#FDFBF7] border-b border-slate-200/70 scroll-mt-20"
      id="seniors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Editorial Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF7F0] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
              <span>Seniors Engagement &amp; Wellness</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F243E] tracking-tight leading-tight">
              Keeping Seniors Connected, Active and Involved in Gordonridge.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We create welcoming opportunities for seniors to stay active, socially connected, and
              engaged in neighbourhood life &mdash; with a strong focus on reaching older residents
              who may experience isolation or barriers to accessing services and activities.
            </p>
          </div>
        </div>

        {/* Visual Storytelling Collage: 1 Large Featured Photo + 2 Supporting Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Large Featured Photograph */}
          <button
            type="button"
            onClick={() => setSelectedImage(seniorPhotos[0])}
            className="lg:col-span-8 group relative rounded-3xl overflow-hidden shadow-lg bg-[#0A1626] text-left focus:outline-none focus:ring-2 focus:ring-[#1B7A3E]"
          >
            <div className="aspect-[16/10] sm:aspect-[16/10] lg:h-full w-full overflow-hidden">
              <img
                src={seniorPhotos[0].src}
                alt={seniorPhotos[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <p className="text-xs sm:text-sm text-white/95 font-medium max-w-lg leading-relaxed">
                {seniorPhotos[0].caption}
              </p>
              <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 group-hover:bg-[#1B7A3E] transition-colors">
                <span className="material-symbols-outlined text-base">zoom_in</span>
              </span>
            </div>
          </button>

          {/* Two Stacked Supporting Photographs */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {seniorPhotos.slice(1).map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedImage(photo)}
                className="group relative rounded-3xl overflow-hidden shadow-md bg-[#0A1626] text-left focus:outline-none focus:ring-2 focus:ring-[#1B7A3E]"
              >
                <div className="aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/75 via-transparent to-transparent" />
                <p className="absolute bottom-3.5 left-4 right-4 text-xs text-white/95 font-medium line-clamp-2">
                  {photo.caption}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Concise Typographic Themes (No Card Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 border-t border-slate-200/80">
          {seniorThemes.map((theme, idx) => (
            <div key={theme.title} className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    idx % 2 === 0 ? "bg-[#1B7A3E]" : "bg-[#F5A623]"
                  }`}
                />
                <h3 className="font-bold text-sm text-[#0F243E]">{theme.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>

        {/* Focused CTA Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-xs sm:text-sm font-medium text-[#0F243E]">
            Looking to join a seniors gathering or connect an older family member?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/get-involved#seniors-registration"
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <span>Seniors Registration</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link
              href="/programs#seniors-engagement"
              className="btn-interactive inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-[#0F243E] hover:border-[#1B7A3E] hover:text-[#1B7A3E] font-bold text-xs uppercase tracking-wider"
            >
              <span>Program Details</span>
            </Link>
          </div>
        </div>
      </div>

      <LightboxModal
        item={selectedImage}
        items={seniorPhotos}
        onNavigate={setSelectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
