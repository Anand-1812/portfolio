import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Shopping Cart",
      desc: "A clean and responsive shopping cart built using Fake Store API.",
      tech: ["HTML", "CSS", "React", "JavaScript"],
      link: "https://shopping-cart-fake.vercel.app",
    },
    {
      title: "AI Chat App",
      desc: "An AI-powered chat application built using Google Gemini API.",
      tech: ["HTML", "CSS", "React", "Google Gemini API"],
      link: "https://anand-1812.github.io/gemini-clone",
    },
    {
      title: "Streako",
      desc: "A habit tracker inspired by GitHub and LeetCode streak tracking.",
      tech: [
        "JavaScript",
        "TailwindCSS",
        "React",
        "Express.js",
        "MongoDB",
        "Node.js",
      ],
      link: "https://streako-tracker.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-28 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2
            className="
              text-4xl font-bold mb-14 text-center
              bg-gradient-to-r from-[#82aaff] to-[#7dcfff]
              bg-clip-text text-transparent
            "
          >
            Featured Projects
          </h2>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="
                  p-8 rounded-2xl
                  bg-[#1a1b26]/40 backdrop-blur-lg
                  border border-[#2d3f76]/60
                  shadow-[0_0_20px_rgba(0,0,0,0.3)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_25px_rgba(122,162,247,0.25)]
                "
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#c0caf5]">
                  {p.title}
                </h3>

                <p className="text-[#9aa5ce] mb-5 leading-relaxed">{p.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1.5 rounded-full text-sm
                        bg-[#82aaff]/10 text-[#82aaff]
                        border border-[#3e5a9b]/40
                        transition-all duration-200
                        hover:bg-[#82aaff]/20
                        hover:shadow-[0_0_10px_rgba(122,162,247,0.3)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={p.link}
                  className="
                    inline-block mt-2 text-[#7dcfff] font-medium
                    hover:text-[#89ddff]
                    hover:underline underline-offset-4
                    transition-all
                  "
                  target="_blank"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

