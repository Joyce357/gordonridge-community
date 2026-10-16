"use client";

import { useState } from "react";

interface GetInvolvedFormProps {
  id?: string;
  defaultInterest?: string;
}

export default function GetInvolvedForm({
  id = "get-involved-form",
  defaultInterest = "Join a Program",
}: GetInvolvedFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: defaultInterest,
    location: "20",
    message: "",
    consent: false,
    website: "", // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage("Please accept the consent checkbox to submit your information.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/get-involved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          location: formData.location,
          message: formData.message,
          consent: formData.consent,
          honeypot: formData.website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
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
      name: "",
      email: "",
      phone: "",
      interest: defaultInterest,
      location: "20",
      message: "",
      consent: false,
      website: "",
    });
    setErrorMessage("");
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#1B7A3E]/20 space-y-8" id={id}>
      <div className="space-y-2 text-center">
        <span className="px-3 py-1 rounded-full bg-[#D2F5D7] text-[#1B7A3E] text-xs font-bold uppercase tracking-wider">
          Registration &amp; Volunteer Sign-Up
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F243E]">
          Connect With Gordonridge CDI
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Fill out this simple form and a member of our resident team will connect with you directly.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#D2F5D7] border border-[#34A853] text-[#0A1626] text-center space-y-3 animate-in fade-in">
          <div className="w-14 h-14 rounded-full bg-[#1B7A3E] text-white flex items-center justify-center mx-auto mb-2 shadow-md">
            <span className="material-symbols-outlined text-3xl">check</span>
          </div>
          <h3 className="font-extrabold text-lg text-[#1B7A3E]">Thank You for Reaching Out!</h3>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
            We have received your submission regarding <strong>{formData.interest}</strong>. A
            member of our team from the 20 Gordonridge Place Community Centre will follow up with
            you.
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
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-red-500">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Hidden Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="get-involved-website-trap">Leave this blank</label>
            <input
              id="get-involved-website-trap"
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
                htmlFor="involved-name"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Full Name *
              </label>
              <input
                id="involved-name"
                required
                type="text"
                placeholder="First and last name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="involved-email"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Email Address *
              </label>
              <input
                id="involved-email"
                required
                type="email"
                placeholder="your-email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="involved-phone"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                Phone Number (optional)
              </label>
              <input
                id="involved-phone"
                type="tel"
                placeholder="(416) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="involved-interest"
                className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
              >
                I Am Interested In *
              </label>
              <select
                id="involved-interest"
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                disabled={status === "submitting"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none bg-white disabled:bg-slate-100 font-medium text-[#0F243E]"
              >
                <option value="Join a Program">Join a Program</option>
                <option value="Seniors Programs">Seniors Programs</option>
                <option value="Youth Programs">Youth Programs</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Resident Leadership">Resident Leadership</option>
                <option value="Community Partnership">Community Partnership</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="involved-message"
              className="block text-xs font-bold text-[#0F243E] uppercase tracking-wider"
            >
              Message / Details (optional)
            </label>
            <textarea
              id="involved-message"
              rows={3}
              placeholder="Tell us how we can help or what you would like to participate in..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={status === "submitting"}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#34A853] focus:outline-none disabled:bg-slate-100"
            ></textarea>
          </div>

          <div className="flex items-start gap-2.5">
            <input
              id="involved-consent"
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              disabled={status === "submitting"}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1B7A3E] focus:ring-[#34A853] cursor-pointer"
            />
            <label htmlFor="involved-consent" className="text-xs text-slate-600 cursor-pointer select-none">
              I consent to Gordonridge Community Development Initiative contacting me regarding this
              inquiry. *
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
                <span>Submitting Information...</span>
              </>
            ) : (
              <span>Submit Information</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
