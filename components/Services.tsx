"use client";

import { Bot, Network, Settings2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "We build bespoke AI agents tailored to your business processes, automating complex workflows and driving intelligent decision-making at scale.",
    gradient: "from-violet-500 to-purple-600",
    bgAccent: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Network,
    title: "Infrastructure Integration",
    description:
      "Seamless integration of AI systems into your existing tech stack, ensuring minimal disruption and maximum compatibility with enterprise architecture.",
    gradient: "from-blue-500 to-cyan-500",
    bgAccent: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Settings2,
    title: "Maintenance & MLOps",
    description:
      "Continuous monitoring, model retraining, and optimization to keep your AI systems performing at peak efficiency with enterprise-grade reliability.",
    gradient: "from-emerald-500 to-teal-500",
    bgAccent: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            End-to-End AI Engineering
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            From strategy and design to deployment and maintenance — we provide comprehensive AI
            engineering services that transform businesses.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-border-light bg-white hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient accent */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.bgAccent} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed text-[15px]">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
