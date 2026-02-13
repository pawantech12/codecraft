import {
  Bot,
  ChevronDown,
  Cloud,
  Code,
  FileCode2,
  Folder,
  FolderOpen,
  GitBranch,
  Monitor,
  Play,
  RefreshCw,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import React from "react";

const LiveEditorPreviewSection = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* ===== Section Heading (Your Provided Design) ===== */}
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Feature Badge */}
        <div className="group relative inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-background/60 to-cyan-500/10 px-5 py-2 text-xs font-medium text-foreground backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.25)] mx-auto mb-6">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15">
            <Code className="h-3.5 w-3.5 text-indigo-500" />
          </span>

          <span className="font-mono tracking-tight">
            Live Editor Experience
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold font-sans text-neutral-700">
          Build. Preview. Deploy.{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Instantly.
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-muted-foreground text-sm md:text-base font-medium">
          Experience real-time preview, AI assistance, and collaborative coding
          — all inside{" "}
          <span className="font-mono text-indigo-500">CodeCraft</span>.
        </p>
      </div>

      {/* ===== Editor + Preview Shell ===== */}
      <div className="relative mt-20 max-sm:mt-10 max-w-7xl mx-auto px-6">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="h-[420px] w-[820px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-70" />
        </div>

        {/* ===== Horizontal Scroll Wrapper ===== */}
        <div className="overflow-x-auto scrollbar-hide">
          {/* Editor Shell */}
          <div className="relative min-w-[900px] overflow-hidden rounded-xl border border-border/60 bg-background/70 backdrop-blur-2xl shadow-lg">
            {/* ===== Top Bar ===== */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-background/60 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                {/* Window Controls */}
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border shadow-sm font-medium text-foreground">
                    <FileCode2 className="w-4 h-4 text-indigo-500" />
                    page.tsx
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground transition">
                    editor.ts
                  </span>
                </div>
              </div>

              {/* Right Status */}
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-background border shadow-sm">
                  <GitBranch className="w-3.5 h-3.5" />
                  main
                </span>

                <span className="flex items-center gap-2 text-emerald-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
            </div>

            {/* ===== Editor Body ===== */}
            <div className="flex font-mono text-[13px] leading-7">
              {/* Explorer */}
              <div className="hidden md:block w-56 border-r bg-muted/30 px-3 py-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 px-2 mb-4 font-semibold text-foreground">
                  <Folder className="w-4 h-4" />
                  Explorer
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40 text-foreground">
                    <ChevronDown className="w-3.5 h-3.5" />
                    <FolderOpen className="w-4 h-4 text-indigo-500" />
                    app
                  </div>

                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-indigo-500/10 text-indigo-600 font-medium">
                      <FileCode2 className="w-3.5 h-3.5" />
                      page.tsx
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40">
                      <FileCode2 className="w-3.5 h-3.5" />
                      layout.tsx
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40">
                      <FileCode2 className="w-3.5 h-3.5" />
                      globals.css
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1.5 mt-3 rounded-md hover:bg-muted/40 text-foreground">
                    <ChevronDown className="w-3.5 h-3.5" />
                    <Folder className="w-4 h-4" />
                    components
                  </div>

                  <div className="ml-6">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted/40">
                      <FileCode2 className="w-3.5 h-3.5" />
                      Editor.tsx
                    </div>
                  </div>
                </div>
              </div>

              {/* Code + Preview */}
              <div className="flex flex-1 flex-col lg:flex-row">
                {/* Code Area */}
                <div className="flex flex-1 border-r bg-background">
                  <div className="select-none px-4 py-6 text-right text-muted-foreground border-r bg-muted/20">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  <div className="relative flex-1 p-6">
                    <pre className="text-neutral-800">
                      <span className="text-purple-600">import</span>{" "}
                      <span className="text-sky-600">{`{ DevEditor }`}</span>{" "}
                      <span className="text-purple-600">from</span>{" "}
                      <span className="text-emerald-600">
                        "@codecraft/core"
                      </span>
                      {"\n\n"}
                      <span className="text-purple-600">
                        export default function
                      </span>{" "}
                      <span className="text-sky-600">App</span>() {"{"}
                      {"\n  "}
                      <span className="text-purple-600">return</span> (
                      {"\n    "}
                      <span className="text-sky-600">&lt;DevEditor</span>
                      {"\n      "}
                      <span className="text-amber-600">language</span>=
                      <span className="text-emerald-600">"typescript"</span>
                      {"\n      "}
                      <span className="text-amber-600">aiAssistant</span>
                      {"\n      "}
                      <span className="text-amber-600">autoDeploy</span>
                      {"\n    "}
                      <span className="text-sky-600">/&gt;</span>
                      {"\n  "}){"\n"}
                      {"}"}
                    </pre>

                    {/* AI Badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1.5 text-xs text-white shadow-lg">
                      <Bot className="w-4 h-4" />
                      AI Assistant Active
                    </div>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="flex-1 bg-white p-8 flex items-center justify-center relative">
                  <div className="absolute top-4 right-4 flex gap-3 text-muted-foreground">
                    <Monitor className="w-5 h-5 text-indigo-500" />
                    <Smartphone className="w-5 h-5" />
                  </div>

                  <div className="rounded-2xl border shadow-xl p-10 text-center bg-gradient-to-br from-indigo-500/10 to-cyan-500/10">
                    <h3 className="text-2xl font-bold text-neutral-700">
                      Hello CodeCraft 🚀
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Real-time preview updates instantly.
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2 text-sm text-white shadow-md hover:opacity-90 transition">
                      <Play className="w-4 h-4" />
                      Run Project
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Bottom Status Bar ===== */}
            <div className="flex items-center justify-between px-6 py-3 border-t bg-background/60 backdrop-blur-xl text-xs text-muted-foreground">
              <span>Ln 12, Col 3</span>

              <span className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-emerald-500">
                  <Play className="w-4 h-4" />
                  Build passed
                </span>
                <span className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  Auto-deployed
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />3 collaborators
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEditorPreviewSection;
