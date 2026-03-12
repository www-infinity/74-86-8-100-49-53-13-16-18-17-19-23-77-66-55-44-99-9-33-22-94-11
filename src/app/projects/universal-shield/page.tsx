'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import LayerDiagram from '@/components/LayerDiagram';
import type { Layer } from '@/lib/types';

const layers: Layer[] = [
  {
    name: 'Outer Layer — Lightweight Corrosion-Resistant Skin',
    elements: ['Al', 'Ti'],
    color: '#00d4ff',
    description:
      'Aluminium 6061 + Ti-6Al-4V. Density 2.7–4.5 g/cm³. Native Al₂O₃ passivation and TiO₂ coating resist oxidation to 600 °C. Ductile response to kinetic impact absorbs energy at the surface.',
  },
  {
    name: 'Core Layer — Extreme Toughness HEA',
    elements: ['Fe', 'Ni', 'Cr', 'Co', 'Mn'],
    color: '#7c3aed',
    description:
      'CrMnFeCoNi Cantor-type HEA. Fracture toughness > 200 MPa·m½ at cryogenic temperatures. Single FCC phase stable to 800 °C. Work-hardening prevents penetration of residual kinetic energy.',
  },
  {
    name: 'Inner Layer — Refractory Thermal Barrier',
    elements: ['W', 'Ta', 'Re'],
    color: '#f59e0b',
    description:
      'W-Ta-Re refractory alloy (> 60 wt% W). Melting point > 3000 °C. Gamma-ray attenuation coefficient 4× higher than lead. Directs heat flux axially, preventing core thermal degradation.',
  },
];

const amWorkflow = [
  {
    step: '01',
    title: 'Gradient Powder Feeder',
    desc: 'Dual-hopper L-DED (Laser Directed Energy Deposition) continuously varies Al:Ti → HEA → W:Ta powder ratio across 30 mm build height.',
  },
  {
    step: '02',
    title: 'Sintering Under HIP',
    desc: 'Hot isostatic pressing at 1200 °C / 200 MPa for 4 h closes porosity between HEA and refractory layers. Diffusion bonding creates a metallurgically continuous interface.',
  },
  {
    step: '03',
    title: 'Graded Interface Validation',
    desc: 'EDS line scan across the cross-section confirms compositional gradient with no sharp interfaces. Residual stress profiled by neutron diffraction.',
  },
];

export default function UniversalShieldPage() {
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
          className="relative rounded-2xl border border-[#7c3aed]/30 bg-gradient-to-br from-[#0a0f1e] to-[#1a0d2e] p-8 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#7c3aed18_0%,transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-[#7c3aed]" size={24} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
                FGM · Prototype
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">FGM Universal Shield</h1>
            <p className="text-gray-400 max-w-2xl">
              A three-layer functionally graded material system for simultaneous lightweight
              structural performance, extreme toughness, and refractory heat/radiation shielding.
            </p>
          </div>
        </motion.div>

        {/* Layer Diagram */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="layers-heading"
          className="mb-12"
        >
          <h2 id="layers-heading" className="text-2xl font-bold mb-6 text-[#7c3aed]">
            § 1 — FGM Layer Architecture
          </h2>
          <LayerDiagram layers={layers} />
        </motion.section>

        {/* Per-layer deep dive */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="deeplayer-heading"
          className="mb-12"
        >
          <h2 id="deeplayer-heading" className="text-2xl font-bold mb-6 text-[#00d4ff]">
            § 2 — Per-Layer Deep Dive
          </h2>
          <div className="space-y-6">
            {[
              {
                color: '#00d4ff',
                title: 'Outer: Al (13) + Ti (22)',
                subtitle: 'Lightweight / Corrosion-Resistant',
                points: [
                  'Density 2.7 g/cm³ (Al) to 4.5 g/cm³ (Ti); 60% lighter than steel.',
                  'Ti-6Al-4V has specific strength > 200 kN·m/kg — superior to most steels.',
                  'Native TiO₂/Al₂O₃ bilayer passivates in humid, salt-spray, and UV environments.',
                  'Ductile fracture mode ensures energy absorption before core activation.',
                ],
                elements: ['Al', 'Ti'],
              },
              {
                color: '#7c3aed',
                title: 'Core: Fe/Ni/Cr/Co/Mn HEA',
                subtitle: 'Extreme Toughness — Cantor Alloy',
                points: [
                  'Equiatomic CrMnFeCoNi: highest fracture toughness of any known HEA (> 200 MPa·m½).',
                  'Single-phase FCC structure verified by XRD from −196 °C to 800 °C.',
                  'Severe lattice distortion causes cocktail hardness effect exceeding each pure component.',
                  'Strain-induced FCC → HCP phase transformation activates at extreme impact loads.',
                ],
                elements: ['Fe', 'Ni', 'Cr', 'Co', 'Mn'],
              },
              {
                color: '#f59e0b',
                title: 'Inner: W (74) + Ta + Re',
                subtitle: 'Heat-Shielding Refractory Barrier',
                points: [
                  'Tungsten melting point 3422 °C — highest of all metals.',
                  'W-Ta alloy maintains tensile strength > 500 MPa at 1500 °C.',
                  'Gamma-ray mass attenuation coefficient 0.052 cm²/g at 1 MeV — 4× lead equivalence per unit mass.',
                  'Rhenium addition suppresses W recrystallization embrittlement (rhenium effect).',
                ],
                elements: ['W', 'Ta', 'Re'],
              },
            ].map(({ color, title, subtitle, points, elements }) => (
              <div
                key={title}
                className="rounded-xl border p-6"
                style={{ borderColor: `${color}30`, background: `${color}08` }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-lg" style={{ color }}>{title}</h3>
                  <span className="text-xs text-gray-500">{subtitle}</span>
                  <div className="flex gap-1.5">
                    {elements.map((sym) => (
                      <Link
                        key={sym}
                        href={`/elements/${sym}`}
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{ color, background: `${color}20`, border: `1px solid ${color}40` }}
                        aria-label={`View element ${sym}`}
                      >
                        {sym}
                      </Link>
                    ))}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-gray-400">
                      <span style={{ color }} aria-hidden="true">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* AM Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="am-heading"
          className="mb-12"
        >
          <h2 id="am-heading" className="text-2xl font-bold mb-6 text-[#f59e0b]">
            § 3 — Additive Manufacturing Workflow
          </h2>
          <ol className="space-y-4" aria-label="Additive manufacturing steps">
            {amWorkflow.map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4 rounded-xl border border-white/5 bg-[#0d1426]/40 p-5">
                <span className="flex-shrink-0 text-2xl font-black text-[#f59e0b]/40 font-mono">{step}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Physics simulation targets */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="sim-heading"
        >
          <h2 id="sim-heading" className="text-2xl font-bold mb-6 text-[#00d4ff]">
            § 4 — Physics Simulation Targets
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Areal Density', value: '< 25 kg/m²' },
              { label: 'V50 Ballistic', value: '> 900 m/s' },
              { label: 'Peak Temp', value: '2000 °C' },
              { label: 'γ-Ray Reduction', value: '99.9 %' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-4 text-center"
              >
                <dt className="text-xs text-gray-500 mb-1">{label}</dt>
                <dd className="text-lg font-black text-[#00d4ff]">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.section>
      </div>
    </div>
  );
}
