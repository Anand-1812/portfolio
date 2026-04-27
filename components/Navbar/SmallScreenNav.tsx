"use client";

import { House, Folder, Mail, User, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: House },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "About", href: "#about", icon: User },
  { label: "Journey", href: "#experience", icon: MapPin },
  { label: "Contact", href: "#contact", icon: Mail },
];

const MobileNav = () => {
  return (
    <div
      className="
        fixed bottom-0 left-0 w-full h-16
        z-50 sm:hidden
        flex items-center justify-around
        bg-neutral-900/90
        backdrop-blur-xl
        border-t border-white/10
        px-1
      "
    >
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
              text-neutral-400
              hover:text-white
              transition-colors
              min-w-0
            "
          >
            <Icon size={18} />
            <span className="text-[9px] tracking-wide truncate w-full text-center">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default MobileNav;
