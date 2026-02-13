"use client";

import * as React from "react";
import { ArrowUp, CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        `
        fixed bottom-6 right-6 z-50
        group
        flex items-center gap-2
        rounded-xl
        border border-border/40
        bg-background/60
        px-3 py-2
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        transition-all duration-500
        hover:border-indigo-500/40
        hover:bg-indigo-500/10
      `,
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      {/* Glow */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg">
        <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
      </span>

      {/* Label */}
      <span className="relative z-10 hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
        Top
        <span className="flex items-center gap-1 rounded-md border border-border/40 bg-background/50 px-1.5 py-0.5 text-[10px]">
          <CornerDownLeft className="h-3 w-3" />
        </span>
      </span>
    </button>
  );
}
