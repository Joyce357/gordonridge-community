"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

export const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Programs", href: "/#programs" },
  { name: "Impact", href: "/#impact" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Get Involved", href: "/#get-involved" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/#hero" || href === "/") {
      return pathname === "/" && typeof window !== "undefined" && (window.location.hash === "" || window.location.hash === "#hero");
    }
    return false;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] lg:h-[76px] flex items-center justify-between gap-4">
        {/* LEFT: Gordonridge Logo Only - NO organization name beside logo */}
        <Link
          href="/"
          className="flex items-center group shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1B7A3E] focus:ring-offset-2 rounded-full"
          aria-label="Gordonridge Community Development Initiative Home"
        >
          <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden ring-2 ring-[#1B7A3E]/30 group-hover:ring-[#1B7A3E] shadow-sm shrink-0 bg-white p-0.5 group-hover:scale-105 transition-all">
            <img
              src="/gordonridge-logo.png"
              alt="Gordonridge CDI Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* CENTER / RIGHT: Desktop Navigation (Flat List - No Dropdowns, No Button-Like Items) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm xl:text-[15px] font-semibold transition-colors rounded-lg hover:text-[#1B7A3E] hover:bg-[#F0F7F2]/60 ${
                  active
                    ? "text-[#1B7A3E] font-bold"
                    : "text-[#0F243E]"
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#1B7A3E] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Navigation Button */}
        <div className="lg:hidden flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
