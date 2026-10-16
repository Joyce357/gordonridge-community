import Link from "next/link";
import { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export default function ProgramCard({ program, featured = false }: ProgramCardProps) {
  return (
    <div
      className={`card-interactive group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md flex flex-col justify-between ${
        featured ? "ring-2 ring-[#1B7A3E]" : ""
      }`}
    >
      <div>
        {/* Card Header & Image */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626]/85 via-black/20 to-transparent"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#1B7A3E] text-white shadow-sm">
              {program.category}
            </span>
            {featured && (
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#F5A623] text-[#0A1626] shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">star</span>
                Flagship
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[11px] font-bold text-[#FEF08A] tracking-wider uppercase block mb-1">
              {program.audience}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {program.shortDescription}
          </p>

          <div className="space-y-2 border-t border-slate-100 pt-4">
            <span className="text-xs font-bold text-[#0F243E] uppercase tracking-wider block">
              Core Program Activities:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {program.activities.slice(0, 3).map((act, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-[#34A853] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="p-6 pt-0">
        <Link
          href={`/programs#${program.slug}`}
          className="btn-interactive w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#F0F7F2] hover:bg-[#1B7A3E] text-[#1B7A3E] hover:text-white font-bold text-xs tracking-wide shadow-sm group/btn"
        >
          <span>View Program Details</span>
          <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
