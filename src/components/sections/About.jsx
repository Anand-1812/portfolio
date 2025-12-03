import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Express.js", "MongoDB"];

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

          {/* Intro Card */}
          <div
            className="
              rounded-2xl p-10
              border border-[#2d3f76]/60
              bg-[#1a1b26]/40 backdrop-blur-lg
              shadow-[0_0_20px_rgba(0,0,0,0.3)]
              transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(122,162,247,0.25)]
            "
          >
            <p className="text-[#9aa5ce] mb-10 leading-relaxed text-lg">
              I’m a passionate developer who loves crafting clean, high-performance
              web applications with engaging UI/UX. My focus is on building scalable
              solutions that balance design, speed, and functionality — while
              continuously learning and improving my craft.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Frontend */}
              <div
                className="
                  rounded-xl p-6
                  bg-[#24283b]/40 border border-[#2d3f76]/60
                  backdrop-blur-sm shadow-sm
                  transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(122,162,247,0.2)]
                "
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#c0caf5]">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="
                        cursor-pointer px-4 py-1.5 rounded-full text-sm
                        bg-[#82aaff]/10 text-[#82aaff]
                        border border-[#3e5a9b]/40
                        transition-all duration-200
                        hover:bg-[#82aaff]/20
                        hover:shadow-[0_0_12px_rgba(122,162,247,0.35)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div
                className="
                  rounded-xl p-6
                  bg-[#24283b]/40 border border-[#2d3f76]/60
                  backdrop-blur-sm shadow-sm
                  transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(122,162,247,0.2)]
                "
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#c0caf5]">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="
                        cursor-pointer px-4 py-1.5 rounded-full text-sm
                        bg-[#89ddff]/10 text-[#89ddff]
                        border border-[#3e5a9b]/40
                        transition-all duration-200
                        hover:bg-[#89ddff]/20
                        hover:shadow-[0_0_12px_rgba(137,221,255,0.35)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Education + Work */}
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
              <h3 className="text-2xl font-semibold mb-4 text-[#c0caf5]">
                🏫 Education
              </h3>
              <ul className="list-disc list-inside text-[#9aa5ce] space-y-2">
                <li>
                  <strong className="text-[#c0caf5]">
                    B.Tech in Computer Science
                  </strong>{" "}
                  – KIIT-DU (2023–current)
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div
              className="
                p-8 rounded-xl
                bg-[#1a1b26]/40 border border-[#2d3f76]/60
                backdrop-blur-lg shadow-sm
                transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(122,162,247,0.25)]
              "
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#c0caf5]">
                💼 Work Experience
              </h3>
              <p className="text-[#9aa5ce]">
                Currently seeking opportunities to gain hands-on professional experience
                and contribute to real-world projects.
              </p>
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

