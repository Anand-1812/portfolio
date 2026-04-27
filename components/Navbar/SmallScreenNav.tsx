"use client";

import { House, Folder, Mail, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: User },
  { label: "GitHub", href: "#github", icon: Folder },
  { label: "Contact", href: "#contact", icon: Mail },
];

const MobileNav = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="
        fixed bottom-6 left-1/2 h-16 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 rounded-full
        z-50 sm:hidden
        flex items-center justify-around
        px-2 border border-white/5 bg-[var(--background)]/70 backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
      "
    >
      {/* Subtle Inner Glow for Dark Mode */}
      <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
      
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className="
              flex flex-col items-center justify-center
              gap-0.5 px-2 py-2
              theme-text-soft
              hover:text-[var(--foreground)]
              transition-all active:scale-95
              min-w-0
            "
          >
            <Icon size={18} />
            <span className="text-[9px] font-bold tracking-wide truncate w-full text-center">
              {item.label}
            </span>
          </a>
        );
      })}
      {mounted && (
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          className="flex min-w-0 flex-col items-center justify-center gap-0.5 px-2 py-2 theme-text-soft hover:text-[var(--foreground)] transition-all active:scale-95"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="w-full truncate text-center text-[9px] font-bold tracking-wide">
            Theme
          </span>
        </button>
      )}
    </div>
  );
};

export default MobileNav;