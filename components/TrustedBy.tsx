"use client";

const logos = [
  "Airbnb",
  "Nasdaq",
  "Spotify",
  "Stripe",
  "Notion",
  "Figma",
  "Linear",
  "Vercel",
];

export default function TrustedBy() {
  return (
    <section className="relative py-12 border-y border-border-light bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-light mb-8">
          Trusted by innovative companies worldwide
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="logo-scroll-container overflow-hidden">
        <div className="flex animate-logo-scroll w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 sm:mx-12 min-w-[120px]"
            >
              <span className="text-lg sm:text-xl font-bold text-muted-light/60 hover:text-muted transition-colors duration-300 select-none whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
