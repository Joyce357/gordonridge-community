"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { navLinks } from "./Header";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-xl text-[#0F243E] hover:bg-[#F0F7F2] focus:outline-none transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Render Backdrop & Drawer in document.body to avoid header backdrop-filter clipping */}
      {mounted &&
        isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[101] bg-[#0F243E] text-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Drawer Header - Simple: Logo & Close Icon Only */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#34A853] rounded-full"
                    aria-label="Gordonridge Community Development Initiative Home"
                  >
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 shrink-0 ring-2 ring-[#34A853]/60 shadow-sm group-hover:scale-105 transition-transform">
                      <img
                        src="/gordonridge-logo.png"
                        alt="Gordonridge CDI Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Close menu"
                  >
                    <span className="material-symbols-outlined text-2xl">close</span>
                  </button>
                </div>

                {/* Flat Navigation Links - No Dropdowns */}
                <nav className="space-y-1 font-semibold text-sm" aria-label="Mobile Navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between transition-colors text-slate-200 hover:bg-white/10 hover:text-white"
                    >
                      <span>{link.name}</span>
                      <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Information */}
              <div className="pt-6 border-t border-white/15 space-y-3">
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="material-symbols-outlined text-xs text-[#34A853]">location_on</span>
                    <span>{siteConfig.contact.fullAddress}</span>
                  </div>
                  <div className="text-slate-400">
                    {siteConfig.motto}
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
