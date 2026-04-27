"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const BiggerScreenNav = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 hidden justify-center md:flex">
      <div className="flex items-center gap-5 rounded-full border bg-black/25 px-3 py-2 backdrop-blur-sm theme-line">
        <a
          href="#home"
          className="shrink-0 px-3 text-base font-medium tracking-tight text-[var(--foreground)]"
        >
          Anand
          <span className="theme-serif theme-text-soft ml-1 italic">.dev</span>
        </a>
        <div className="h-4 w-px shrink-0 border-r theme-line" />
        <div className="flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm whitespace-nowrap theme-text-soft hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        {mounted && (
          <>
            <div className="h-4 w-px shrink-0 border-r theme-line" />
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="theme-icon-button flex h-8 w-8 items-center justify-center rounded-full theme-text-soft hover:text-[var(--foreground)]"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default BiggerScreenNav;
