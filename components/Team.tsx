"use client";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Scientist",
    bio: "Former Lead AI Researcher at DeepMind. PhD from Stanford. Expert in large language models and reinforcement learning.",
    image: "https://i.pravatar.cc/150?u=sarah", // Placeholder avatar
  },
  {
    name: "Marcus Vance",
    role: "Head of Engineering",
    bio: "Ex-Google Staff Engineer. Architected planetary-scale ML infrastructure. Passionate about scalable, resilient systems.",
    image: "https://i.pravatar.cc/150?u=marcus", // Placeholder avatar
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Our Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Guided by Industry Veterans
          </h2>
        </div>

        {/* Team Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex items-start gap-6 p-8 rounded-3xl bg-section-bg border border-border-light hover:shadow-xl transition-all duration-300 w-full md:w-1/2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
