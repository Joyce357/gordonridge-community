interface SectionHeadingProps {
  badge?: string;
  badgeColor?: "green" | "gold" | "navy";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeColor = "green",
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  const badgeColorClasses = {
    green: isDark
      ? "bg-[#1B7A3E]/30 text-[#D2F5D7] border border-[#1B7A3E]/60"
      : "bg-[#F0F7F2] text-[#1B7A3E] border border-[#1B7A3E]/20",
    gold: isDark
      ? "bg-[#F5A623]/20 text-[#FEF08A] border border-[#F5A623]/40"
      : "bg-[#FFFDF0] text-[#B45309] border border-[#F5A623]/30",
    navy: isDark
      ? "bg-[#0A1626] text-white border border-white/20"
      : "bg-[#0F243E]/10 text-[#0F243E] border border-[#0F243E]/20",
  };

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${badgeColorClasses[badgeColor]}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0F243E]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
