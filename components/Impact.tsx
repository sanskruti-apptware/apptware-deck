"use client";

import { TrendingUp, Box } from "lucide-react";

const impactCards = [
  {
    icon: TrendingUp,
    title: "Revenue-Positive AI Solutions",
    description:
      "Our AI implementations have consistently delivered 3-5x ROI for enterprise clients, with measurable impact on revenue growth, cost reduction, and operational efficiency within the first 90 days.",
    stat: "3-5x",
    statLabel: "Average ROI",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-indigo-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    accentColor: "text-violet-600",
    link: "View case studies →",
  },
  {
    icon: Box,
    title: "Proven Supply Chain AI",
    description:
      "We've helped Fortune 500 companies optimize their supply chains using predictive AI, reducing waste by up to 40% and improving delivery accuracy to 99.2% across global operations.",
    stat: "99.2%",
    statLabel: "Delivery Accuracy",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    accentColor: "text-cyan-600",
    link: "Learn more →",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Results That Matter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Proven Enterprise Impact
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Delivering transformative results across industries with AI solutions that drive measurable business outcomes.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.bgGradient} p-8 sm:p-10 border border-white/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Background decoration */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${card.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
              >
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className={`text-4xl sm:text-5xl font-bold ${card.accentColor}`}>
                  {card.stat}
                </span>
                <span className="ml-2 text-sm font-medium text-muted">
                  {card.statLabel}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted leading-relaxed text-[15px] mb-6">
                {card.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className={`inline-flex items-center text-sm font-semibold ${card.accentColor} hover:underline underline-offset-4`}
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
