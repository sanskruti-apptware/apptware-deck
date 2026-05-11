"use client";

export default function Team() {
  return (
    <section id="team" className="bg-bg-dark py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary mb-3">
            The People
          </p>
          <h2 className="section-title text-text-dark max-w-2xl">
            Driving vision and innovation.
          </h2>
          <p className="mt-5 text-[17px] text-text-secondary leading-relaxed max-w-[480px]">
            You&apos;re not hiring a team — you&apos;re partnering with operators who have built at the frontier and know what shipping actually takes.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Elizabeth */}
          <div className="card-dark flex flex-col">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-[2px] overflow-hidden mb-6 flex-shrink-0">
              <img
                src="/founders/elizabeth.png"
                alt="Elizabeth Koshy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name */}
            <h3 className="text-[24px] font-display font-bold text-text-dark mb-1">
              Elizabeth Koshy
            </h3>
            {/* Role */}
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent mb-6">
              Co-founder · AI Strategy &amp; Advisory
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.08] mb-6" />

            {/* Bio — full text, not truncated */}
            <div className="text-[15px] text-text-secondary leading-[1.75] space-y-4 flex-1">
              <p>
                Elizabeth builds companies at the intersection of AI, health, and emerging technology and advises others doing the same.
              </p>
              <p>
                She is the founder of Empress Health.ai, an AI clinical intelligence platform purpose-built for the $28 billion menopause market, and Empress Naturals, a consumer wellness brand serving women navigating perimenopause and beyond.
              </p>
              <p>
                She is an advisor to Apptware, which designs and executes AI strategy for SMBs and high-growth startups.
              </p>
              <p>
                Her track record spans two decades of building at the frontier. She led the media vertical at NASDAQ-listed iGate Technologies, later acquired by Capgemini. She founded INVAR Studios, a VR production company that won the Lumiere Award. In 2000, she pioneered the Hollywood and India co-production industry through Jadooworks and built India&apos;s largest Flash animation studio, Animation Dimensions.
              </p>
              <p>
                Elizabeth advises from the operator&apos;s seat. She focuses on where AI restructures the economics of a market, how to turn model capability into a product that ships, and how to absorb new technology without breaking the company that has to run it.
              </p>
            </div>

            {/* Speaking */}
            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <p className="font-mono text-[11px] text-text-secondary leading-relaxed">
                <span className="uppercase tracking-[0.12em]">Speaking</span> — Cannes · London Creative Festival · GroceryShop · Shoptalk · eTail · Women&apos;s Health Summit · ICES Florida &amp; Long Beach
              </p>
            </div>
          </div>

          {/* Harish */}
          <div className="card-dark flex flex-col">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-[2px] overflow-hidden mb-6 flex-shrink-0">
              <img
                src="/founders/harish.png"
                alt="Harish Rohokale"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name */}
            <h3 className="text-[24px] font-display font-bold text-text-dark mb-1">
              Harish Rohokale
            </h3>
            {/* Role */}
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent mb-6">
              Co-founder · Engineering &amp; Delivery
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.08] mb-6" />

            {/* Bio */}
            <p className="text-[15px] text-text-secondary leading-[1.75]">
              Built Apptware into an AI-first digital engineering company that has shipped 52+ products across 8 countries with 40+ clients and 42–45% YoY growth. Turns strategy into working software — fast, scalable, and built to last.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}