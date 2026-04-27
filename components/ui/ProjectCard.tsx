"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string; // Added for the preview screenshot
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] transition-all hover:bg-white/[0.03] hover:border-white/10"
    >
      {/* --- BROWSER MOCKUP (Deployment Preview) --- */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-neutral-900/50">
        {/* Window Header */}
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <div className="ml-2 flex flex-1 items-center rounded-md bg-white/5 px-2 py-1">
            <span className="truncate text-[9px] font-medium tracking-tight opacity-30">
              {project.demo?.replace("https://", "") || "localhost:3000"}
            </span>
          </div>
        </div>
        
        {/* Preview Image Area */}
        <div className="relative h-full w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Hover Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-[2px]">
            <div className="flex gap-3">
              <a
                href={project.demo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
              >
                Visit Site <ArrowUpRight size={12} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-105"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- PROJECT INFO --- */}
      <div className="flex flex-col p-6">
        
        <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>

        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-medium tracking-wide opacity-30 group-hover:opacity-60 transition-opacity">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};