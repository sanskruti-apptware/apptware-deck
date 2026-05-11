"use client";

export default function Framework() {
  return (
    <section id="framework" className="bg-bg-light py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="section-title text-text-light max-w-2xl">
            Two capabilities. One engagement. Zero handoff.
          </h2>
          <p className="mt-5 text-[17px] text-text-secondary leading-relaxed max-w-[480px]">
            Strategy identifies where AI restructures your market. Engineering builds the product that captures it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="card-light">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-6">
              01 · Strategy
            </p>
            <h3 className="text-[28px] font-display font-bold text-text-light mb-5 leading-tight">
              AI Strategy & Advisory
            </h3>
            <p className="text-[15px] text-text-secondary leading-[1.75]">
              Elizabeth Koshy brings two decades of operating experience at the frontier of AI, health, and emerging technology. She advises from the operator's seat — focused on where AI restructures market economics, how to turn model capability into a product that ships, and how to absorb new technology without breaking the company that has to run it.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-light">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-6">
              02 · Engineering
            </p>
            <h3 className="text-[28px] font-display font-bold text-text-light mb-5 leading-tight">
              Engineering & Build
            </h3>
            <p className="text-[15px] text-text-secondary leading-[1.75]">
              Apptware is an AI-first digital engineering company that has shipped 52+ products across 8 countries. Full-stack capability: product engineering, Gen AI & ML, data engineering, cloud infrastructure, UX design, DevOps, and intelligent automation — built for startups and scale-ups that move fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}