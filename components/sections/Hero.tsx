"use client";

import { motion, AnimatePresence } from "framer-motion";
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
    hoverText: "view profile",
    href: "https://github.com/Anand-1812",
    icon: Github,
  },
  {
    label: "Resume",
    hoverText: "download resume",
    href: "/New_Resume.pdf",
    icon: FileText,
  },
  {
    label: "LinkedIn",
    hoverText: "let's connect",
    href: "https://www.linkedin.com/in/anand-kumar-d2005",
    icon: Linkedin,
  },
];

export const Hero = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <section id="home" className="px-0 pt-0">
      {/* --- HEADER / COVER SECTION --- */}
      <div className="w-full">
        {/* FIX: Negative margins now exactly match sm:px-16 to eliminate the gap */}
        <div className="relative -mx-6 h-[200px] overflow-hidden sm:-mx-16 sm:h-[300px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(211,205,180,0.95)_0%,rgba(80,86,74,0.42)_44%,rgba(27,27,31,0.85)_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%),linear-gradient(180deg,rgba(179,172,146,0.9)_0%,rgba(74,78,68,0.45)_42%,rgba(27,27,31,0.92)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 top-[38%] bg-[linear-gradient(180deg,transparent_0%,rgba(13,29,18,0.18)_15%,rgba(11,24,15,0.76)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[repeating-linear-gradient(90deg,rgba(17,17,17,0)_0px,rgba(17,17,17,0)_10px,rgba(20,20,20,0.05)_11px,rgba(20,20,20,0)_22px)] opacity-50" />
          
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center text-lg leading-relaxed text-white/90 font-medium sm:text-2xl"
            >
              "The best way to predict the future is to create it."
            </motion.p>
          </div>
        </div>
      </div>

      {/* --- PROFILE INFO SECTION --- */}
      <div className="-mt-12 flex flex-col sm:-mt-16">
        <div className="mb-4 flex items-center justify-between">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="z-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-[var(--background)] bg-[var(--background)] shadow-2xl sm:h-32 sm:w-32"
          >
            <img 
              src="https://github.com/Anand-1812.png" 
              alt="Anand Kumar" 
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[2.8rem] font-bold tracking-tighter leading-[1.1] text-[var(--foreground)] sm:text-[4.5rem]"
            >
              Anand Kumar
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-3 text-xs uppercase tracking-[0.25em] font-semibold opacity-50"
            >
              22 &bull; Developer &bull; Builder
            </motion.p>
          </div>

          {/* Social Links with Tooltips */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3"
          >
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="relative flex flex-col items-center">
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        className="absolute -top-11 z-50 whitespace-nowrap rounded-md bg-[var(--foreground)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--background)] shadow-xl"
                      >
                        {item.hoverText}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-[5px] border-t-[5px] border-x-transparent border-t-[var(--foreground)]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
                  >
                    <Icon size={18} className="opacity-70 hover:opacity-100" />
                  </a>
                </div>
              );
            })}
            
            {mounted && (
              <div className="relative flex flex-col items-center">
                <button
                  type="button"
                  onMouseEnter={() => setHoveredIndex(99)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
                >
                  {isDark ? <Sun size={18} className="opacity-70" /> : <Moon size={18} className="opacity-70" />}
                </button>
                <AnimatePresence>
                  {hoveredIndex === 99 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute -top-11 z-50 whitespace-nowrap rounded-md bg-[var(--foreground)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--background)]"
                    >
                      {isDark ? "light mode" : "dark mode"}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-[5px] border-t-[5px] border-x-transparent border-t-[var(--foreground)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-10" />

      {/* --- BIO SECTION --- */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="py-10"
      >
        <p className="max-w-3xl text-lg leading-[1.8] opacity-80 sm:text-xl">
          <span className="font-semibold text-[var(--foreground)] opacity-100">I build from zero.</span>{" "}
          Full-stack developer focused on clean product work, practical
          engineering, and shipping things people actually use. From frontend to
          backend to deployment, I care more about the result than the stack
          debate.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" // Updated anchor link
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium transition-all hover:bg-white/10 hover:border-white/20"
          >
            projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-2.5 text-sm font-medium text-[var(--background)] transition-all hover:opacity-90"
          >
            contact
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
          </motion.a>
        </div>
      </motion.div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--foreground)] to-transparent opacity-10" />
    </section>
  );
};