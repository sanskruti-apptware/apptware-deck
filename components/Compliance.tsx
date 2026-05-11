"use client";

const badges = [
  { label: "SOC 2 Type II", detail: "All delivered projects fully SOC 2 compliant." },
  { label: "HIPAA", detail: "Certified for all US healthcare projects." },
  { label: "GDPR", detail: "3+ compliant applications delivered." },
  { label: "CCPA", detail: "Ensured for multiple global clients." },
];

const venues = [
  "Cannes",
  "London Creative Festival",
  "GroceryShop",
  "Shoptalk",
  "Women's Health Summit",
  "ICES Florida & Long Beach",
  "eTail",
];

export default function Compliance() {
  return (
    <section className="bg-bg-dark py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-3">
            Trust & Credibility
          </p>
          <h2 className="section-title text-text-dark max-w-2xl">
            Built to comply. Built to scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Compliance Badges */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-8">
              Compliance
            </p>
            <div className="space-y-px">
              {badges.map((b, i) => (
                <div
                  key={b.label}
                  className={`flex items-start justify-between py-5 ${
                    i < badges.length - 1 ? "border-b border-white/8" : ""
                  }`}
                >
                  <p className="text-[16px] font-display font-bold text-text-dark">
                    {b.label}
                  </p>
                  <p className="text-[13px] text-text-secondary text-right max-w-[200px]">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stage Presence */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-8">
              Speaking Stages
            </p>
            <ul className="space-y-px">
              {venues.map((v, i) => (
                <li
                  key={v}
                  className={`flex items-center justify-between py-5 ${
                    i < venues.length - 1 ? "border-b border-white/8" : ""
                  }`}
                >
                  <span className="text-[16px] text-text-dark font-display font-bold">
                    {v}
                  </span>
                  <span className="text-accent text-[13px]">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
