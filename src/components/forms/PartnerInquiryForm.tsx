"use client";

import { useState } from "react";

export default function PartnerInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    email: "",
    phone: "",
    sector: "Corporations",
    partnershipType: "Funding & Grants",
    message: "",
    consent: false,
    website: "", // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage("Please accept the consent checkbox to submit your partnership inquiry.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.contactName} (${formData.orgName})`,
          email: formData.email,
          phone: formData.phone,
          interest: `Partnership: ${formData.sector} - ${formData.partnershipType}`,
          message: formData.message,
          consent: formData.consent,
          honeypot: formData.website,
          type: "partner",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "An unexpected error occurred. Please try again.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      orgName: "",
      contactName: "",
      email: "",
      phone: "",
      sector: "Corporations",
      partnershipType: "Funding & Grants",
      message: "",
      consent: false,
      website: "",
    });
    setErrorMessage("");
  };

  return (
    <div
      className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#1B7A3E]/20 max-w-3xl mx-auto space-y-6"
      id="partner-inquiry"
    >
      <div className="text-center space-y-1">
        <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
          Partner With Us
        </span>
        <h3 className="text-2xl font-bold text-[#0F243E]">Start a Partnership Discussion</h3>
        <p className="text-xs text-slate-600">
          Interested in supporting Gordonridge? Let us know how your organization would like to
          collaborate.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#D2F5D7] border border-[#34A853] text-[#0A1626] text-center space-y-3 animate-in fade-in">
          <div className="w-14 h-14 rounded-full bg-[#1B7A3E] text-white flex items-center justify-center mx-auto mb-2 shadow-md">
            <span className="material-symbols-outlined text-3xl">check</span>
          </div>
          <h4 className="font-extrabold text-lg text-[#1B7A3E]">Thank you for reaching out!</h4>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
            Our leadership team will review your partnership inquiry and connect with your
            organization.
          </p>
          <div className="text-xs font-bold text-[#1B7A3E] pt-2">
            Strong People. Strong Families. Stronger Community.
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="btn-interactive px-5 py-2.5 rounded-xl bg-white text-[#1B7A3E] font-bold text-xs border border-[#1B7A3E]/30 hover:bg-[#F0F7F2] shadow-sm"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-red-500">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Hidden Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="partner-website-trap">Leave this blank</label>
            <input
              id="partner-website-trap"
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="partner-org"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Organization / Company Name *
              </label>
              <input
                id="partner-org"
                required
                type="text"
                placeholder="Organization name"
                value={formData.orgName}
                onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="partner-name"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Primary Contact Name *
              </label>
              <input
                id="partner-name"
                required
                type="text"
                placeholder="Full name"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="partner-email"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Work Email Address *
              </label>
              <input
                id="partner-email"
                required
                type="email"
                placeholder="email@organization.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="partner-phone"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Phone Number (optional)
              </label>
              <input
                id="partner-phone"
                type="tel"
                placeholder="(416) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="partner-sector"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Organization Sector
              </label>
              <select
                id="partner-sector"
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none bg-white disabled:bg-slate-100"
              >
                <option value="Corporations">Corporations &amp; Businesses</option>
                <option value="Government">Government &amp; Civic</option>
                <option value="Foundations">Foundations &amp; Philanthropy</option>
                <option value="Schools">Schools &amp; Academic Institutions</option>
                <option value="Community Organizations">Community Non-Profits</option>
                <option value="Service Providers">Health &amp; Social Service Agencies</option>
              </select>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="partner-type"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Partnership Interest
              </label>
              <select
                id="partner-type"
                value={formData.partnershipType}
                onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none bg-white disabled:bg-slate-100"
              >
                <option value="Funding & Grants">Funding &amp; Grants</option>
                <option value="Program Collaboration">Program Delivery &amp; Co-Hosting</option>
                <option value="Volunteer Groups">Corporate or Student Volunteers</option>
                <option value="In-Kind Donations">In-Kind Donations &amp; Food Drives</option>
                <option value="Employment & Internships">Youth Employment &amp; Internships</option>
                <option value="Facilities & Technology">Technology &amp; Equipment Support</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="partner-message"
              className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
            >
              Collaboration Vision / Message *
            </label>
            <textarea
              id="partner-message"
              required
              rows={3}
              placeholder="Tell us about your organization and how you'd like to collaborate with Gordonridge..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={status === "submitting"}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
            ></textarea>
          </div>

          <div className="flex items-start gap-2.5">
            <input
              id="partner-consent"
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              disabled={status === "submitting"}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1B7A3E] focus:ring-[#34A853] cursor-pointer"
            />
            <label htmlFor="partner-consent" className="text-xs text-slate-600 cursor-pointer select-none">
              I consent to Gordonridge Community Development Initiative contacting me regarding this
              partnership inquiry. *
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-interactive w-full py-4 rounded-xl bg-[#1B7A3E] hover:bg-[#135c2e] disabled:bg-slate-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                <span>Submitting Partnership Inquiry...</span>
              </>
            ) : (
              <span>Submit Partnership Inquiry</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
