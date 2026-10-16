import Link from "next/link";
import { siteConfig } from "@/data/site";
import { programs } from "@/data/programs";

export default function Footer() {
  return (
    <footer className="bg-[#0A1626] text-white pt-16 pb-12 border-t-4 border-[#1B7A3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 divide-y divide-white/10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Column 1 & 2: Organization Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Gordonridge Community Development Initiative"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 ring-2 ring-[#34A853] shrink-0">
                <img
                  src="/gordonridge-logo.png"
                  alt="Gordonridge Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight leading-none block">
                  GORDON<span className="text-[#34A853]">RIDGE</span>
                </span>
                <span className="text-[10px] font-bold text-[#FEF08A] tracking-wider uppercase mt-0.5 block">
                  Community Development Initiative
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {siteConfig.footer.description}
            </p>

            <div className="inline-block px-3 py-1.5 rounded-lg bg-[#13335A] border border-[#1B7A3E]/40 text-[#FEF08A] text-xs font-bold tracking-wide">
              {siteConfig.motto}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {siteConfig.socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="btn-interactive w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B7A3E] text-white flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <span className="material-symbols-outlined text-base">
                    {social.icon}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-interactive w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B7A3E] text-white flex items-center justify-center transition-colors"
                aria-label="Contact Us"
              >
                <span className="material-symbols-outlined text-base">mail</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Verified Programs */}
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-white uppercase tracking-wider block border-b border-[#1B7A3E] pb-1">
              Our Programs
            </span>
            <ul className="space-y-2 text-xs">
              {programs.map((p, idx) => {
                const colors = ["bg-[#34A853]", "bg-[#F5A623]", "bg-[#34A853]", "bg-[#F5A623]", "bg-[#34A853]", "bg-[#FEF08A]"];
                return (
                  <li key={p.slug} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors[idx % colors.length]}`}></span>
                    <Link
                      href={`/programs#${p.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-white uppercase tracking-wider block border-b border-[#F5A623] pb-1">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about#mission" className="hover:text-white transition-colors">
                  Mission, Vision &amp; Values
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Community Impact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Community Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-white transition-colors">
                  News &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Location & Contact */}
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-white uppercase tracking-wider block border-b border-[#34A853] pb-1">
              Community Hub
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {siteConfig.name}<br />
              {siteConfig.contact.communityCentre}<br />
              {siteConfig.contact.street}<br />
              {siteConfig.contact.city}, {siteConfig.contact.province}
            </p>
            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="material-symbols-outlined text-sm text-[#34A853]">pin_drop</span>
                <span>10, 20, 30 &amp; 40 Gordonridge Place</span>
              </div>
              <div className="flex items-center gap-2 text-[#FEF08A]">
                <span className="material-symbols-outlined text-sm text-[#F5A623]">mail</span>
                <Link href="/contact" className="hover:underline">
                  Contact Community Desk
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {siteConfig.footer.copyrightYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/programs" className="hover:text-white transition-colors">
              Programs
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-[#34A853] font-semibold">Scarborough, ON</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
