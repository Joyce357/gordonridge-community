import Link from "next/link";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white border-t border-slate-200/80 scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7F2] border border-[#1B7A3E]/30 text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
            <span>Community Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight">
            Connect With Gordonridge CDI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our resident-led team at 20 Gordonridge Place. We welcome questions,
            program registrations, volunteer sign-ups, and collaborative community partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="card-static p-8 rounded-3xl bg-[#FDFBF7] border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
                  Location &amp; Office
                </span>
                <h3 className="text-2xl font-black text-[#0F243E] mt-3">
                  {siteConfig.shortName}
                </h3>
              </div>

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
                      Use the community desk form beside to reach our team directly.
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

            {/* Authentic Court Surface Image */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/images/gordonridge/community/gordonridge-court-branding.jpeg"
                alt="Gordonridge court branding"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm id="homepage-contact-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
