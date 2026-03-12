'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FlaskConical } from 'lucide-react';

const baseMatrix = [
  { sym: 'Fe', name: 'Iron', pct: '15–20%' },
  { sym: 'Co', name: 'Cobalt', pct: '15–20%' },
  { sym: 'Ni', name: 'Nickel', pct: '15–20%' },
  { sym: 'Cr', name: 'Chromium', pct: '15–20%' },
  { sym: 'Cu', name: 'Copper', pct: '10–15%' },
  { sym: 'Al', name: 'Aluminium', pct: '5–10%' },
];

const microDoping = [
  { sym: 'Ti', name: 'Titanium', pct: '0.5–2%' },
  { sym: 'Zr', name: 'Zirconium', pct: '0.1–1%' },
  { sym: 'Y', name: 'Yttrium', pct: '0.1–0.5%' },
  { sym: 'Sc', name: 'Scandium', pct: '0.1–0.5%' },
];

const refractoryAdditions = [
  { sym: 'W', name: 'Tungsten', pct: '5–15%' },
  { sym: 'Mo', name: 'Molybdenum', pct: '5–10%' },
  { sym: 'Ta', name: 'Tantalum', pct: '2–8%' },
  { sym: 'Nb', name: 'Niobium', pct: '2–8%' },
];

const testingProtocols = [
  {
    name: "Young's Modulus",
    detail: 'Nano-indentation array across 100 compositional grid points. Target: 180–220 GPa.',
  },
  {
    name: 'Thermal Conductivity',
    detail: 'Laser flash diffusivity from 25 °C to 800 °C. Target: < 10 W/m·K for insulating HEAs.',
  },
  {
    name: 'Magnetic Invar Effect',
    detail:
      'VSM measurement of magnetization vs temperature. Zero-CTE compositions selected by anomalous thermal contraction.',
  },
  {
    name: 'Lattice Distortion / Cocktail Effect',
    detail:
      'XRD peak broadening quantifies lattice strain. Synergistic hardness exceeding rule-of-mixtures confirms cocktail effect.',
  },
];

export default function HEARecipePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
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
          className="relative rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#0a0f1e] to-[#1a1040] p-8 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00d4ff15_0%,transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <FlaskConical className="text-[#00d4ff]" size={24} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff]">
                HEA · Research
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">HEA Master Recipe</h1>
            <p className="text-gray-400 max-w-2xl">
              A systematic combinatorial framework for designing multi-principal-element alloys
              using CALPHAD thermodynamics and machine-learning-guided composition optimization.
            </p>
          </div>
        </motion.div>

        {/* Section 1 — The Recipe */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="recipe-heading"
          className="mb-14"
        >
          <h2 id="recipe-heading" className="text-2xl font-bold mb-6 text-[#00d4ff]">
            § 1 — The Recipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Base Matrix */}
            <div className="rounded-xl border border-[#00d4ff]/20 bg-[#0d1426]/60 p-5">
              <h3 className="text-sm font-bold text-[#00d4ff] uppercase tracking-wider mb-4">
                Base Matrix
              </h3>
              <p className="text-xs text-gray-500 mb-4">15–20 at.% each principal element</p>
              <ul className="space-y-2" role="list">
                {baseMatrix.map((el) => (
                  <li key={el.sym} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/elements/${el.sym}`}
                        className="font-mono text-sm font-bold text-[#00d4ff] hover:underline"
                        aria-label={`View ${el.name} element`}
                      >
                        {el.sym}
                      </Link>
                      <span className="text-xs text-gray-400">{el.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#f59e0b]">{el.pct}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro-Doping */}
            <div className="rounded-xl border border-[#7c3aed]/20 bg-[#0d1426]/60 p-5">
              <h3 className="text-sm font-bold text-[#7c3aed] uppercase tracking-wider mb-4">
                Micro-Doping
              </h3>
              <p className="text-xs text-gray-500 mb-4">0.1–2 at.% grain-boundary modifiers</p>
              <ul className="space-y-2" role="list">
                {microDoping.map((el) => (
                  <li key={el.sym} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/elements/${el.sym}`}
                        className="font-mono text-sm font-bold text-[#7c3aed] hover:underline"
                        aria-label={`View ${el.name} element`}
                      >
                        {el.sym}
                      </Link>
                      <span className="text-xs text-gray-400">{el.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#f59e0b]">{el.pct}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Refractory Additions */}
            <div className="rounded-xl border border-[#f59e0b]/20 bg-[#0d1426]/60 p-5">
              <h3 className="text-sm font-bold text-[#f59e0b] uppercase tracking-wider mb-4">
                Refractory Additions
              </h3>
              <p className="text-xs text-gray-500 mb-4">5–15 at.% for high-T stability</p>
              <ul className="space-y-2" role="list">
                {refractoryAdditions.map((el) => (
                  <li key={el.sym} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/elements/${el.sym}`}
                        className="font-mono text-sm font-bold text-[#f59e0b] hover:underline"
                        aria-label={`View ${el.name} element`}
                      >
                        {el.sym}
                      </Link>
                      <span className="text-xs text-gray-400">{el.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#f59e0b]">{el.pct}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 2 — Prototyping Method */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="method-heading"
          className="mb-14"
        >
          <h2 id="method-heading" className="text-2xl font-bold mb-6 text-[#7c3aed]">
            § 2 — Prototyping Method
          </h2>
          <ol className="space-y-4" aria-label="Prototyping steps">
            {[
              {
                step: '01',
                title: 'CALPHAD Phase Prediction',
                desc: 'Thermodynamic modelling via Thermo-Calc computes phase stability diagrams for candidate HEA compositions across the full temperature range.',
              },
              {
                step: '02',
                title: 'Combinatorial Arc Melting',
                desc: 'A 10×10 compositional grid is arc-melted on a water-cooled copper hearth under argon atmosphere. Each button is 5 g.',
              },
              {
                step: '03',
                title: 'Additive Manufacturing (L-PBF)',
                desc: 'Laser powder bed fusion prints tensile coupons for top candidate compositions. Process parameters: 200 W, 1000 mm/s scan speed, 30 μm layer.',
              },
              {
                step: '04',
                title: 'Rapid Solidification & Splat Quench',
                desc: 'Melt-spun ribbons are produced at 40 m/s wheel speed to capture non-equilibrium metastable HEA phases inaccessible by conventional casting.',
              },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4 rounded-xl border border-white/5 bg-[#0d1426]/40 p-5">
                <span className="flex-shrink-0 text-2xl font-black text-[#7c3aed]/40 font-mono">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Section 3 — Testing Protocol */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="testing-heading"
          className="mb-14"
        >
          <h2 id="testing-heading" className="text-2xl font-bold mb-6 text-[#f59e0b]">
            § 3 — Testing Protocol
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testingProtocols.map(({ name, detail }) => (
              <div
                key={name}
                className="rounded-xl border border-[#f59e0b]/15 bg-[#f59e0b]/5 p-5"
              >
                <dt className="font-semibold text-[#f59e0b] mb-2 text-sm">{name}</dt>
                <dd className="text-xs text-gray-400 leading-relaxed">{detail}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* Section 4 — Digital Twin & AI */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="ai-heading"
          className="mb-8"
        >
          <h2 id="ai-heading" className="text-2xl font-bold mb-6 text-[#00d4ff]">
            § 4 — Digital Twin & AI Pipeline
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-2xl">
            CALPHAD thermodynamic databases feed a Gaussian Process regression model trained on
            experimental hardness, phase fraction, and lattice parameter data. The surrogate model
            predicts properties for 10⁶ unexplored compositions per second.
          </p>

          {/* Pipeline diagram */}
          <div
            className="flex flex-wrap items-center justify-start gap-0 overflow-x-auto pb-2"
            role="img"
            aria-label="AI pipeline: DFT to CALPHAD to ML Surrogate to Composition Optimization to Experimental Validation"
          >
            {['DFT / Ab Initio', 'CALPHAD DB', 'ML Surrogate', 'Composition\nOptimization', 'Experimental\nValidation'].map(
              (label, i, arr) => (
                <div key={label} className="flex items-center">
                  <div className="flex-shrink-0 rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/5 px-3 py-2 text-center min-w-[100px]">
                    <p className="text-xs font-semibold text-[#00d4ff] whitespace-pre-line leading-tight">
                      {label}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center mx-1" aria-hidden="true">
                      <div className="w-6 h-px bg-[#00d4ff]/30" />
                      <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#00d4ff]/50" />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
