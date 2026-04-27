import { Code, Download, Github, Linkedin } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/anand-1812",
    icon: Github,
  },
  {
    label: "Resume",
    href: "/Resume.pdf",
    icon: Download,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/anand-kumar-d2005",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/anand_1812",
    icon: Code,
  },
];

export const Home = () => {
  return (
    <section id="home" className="px-0 pb-8 pt-0">
      <RevealOnScroll>
        <div className="mx-auto">
          <div className="border-b border-white/6 bg-[#1d1d21]">
            <div className="relative h-[180px] w-full overflow-hidden sm:h-[270px]">
              <img
                src="/mountain.jpg"
                alt="Mountain banner"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.34)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center px-5">
                <p className="max-w-2xl text-center font-serif text-base italic text-white sm:text-[2rem] sm:leading-none">
                  You make your own luck if you stay at it long enough.
                </p>
              </div>
            </div>

            <div className="relative px-4 pb-10 pt-16 sm:px-8 sm:pt-20">
              <div
                className="absolute left-4 top-0 h-28 w-28 -translate-y-1/2 rounded-full border-4 border-[#1d1d21] bg-cover bg-center shadow-[0_18px_42px_-18px_rgba(0,0,0,0.9)] sm:left-8 sm:h-32 sm:w-32"
                role="img"
                aria-label="Anand Kumar"
                style={{ backgroundImage: 'url("https://github.com/anand-1812.png")' }}
              />

              <div className="flex justify-end">
                <a
                  href="https://github.com/anand-1812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-1 text-xs text-white/70 transition hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>anand-1812</span>
                </a>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="font-serif text-[2.4rem] font-medium tracking-[0.01em] text-white sm:text-[4rem] sm:leading-none">
                    Anand Kumar
                  </h1>
                  <p className="mt-1 text-sm text-white/40 sm:text-base">
                    20 • developer • builder • linux user
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    const isExternal = link.href.startsWith("http");

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#202024] text-white/80 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 border-t border-white/6 pt-7">
                <p className="max-w-3xl text-[1.05rem] leading-9 text-gray-300">
                  <span className="font-semibold text-white">I build from zero.</span> I like building things
                  that look clean, work fast, and feel effortless. Currently learning machine learning and
                  improving my problem-solving skills through DSA while shipping real projects on the side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
