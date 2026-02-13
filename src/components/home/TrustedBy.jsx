import {
  Github,
  GitBranch,
  ShieldCheck,
  Users,
  Cloud,
  Sparkles,
} from "lucide-react";

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.08)_1px,transparent_0)] [background-size:28px_28px]" />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[420px] w-[720px] sm:h-[500px] sm:w-[1000px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-4 sm:px-5 py-2 text-xs font-medium backdrop-blur-xl shadow-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          </span>
          <span className="font-mono tracking-tight">
            Trusted Infrastructure for Modern Teams
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 max-w-4xl max-sm:w-full mx-auto text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug text-neutral-700">
          Built for developers who ship{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            real production code
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 max-w-3xl max-sm:w-full mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-2">
          <span className="rounded bg-muted/30 px-2 py-1 font-['JetBrains_Mono'] text-indigo-500">
            {"<CodeCraft />"}
          </span>
          <span>powers thousands of teams with</span>
          <span className="font-['JetBrains_Mono'] text-indigo-600">
            real-time collaboration
          </span>
          <span>,</span>
          <span className="font-['JetBrains_Mono'] text-cyan-600">
            secure deployments
          </span>
          <span>, and</span>
          <span className="font-['JetBrains_Mono'] text-purple-600">
            AI-augmented workflows
          </span>
          <span>.</span>
        </p>

        {/* Ecosystem Blocks */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {[
            { label: "Open Source", icon: Github },
            { label: "Cloud Native", icon: Cloud },
            { label: "CI/CD Ready", icon: GitBranch },
            { label: "Secure by Default", icon: ShieldCheck },
            { label: "Remote Teams", icon: Users },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background/40 backdrop-blur-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-sm transition-transform hover:scale-105"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-xs sm:text-sm font-mono">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Users, value: "50k+", label: "Active Developers" },
            { icon: GitBranch, value: "2M+", label: "Repositories Created" },
            { icon: Github, value: "10k+", label: "GitHub Stars" },
            { icon: ShieldCheck, value: "99.99%", label: "Platform Uptime" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-background/70 px-6 py-7 backdrop-blur-xl text-center transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 flex justify-center">
          <div className="h-px w-32 sm:w-40 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>

        {/* Tagline */}
        <p className="mt-6 text-sm sm:text-base text-muted-foreground">
          Developers don’t just use{" "}
          <span className="font-mono font-bold text-indigo-500">CodeCraft</span>{" "}
          — they build on it.
        </p>
      </div>
    </section>
  );
}
