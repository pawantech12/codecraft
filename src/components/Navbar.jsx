"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  Github,
  Sun,
  Moon,
  Command,
  Star,
  CornerDownLeft,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Editor", href: "#editor" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="mt-4 flex h-16 items-center justify-between rounded-2xl 
      border border-indigo-500/20
      bg-gradient-to-r from-indigo-500/10 via-background/70 to-cyan-500/10
      px-6 backdrop-blur-2xl 
      shadow-[0_8px_30px_rgba(99,102,241,0.15)]"
        >
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 rounded-xl border border-border/40 bg-background/40 p-1.5 backdrop-blur-xl shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
        group relative
        rounded-xl px-4 py-2
        text-sm font-medium font-mono
        text-muted-foreground
        transition-all duration-300
        hover:text-indigo-400
      "
              >
                {/* Hover Background (tab feel) */}
                <span
                  className="
          absolute inset-0
          rounded-lg
          bg-gradient-to-r from-indigo-500/10 to-cyan-500/10
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
                />

                {/* Tab Border Glow */}
                <span
                  className="
          absolute inset-0
          rounded-lg
          ring-1 ring-transparent
          transition-all duration-300
          group-hover:ring-indigo-500/30
        "
                />

                {/* Label */}
                <span className="relative z-10 tracking-tight">
                  {link.name}
                </span>

                {/* Active/Editor Indicator Line */}
                <span
                  className="
          absolute left-3 right-3 -bottom-[2px]
          h-[2px]
          origin-left scale-x-0
          bg-gradient-to-r from-indigo-500 to-cyan-500
          transition-transform duration-300
          group-hover:scale-x-100
        "
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <Button
              size="sm"
              variant="ghost"
              className="
    hidden sm:flex items-center gap-3
    rounded-xl
    border border-border/40
    bg-background/40
    px-3 py-2 h-full
    backdrop-blur-xl
    transition-all duration-300
    hover:border-indigo-500/40
    hover:bg-indigo-500/5
  "
              asChild
            >
              <Link
                href="https://github.com"
                target="_blank"
                className="group flex items-center gap-3"
              >
                {/* GitHub Icon */}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted/40 transition-all duration-300 group-hover:bg-indigo-500/10">
                  <Github className="h-4 w-4 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Label */}
                <span className="hidden lg:inline font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  GitHub
                </span>

                {/* Divider */}
                <span className="hidden lg:block h-4 w-px bg-border/50 group-hover:bg-indigo-500/40" />

                {/* Stars */}
                <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground group-hover:text-indigo-400 transition-colors">
                  <Star className="h-3 w-3" />
                  2.4k
                </span>
              </Link>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="
    relative
    h-9 w-9
    rounded-xl
    border border-border/40
    bg-background/40
    backdrop-blur-md
    transition-all duration-300
    hover:border-indigo-500/40
    hover:bg-indigo-500/10
    
  "
            >
              {/* Sliding Background */}
              <span
                className={`
      absolute inset-1 rounded-lg
      bg-gradient-to-r from-indigo-500/20 to-cyan-500/20
      transition-all duration-300
      ${theme === "dark" ? "opacity-100" : "opacity-0"}
    `}
              />

              {/* Icon Wrapper */}
              <span className="relative z-10 flex items-center justify-center">
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-yellow-400 transition-transform duration-300 rotate-0" />
                ) : (
                  <Moon className="h-4 w-4 text-indigo-400 transition-transform duration-300 rotate-0" />
                )}
              </span>
            </Button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Login – subtle tool action */}
              <Button
                variant="ghost"
                className="
      rounded-xl
      px-4
      font-mono text-sm
      text-muted-foreground
      hover:bg-indigo-500/10
      hover:text-indigo-400
      transition-all duration-300
    "
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>

              {/* Launch Editor – command-style CTA */}
              <Button
                className="
      group relative
      rounded-xl
      px-5
      font-mono text-sm
      text-white
      bg-gradient-to-r from-indigo-500 to-cyan-500
    
      transition-all duration-300
      hover:-translate-y-0.5
    "
                asChild
              >
                <Link href="/signup" className="flex items-center gap-2">
                  {/* Label */}
                  <span>Launch Editor</span>

                  {/* Keyboard hint */}
                  <span
                    className="
          rounded-md
          border border-white/30
          bg-white/10
          px-1.5 py-0.5
          text-[10px]
          font-mono
          text-white/80
          transition-opacity
          group-hover:opacity-100
        "
                  >
                    <CornerDownLeft className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
    md:hidden
    relative flex h-10 w-10 items-center justify-center
    rounded-xl
    border border-border/40
    bg-background/50
    backdrop-blur-xl
    bg-gradient-to-br from-indigo-500 to-cyan-500 text-white hover:text-white
    transition-all duration-300
    
    active:scale-95
    group
  "
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
      w-80
      backdrop-blur-xl
      bg-white dark:from-background/80 dark:to-background/90
      border-l border-border/20
     
      shadow-[0_15px_50px_rgba(0,0,0,0.25)]
      p-6
      flex flex-col gap-8
    "
              >
                {/* Top Section: Logo */}
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

                {/* Nav Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="
            relative px-4 py-3 rounded-xl
            font-mono font-medium text-muted-foreground
            transition-all duration-300
            hover:text-indigo-400
            hover:bg-gradient-to-r from-indigo-500/10 to-cyan-500/10
          "
                    >
                      {/* Hover Border Glow */}
                      <span className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-indigo-500/30" />
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                  {/* Login */}
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-xl font-mono"
                  >
                    <Link href="/login">Login</Link>
                  </Button>

                  {/* Launch Editor CTA */}
                  <Button
                    asChild
                    className="group relative rounded-xl font-mono bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Link
                      href="/signup"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Launch Editor</span>
                      <span className="rounded-md border border-white/30 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-white/80 transition-opacity group-hover:opacity-100">
                        <CornerDownLeft className="w-4 h-4" />
                      </span>
                    </Link>
                  </Button>

                  <Button
                    variant="ghost"
                    asChild
                    className="flex-1 rounded-xl border border-border/40 bg-background/40 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-indigo-500/5"
                  >
                    <Link
                      href="https://github.com"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-5 w-5 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        GitHub
                      </span>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
