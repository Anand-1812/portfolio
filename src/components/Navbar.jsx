import { useEffect } from "react";
import { Menu } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full mt-10 px-4 z-40">
      <div className="max-w-2xl mx-auto">
        <div
          className="
            flex justify-between items-center
            px-6 py-3
            rounded-2xl
            bg-[#1a1b26]/80
            backdrop-blur-xl
            border border-[#2d3f76]/60
            shadow-[0_0_20px_rgba(1,1,1,1)]
          "
        >
          {/* Mobile Header */}
          <div
            className="w-full flex justify-between items-center md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <h1 className="text-lg font-mono text-[#c0caf5] tracking-wide">
              Anand<span className="text-[#7aa2f7]">.tech</span>
            </h1>
            <Menu className="text-[#7dcfff]" />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <h1 className="text-xl font-mono text-[#c0caf5] tracking-wide">
              Anand<span className="text-[#7aa2f7]">.tech</span>
            </h1>

            {/* Nav Buttons */}
            <div className="flex items-center gap-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    px-4 py-2 rounded-xl
                    font-medium
                    text-[#c0caf5]
                    bg-[#24283b]/40
                    border border-[#2d3f76]/60
                    backdrop-blur-sm
                    transition-all duration-200
                    hover:bg-[#2f3549]/60
                    hover:border-[#3e5a9b]
                    hover:text-[#7dcfff]
                    shadow-sm hover:shadow-[0_0_12px_rgba(58,132,255,0.25)]
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

