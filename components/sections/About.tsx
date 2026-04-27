"use client";

import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiDocker,
  SiArchlinux,
  SiLeetcode,
  SiNumpy,
  SiJupyter,
} from "react-icons/si";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    ],
  },
  {
    label: "Frameworks / Libraries",
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Arch Linux", icon: <SiArchlinux />, color: "#1793D1" },
      { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export const About = () => {
  return (
    <SectionWrapper id="about" className="pt-8">
      <h2 className="theme-serif mb-6 text-xl opacity-30">
        Stack I use
      </h2>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest theme-text-soft">
              {group.label}
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  style={{ borderColor: `${skill.color}18` }}
                  className="flex cursor-default items-center gap-2 rounded-full border bg-white/[0.02] px-3 py-1.5 text-sm font-medium group theme-line"
                >
                  <span
                    style={{ color: skill.color }}
                    className="text-base group-hover:scale-110 transition-transform"
                  >
                    {skill.icon}
                  </span>
                  <span className="text-[var(--foreground)]">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};