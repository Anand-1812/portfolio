import { Download, Github, Linkedin, Code } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 md:px-6"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">

          {/* Gradient Title */}
          <h1 className="
            text-5xl md:text-7xl font-bold mb-6
            text-white
            leading-right tracking-tight
          ">
            Hi, I'm Anand Kumar
          </h1>

          {/* Subtitle */}
          <p className="
            text-gray-200
            text-lg md:text-xl
            max-w-3xl mx-auto mb-10
            leading-relaxed
          ">
            I like building things that look clean, work fast, and feel effortless.
            Currently learning machine learning and improving my problem-solving skills
            through DSA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">

            {/* Primary Button - Download CV */}
            <a
              href="/Resume.pdf"
              download
              className="
                px-7 py-3 rounded-xl font-semibold !text-black
                bg-gray-100 border border-gray-100
                shadow-[0_0_12px_rgba(255,255,255,0.16)]
                transition-all duration-200
                hover:bg-white
                hover:shadow-[0_0_20px_rgba(255,255,255,0.22)]
                hover:-translate-y-0.5
                flex items-center gap-2
              "
            >
              <Download className="w-5 h-5 !text-black" />
              <span className="!text-black">Download CV</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/anand-1812"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  border border-white/10
                  text-white
                  bg-[#111111]/60 backdrop-blur-sm
                  transition-all duration-200
                  hover:bg-[#1a1a1a]
                  hover:border-white/20
                  hover:text-gray-100
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]
                  hover:-translate-y-0.5
                "
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/anand-kumar-d2005"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  border border-white/10
                  text-white
                  bg-[#111111]/60 backdrop-blur-sm
                  transition-all duration-200
                  hover:bg-[#1a1a1a]
                  hover:border-white/20
                  hover:text-gray-100
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]
                  hover:-translate-y-0.5
                "
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/anand_1812"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  border border-white/10
                  text-white
                  bg-[#111111]/60 backdrop-blur-sm
                  transition-all duration-200
                  hover:bg-[#1a1a1a]
                  hover:border-white/20
                  hover:text-gray-100
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]
                  hover:-translate-y-0.5
                "
                aria-label="LeetCode Profile"
              >
                <Code className="w-6 h-6" />
              </a>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
