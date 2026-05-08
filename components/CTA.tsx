"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Background Grid & Gradients */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 cta-gradient opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
          Ready to transform
          <br />
          your business?
        </h2>
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with us to build intelligent, scalable AI solutions that give your enterprise a competitive edge.
        </p>

        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-light rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          Start a Conversation
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
