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
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-light py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">Case Studies</p>
          <h2 className="section-title text-text-light max-w-2xl">
            Real impact, measured.
          </h2>
          <p className="mt-5 text-[17px] text-text-secondary leading-relaxed max-w-[480px]">
            Outcomes first, always. The technology is the how. The result is the why.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, index) => (
            <div key={index} className="card-light flex flex-col">
              {/* Label */}
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-6">
                {c.label}
              </p>

              {/* Headline */}
              <h3 className="text-[20px] font-display font-bold text-text-light mb-4 leading-snug">
                {c.headline}
              </h3>

              {/* Body */}
              <p className="text-[14px] text-text-secondary leading-relaxed mb-8 flex-1">
                {c.body}
              </p>

              {/* Metrics */}
              <ul className="space-y-2 border-t border-black/10 pt-6">
                {c.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[13px] text-text-secondary">
                    <span className="text-accent mt-0.5">→</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}