import Link from "next/link";

const focusItems = [
  {
    number: "01",
    title: "Mentoring & Positive Relationships",
    description:
      "Young people gain guidance, encouragement, and lasting bonds with older residents.",
  },
  {
    number: "02",
    title: "Storytelling & Knowledge Sharing",
    description:
      "Shared conversations and cultural activities that honour lived wisdom across generations.",
  },
  {
    number: "03",
    title: "Technology Support & Skill Exchange",
    description:
      "Youth and seniors learning side by side through practical digital support and workshops.",
  },
  {
    number: "04",
    title: "Youth Leadership & Shared Projects",
    description:
      "Collaborative community activities that reduce isolation and build neighbourhood pride.",
  },
];

export default function IntergenerationalFeature() {
  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[#0F243E] text-white overflow-hidden"
      id="intergenerational-signature"
    >
      {/* Subtle ambient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1B7A3E]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#34A853]/40 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
              <span>Signature Approach</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              CONNECTING GENERATIONS.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] via-[#FEF08A] to-[#F5A623]">
                STRENGTHENING GORDONRIDGE.
              </span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Our intergenerational work brings seniors and youth together to learn from one
              another, reduce isolation, develop young leaders, and build stronger everyday
              relationships across our neighbourhood.
            </p>

            <blockquote className="pl-5 border-l-4 border-[#F5A623] text-sm text-slate-100 italic leading-relaxed">
              &ldquo;Young people gain knowledge, guidance and positive relationships with older
              residents, while seniors remain active, connected and involved in the community.&rdquo;
            </blockquote>

            <div className="pt-2">
              <Link
                href="/programs#seniors-youth"
                className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#34A853] hover:bg-[#1B7A3E] text-white font-bold text-xs tracking-wider uppercase shadow-md"
              >
                <span>Explore Intergenerational Programs</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Editorial Numbered List (Breaks Card-Grid Repetition) */}
          <div className="lg:col-span-6 divide-y divide-white/10 border-y border-white/10">
            {focusItems.map((item) => (
              <div key={item.number} className="py-5 flex items-start gap-5">
                <span className="text-sm font-black text-[#FBBF24] tracking-wider pt-0.5 shrink-0">
                  {item.number}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
