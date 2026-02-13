"use client";

import { Code, Sparkles, Users, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual developers getting started.",
      icon: Code,
      features: [
        "Cloud editor access",
        "Syntax highlighting",
        "GitHub sync",
        "Basic AI hints",
        "Community support",
      ],
      cta: "Start Coding",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹999 / mo",
      description: "For serious developers building real products.",
      icon: Sparkles,
      features: [
        "Everything in Starter",
        "AI code assistant",
        "Realtime collaboration",
        "Custom themes & keymaps",
        "Priority support",
      ],
      cta: "Launch Editor",
      highlight: true,
    },
    {
      name: "Teams",
      price: "₹2,999 / mo",
      description: "Designed for teams and growing startups.",
      icon: Users,
      features: [
        "Everything in Pro",
        "Team workspaces",
        "Role-based access",
        "Shared snippets",
        "Admin dashboard",
      ],
      cta: "Start Team Workspace",
      highlight: false,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl rounded-full opacity-50" />
      </div>

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Zap className="h-3.5 w-3.5 text-indigo-500" />
          </span>
          <span className="font-mono tracking-tight">
            Flexible Pricing for Every Developer
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground relative inline-block">
          Simple Pricing for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Serious Coding
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          Start free, upgrade when you’re ready — no hidden limits, no lock-in.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="mt-20 max-sm:mt-10 max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={cn(
              "relative group flex flex-col rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-500",
              "bg-gradient-to-b from-background/80 to-background/60",
              plan.highlight
                ? "border-indigo-500/50 shadow-[0_50px_140px_rgba(99,102,241,0.35)] scale-[1.03]"
                : "border-border/60 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,0.18)]"
            )}
          >
            {/* Neon Top Indicator */}
            <span className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-indigo-500/60" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div
                className={cn(
                  "relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl max-sm:mx-auto",
                  "bg-gradient-to-br from-indigo-500/15 to-cyan-500/15",
                  "border border-indigo-500/20 text-indigo-500",
                  "group-hover:scale-110 transition-transform duration-300"
                )}
              >
                <plan.icon className="h-5 w-5 sm:h-6 sm:w-6 " />
                {plan.highlight && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-indigo-400 animate-pulse" />
                )}
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold font-mono text-foreground">
                  {plan.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-end sm:gap-2 gap-1 justify-center sm:justify-start">
              <span className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-700">
                {plan.price}
              </span>
              {plan.price !== "Free" && (
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                  / month
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="my-5 sm:my-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Features */}
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 sm:mt-8">
              <Button
                className={cn(
                  "w-full py-4 sm:py-5 rounded-xl font-medium transition-all",
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg hover:opacity-90 hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]"
                    : "border border-border hover:border-indigo-500/40"
                )}
              >
                {plan.cta}
              </Button>
            </div>

            {/* Footer Hint */}
            {plan.highlight && (
              <div className="mt-3 sm:mt-4 text-center sm:text-left text-xs font-mono tracking-wide text-indigo-500">
                Most popular among developers
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
