"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Github,
  Linkedin,
  Moon,
  Sun,
  ArrowDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Anand-1812",
    icon: Github,
  },
  {
    label: "Resume",
    href: "/New_Resume.pdf",
    icon: FileText,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anand-kumar-d2005",
    icon: Linkedin,
  },
];

export const Hero = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <section id="home" className="px-0 pt-0">
      <div className="w-full">
        <div className="relative h-[180px] overflow-hidden sm:h-[270px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(211,205,180,0.95)_0%,rgba(80,86,74,0.42)_44%,rgba(27,27,31,0.85)_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%),linear-gradient(180deg,rgba(179,172,146,0.9)_0%,rgba(74,78,68,0.45)_42%,rgba(27,27,31,0.92)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 top-[38%] bg-[linear-gradient(180deg,transparent_0%,rgba(13,29,18,0.18)_15%,rgba(11,24,15,0.76)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[repeating-linear-gradient(90deg,rgba(17,17,17,0)_0px,rgba(17,17,17,0)_10px,rgba(20,20,20,0.18)_11px,rgba(20,20,20,0)_22px)] opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <p className="theme-serif max-w-xl text-center text-base italic text-white sm:text-xl">
              You make your own luck if you stay at it long enough.
            </p>
          </div>
        </div>
      </div>

      <div className="-mt-10 flex flex-col">
        <div className="mx-4 mb-4 flex items-center justify-between sm:mx-8">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="z-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,#2f3b5e,#0f172a)] text-2xl font-semibold text-white shadow-lg sm:h-28 sm:w-28"
          >
            AK
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 text-sm theme-text-muted"
          >
            <Github size={16} />
            93
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="theme-serif text-[2.6rem] leading-none text-[var(--foreground)] sm:text-[4rem]"
            >
              Anand Kumar
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="theme-text-soft mt-2 text-sm"
            >
              22 • engineer • developer • builder
            </motion.p>
          </div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2"
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="theme-icon-button flex h-10 w-10 items-center justify-center rounded-full theme-text-muted hover:text-[var(--foreground)]"
                >
                  <Icon size={16} />
                </a>
              );
            })}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                className="theme-icon-button flex h-10 w-10 items-center justify-center rounded-full theme-text-muted hover:text-[var(--foreground)]"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
          </motion.div>
        </div>
      </div>

      <div className="theme-divider mt-8" />

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="px-4 py-8 sm:px-8"
      >
        <p className="max-w-4xl text-lg leading-[1.75] theme-text-muted">
          <span className="text-[var(--foreground)]">I build from zero.</span>{" "}
          Full-stack developer focused on clean product work, practical
          engineering, and shipping things people actually use. From frontend to
          backend to deployment, I care more about the result than the stack
          debate.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm theme-line theme-text-muted hover:text-[var(--foreground)]"
          >
            About
          </a>
          <a
            href="#github"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm theme-line theme-text-muted hover:text-[var(--foreground)]"
          >
            GitHub
            <ArrowDown size={14} />
          </a>
        </div>
      </motion.div>

      <div className="theme-divider" />
    </section>
  );
};
