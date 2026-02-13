import { Cpu, FileText, Code, Layers, Terminal, Zap } from "lucide-react";

const features = [
  {
    title: "AI-Powered Coding",
    description:
      "Smart autocomplete, inline suggestions, and AI assistance that understands your codebase.",
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Edit together with your team in real time — cursor sync, presence, and comments.",
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Multi-Language Support",
    description:
      "TypeScript, JavaScript, Python, Go, Rust — syntax highlighting out of the box.",
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Built-in Terminal",
    description:
      "Run commands, scripts, and manage your workflow without leaving the editor.",
    icon: <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Version Control",
    description:
      "Integrated Git with commits, branches, and pull request previews.",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: "Instant Deployment",
    description: "One-click deploys with automated builds and previews.",
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        {/* Feature Badge */}
        <div className="group relative inline-flex items-center gap-2 sm:gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-5 sm:mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Code className="h-3.5 w-3.5 text-indigo-500" />
          </span>

          <span className="font-mono tracking-tight text-center">
            Next-Level Productivity Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans relative inline-block text-neutral-700 leading-tight">
          Powerful Features for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Modern Developers
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-muted-foreground text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2 sm:px-0">
          CodeCraft is designed to make coding{" "}
          <span className="font-mono text-indigo-500">faster</span>,{" "}
          <span className="font-mono text-cyan-400">smarter</span>, and{" "}
          <span className="font-mono text-purple-500">collaborative</span>.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
            group relative
            overflow-hidden
            rounded-2xl
            border border-border/50
            bg-background/70
            backdrop-blur-xl
            p-5 sm:p-6
            flex flex-col gap-4 sm:gap-5
            transition-all duration-500
            sm:hover:-translate-y-1
            sm:hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)]
          "
          >
            {/* Top Header Row */}
            <div className="flex items-start justify-between">
              <div
                className="
                relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-indigo-500/15 to-cyan-500/15
                border border-indigo-500/20
                text-indigo-500
                transition-all duration-300
                group-hover:scale-105 sm:group-hover:scale-110
                sm:group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
              "
              >
                {feature.icon}
              </div>

              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse mt-2 shrink-0" />
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold font-mono text-foreground tracking-tight transition-colors duration-300 group-hover:text-indigo-500">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>

            {/* Divider */}
            <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between text-[10px] sm:text-xs font-mono">
              <span className="text-muted-foreground truncate">
                Enabled by default
              </span>

              <div className="flex items-center gap-1 text-indigo-500 opacity-0 sm:group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                <span>Open module</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
