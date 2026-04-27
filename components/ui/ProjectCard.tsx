"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  stars: number;
  forks: number;
  category: string;
  highlights: string[];
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export const ProjectCard = ({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col bg-neutral-900/40 border border-neutral-900 rounded-2xl p-6
        hover:border-neutral-700 hover:bg-neutral-900/70 transition-all duration-300
        ${featured ? "md:col-span-2" : ""}`}
    >
      {/* Card header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          {featured && (
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-neutral-500 border border-neutral-800 rounded-full px-2 py-0.5">
              Featured
            </span>
          )}
          <h3 className="text-base font-bold text-white truncate group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {(project.stars > 0 || project.forks > 0) && (
            <div className="hidden sm:flex items-center gap-2.5 text-neutral-600 text-xs">
              {project.stars > 0 && (
                <span className="flex items-center gap-1">
                  <Star size={11} />
                  {project.stars}
                </span>
              )}
              {project.forks > 0 && (
                <span className="flex items-center gap-1">
                  <GitFork size={11} />
                  {project.forks}
                </span>
              )}
            </div>
          )}

          <div className="flex gap-1.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 rounded-lg text-neutral-600 hover:text-white hover:bg-neutral-800 transition-all"
            >
              <Github size={15} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-1.5 rounded-lg text-neutral-600 hover:text-white hover:bg-neutral-800 transition-all"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlights — only shown on featured cards */}
      {featured && project.highlights.length > 0 && (
        <ul className="mb-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-xs text-neutral-500"
            >
              <div className="w-1 h-1 rounded-full bg-neutral-700 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 rounded-md text-[11px] text-neutral-500 font-mono tracking-tight"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
