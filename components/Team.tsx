"use client";

const founders = [
  {
    name: "Elizabeth Varley",
    role: "Co-founder · AI Strategy & Advisory",
    bio: "Two decades building at the frontier of AI, media, and health technology. Founder of Empress Health.ai and Empress Naturals. Former media lead at iGate Technologies (acquired by Capgemini). Founded INVAR Studios, winner of the Lumiere Award.",
    speaking:
      "Cannes · London Creative Festival · Women's Health Summit · GroceryShop · ICES Florida",
    image: "/founders/elizabeth.png",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Harish Rohokale",
    role: "Co-founder · Engineering & Delivery",
    bio: "Built Apptware into an AI-first digital engineering company that has shipped 52+ products across 8 countries with 40+ clients and 42–45% YoY growth. Turns strategy into working software — fast, scalable, and built to last.",
    speaking: null,
    image: "/founders/harish.png",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            The People
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Driving vision and innovation.
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            You’re not hiring a team — you’re partnering with operators who have built at the frontier and know what shipping actually takes.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((f, index) => (
            <div
              key={f.name}
              className={`rounded-3xl p-[1px] bg-gradient-to-br ${f.gradient} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Inner Card */}
              <div className="rounded-3xl bg-white p-8 sm:p-10 h-full transition-all duration-300 hover:shadow-2xl">

                {/* Top section */}
                <div className="flex items-center gap-6 mb-6">

                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white shadow-md flex-shrink-0">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Name + Role */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {f.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">
                      {f.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted leading-relaxed text-[15px] mb-6">
                  {f.bio}
                </p>

                {/* Speaking */}
                {f.speaking && (
                  <div className="border-t border-border-light pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-light mb-1">
                      Speaking
                    </p>
                    <p className="text-sm text-muted">{f.speaking}</p>
                  </div>
                )}

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-[2px] w-0 bg-gradient-to-r ${f.gradient} hover:w-full transition-all duration-500`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}