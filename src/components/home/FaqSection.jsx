"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  ShieldCheck,
  Cpu,
  Cloud,
  Users,
  Sparkles,
  Code,
  LifeBuoy,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    icon: Cpu,
    question: "Is CodeCraft a full cloud-based code editor?",
    answer:
      "Yes. CodeCraft runs entirely in the browser with a cloud-powered execution engine, allowing you to write, run, and collaborate on code without local setup.",
  },
  {
    icon: Sparkles,
    question: "How does the AI assistant help developers?",
    answer:
      "The AI assistant provides inline code suggestions, refactoring tips, bug explanations, and documentation generation — all context-aware and editor-native.",
  },
  {
    icon: Users,
    question: "Can I collaborate with my team in real time?",
    answer:
      "Absolutely. CodeCraft supports real-time collaboration with live cursors, shared terminals, comments, and role-based access control.",
  },
  {
    icon: Cloud,
    question: "Does CodeCraft support deployments?",
    answer:
      "Yes. Projects can be deployed directly from the editor with built-in CI/CD workflows and environment configuration support.",
  },
  {
    icon: ShieldCheck,
    question: "Is my code secure on CodeCraft?",
    answer:
      "Security is a top priority. CodeCraft uses encrypted storage, isolated execution environments, and secure authentication to protect your code and data.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[500px] w-[900px] rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-cyan-500/15 blur-3xl opacity-60" />
      </div>

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-500" />
          </span>

          <span className="font-mono tracking-tight">
            Frequently Asked Questions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans relative inline-block">
          Everything You Need to Know About{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            CodeCraft
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          Clear answers for developers who care about{" "}
          <span className="font-mono text-indigo-500">performance</span>,{" "}
          <span className="font-mono text-cyan-400">security</span>, and{" "}
          <span className="font-mono text-purple-500">productivity</span>.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="mt-16 max-sm:mt-10 max-w-4xl mx-auto px-6">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="
              group relative overflow-hidden
              rounded-2xl border border-border/60
              bg-background/70 backdrop-blur-xl
              transition-all duration-500
              hover:border-indigo-500/40
              hover:shadow-[0_5px_10px_rgba(99,102,241,0.25)]
              data-[state=open]:border-indigo-500/50
              data-[state=open]:shadow-[0_10px_20px_rgba(99,102,241,0.35)]
            "
            >
              {/* Top Gradient Accent (active state) */}
              <span
                className="
              absolute inset-x-0 top-0 h-[2px]
              bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500
              scale-x-0 origin-left
              transition-transform duration-500
              group-data-[state=open]:scale-x-100
            "
              />

              <AccordionTrigger
                className="
                group/trigger
                px-6 py-5
                text-left
                no-underline hover:no-underline
                [&>svg]:hidden
              "
              >
                <div className="flex items-center justify-between w-full">
                  {/* Left Content */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="
                    relative flex h-11 w-11 min-w-[2.75rem] items-center justify-center
                    rounded-xl
                    bg-gradient-to-br from-indigo-500/15 to-cyan-500/15
                    border border-indigo-500/20
                    text-indigo-500
                    transition-all duration-300
                    group-hover/trigger:scale-110
                    group-data-[state=open]/trigger:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                  "
                    >
                      <faq.icon className="h-5 w-5" />
                    </div>

                    {/* Question */}
                    <span
                      className="
                    text-sm md:text-base
                    font-semibold font-mono
                    text-foreground
                    transition-colors duration-300
                    group-hover/trigger:text-indigo-500
                  "
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Custom Chevron */}
                  <div
                    className="
                  ml-4 flex h-8 w-8 min-w-8 items-center justify-center
                  rounded-md border border-border/60
                  text-muted-foreground
                  transition-all duration-300
                  group-hover/trigger:border-indigo-500/40
                  group-hover/trigger:text-indigo-500
                  group-data-[state=open]/trigger:rotate-180
                  group-data-[state=open]/trigger:border-indigo-500/50
                  group-data-[state=open]/trigger:text-indigo-500
                "
                  >
                    <svg
                      className="h-4 w-4 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 pt-0">
                {/* Code-style Divider */}
                <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Bottom Hint */}
      <div className="mt-14 flex justify-center px-6">
        <div
          className="
      group relative w-full
      flex flex-col sm:flex-row items-center gap-4
      rounded-2xl
      border border-border/60
      bg-background/70
      backdrop-blur-xl
      px-6 py-4
      text-xs font-mono
      text-muted-foreground
      shadow-md
    "
        >
          {/* Message */}
          <span className="text-center sm:text-left">
            Still have questions?
          </span>

          {/* Divider */}
          <div className="hidden sm:block h-4 w-px bg-border" />

          {/* Docs Link */}
          <Link
            href="#"
            className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Read the Docs</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Divider */}
          <div className="hidden sm:block h-4 w-px bg-border" />

          {/* Support Link */}
          <Link
            href="#"
            className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <LifeBuoy className="h-4 w-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
