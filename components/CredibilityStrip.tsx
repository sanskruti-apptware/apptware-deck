"use client";

const stats = [
  { value: "7+", label: "Years building at the frontier" },
  { value: "15+", label: "Products shipped" },
  { value: "21", label: "Countries" },
  { value: "$2.8B", label: "Market opportunity in focus" },
];

export default function CredibilityStrip() {
  return (
    <section className="relative py-12 bg-white border-y border-gray-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
