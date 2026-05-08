"use client";

const industries = [
  {
    label: "AI + Health",
    description: "Clinical intelligence, women's health, MedTech, and wellness platforms where AI restructures care delivery and patient outcomes.",
    featured: true,
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-indigo-50",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    label: "BFSI",
    description: "Security, fraud reduction, trading platforms, and process optimization for financial services.",
    featured: false,
    gradient: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    label: "Retail",
    description: "Personalized experiences, inventory intelligence, and real-time commerce platforms.",
    featured: false,
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Agtech",
    description: "Smart farming, yield optimization, and sustainability-driven monitoring solutions.",
    featured: false,
    gradient: "from-lime-500 to-green-500",
    bg: "from-lime-50 to-green-50",
    badge: "bg-lime-100 text-lime-700",
  },
  {
    label: "Automotive & Manufacturing",
    description: "Predictive maintenance, production automation, and operational efficiency.",
    featured: false,
    gradient: "from-orange-500 to-red-500",
    bg: "from-orange-50 to-red-50",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    label: "Gaming",
    description: "Immersive, high-performance gaming with AI-driven engagement and mechanics.",
    featured: false,
    gradient: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    badge: "bg-pink-100 text-pink-700",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28 bg-section-bg border-t border-border-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Built for markets where AI changes the economics.
          </h2>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className={`group relative rounded-2xl p-7 border border-white/60 bg-gradient-to-br ${ind.bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${ind.badge}`}>
                {ind.label}
              </span>
              <p className="text-[15px] text-muted leading-relaxed">{ind.description}</p>
              <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${ind.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
