"use client";

import { useEffect } from "react";
import { GalleryItem } from "@/data/gallery";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl max-h-[90vh] flex flex-col items-center bg-[#0A1626] rounded-2xl overflow-hidden border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="w-full flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#0F243E]">
          <span className="text-xs font-bold text-[#FEF08A] uppercase tracking-wider">
            {item.category}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close image preview"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Image */}
        <div className="p-2 sm:p-4 max-h-[70vh] flex items-center justify-center">
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[65vh] object-contain rounded-lg"
          />
        </div>

        {/* Modal Caption */}
        <div className="w-full px-6 py-4 bg-[#0F243E] border-t border-white/10">
          <p className="text-xs sm:text-sm text-slate-200 text-center font-medium leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
