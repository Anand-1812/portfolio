import { X } from "lucide-react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-40
        backdrop-blur-xl
        bg-[#1a1b26]/80
        transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 text-[#c0caf5] text-3xl"
        aria-label="Close Menu"
      >
        <X className="hover:text-[#7dcfff] transition-colors" />
      </button>

      {/* Menu Links */}
      <div className="flex flex-col items-center gap-6">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`
              text-3xl font-semibold tracking-wide
              text-[#c0caf5]
              px-6 py-3 rounded-xl
              bg-[#24283b]/40
              border border-[#2d3f76]/50
              backdrop-blur-sm
              shadow-sm
              transition-all duration-300
              hover:bg-[#2f3549]/60
              hover:border-[#3e5a9b]
              hover:text-[#7dcfff]
              hover:shadow-[0_0_12px_rgba(122,162,247,0.35)]

              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}

            `}
            style={{
              transitionDelay: menuOpen ? `${index * 80}ms` : "0ms",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

