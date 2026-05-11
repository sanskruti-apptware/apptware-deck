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

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="bg-bg-dark py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">The Problem</p>
          <h2 className="section-title text-text-dark max-w-2xl">
            Solving the AI implementation gap.
          </h2>
          <p className="body-large mt-5 max-w-[480px]">
            Most companies don't fail because of lack of intent — they fail in execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="card-dark">
              <div className="font-mono text-[40px] font-bold text-white/10 mb-6 leading-none">
                0{index + 1}
              </div>
              <h3 className="text-[18px] font-display font-bold text-text-dark mb-4 leading-snug">
                {challenge.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.75]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}