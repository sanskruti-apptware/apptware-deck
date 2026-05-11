"use client";

const clients = [
  "KPIT",
  "Bajaj Finserv",
  "Upstox",
  "TaskUs",
  "Avalara",
  "Savant",
  "Medicodio",
  "Applus IDIADA",
];

export default function TrustedBy() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">Client Portfolio</p>
          <h2 className="section-title text-text-light max-w-xl">
            40+ clients. 8 countries.
          </h2>
          <p className="mt-5 text-[17px] text-text-secondary max-w-[480px]">
            From fast-moving startups to global enterprises.
          </p>
        </div>

        {/* 4x2 Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/10 border-l">
          {clients.map((name, i) => (
            <div
              key={i}
              className="group flex items-center justify-center py-10 px-8 border-b border-r border-black/10 transition-all duration-200"
            >
              <span
                className="text-[18px] font-display font-bold text-text-light/30 group-hover:text-text-light transition-all duration-200 select-none text-center"
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Geography sub-label */}
        <div className="mt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
            60% USA · 30% APAC · 10% EU
          </p>
        </div>
      </div>
    </section>
  );
}
