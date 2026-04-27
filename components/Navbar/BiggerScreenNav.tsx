"use client";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const BiggerScreenNav = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center">
      <div className="flex items-center gap-8 border border-white/10 rounded-full px-8 py-3 bg-black/50 backdrop-blur-xl shadow-2xl">
        <a href="#home" className="text-lg font-bold tracking-tighter shrink-0">
          ANAND<span className="text-neutral-500 italic">.dev</span>
        </a>
        <div className="h-4 w-px bg-neutral-800 shrink-0" />
        <div className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BiggerScreenNav;
