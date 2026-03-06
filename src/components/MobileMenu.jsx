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
        bg-[#111111]/90
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
        className="absolute top-5 right-5 text-white text-3xl"
        aria-label="Close Menu"
      >
        <X className="hover:text-gray-100 transition-colors" />
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
              text-white
              px-6 py-3 rounded-xl
              bg-[#1a1a1a]/70
              border border-white/10
              backdrop-blur-sm
              shadow-sm
              transition-all duration-300
              hover:bg-[#222222]
              hover:border-white/20
              hover:text-gray-100
              hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]

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
