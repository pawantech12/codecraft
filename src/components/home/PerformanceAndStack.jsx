"use client";

import {
  Code,
  Zap,
  Cpu,
  Cloud,
  Server,
  Layers,
  Gauge,
  Braces,
  GitBranch,
  Sparkles,
} from "lucide-react";

export default function PerformanceAndStack() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/15 blur-3xl rounded-full opacity-70" />
      </div>

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Code className="h-3.5 w-3.5 text-indigo-500" />
          </span>
          <span className="font-mono tracking-tight">
            Performance & Tech Stack
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Built for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Speed, Scale & Stability
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          CodeCraft is engineered like a{" "}
          <span className="font-mono text-indigo-500">real editor</span> — not a
          browser toy.
        </p>
      </div>

      {/* Content */}
      <div className="mt-20 max-sm:mt-10 max-w-7xl mx-auto px-6 grid gap-8 lg:grid-cols-3">
        {[
          {
            title: "Editor Performance",
            accent: "from-indigo-500 to-cyan-500",
            glow: "rgba(99,102,241,0.35)",
            icon: <Gauge className="h-5 w-5" />,
            items: [
              {
                icon: <Zap className="h-4 w-4 text-emerald-500" />,
                text: "Sub-50ms editor interactions",
              },
              {
                icon: <Cpu className="h-4 w-4 text-cyan-500" />,
                text: "WebWorker-based execution",
              },
              {
                icon: <Sparkles className="h-4 w-4 text-purple-500" />,
                text: "Zero-lag syntax highlighting",
              },
            ],
            meta: "Latency optimized rendering pipeline",
          },
          {
            title: "Runtime Architecture",
            accent: "from-cyan-500 to-sky-500",
            glow: "rgba(14,165,233,0.35)",
            icon: <Server className="h-5 w-5" />,
            items: [
              {
                icon: <Cloud className="h-4 w-4 text-indigo-500" />,
                text: "Edge-first deployment model",
              },
              {
                icon: <Layers className="h-4 w-4 text-purple-500" />,
                text: "Modular micro-services",
              },
              {
                icon: <GitBranch className="h-4 w-4 text-emerald-500" />,
                text: "Real-time collaboration engine",
              },
            ],
            meta: "Designed for scale & concurrency",
          },
          {
            title: "Core Tech Stack",
            accent: "from-purple-500 to-fuchsia-500",
            glow: "rgba(168,85,247,0.35)",
            icon: <Braces className="h-5 w-5" />,
            items: [
              {
                icon: <Code className="h-4 w-4 text-indigo-500" />,
                text: "Next.js + TypeScript",
              },
              {
                icon: <Zap className="h-4 w-4 text-cyan-500" />,
                text: "Monaco-based editor core",
              },
              {
                icon: <Server className="h-4 w-4 text-emerald-500" />,
                text: "Node.js APIs & Edge Functions",
              },
            ],
            meta: "Battle-tested modern tooling",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border/60
      bg-gradient-to-b from-background/80 to-background/60
      backdrop-blur-xl p-6
      transition-all duration-500
      hover:-translate-y-1"
            style={{
              boxShadow: `0 10px 30px ${card.glow}`,
            }}
          >
            {/* Accent rail */}
            <span
              className={`absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b ${card.accent}
        opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl
          bg-gradient-to-br ${card.accent} text-white shadow-lg`}
              >
                {card.icon}
              </div>

              <div>
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground">{card.meta}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Content */}
            <ul className="space-y-4 text-sm text-muted-foreground">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Footer hint */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View details</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
