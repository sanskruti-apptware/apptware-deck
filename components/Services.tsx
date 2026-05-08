"use client";

const cases = [
  {
    label: "Healthcare",
    headline: "AI-powered EHR integration for better patient outcomes",
    body: "Built an AI solution enhancing discharge management, patient monitoring, and social determinants analysis. Customizable, non-disruptive EHR workflows from day one.",
    metrics: [
      "Accurate discharge prediction",
      "Real-time patient snapshots",
      "Early deterioration detection",
    ],
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-indigo-50",
    iconBg: "bg-violet-100",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    label: "BFSI",
    headline: "Partner onboarding cut from days to hours",
    body: "Integrated AADHAAR & DigiLocker for secure KYC verification and real-time data sync on a leading trading platform. Cloud-based infrastructure built for high-volume performance.",
    metrics: [
      "Faster onboarding — days → hours",
      "Real-time data sync",
      "Enhanced security & access controls",
    ],
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    iconBg: "bg-cyan-100",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
  {
    label: "Retail",
    headline: "20-second auction engine for a live marketplace",
    body: "Transformed a digital marketplace with an AI-driven auction platform, enabling real-time transactions and eliminating long auction delays for buyers and sellers.",
    metrics: [
      "20-second live auctions",
      "Seamless buyer & seller UX",
      "AI-driven bidding analytics",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Proof of Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Real impact, measured.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Outcomes first, always. The technology is the how. The result is the why.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl overflow-hidden
                gradient-border bg-gradient-to-br ${c.bgGradient}
                p-8 sm:p-10
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-xl
              `}
            >
              {/* Hover shine */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

              {/* Label */}
              <div className="mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badgeColor}`}>
                  {c.label}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                {c.headline}
              </h3>

              {/* Body */}
              <p className="text-sm text-muted leading-relaxed mb-6">
                {c.body}
              </p>

              {/* Metrics */}
              <ul className="space-y-2">
                {c.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 w-4 h-4 rounded-full ${c.iconBg} flex items-center justify-center`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                    <span className="text-foreground font-medium">{m}</span>
                  </li>
                ))}
              </ul>

              {/* Animated bottom border */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 h-[2px]
                  bg-gradient-to-r ${c.gradient}
                  scale-x-0 group-hover:scale-x-100
                  origin-left transition-transform duration-500
                `}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}