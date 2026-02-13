"use client";

import { Code, Rocket, Github, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header (Provided Design) */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Feature Badge */}
          <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
              <Code className="h-3.5 w-3.5 text-indigo-500" />
            </span>
            <span className="font-mono tracking-tight">
              Ready to Build Something Real?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans relative inline-block">
            Ship Code Faster with{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              CodeCraft
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
            A production-ready cloud editor built for{" "}
            <span className="font-mono text-indigo-500">speed</span>,{" "}
            <span className="font-mono text-cyan-400">collaboration</span>, and{" "}
            <span className="font-mono text-purple-500">scale</span>.
          </p>
        </div>

        {/* CTA Card */}
        <div className="relative mt-16 max-sm:mt-10 rounded-xl border border-border/60 bg-background/70 backdrop-blur-2xl p-10 shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <FeatureItem
              icon={<Zap className="h-4 w-4" />}
              title="Instant Setup"
              desc="No installs. Start coding in seconds."
            />
            <FeatureItem
              icon={<Users className="h-4 w-4" />}
              title="Live Collaboration"
              desc="Build together in real-time."
            />
            <FeatureItem
              icon={<Shield className="h-4 w-4" />}
              title="Secure by Default"
              desc="Auth, sandboxing & isolation."
            />
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href="/signup"
              className="
      group relative inline-flex items-center justify-center
      rounded-xl
      bg-gradient-to-r from-indigo-500 to-cyan-500
      px-8 py-3
      text-sm font-semibold text-white
      shadow-[0_10px_30px_rgba(99,102,241,0.45)]
      transition-all duration-300
      hover:-translate-y-0.5
      hover:shadow-[0_10px_30px_rgba(99,102,241,0.65)]
      focus:outline-none focus:ring-2 focus:ring-indigo-500/50
    "
            >
              <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="font-mono tracking-tight">Launch Editor</span>

              {/* Command Hint */}
              <span className="ml-3 hidden sm:inline-flex items-center rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-mono">
                ⌘ Enter
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="https://github.com"
              target="_blank"
              className="
      group inline-flex items-center justify-center
      rounded-xl
      border border-border/60
      bg-background/60
      px-7 py-3
      text-sm font-medium text-foreground
      backdrop-blur-xl
      transition-all duration-300
      hover:border-indigo-500/40
      hover:bg-indigo-500/5
    "
            >
              <Github className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-indigo-500 transition-colors" />
              <span className="font-mono">View on GitHub</span>
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-center text-xs text-muted-foreground font-mono">
            No credit card required • Open-source friendly • Built for scale
          </p>
        </div>
      </div>
    </section>
  );
}

/* Feature Item */
function FeatureItem({ icon, title, desc }) {
  return (
    <div
      className="
    group relative flex items-start gap-4
    rounded-xl border border-border/50
    bg-background/60
    px-4 py-3
    backdrop-blur-xl
    transition-all duration-300
    hover:border-indigo-500/40
    hover:bg-indigo-500/5
  "
    >
      {/* Icon */}
      <div
        className="
      relative flex h-10 w-10 items-center justify-center
      rounded-lg
      bg-gradient-to-br from-indigo-500/20 to-cyan-500/20
      border border-indigo-500/30
      text-indigo-500
      transition-all duration-300
      group-hover:scale-110
    "
      >
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-1">
        <p className="text-sm font-semibold text-foreground font-mono tracking-tight">
          {title}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
          {desc}
        </p>
      </div>

      {/* Hover Accent Line */}
      <span
        className="
      absolute left-0 top-1/2 h-0 w-[2px]
      bg-gradient-to-b from-indigo-500 to-cyan-500
      transition-all duration-300
      group-hover:h-1/2 group-hover:-translate-y-1/2
    "
      />
    </div>
  );
}
