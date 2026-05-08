"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient bg-grid overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
          AI Strategy · Engineering · Execution
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 animate-fade-in-up">
          AI strategy that ships.
          <br />
          Built by <span className="gradient-text">operators</span>,
          <br />
          not theorists.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          We help startups and SMBs turn AI from a strategy doc into a product that ships. Strategy and engineering under one roof — no handoff, no gap.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#cta"
            className="btn-cta"
          >
            Book a Strategy Call
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="btn-outline"
          >
            See what we&apos;ve built ↓
          </a>
        </div>

        {/* Scroll indicator */}
        {/* <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="mx-auto w-6 h-10 rounded-full border-2 border-muted-light/50 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-muted-light rounded-full animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
