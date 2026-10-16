import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Gordonridge CDI",
  description:
    "Connect with Gordonridge Community Development Initiative at 20 Gordonridge Place, Scarborough, Ontario.",
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO HEADER */}
      <section className="relative w-full bg-[#0A1626] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gordonridge/community/gordonridge-residential-buildings.jpeg"
            alt="Gordonridge towers backdrop"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626] via-[#0F243E]/90 to-[#0A1626]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              <span>Community Desk</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Reach out to Gordonridge Community Development Initiative. We welcome questions,
              registrations, volunteer inquiries, and partnership proposals.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS & MESSAGE FORM */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Column 1: Organization Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
                  Location &amp; Office
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F243E]">
                  {siteConfig.shortName}
                </h2>
                <div className="space-y-4 text-slate-700 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1B7A3E] text-xl shrink-0 mt-0.5">
                      location_on
                    </span>
                    <div>
                      <strong className="text-[#0F243E] block">
                        {siteConfig.contact.communityCentre}
                      </strong>
                      {siteConfig.contact.street}
                      <br />
                      {siteConfig.contact.city}, {siteConfig.contact.province}
                      <br />
                      <span className="text-xs text-slate-500 font-medium">
                        Serving 10, 20, 30 &amp; 40 Gordonridge Place
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <span className="material-symbols-outlined text-[#F5A623] text-xl shrink-0 mt-0.5">
                      mail
                    </span>
                    <div>
                      <strong className="text-[#0F243E] block">Email Inquiries</strong>
                      <span className="text-xs text-slate-500">
                        Please use the community desk form beside to reach our coordinator directly.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <span className="material-symbols-outlined text-[#0F243E] text-xl shrink-0 mt-0.5">
                      home
                    </span>
                    <div>
                      <strong className="text-[#0F243E] block">Community Hours</strong>
                      <span className="text-xs text-slate-500">
                        In-person community desk at 20 Gordonridge Place Community Centre.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="card-static p-6 rounded-3xl bg-[#FDFBF7] border border-[#1B7A3E]/20 space-y-3">
                <h3 className="font-bold text-sm text-[#0F243E] uppercase tracking-wider">
                  Connect With Us
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stay updated through our social and community channels:
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {siteConfig.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="btn-interactive px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-[#0F243E] hover:border-[#1B7A3E] hover:text-[#1B7A3E] flex items-center gap-1.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">{social.icon}</span>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Court Image Feature */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/images/gordonridge/community/gordonridge-court-branding.jpeg"
                  alt="G-Ridge court surface branding"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>

            {/* Column 2: Message Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-[#0A1626] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Building a Stronger Community Together</h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every neighbor contributes to the strength, warmth, and resilience of Gordonridge.
          </p>
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="btn-interactive inline-block px-8 py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#228838] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
