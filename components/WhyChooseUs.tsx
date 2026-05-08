"use client";

const challenges = [
  {
    title: "Most companies have an AI strategy. Very few have an AI product.",
    description:
      "The gap between a strategy deck and a shipped product is where most companies lose time, money, and market position.",
  },
  {
    title: "AI vendors sell tools. Not outcomes.",
    description:
      "Platforms and models are everywhere. What's rare is someone who knows which ones to use, when, and how to build a product around them.",
  },
  {
    title: "The window to move is now — not next quarter.",
    description:
      "Markets restructure fast when AI enters them. The companies that move first capture the economics. The rest play catch-up.",
  },
];

const gradients = [
  "from-violet-500 to-purple-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="relative py-20 sm:py-28 bg-section-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            The Challenge
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Solving the AI Implementation Gap
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted">
            Most companies don’t fail because of lack of intent — they fail in execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`rounded-2xl p-[1px] bg-gradient-to-br ${gradients[index]} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Inner Card (no color bleed) */}
              <div className="rounded-2xl bg-white p-8 h-full transition-all duration-300 hover:shadow-xl">

                {/* Step number */}
                <div className="text-4xl font-bold text-primary/20 mb-6">
                  {String(index + 1)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {challenge.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-[2px] w-0 bg-gradient-to-r ${gradients[index]} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}