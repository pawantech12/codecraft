"use client";

import {
  Sparkles,
  Brain,
  Wand2,
  Bug,
  MessageSquareCode,
  GitBranch,
} from "lucide-react";

export default function AISmartFeatures() {
  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Context-Aware AI",
      description:
        "Understands your entire codebase, framework, and file structure to deliver precise suggestions.",
      accent: "from-indigo-500 to-cyan-500",
    },
    {
      icon: <Wand2 className="h-5 w-5" />,
      title: "Instant Code Generation",
      description:
        "Generate components, APIs, hooks, and utilities instantly using natural language prompts.",
      accent: "from-cyan-500 to-purple-500",
    },
    {
      icon: <Bug className="h-5 w-5" />,
      title: "Smart Bug Detection",
      description:
        "Detects runtime issues, logic bugs, and performance bottlenecks before they reach production.",
      accent: "from-purple-500 to-pink-500",
    },
    {
      icon: <MessageSquareCode className="h-5 w-5" />,
      title: "Inline AI Chat",
      description:
        "Ask questions, refactor code, or explain logic without leaving your editor workspace.",
      accent: "from-indigo-500 to-purple-500",
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "AI Git Assistant",
      description:
        "Auto-generate commit messages, resolve merge conflicts, and review pull requests intelligently.",
      accent: "from-cyan-500 to-indigo-500",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Autonomous Workflows",
      description:
        "Let AI handle repetitive coding tasks, refactors, and formatting automatically.",
      accent: "from-purple-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-cyan-500/15 blur-3xl opacity-60" />
      </div>

      {/* Section Heading (UNCHANGED as requested) */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Feature Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          </span>
          <span className="font-mono tracking-tight">
            Next-Level Productivity Features
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans relative inline-block text-neutral-700">
          AI-Powered Intelligence for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Modern Developers
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          CodeCraft AI works{" "}
          <span className="font-mono text-indigo-500">inside</span> your editor
          — not around it.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="mt-20 max-sm:mt-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden
              rounded-2xl border border-border/50
              bg-background/70
              backdrop-blur-xl
              p-6
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)]
            "
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${feature.accent} blur-lg opacity-20`}
              />
            </div>

            {/* Icon */}
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-indigo-500/15 to-cyan-500/15
                border border-indigo-500/20
                text-indigo-500
                group-hover:scale-110
                transition-all duration-300
              "
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold font-mono text-foreground group-hover:text-indigo-500 transition-colors">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>AI Module</span>
              <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-all">
                View details →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
