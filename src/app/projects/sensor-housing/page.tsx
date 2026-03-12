'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye } from 'lucide-react';

const environments = [
  {
    icon: '🌋',
    title: 'Active Volcano Monitoring',
    desc: 'SO₂ concentrations > 10,000 ppm, H₂SO₄ mist, temperatures up to 300 °C, and particulate abrasion from ejecta.',
  },
  {
    icon: '🌊',
    title: 'Hadal Zone Deep-Sea',
    desc: '11 km depth, 1100 bar hydrostatic pressure, seawater salinity 35‰ (35 g/kg NaCl), pH 7.8, complete darkness.',
  },
];

const materials = [
  {
    sym: 'Ru',
    name: 'Ruthenium',
    color: '#00d4ff',
    role: '200 nm Ru sputtered coating on all exposed housing surfaces. Electrochemical corrosion potential + 0.45 V vs SHE — noble enough to resist both sulfuric acid (H₂SO₄) and concentrated NaCl brine simultaneously. Zero mass loss after 1000 h salt-spray test (ASTM B117).',
  },
  {
    sym: 'F',
    name: 'Fluorine (PTFE)',
    color: '#7c3aed',
    role: 'PTFE fluoropolymer o-ring gaskets and cable glands. Chemical resistance to all acids, bases, and solvents. Friction coefficient 0.05 — lowest of any solid material. Service temperature −200 °C to +260 °C. Zero moisture permeability.',
  },
  {
    sym: 'S',
    name: 'Sulfur',
    color: '#f59e0b',
    role: 'Test environment agent: Sulfuric acid (H₂SO₄) at pH 1.2 used for accelerated corrosion testing per ISO 9227. Housing materials must survive 500 h immersion without visible degradation or dimensional change > 0.1%.',
  },
];

export default function SensorHousingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#00d4ff] transition-colors mb-8"
          aria-label="Back to projects"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Projects
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl border border-lime-500/20 bg-gradient-to-br from-[#0a1400] to-[#141e00] p-8 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#84cc1615_0%,transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-lime-400" size={24} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                Product · Prototype
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">CMOS Sensor Housing</h1>
            <p className="text-gray-400 max-w-2xl">
              Extreme environment corrosion-proof enclosure for volcano and deep-sea deployment.
              Ruthenium coating and PTFE fluoropolymer gaskets provide zero-maintenance sealing.
            </p>
            <div className="flex gap-2 mt-4">
              {['Ru', 'F', 'S', 'Na', 'Cl'].map((sym) => (
                <Link
                  key={sym}
                  href={`/elements/${sym}`}
                  className="text-sm font-mono px-3 py-1 rounded-full border border-lime-500/30 text-lime-400 hover:bg-lime-500/10 transition-colors"
                  aria-label={`View element ${sym}`}
                >
                  {sym}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Environments */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="env-heading"
          className="mb-12"
        >
          <h2 id="env-heading" className="text-xl font-bold mb-5 text-[#00d4ff]">
            § 1 — Target Deployment Environments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {environments.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/3 p-5"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Materials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="mat-heading"
          className="mb-12"
        >
          <h2 id="mat-heading" className="text-xl font-bold mb-5 text-[#7c3aed]">
            § 2 — Material System
          </h2>
          <div className="space-y-4">
            {materials.map(({ sym, name, color, role }) => (
              <div
                key={sym}
                className="rounded-xl border p-5"
                style={{ borderColor: `${color}30`, background: `${color}08` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Link
                    href={`/elements/${sym}`}
                    className="font-mono text-xl font-black hover:underline"
                    style={{ color }}
                    aria-label={`View element ${sym}`}
                  >
                    {sym}
                  </Link>
                  <span className="text-sm font-semibold text-white">{name}</span>
                </div>
                <p className="text-sm text-gray-400">{role}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-[#00d4ff]/15 bg-[#00d4ff]/5 p-4">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Salt Environment (Na + Cl):</strong> Saline brine
              (3.5% NaCl by mass, simulating seawater) is the primary chloride stress agent in the
              deep-sea test protocol. Na⁺ and Cl⁻ ions penetrate microcracks via capillary action;
              the Ru coating&apos;s impermeability eliminates this failure mode.
            </p>
          </div>
        </motion.section>

        {/* Performance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="perf-heading"
        >
          <h2 id="perf-heading" className="text-xl font-bold mb-5 text-[#f59e0b]">
            § 3 — Housing Performance Specification
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Depth Rating', value: '11,000 m' },
              { label: 'Temp Range', value: '−40 to +320 °C' },
              { label: 'Chemical Resistance', value: 'pH 0–14' },
              { label: 'Seal Rating', value: 'IP69K' },
              { label: 'Ru Coating Life', value: '> 10 yr' },
              { label: 'Mass', value: '< 450 g' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-4 text-center"
              >
                <dt className="text-xs text-gray-500 mb-1">{label}</dt>
                <dd className="text-base font-black text-[#f59e0b]">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.section>
      </div>
    </div>
  );
}
