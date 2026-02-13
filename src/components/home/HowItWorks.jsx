"use client";

import { Code, Terminal, Cpu, Users, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Start Coding Instantly",
    description:
      "Open CodeCraft and start writing code in a powerful cloud editor — no setup, no configuration, just code.",
    icon: <Terminal className="h-5 w-5" />,
    accent: "from-indigo-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Smart Editor Assistance",
    description:
      "Get real-time AI suggestions, inline error detection, and intelligent refactoring as you type.",
    icon: <Cpu className="h-5 w-5" />,
    accent: "from-cyan-500 to-purple-500",
  },
  {
    step: "03",
    title: "Collaborate in Real-Time",
    description:
      "Invite teammates, pair program live, review changes instantly, and ship together — faster.",
    icon: <Users className="h-5 w-5" />,
    accent: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Deploy with Confidence",
    description:
      "Preview, test, and deploy your application directly from the editor with automated pipelines.",
    icon: <Rocket className="h-5 w-5" />,
    accent: "from-pink-500 to-indigo-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Section Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/15 via-cyan-500/15 to-purple-500/15 blur-3xl rounded-full opacity-60" />
      </div>

      {/* ===== Heading (as provided) ===== */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Feature Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Code className="h-3.5 w-3.5 text-indigo-500" />
          </span>
          <span className="font-mono tracking-tight">How CodeCraft Works</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
          From Idea to{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Production
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          A streamlined workflow designed for{" "}
          <span className="font-mono text-indigo-500">speed</span>,{" "}
          <span className="font-mono text-cyan-400">clarity</span>, and{" "}
          <span className="font-mono text-purple-500">collaboration</span>.
        </p>
      </div>

      {/* ===== Steps ===== */}
      <div className="relative mt-20 max-sm:mt-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-2xl
                border border-border/60
                bg-background/70
                backdrop-blur-xl
                p-6
                flex flex-col gap-5
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)]
              "
            >
              {/* Gradient Accent Line */}
              <span
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${item.accent}`}
              />

              {/* Step Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  STEP {item.step}
                </span>

                <div
                  className={`
                    flex h-10 w-10 items-center justify-center rounded-xl
                    bg-gradient-to-br ${item.accent}
                    text-white shadow-md
                    group-hover:scale-110 transition-transform
                  `}
                >
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold font-mono text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Footer Hint */}
              <div className="mt-auto flex items-center gap-2 text-xs font-mono text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>Continue</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
