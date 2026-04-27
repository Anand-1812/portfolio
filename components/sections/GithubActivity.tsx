"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const contributionTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const legendSquares = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

export const GithubActivity = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeLegend =
    resolvedTheme === "light" ? legendSquares.light : legendSquares.dark;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionWrapper id="github" className="pt-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <h2 className="theme-serif text-xl opacity-30">
          GitHub Contributions
        </h2>
        <a
          href="https://github.com/Anand-1812"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs theme-text-soft hover:text-[var(--foreground)]"
        >
          <Github size={13} />
          Anand-1812
        </a>
      </div>

      <div className="overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          {mounted ? (
            <GitHubCalendar
              username="Anand-1812"
              colorScheme={(resolvedTheme === "light" ? "light" : "dark") as "light" | "dark"}
              theme={contributionTheme}
              blockSize={10}
              blockMargin={4}
              fontSize={14}
            />
          ) : (
            <div className="h-[140px] w-full animate-pulse rounded-xl bg-white/[0.03]" />
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-end gap-1.5 text-sm theme-text-muted">
          <span className="mr-1 text-[10px]">Less</span>
          {activeLegend.map((color, index) => (
            <div
              key={color}
              title={`Level ${index}`}
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="ml-1 text-[10px]">More</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
