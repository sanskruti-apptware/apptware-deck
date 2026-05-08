"use client";

import { CheckCircle2 } from "lucide-react";

export default function Framework() {
  return (
    <section
      id="framework"
      className="relative py-20 sm:py-28 bg-section-bg overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            What We Do
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-foreground tracking-tight leading-tight mb-6">
            Two capabilities. One engagement. Zero handoff.
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-muted leading-relaxed">
            Strategy identifies where AI restructures your market. Engineering builds the product that captures it. Together, you move from idea → shipped system without friction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden border border-border-light bg-white/70 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                AI Strategy &amp; Advisory
              </h3>

              <p className="text-muted leading-relaxed">
                Elizabeth Varley brings two decades of operating experience at the frontier of AI, health, and emerging technology. She advises from the operator&apos;s seat — focused on where AI restructures market economics, how to turn model capability into a product that ships, and how to absorb new technology without breaking the company that has to run it.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden border border-border-light bg-white/70 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Engineering &amp; Build
              </h3>

              <p className="text-muted leading-relaxed">
                Apptware is an AI-first digital engineering company that has shipped 52+ products across 8 countries. Full-stack capability: product engineering, Gen AI &amp; ML, data engineering, cloud infrastructure, UX design, DevOps, and intelligent automation — built for startups and scale-ups that move fast.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}