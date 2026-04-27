"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
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
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] transition-all hover:border-white/10"
    >
      {/* --- IMAGE AREA --- */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay on hover for desktop */}
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 hidden md:block" />
      </div>

      {/* --- CONTENT AREA (Always Visible) --- */}
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
              {project.title}
            </h3>
            
            {/* Tech Stack - Always Showing */}
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {project.tech.map((t, i) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                    {t}
                  </span>
                  {i !== project.tech.length - 1 && (
                    <div className="h-1 w-1 rounded-full bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons - Always Visible for Intuitive UX */}
          <div className="flex gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
            >
              <Github size={18} className="opacity-70" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] transition-all hover:scale-110 active:scale-95"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};