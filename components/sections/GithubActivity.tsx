"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const neutralDarkTheme = {
  light: ["#171717", "#262626", "#404040", "#737373", "#e5e5e5"],
  dark: ["#171717", "#262626", "#404040", "#737373", "#e5e5e5"],
};

const legendSquares = [
  { bg: "bg-neutral-900", label: "None" },
  { bg: "bg-neutral-700", label: "Low" },
  { bg: "bg-neutral-500", label: "Mid" },
  { bg: "bg-neutral-300", label: "High" },
  { bg: "bg-white", label: "Max" },
];

export const GithubActivity = () => {
  return (
    <SectionWrapper id="github">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          GitHub Activity
        </h2>
        <a
          href="https://github.com/Anand-1812"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-300 font-mono transition-colors"
        >
          <Github size={13} />
          Anand-1812
        </a>
      </div>

      {/* Calendar card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative p-6 bg-neutral-900/40 border border-neutral-900 rounded-3xl overflow-hidden
          hover:border-neutral-800 transition-colors duration-300 group"
      >
        {/* Subtle corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full
            bg-white/[0.015] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Calendar — horizontally scrollable on small screens */}
        <div className="overflow-x-auto">
          <GitHubCalendar
            username="Anand-1812"
            theme={neutralDarkTheme}
            blockSize={12}
            blockMargin={4}
          />
        </div>

        {/* Footer row */}
        <div className="mt-5 flex flex-wrap justify-between items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-700 font-bold select-none">
            Contribution Archive
          </span>

          {/* Custom legend */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-neutral-700 font-mono mr-1">
              Less
            </span>
            {legendSquares.map((sq) => (
              <div
                key={sq.label}
                title={sq.label}
                className={`h-3 w-3 rounded-sm ${sq.bg}`}
              />
            ))}
            <span className="text-[10px] text-neutral-700 font-mono ml-1">
              More
            </span>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
