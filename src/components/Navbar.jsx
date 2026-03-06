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
            bg-[#111111]/85
            backdrop-blur-xl
            border border-white/10
            shadow-[0_0_20px_rgba(1,1,1,1)]
          "
        >
          {/* Mobile Header */}
          <div
            className="w-full flex justify-between items-center md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <h1 className="text-lg font-mono text-white tracking-wide">
              Anand<span className="text-gray-200">.tech</span>
            </h1>
            <Menu className="text-white" />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <h1 className="text-xl font-mono text-white tracking-wide">
              Anand<span className="text-gray-200">.tech</span>
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
                    text-white
                    bg-[#1a1a1a]/70
                    border border-white/10
                    backdrop-blur-sm
                    transition-all duration-200
                    hover:bg-[#222222]
                    hover:border-white/20
                    hover:text-gray-100
                    shadow-sm hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]
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
