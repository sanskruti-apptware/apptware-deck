"use client";

import { CheckCircle2 } from "lucide-react";

const checkpoints = [
  {
    title: "1. Research & Solution Design",
    description:
      "We begin with deep-dive analysis into your business context, data landscape, and strategic objectives to architect the optimal AI solution.",
  },
  {
    title: "2. Build, Test & Iterate Quickly",
    description:
      "Using agile sprints, we develop production-ready AI models with continuous validation against real-world performance benchmarks.",
  },
  {
    title: "3. Deploy & Scale Confidently",
    description:
      "Enterprise deployment with robust monitoring, auto-scaling infrastructure, and continuous optimization to ensure peak performance.",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="relative py-20 sm:py-28 bg-section-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual Mockup */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border-light bg-white">
              {/* Code editor mockup */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="ml-4 text-xs text-gray-400 font-mono">
                  ai-pipeline.py
                </span>
              </div>

              <div className="bg-gray-950 p-6 font-mono text-sm leading-relaxed">
                <div className="text-gray-500"># AI Pipeline Configuration</div>
                <div className="mt-2">
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-cyan-300">NexPipeline</span>
                  <span className="text-gray-300">:</span>
                </div>
                <div className="ml-4 mt-1">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-300">__init__</span>
                  <span className="text-gray-300">(self, config):</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-300">self.</span>
                  <span className="text-cyan-200">model</span>
                  <span className="text-gray-300"> = </span>
                  <span className="text-emerald-400">load_model</span>
                  <span className="text-gray-300">(config)</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-300">self.</span>
                  <span className="text-cyan-200">agents</span>
                  <span className="text-gray-300"> = []</span>
                </div>
                <div className="mt-3 ml-4">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-300">deploy</span>
                  <span className="text-gray-300">(self, env=</span>
                  <span className="text-amber-300">&quot;production&quot;</span>
                  <span className="text-gray-300">):</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-500"># Auto-scale & monitor</span>
                </div>
                <div className="ml-8">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-gray-300">self.</span>
                  <span className="text-emerald-400">orchestrate</span>
                  <span className="text-gray-300">(</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-200">agents</span>
                  <span className="text-gray-300">=self.agents,</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-200">env</span>
                  <span className="text-gray-300">=env</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-300">)</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-primary/90 px-4 py-2 flex items-center justify-between">
                <span className="text-xs text-white/80 font-mono">
                  Pipeline Status: Active
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/80 font-mono">
                    3 agents deployed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground tracking-tight leading-tight mb-6">
              A Proven Framework
              <br />
              for Innovation
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              We follow a battle-tested methodology that ensures every AI project delivers measurable
              business value, from initial concept through production deployment.
            </p>

            {/* Checkpoints */}
            <div className="space-y-6">
              {checkpoints.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
