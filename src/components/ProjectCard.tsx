import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { Project, DifficultyLevel } from '@/lib/types';

const difficultyConfig: Record<DifficultyLevel, { label: string; color: string }> = {
  research: { label: 'Research', color: 'text-cyan-300 bg-cyan-900/40 border-cyan-500/30' },
  prototype: { label: 'Prototype', color: 'text-amber-300 bg-amber-900/40 border-amber-500/30' },
  theoretical: { label: 'Theoretical', color: 'text-purple-300 bg-purple-900/40 border-purple-500/30' },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const diff = difficultyConfig[project.difficulty];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group h-full"
    >
      <Link
        href={`/projects/${project.id}`}
        aria-label={`View project: ${project.title}`}
        className="block h-full"
      >
        <article
          className="relative rounded-xl border border-white/10 overflow-hidden h-full flex flex-col
            hover:border-[#00d4ff]/30 transition-all duration-300"
          style={{ background: project.gradient }}
        >
          {/* Hover shimmer */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <div className="relative p-5 flex flex-col flex-1">
            {/* Difficulty + Category */}
            <div className="flex items-center justify-between mb-3 gap-2">
              <span
                className={clsx(
                  'text-xs px-2 py-0.5 rounded-full border font-medium',
                  diff.color
                )}
              >
                {diff.label}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                {project.category.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[#00d4ff]/80 font-medium mb-3">{project.subtitle}</p>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-3">
              {project.description}
            </p>

            {/* Hero Elements */}
            <div className="flex flex-wrap gap-1.5 mt-4" aria-label="Featured elements">
              {project.heroElements.map((sym) => (
                <span
                  key={sym}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#00d4ff]"
                  aria-label={`Element ${sym}`}
                >
                  {sym}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 bg-white/3 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
