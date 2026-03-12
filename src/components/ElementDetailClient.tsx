'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import type { Element, Project } from '@/lib/types';

const categoryLabels: Record<string, string> = {
  'light-structural': 'Light / Structural',
  'reactive-active': 'Reactive / Active',
  'transition-resistant': 'Transition / Resistant',
  'refractory-heavy': 'Refractory / Heavy',
};

interface ElementDetailClientProps {
  el: Element;
  relatedProjects: Project[];
}

export default function ElementDetailClient({ el, relatedProjects }: ElementDetailClientProps) {
  const properties = [
    { label: 'Atomic Mass', value: `${el.atomicMass} u` },
    { label: 'Melting Point', value: `${el.meltingPoint} °C` },
    { label: 'Density', value: `${el.density} g/cm³` },
    { label: 'Electron Configuration', value: el.electronConfig },
    { label: 'Category', value: categoryLabels[el.category] ?? el.category },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/elements"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00d4ff] transition-colors mb-8"
          aria-label="Back to element library"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Element Library
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10"
        >
          <div
            className="flex-shrink-0 w-28 h-28 rounded-2xl flex items-center justify-center border border-white/10"
            style={{ background: `${el.color}15`, boxShadow: `0 0 30px ${el.color}22` }}
          >
            <span
              className="text-5xl font-black font-mono"
              style={{ color: el.color }}
              aria-hidden="true"
            >
              {el.symbol}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-mono">#{el.atomicNumber}</p>
            <h1 className="text-4xl font-black text-white">{el.name}</h1>
            <span
              className="mt-2 inline-block text-xs px-3 py-1 rounded-full border font-medium"
              style={{ color: el.color, borderColor: `${el.color}44`, background: `${el.color}15` }}
            >
              {categoryLabels[el.category] ?? el.category}
            </span>
          </div>
        </motion.div>

        {/* Properties table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          aria-labelledby="properties-heading"
          className="mb-10"
        >
          <h2 id="properties-heading" className="text-lg font-bold mb-4 text-[#00d4ff]">
            Properties
          </h2>
          <dl className="rounded-xl border border-white/10 bg-[#0d1426]/60 divide-y divide-white/5 overflow-hidden">
            {properties.map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center px-5 py-3 gap-1">
                <dt className="text-xs text-gray-500 uppercase tracking-wider sm:w-48 flex-shrink-0">
                  {label}
                </dt>
                <dd className="text-sm text-white font-mono">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* Role in Materials Science */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          aria-labelledby="role-heading"
          className="mb-10"
        >
          <h2 id="role-heading" className="text-lg font-bold mb-4 text-[#7c3aed]">
            Role in Materials Science
          </h2>
          <div className="rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/5 p-5">
            <p className="text-gray-300 leading-relaxed">{el.description}</p>
          </div>
        </motion.section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            aria-labelledby="projects-heading"
          >
            <h2 id="projects-heading" className="text-lg font-bold mb-5 text-[#f59e0b]">
              Projects Using {el.symbol}
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              role="list"
              aria-label={`Projects using ${el.name}`}
            >
              {relatedProjects.map((proj) => (
                <div key={proj.id} role="listitem">
                  <ProjectCard project={proj} />
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
