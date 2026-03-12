'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data/projects';
import type { ProjectCategory } from '@/lib/types';

type FilterTab = 'all' | ProjectCategory;

const tabs: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'hea', label: 'High-Entropy Alloys' },
  { value: 'fgm', label: 'Functionally Graded' },
  { value: 'product', label: 'Products' },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filtered = projects.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Material Science <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Six prototype projects spanning high-entropy alloys, functionally graded materials,
            and next-generation hardware products.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all border',
                activeTab === tab.value
                  ? 'bg-[#7c3aed]/20 border-[#7c3aed]/60 text-[#7c3aed]'
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Project cards"
        >
          {filtered.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              role="listitem"
            >
              <ProjectCard project={proj} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-20" role="status">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
