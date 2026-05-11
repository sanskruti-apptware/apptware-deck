"use client";

export default function CTA() {
  return (
    <section id="cta" className="bg-bg-dark py-[120px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left Column — 7/12 */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-[72px] md:text-[80px] leading-[1.0] tracking-[-0.04em] text-text-dark mb-8">
              The window<br />
              to move on AI<br />
              <em className="not-italic font-normal text-text-secondary" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                is open.
              </em>
            </h2>
            <p className="text-[17px] text-text-secondary leading-relaxed max-w-[400px] mb-10">
              Book a free strategy call. We'll map where AI restructures your market and what to build first.
            </p>
            <a
              href="mailto:hello@axioai.co"
              className="btn-primary-dark"
            >
              Book a Free Strategy Call
            </a>
          </div>

          {/* Right Column — 5/12 */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            {/* Email */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-2">
                Email
              </p>
              <a
                href="mailto:hello@axioai.co"
                className="text-[16px] text-text-dark hover:text-accent transition-colors"
              >
                hello@axioai.co
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-2">
                Phone
              </p>
              <a
                href="tel:+18623489095"
                className="text-[16px] text-text-dark hover:text-accent transition-colors"
              >
                +1 (862) 348-9095
              </a>
            </div>

            {/* Website */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent mb-2">
                Web
              </p>
              <a
                href="https://www.axioai.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-text-dark hover:text-accent transition-colors"
              >
                www.axioai.co
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-4 py-2 border border-white/20 font-mono text-[11px] uppercase tracking-[0.10em] text-text-secondary hover:border-accent hover:text-accent transition-all duration-200 rounded-[2px]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
