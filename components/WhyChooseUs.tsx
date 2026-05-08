"use client";

import { Shield, Zap, Users, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security and compliance built into every AI solution from day one.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized models that deliver lightning-fast inference with minimal compute overhead.",
  },
  {
    icon: Users,
    title: "Agnostic",
    description: "We work with all major cloud providers and open-source models to avoid vendor lock-in.",
  },
  {
    icon: Trophy,
    title: "Expert Team",
    description: "Industry veterans who have built AI systems for top-tier tech companies globally.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="relative py-20 sm:py-24 bg-section-bg border-y border-border-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Why Enterprises Choose Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted">
            We deliver reliable, scalable, and secure AI solutions that drive real business value.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-white border border-border-light flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300 group-hover:-translate-y-1">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed px-4">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
