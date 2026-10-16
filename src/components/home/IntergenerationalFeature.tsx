import Link from "next/link";

export default function IntergenerationalFeature() {
  const pillars = [
    {
      icon: "connect_without_contact",
      color: "border-[#34A853] text-[#34A853] bg-[#1B7A3E]/30",
      title: "Connects Seniors & Youth",
      description:
        "Creating intentional spaces where youth and older adults share conversations, guidance, and respect.",
    },
    {
      icon: "favorite",
      color: "border-[#F5A623] text-[#FBBF24] bg-[#F5A623]/30",
      title: "Reduces Social Isolation",
      description:
        "Engaging seniors who may live alone through regular gatherings, community meals, and digital connection.",
    },
    {
      icon: "military_tech",
      color: "border-[#34A853] text-[#D2F5D7] bg-[#34A853]/30",
      title: "Develops Young Leaders",
      description:
        "Equipping youth with confidence, accountability, and life-skills through mentorship and community projects.",
    },
    {
      icon: "handshake",
      color: "border-[#FEF08A] text-[#FEF08A] bg-white/10",
      title: "Builds Stronger Relationships",
      description:
        "Bridging generation gaps so youth and elders greet, support, and protect one another on daily walks.",
    },
    {
      icon: "hub",
      color: "border-[#34A853] text-[#34A853] bg-[#1B7A3E]/30",
      title: "Strengthens Wider Community",
      description:
        "A connected neighborhood is a safer, more resilient neighborhood where every resident has an active voice.",
    },
  ];

  return (
    <section
      className="relative w-full py-20 lg:py-24 bg-[#0F243E] text-white overflow-hidden"
      id="intergenerational-signature"
    >
      {/* Glow blooms */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1B7A3E]/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F5A623]/15 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#34A853]/40 text-[#FEF08A] text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
            <span>Our Signature Approach</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            CONNECTING GENERATIONS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] via-[#FEF08A] to-[#F5A623]">
              STRENGTHENING GORDONRIDGE.
            </span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Our intergenerational approach brings seniors and youth together to learn from one
            another, build lasting relationships, and eliminate isolation across our neighborhood.
          </p>
        </div>

        {/* 5 Intergenerational Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-4"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.color}`}
              >
                <span className="material-symbols-outlined text-2xl">{p.icon}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Quote */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1B7A3E] flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-2xl">diversity_3</span>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                &ldquo;Young people gain knowledge, guidance and positive relationships, while seniors
                remain active, connected and involved.&rdquo;
              </div>
              <div className="text-xs text-[#FEF08A] font-semibold mt-1">
                Gordonridge Intergenerational Framework
              </div>
            </div>
          </div>
          <Link
            href="/programs#seniors-youth"
            className="btn-interactive px-6 py-3 rounded-xl bg-[#34A853] hover:bg-[#1B7A3E] text-white font-bold text-xs tracking-wider uppercase shrink-0 shadow-md"
          >
            Explore Intergenerational Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
