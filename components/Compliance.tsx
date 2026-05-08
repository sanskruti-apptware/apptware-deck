"use client";

import { Shield } from "lucide-react";

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
    <section className="relative py-20 sm:py-28 bg-white border-t border-border-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Trust &amp; Credibility
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Compliance Badges */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Built to comply.
            </h3>
            <div className="space-y-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-start gap-4 p-5 rounded-xl bg-section-bg border border-border-light hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{b.label}</p>
                    <p className="text-sm text-muted mt-0.5">{b.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stage Presence */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              On the global stage.
            </h3>
            <ul className="space-y-3">
              {venues.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
