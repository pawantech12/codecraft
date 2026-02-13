import React from "react";
import {
  Github,
  Twitter,
  FileText,
  BookOpen,
  Shield,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Command,
  Dribbble,
  Disc,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative  border-t border-border/40 bg-gradient-to-b from-background to-background/80 backdrop-blur-xl">
      {/* Top Glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="group flex items-center gap-3 font-mono text-lg font-semibold"
            >
              {/* Logo Icon */}
              <div className="relative h-10 w-10">
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-indigo-500/30 blur-md transition-opacity group-hover:opacity-80" />

                {/* Offset panel (editor depth) */}
                <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] rounded-xl bg-cyan-500/20" />

                {/* Main tile */}
                <div
                  className="
                    relative flex h-10 w-10 items-center justify-center
                    rounded-xl
                    bg-gradient-to-br from-indigo-500 to-cyan-500
                    text-white
                    
                    transition-all duration-300
                    group-hover:-translate-y-1 group-hover:-translate-x-1
                  "
                >
                  <Command className="h-4 w-4" />

                  {/* Cursor dot */}
                  <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-indigo-300 border border-white animate-pulse" />
                </div>
              </div>

              {/* Brand Text */}
              <span className="tracking-tight text-neutral-800 dark:text-neutral-100 font-bold">
                Code
                <span className="relative ml-0.5">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                    Craft
                  </span>

                  {/* Underline cursor */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-500  transition-all ease-in-out duration-200 group-hover:w-full" />
                </span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A modern AI-powered cloud editor built for teams, creators, and
              production-ready development.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[Github, Twitter, Dribbble].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-background/50 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-muted-foreground hover:text-indigo-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-sm font-semibold mb-5 text-foreground">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { name: "Features", icon: Sparkles },
                { name: "Editor", icon: Terminal },
                { name: "Pricing", icon: FileText },
                { name: "Releases", icon: ArrowUpRight },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 hover:text-indigo-400 transition-colors"
                  >
                    <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-sm font-semibold mb-5 text-foreground">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { name: "Documentation", icon: BookOpen },
                { name: "API Reference", icon: FileText },
                { name: "Community", icon: Disc },
                { name: "Security", icon: Shield },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 hover:text-indigo-400 transition-colors"
                  >
                    <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="space-y-6">
            <h4 className="font-mono text-sm font-semibold text-foreground">
              Start Building
            </h4>

            <p className="text-sm text-muted-foreground">
              Launch your next project directly in the cloud.
            </p>

            <Link
              href="/signup"
              className="
            group inline-flex items-center gap-2
            rounded-xl
            bg-gradient-to-r from-indigo-500 to-cyan-500
            px-5 py-3
            text-sm font-mono text-white
            shadow-[0_10px_35px_rgba(99,102,241,0.45)]
            hover:shadow-[0_15px_45px_rgba(99,102,241,0.65)]
            hover:-translate-y-0.5
            transition-all duration-300
          "
            >
              Launch Editor
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <span>
            © {new Date().getFullYear()} CodeCraft. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
