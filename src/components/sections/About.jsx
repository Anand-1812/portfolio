import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postgress",
    "TailwindCSS",
    "React",
    "Next.js",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h2
            className="
            text-4xl font-bold mb-12 text-center
            bg-gradient-to-r from-[#82aaff] via-[#7dcfff] to-[#bb9af7]
            bg-clip-text text-transparent
            "
          >
            About Me
          </h2>

          {/* Intro Card (Bio + Skills) */}
          <div
            className="
            rounded-2xl p-10
            border border-[#2d3f76]/60
            bg-[#1a1b26]/40 backdrop-blur-lg
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(122,162,247,0.25)]
            "
          >
            {/* Bio */}
            <p className="text-[#9aa5ce] mb-8 leading-relaxed text-lg">
              I'm a Full Stack Developer who loves building cool stuff.
              <br />
              Also, I enjoy customizing my development environment and exploring
              the Linux ecosystem (yes, I use Arch btw 👻).
            </p>
            {/* Global Skills Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#c0caf5]">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((tech) => (
                  <span
                    key={tech}
                    className="
                    cursor-default px-4 py-2 rounded-full text-sm font-medium
                    bg-[#82aaff]/10 text-[#82aaff]
                    border border-[#3e5a9b]/40
                    transition-all duration-200
                    hover:bg-[#82aaff]/20
                    hover:shadow-[0_0_12px_rgba(122,162,247,0.35)]
                    hover:-translate-y-0.5
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

            {/* Education */}
            <div
              className="
              p-8 rounded-xl
              bg-[#1a1b26]/40 border border-[#2d3f76]/60
              backdrop-blur-lg shadow-sm
              transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(122,162,247,0.25)]
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-[#c0caf5]">
                Education
              </h3>
              <ul className="list-disc list-inside text-[#9aa5ce] space-y-2">
                <li>
                  <strong>B.Tech in Computer Science</strong> - KIIT-DU
                  <span className="block text-[#69708f] text-sm mt-1">
                    (2023 - Present)
                  </span>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div
              className="
              p-8 rounded-xl
              bg-[#1a1b26]/40 border border-[#2d3f76]/60
              backdrop-blur-lg shadow-sm
              transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(122,162,247,0.25)]
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-[#c0caf5]">
                Work Experience
              </h3>
              <div className="text-[#9aa5ce] space-y-2">
                <p>
                  <strong>Seeking Internships</strong>
                </p>
                <p>
                  Eager to apply my full-stack development skills in a
                  professional setting and contribute to real-world projects.
                </p>
              </div>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
