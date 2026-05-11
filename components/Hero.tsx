"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-bg-dark text-text-dark flex flex-col justify-end pb-24 md:pb-32 overflow-hidden"
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-start max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[28px] h-[1px] bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              AI Strategy · Engineering · Execution
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-title mb-10 ">
            <span className="stagger-load" style={{ animationDelay: "120ms" }}>
              <span className="text-accent">AI strategy</span> that ships.
            </span>
            <br />
            <span className="stagger-load" style={{ animationDelay: "240ms" }}>
              Built by operators,
            </span>
            <br />
            <span className="stagger-load" style={{ animationDelay: "360ms" }}>
              not theorists.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="body-large mb-12 max-w-[480px]">
            We help startups and SMBs turn AI from a strategy doc into a product that ships. Strategy and engineering under one roof — no handoff, no gap.
          </p>

          {/* CTA Row */}
          <div className="flex items-center gap-10">
            <a href="#cta" className="btn-primary-dark">
              Book a Strategy Call
            </a>
            <a href="#services" className="text-[13px] font-mono uppercase tracking-[0.10em] text-text-secondary border-b border-text-secondary/30 hover:border-text-secondary/60 transition-all">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
