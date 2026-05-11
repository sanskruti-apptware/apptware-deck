"use client";

const industries = [
  {
    name: "AI + Health",
    description: "Clinical intelligence, women's health, MedTech, and wellness platforms.",
  },
  {
    name: "BFSI",
    description: "Security, fraud reduction, trading platforms, and process optimization.",
  },
  {
    name: "Retail",
    description: "Personalized experiences, inventory intelligence, and real-time commerce.",
  },
  {
    name: "Agtech",
    description: "Smart farming, yield optimization, and sustainability-driven monitoring.",
  },
  {
    name: "Automotive & Manufacturing",
    description: "Predictive maintenance, production automation, and operational efficiency.",
  },
  {
    name: "Gaming",
    description: "Immersive, high-performance gaming with AI-driven engagement and mechanics.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-bg-light py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">Who We Serve</p>
          <h2 className="section-title text-text-light max-w-2xl">
            Built for markets where AI changes the economics.
          </h2>
        </div>

        {/* Industry List */}
        <div>
          {industries.map((ind, i) => (
            <div
              key={i}
              className="industry-row"
            >
              <h3 className="industry-name text-text-light group-hover:text-text-light">
                {ind.name}
              </h3>
              <div className="flex items-center gap-6 mt-3 md:mt-0">
                <p className="text-[14px] text-text-secondary max-w-xs">
                  {ind.description}
                </p>
                <span className="text-accent text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-220 flex-shrink-0">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
