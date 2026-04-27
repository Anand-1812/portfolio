"use client";

import { ProjectCard, Project } from "@/components/ui/ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const projects: Project[] = [
  {
    id: "1",
    title: "CloudCompress",
    tech: ["Next.js", "WebAssembly", "TypeScript", "Tailwind"],
    github: "https://github.com/Anand-1812",
    demo: "https://cloud-compress.vercel.app",
    image: "/projects/cloudcompress.png", 
  },
  {
    id: "2",
    title: "Streako",
    tech: ["React", "Firebase", "Framer Motion", "Chart.js"],
    github: "https://github.com/Anand-1812",
    demo: "https://streako-tracker.vercel.app",
    image: "/projects/streako.png",
  },
  {
    id: "3",
    title: "Sideink",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Lucide"],
    github: "https://github.com/Anand-1812",
    demo: "https://sideink-notes.vercel.app",
    image: "/projects/sideink.png",
  },
  {
    id: "4",
    title: "Aero Yodha",
    tech: ["React Native", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/Anand-1812",
    demo: "https://aero-yodha.vercel.app",
    image: "/projects/aeroyodha.png",
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="pt-8">
      <div className="mb-10">
        <h2 className="theme-serif text-xl opacity-30">
          Selected Projects
        </h2>
        <p className="mt-2 text-sm italic opacity-50">
          Production deployments and functional prototypes.
        </p>
      </div>
      
      {/* 2 columns on medium screens and up */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </SectionWrapper>
  );
};