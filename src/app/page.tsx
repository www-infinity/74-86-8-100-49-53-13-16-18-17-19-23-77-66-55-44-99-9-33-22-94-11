'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Atom, FlaskConical, Layers, Zap } from 'lucide-react';
import PhysicsCanvas from '@/components/PhysicsCanvas';
import TypewriterText from '@/components/TypewriterText';
import ElementCard from '@/components/ElementCard';
import ProjectCard from '@/components/ProjectCard';
import LayerDiagram from '@/components/LayerDiagram';
import { elements, elementMap } from '@/lib/data/elements';
import { projects } from '@/lib/data/projects';
import type { Layer } from '@/lib/types';

const FEATURED_SYMBOLS = ['Ti', 'W', 'Ir', 'Al', 'Ru', 'V', 'Dy', 'In'];
const featuredElements = FEATURED_SYMBOLS.flatMap((s) => {
  const el = elementMap.get(s);
  return el ? [el] : [];
});

const universalShieldLayers: Layer[] = [
  {
    name: 'Outer Layer — Lightweight Skin',
    elements: ['Al', 'Ti'],
    color: '#00d4ff',
    description:
      'Aluminium 6061 + Ti-6Al-4V composite. Low density (2.7–4.5 g/cm³), natural oxide passivation, and mechanical compliance absorb kinetic energy at the impact face.',
  },
  {
    name: 'Core Layer — Extreme Toughness HEA',
    elements: ['Fe', 'Ni', 'Cr', 'Co', 'Mn'],
    color: '#7c3aed',
    description:
      'Cantor-type CrMnFeCoNi HEA with exceptional work-hardening. Designed via CALPHAD to maintain single FCC phase up to 800 °C with fracture toughness > 200 MPa·m½.',
  },
  {
    name: 'Inner Layer — Refractory Barrier',
    elements: ['W', 'Ta', 'Re'],
    color: '#f59e0b',
    description:
      'Tungsten-tantalum-rhenium refractory alloy at > 60 wt% W. Halts gamma rays and thermal spikes above 2000 °C, protecting the structural core from plasma-level heat loads.',
  },
];

const stats = [
  { value: '22', label: 'Elements', icon: Atom },
  { value: '6', label: 'Prototype Projects', icon: FlaskConical },
  { value: '4', label: 'Hero Products', icon: Layers },
  { value: '∞', label: 'Compositions', icon: Zap },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        aria-label="Hero section"
      >
        <PhysicsCanvas />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00d4ff] border border-[#00d4ff]/30 rounded-full px-4 py-1.5 mb-6 bg-[#00d4ff]/5">
              Advanced Material Science Prototyping
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight"
          >
            <span className="gradient-text">
              <TypewriterText
                texts={[
                  'High-Entropy Alloys',
                  'Functionally Graded Materials',
                  'Radiation-Shielding Composites',
                  'Smart Bio-Implants',
                ]}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Prototyping the next generation of advanced materials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/elements"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00d4ff] text-[#0a0f1e] font-bold text-sm hover:bg-cyan-300 transition-all glow-cyan"
              aria-label="Explore all elements in the library"
            >
              Explore Elements
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#7c3aed]/60 text-[#7c3aed] font-bold text-sm hover:bg-[#7c3aed]/10 hover:border-[#7c3aed] transition-all"
              aria-label="View all material science projects"
            >
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce" aria-hidden="true">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#00d4ff]/40" />
          <span className="text-xs tracking-widest">SCROLL</span>
        </div>
      </section>

      {/* ── Elements Strip ── */}
      <section className="py-20 px-4" aria-labelledby="elements-strip-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              id="elements-strip-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              Featured Elements
            </motion.h2>
            <Link
              href="/elements"
              className="text-sm text-[#00d4ff] hover:underline flex items-center gap-1"
              aria-label="View all 22 elements in the library"
            >
              View all 22 <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin"
            role="list"
            aria-label="Featured elements"
          >
            {featuredElements.map((el, i) => (
              <motion.div
                key={el.symbol}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-shrink-0 w-40"
                role="listitem"
              >
                <Suspense fallback={<div className="w-40 h-52 rounded-xl bg-white/5 animate-pulse" />}>
                  <ElementCard element={el} />
                </Suspense>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-20 px-4 bg-[#060a14]" aria-labelledby="projects-grid-title">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="projects-grid-title" className="text-3xl font-black mb-3">
              Prototype Projects
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From deep-space radiation tiles to smart bone implants — explore the full project portfolio.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="All prototype projects"
          >
            {projects.map((proj, i) => (
              <motion.div
                key={proj.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="listitem"
              >
                <ProjectCard project={proj} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FGM Shield Preview ── */}
      <section className="py-20 px-4" aria-labelledby="fgm-preview-title">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 id="fgm-preview-title" className="text-3xl font-black mb-3">
              FGM Universal Shield — Cross Section
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              A three-layer functionally graded armor system. Each layer is engineered with a
              distinct elemental composition and continuously graded transitions eliminate
              delamination failure modes.
            </p>
          </motion.div>
          <LayerDiagram layers={universalShieldLayers} />
          <div className="flex justify-center mt-6">
            <Link
              href="/projects/universal-shield"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#7c3aed]/60 text-[#7c3aed] text-sm font-semibold hover:bg-[#7c3aed]/10 transition-all"
              aria-label="View full FGM Universal Shield project"
            >
              Full Project Details <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        className="py-16 bg-gradient-to-r from-[#060a14] via-[#0d1426] to-[#060a14] border-y border-white/5"
        aria-label="ElementLab statistics"
      >
        <div className="max-w-4xl mx-auto px-4">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <stat.icon
                  className="mx-auto mb-2 text-[#00d4ff]"
                  size={24}
                  aria-hidden="true"
                />
                <dt className="text-4xl font-black text-white">{stat.value}</dt>
                <dd className="text-sm text-gray-400 mt-1">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

