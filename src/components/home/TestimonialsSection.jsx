"use client";

import { Code, Quote, Star, Github, Terminal, Users } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Senior Frontend Engineer",
    company: "FinTech Startup",
    avatar: "/user1.jpg",
    icon: Github,
    rating: 5,
    quote:
      "CodeCraft feels like VS Code, GitHub Copilot, and a real-time playground combined. The AI suggestions genuinely improve my workflow, not distract it.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Full Stack Developer",
    company: "SaaS Company",
    avatar: "/user2.avif",
    icon: Terminal,
    rating: 5,
    quote:
      "Real-time collaboration is insanely smooth. It finally feels safe to pair-program without screen sharing or context switching.",
  },
  {
    name: "Pooja Maurya",
    role: "Tech Lead",
    company: "Product Studio",
    avatar: "/user3.jpg",
    icon: Users,
    rating: 5,
    quote:
      "We onboard new developers faster using CodeCraft. The editor, AI hints, and previews reduce setup time dramatically.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-cyan-500/15 blur-3xl rounded-full opacity-60" />
      </div>

      {/* Heading (Provided Design) */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Feature Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Code className="h-3.5 w-3.5 text-indigo-500" />
          </span>
          <span className="font-mono tracking-tight">
            Trusted by Developers Worldwide
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
          What Developers Say About{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            CodeCraft
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          Real feedback from developers building production apps using{" "}
          <span className="font-mono text-indigo-500">CodeCraft</span>.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="mt-20 max-sm:mt-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
            group relative overflow-hidden
            rounded-2xl border border-border/60
            bg-background/80 backdrop-blur-xl
            p-6 flex flex-col gap-5
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-[0_40px_100px_rgba(99,102,241,0.25)]
          "
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-lg shadow-inner">
                <Image
                  src={t.avatar}
                  alt={t.name + " Profile Pic"}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative rounded-xl bg-muted/50 p-4 font-mono text-[13px] leading-relaxed text-muted-foreground">
              <Quote className="absolute -top-2 -left-2 h-5 w-5 text-indigo-500/30" />
              <span className="text-indigo-500">//</span> {t.quote}
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-mono text-indigo-500">
                Verified Developer
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
