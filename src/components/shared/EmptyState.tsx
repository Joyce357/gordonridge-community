import Link from "next/link";

interface EmptyStateProps {
  icon?: string;
  title: string;
  message: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function EmptyState({
  icon = "event_upcoming",
  title,
  message,
  subtext,
  ctaLabel,
  ctaHref,
}: EmptyStateProps) {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-dashed border-[#1B7A3E]/30 shadow-sm">
      <div className="w-16 h-16 rounded-2xl bg-[#F0F7F2] text-[#1B7A3E] flex items-center justify-center mx-auto mb-4 ring-8 ring-[#F0F7F2]/50">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-[#0F243E] mb-2">{title}</h3>
      <p className="text-base text-slate-700 font-semibold mb-2">{message}</p>
      {subtext && (
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 max-w-md mx-auto">
          {subtext}
        </p>
      )}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B7A3E] hover:bg-[#135C2E] text-white text-xs font-bold tracking-wide transition-colors shadow-sm"
        >
          <span>{ctaLabel}</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}
