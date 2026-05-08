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
    <section className="relative py-16 border-y-4 border-gray-300 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Client Portfolio1
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            40+ clients. 8 countries.
          </h2>
          <p className="text-muted">From fast-moving startups to global enterprises.</p>
        </div>

        {/* Scrolling logos */}
        <div className="logo-scroll-container overflow-hidden">
          <div className="flex animate-logo-scroll w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-8 sm:mx-12 min-w-[120px]"
              >
                <span className="text-lg sm:text-xl font-bold text-muted-light/70 hover:text-muted transition-colors duration-300 select-none whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Geography */}
        <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          {["60% USA", "30% APAC", "10% EU"].map((g) => (
            <span key={g} className="text-sm font-semibold text-muted px-4 py-1.5 rounded-full bg-section-bg border border-border-light">
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
