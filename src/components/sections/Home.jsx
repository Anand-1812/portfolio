import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <RevealOnScroll>
        <div className="text-center z-10">

          {/* Gradient Title */}
          <h1 className="
            text-5xl md:text-7xl font-bold mb-6
            bg-gradient-to-r from-[#82aaff] to-[#7dcfff]
            bg-clip-text text-transparent
            leading-tight tracking-tight
          ">
            Hi, I'm Anand Kumar
          </h1>

          {/* Subtitle */}
          <p className="
            text-[#9aa5ce]
            text-lg md:text-xl
            max-w-2xl mx-auto mb-10
            leading-relaxed
          ">
            A passionate developer crafting clean, scalable and visually appealing
            web experiences. I build high-performance applications with a strong
            focus on design, usability and delightful user interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">

            {/* Primary Button */}
            <a
              href="#projects"
              className="
                px-7 py-3 rounded-xl font-medium text-[#1a1b26]
                bg-gradient-to-r from-[#7aa2f7] to-[#89ddff]
                shadow-[0_0_12px_rgba(122,162,247,0.35)]
                transition-all duration-200
                hover:shadow-[0_0_20px_rgba(122,162,247,0.55)]
                hover:-translate-y-0.5
              "
            >
              View Projects
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="
                px-7 py-3 rounded-xl font-medium
                border border-[#3e5a9b]
                text-[#82aaff]
                bg-[#1a1b26]/40 backdrop-blur-sm
                transition-all duration-200
                hover:bg-[#24283b]/60
                hover:border-[#7aa2f7]
                hover:text-[#89ddff]
                hover:shadow-[0_0_15px_rgba(137,221,255,0.35)]
                hover:-translate-y-0.5
              "
            >
              Contact Me
            </a>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

