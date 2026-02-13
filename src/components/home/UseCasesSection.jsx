"use client";

import {
  Code,
  Users,
  Bot,
  Cloud,
  GitBranch,
  TerminalSquare,
  Rocket,
} from "lucide-react";

const useCases = [
  {
    title: "Solo Developers",
    subtitle: "Build faster with zero setup",
    description:
      "Start coding instantly with a cloud-based editor, smart autocomplete, and AI-assisted workflows — no local setup required.",
    icon: TerminalSquare,
    accent: "from-indigo-500 to-cyan-500",
    points: [
      "Instant workspace",
      "AI code suggestions",
      "Auto-save & previews",
    ],
  },
  {
    title: "Startup Teams",
    subtitle: "Collaborate in real time",
    description:
      "Work together on the same codebase with live cursors, shared terminals, and built-in review tools.",
    icon: Users,
    accent: "from-cyan-500 to-emerald-500",
    points: ["Live collaboration", "Shared debugging", "Role-based access"],
  },
  {
    title: "AI-Powered Development",
    subtitle: "Your intelligent coding partner",
    description:
      "Let AI write boilerplate, refactor logic, explain errors, and generate tests directly inside the editor.",
    icon: Bot,
    accent: "from-purple-500 to-indigo-500",
    points: ["Context-aware AI", "Error explanations", "Smart refactoring"],
  },
  {
    title: "Open Source & Git Workflows",
    subtitle: "Ship clean, versioned code",
    description:
      "Built-in Git support lets you branch, commit, review, and deploy without leaving the editor.",
    icon: GitBranch,
    accent: "from-orange-500 to-pink-500",
    points: ["GitHub integration", "Branch previews", "One-click PRs"],
  },
  {
    title: "Cloud & Deployment",
    subtitle: "From code to production",
    description:
      "Deploy directly from your editor with automated builds, environment variables, and logs.",
    icon: Cloud,
    accent: "from-sky-500 to-indigo-500",
    points: ["Auto deploy", "Build logs", "Env management"],
  },
  {
    title: "Learning & Experimentation",
    subtitle: "Code, break, learn",
    description:
      "Perfect for students and learners with sandbox environments, tutorials, and instant feedback.",
    icon: Rocket,
    accent: "from-emerald-500 to-cyan-500",
    points: ["Safe sandboxes", "Guided examples", "Instant feedback"],
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl rounded-full opacity-60" />
      </div>

      {/* Section Heading (Your Design) */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-20 max-sm:mb-10">
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Code className="h-3.5 w-3.5 text-indigo-500" />
          </span>

          <span className="font-mono tracking-tight">Real-World Use Cases</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold font-sans text-neutral-700">
          Built for Every{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Developer Workflow
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          From solo hackers to growing teams — CodeCraft adapts to how{" "}
          <span className="font-mono text-indigo-500">you</span> build software.
        </p>
      </div>

      {/* Use Cases Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, index) => (
          <div
            key={index}
            className="
            group relative overflow-hidden
            rounded-2xl border border-border/60
            bg-gradient-to-b from-background/80 to-background/60
            p-6 flex flex-col gap-5
            backdrop-blur-xl
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-[0_10px_30px_rgba(99,102,241,0.25)]
          "
          >
            {/* Icon */}
            <div
              className={`
              relative flex h-12 w-12 items-center justify-center
              rounded-xl
              bg-gradient-to-br ${item.accent}
              text-white shadow-lg
              transition-transform duration-300
              group-hover:scale-110
            `}
            >
              <item.icon className="h-6 w-6" />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold font-mono text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {item.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Feature Points */}
            <ul className=" space-y-2 text-xs font-mono text-muted-foreground">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Hover Action Hint */}
            <div className="absolute bottom-4 right-4 text-xs font-mono text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Open workflow →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
