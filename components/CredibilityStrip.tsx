"use client";

const stats = [
  { value: "52", suffix: "+", label: "Products shipped" },
  { value: "8", suffix: "+", label: "Countries" },
  { value: "40", suffix: "+", label: "Clients globally" },
  { value: "42", suffix: "%", label: "YoY growth" },
];

export default function CredibilityStrip() {
  return (
    <section className="relative bg-bg-light py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-start justify-center px-10 py-8 ${
                i < stats.length - 1
                  ? "border-r border-black/10"
                  : ""
              }`}
            >
              <div className="text-[56px] font-display font-bold tracking-tight text-text-light leading-none mb-2">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
