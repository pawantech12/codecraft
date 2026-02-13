"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Github,
  Users,
  FileCode2,
  GitBranch,
  Folder,
  Bot,
  Play,
  Cloud,
  FolderOpen,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] rounded-full" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="container mx-auto px-6 py-28 md:py-36">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 border border-purple-200 px-4 py-1 text-xs tracking-wide shadow-sm">
            <Sparkles className="w-3 h-3 mr-2" />
            AI-Powered Cloud IDE
          </Badge>
        </div>

        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-neutral-700">
            Build, Collaborate &
            <span className="block mt-2 max-sm:mt-1 py-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Deploy Instantly
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A lightning-fast AI-powered code editor built for modern developers.
            Write smarter code, collaborate in real-time, and ship
            production-ready apps directly from your browser.
          </p>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA */}
            <Button
              size="lg"
              className="
      group relative overflow-hidden
      px-10 py-6 text-white font-semibold
      bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500
      shadow-[0_0_0_0_rgba(124,58,237,0.6)]
      transition-all duration-500
    "
            >
              {/* Animated gradient overlay */}
              <span
                className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        translate-x-[-100%]
        group-hover:translate-x-[100%]
        transition-transform duration-700
      "
              />

              <span className="relative flex items-center gap-2">
                Start Coding Free
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              size="lg"
              className="
      group px-9 py-6
      border-neutral-300/70
      bg-white/60 backdrop-blur-md
      text-neutral-900
      hover:bg-white
      hover:border-neutral-400
      transition-all duration-300
    "
            >
              <span className="flex items-center gap-2">
                View Live Demo
                <span className="text-xs px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600">
                  ⌘K
                </span>
              </span>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-5 text-sm text-muted-foreground">
            Trusted by 12,000+ developers • Used in 30+ countries
          </div>
        </div>
        {/* Editor Mockup */}
        <div className="relative mt-16 max-sm:mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editor Shell */}
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-white/70 backdrop-blur-2xl shadow-lg">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b bg-white/60 backdrop-blur-xl">
              <div className="flex items-center gap-4 min-w-0">
                {/* Window Controls */}
                <div className="flex gap-2 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 text-xs overflow-x-auto scrollbar-none">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border shadow-sm font-medium whitespace-nowrap">
                    <FileCode2 className="w-4 h-4 text-indigo-500" />
                    page.tsx
                  </span>

                  <span className="hidden sm:flex px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition whitespace-nowrap">
                    editor.ts
                  </span>
                </div>
              </div>

              {/* Right Status */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                <span className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white border shadow-sm whitespace-nowrap">
                  <GitBranch className="w-3.5 h-3.5" />
                  main
                </span>

                <span className="flex items-center gap-2 text-emerald-600 font-medium whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
            </div>

            {/* Editor Body */}
            <div className="flex font-mono text-[13px] leading-7 bg-white">
              {/* Sidebar */}
              <div className="hidden md:block w-56 lg:w-60 border-r bg-muted/30 px-3 py-6 text-xs text-muted-foreground shrink-0">
                <div className="flex items-center gap-2 px-2 mb-4 font-semibold text-foreground">
                  <Folder className="w-4 h-4" />
                  Explorer
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40 cursor-pointer text-foreground">
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                    <FolderOpen className="w-4 h-4 text-indigo-500" />
                    app
                  </div>

                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-indigo-500/10 text-indigo-600 font-medium">
                      <FileCode2 className="w-3.5 h-3.5" />
                      page.tsx
                    </div>

                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40 cursor-pointer">
                      <FileCode2 className="w-3.5 h-3.5" />
                      layout.tsx
                    </div>

                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40 cursor-pointer">
                      <FileCode2 className="w-3.5 h-3.5" />
                      globals.css
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1.5 mt-3 rounded-md hover:bg-muted/40 cursor-pointer text-foreground">
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                    <Folder className="w-4 h-4" />
                    components
                  </div>

                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40 cursor-pointer">
                      <FileCode2 className="w-3.5 h-3.5" />
                      Editor.tsx
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Area */}
              <div className="flex flex-1 min-w-0 overflow-x-auto">
                {/* Line Numbers */}
                <div className="select-none px-3 sm:px-4 py-6 text-right text-muted-foreground border-r bg-muted/20 shrink-0">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Code */}
                <div className="relative flex-1 min-w-[500px] p-4 sm:p-6">
                  <pre className="text-neutral-800 whitespace-pre">
                    <span className="text-purple-600">import</span>{" "}
                    <span className="text-sky-600">{`DevEditor`}</span>{" "}
                    <span className="text-purple-600">from</span>{" "}
                    <span className="text-emerald-600">"@codeflow/core"</span>{" "}
                    {"\n\n"}{" "}
                    <span className="text-purple-600">
                      {" "}
                      export default function{" "}
                    </span>{" "}
                    <span className="text-sky-600">App</span>() {"{"} {"\n "}{" "}
                    <span className="text-purple-600">return</span> ({"\n "}{" "}
                    <span className="text-sky-600">&lt;DevEditor</span> {"\n "}{" "}
                    <span className="text-amber-600">language</span>={" "}
                    <span className="text-emerald-600">"typescript"</span>{" "}
                    {"\n "} <span className="text-amber-600">theme</span>={" "}
                    <span className="text-emerald-600">"system"</span> {"\n "}{" "}
                    <span className="text-amber-600">aiAssistant</span> {"\n "}{" "}
                    <span className="text-amber-600">collaboration</span>{" "}
                    {"\n "} <span className="text-amber-600">autoDeploy</span>{" "}
                    {"\n "} <span className="text-sky-600">/&gt;</span> {"\n "})
                    {"\n"} {"}"}
                  </pre>

                  {/* Floating AI Badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 sm:px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    <Bot className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      AI Assistant Active
                    </span>
                    <span className="sm:hidden">AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-3 border-t bg-white/60 backdrop-blur-xl text-xs text-muted-foreground">
              <span className="whitespace-nowrap">Ln 14, Col 1</span>

              <span className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-2 text-emerald-600 whitespace-nowrap">
                  <Play className="w-4 h-4" />
                  Build passed
                </span>

                <span className="hidden sm:flex items-center gap-2 whitespace-nowrap">
                  <Cloud className="w-4 h-4" />
                  Auto-deployed
                </span>

                <span className="hidden md:flex items-center gap-2 whitespace-nowrap">
                  <Users className="w-4 h-4" />3 collaborators
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
