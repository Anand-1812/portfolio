"use client";

import { motion } from "framer-motion";
import {
  Github,
  FileText,
  ArrowDown,
  Code2,
  Layers,
  Terminal,
} from "lucide-react";

const stats = [
  { label: "DSA Problems", value: "400+", icon: <Code2 size={14} /> },
  { label: "Projects Built", value: "10+", icon: <Layers size={14} /> },
  { label: "CS Student", value: "3rd Year", icon: <Terminal size={14} /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="px-6 md:px-10 py-20 md:py-28 border-b border-neutral-900 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/1.5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/1.2 blur-3xl"
      />

      {/* Top label */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 mb-8"
      >
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-600 border border-neutral-800 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse" />
          Open to Internships
        </span>
      </motion.div>

      {/* Name + role */}
      <div className="mb-6">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-3"
        >
          Anand
          <br />
          Kumar
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4"
        >
          <span className="text-neutral-400 font-mono text-sm md:text-base">
            Full Stack Developer
          </span>
          <span className="text-neutral-700 hidden sm:inline">·</span>
          <span className="text-neutral-500 font-mono text-sm md:text-base">
            CS Student @ KIIT-DU
          </span>
          <span className="text-neutral-700 hidden sm:inline">·</span>
          <span className="text-neutral-500 font-mono text-sm md:text-base">
            Arch Linux btw
          </span>
        </motion.div>
      </div>

      {/* Bio */}
      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed mb-10"
      >
        I build{" "}
        <span className="text-neutral-200 font-medium">
          full-stack web applications
        </span>{" "}
        — from UAV simulation dashboards to habit trackers. I ship fast, learn
        faster, and keep the code clean.{" "}
        <span className="text-neutral-500">
          Currently looking for a summer internship.
        </span>
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center gap-3 mb-14"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-neutral-200 transition-colors"
        >
          View Projects
          <ArrowDown size={14} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-neutral-300 text-sm font-semibold border border-neutral-800 rounded-xl hover:border-neutral-600 hover:text-white transition-all"
        >
          Get in Touch
        </a>
        <a
          href="/New_Resume.pdf"
          download="Anand_Kumar_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-neutral-500 text-sm font-medium border border-neutral-900 rounded-xl hover:text-neutral-300 hover:border-neutral-700 transition-all"
        >
          <FileText size={14} />
          Resume
        </a>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-6 sm:gap-10 pt-8 border-t border-neutral-900"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-neutral-600 text-xs uppercase tracking-widest font-medium">
              {stat.icon}
              {stat.label}
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              {stat.value}
            </span>
          </div>
        ))}

        {/* Subtle separator + social row */}
        <div className="hidden sm:block w-px bg-neutral-900 self-stretch mx-2" />
        <div className="flex items-end gap-3 pb-1">
          <a
            href="https://github.com/Anand-1812"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl text-neutral-600 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
          >
            <Github size={16} />
          </a>
          <a
            href="https://leetcode.com/anand_1812"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-2 rounded-xl text-neutral-600 hover:text-[#FFA116] hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
          >
            {/* LeetCode icon via SVG since lucide doesn't have it */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
