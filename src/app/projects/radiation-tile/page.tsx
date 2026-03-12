'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Satellite } from 'lucide-react';

const layers = [
  {
    label: 'Structural Frame',
    element: 'Al (13)',
    color: '#00d4ff',
    role: 'Lightweight CubeSat chassis. Al 6061-T6, 1.2 mm wall. Mass budget < 80 g for a 1U tile.',
  },
  {
    label: 'Gamma-Ray Foil',
    element: 'W (74)',
    color: '#7c3aed',
    role: '0.3 mm tungsten foil laminated behind Al skin. Attenuates > 95% of 1 MeV gamma photons.',
  },
  {
    label: 'Ignition-Resistant Fasteners',
    element: 'Ir (77)',
    color: '#f59e0b',
    role: 'Iridium M2 screws. Melting point 2446 °C, immune to atomic oxygen erosion in LEO.',
  },
];

export default function RadiationTilePage() {
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
          className="relative rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#050a14] to-[#0f1525] p-8 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#00d4ff10_0%,transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <Satellite className="text-[#00d4ff]" size={24} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff]">
                Product · Prototype
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">Deep-Space Radiation Tile</h1>
            <p className="text-gray-400 max-w-2xl">
              A compact multi-material shielding tile engineered to protect CubeSat electronics
              from high-energy solar proton events and galactic cosmic rays.
            </p>
          </div>
        </motion.div>

        {/* Use Case */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="usecase-heading"
          className="mb-12"
        >
          <h2 id="usecase-heading" className="text-xl font-bold mb-4 text-[#00d4ff]">
            Use Case — CubeSat Protection
          </h2>
          <div className="rounded-xl border border-white/10 bg-[#0d1426]/60 p-5 text-sm text-gray-400 leading-relaxed">
            <p className="mb-3">
              A 3U CubeSat in a 600 km polar orbit encounters annual total ionizing dose of
              ~5 krad(Si) during solar maximum. The on-board CMOS imaging sensor fails above 2 krad
              without shielding. This tile reduces dose by a factor of 30 using just 90 g of additional mass.
            </p>
            <p>
              During a Carrington-class solar proton event (fluence: 10¹⁰ protons/cm²), unshielded
              electronics would be permanently damaged. The Al + W layered tile reduces proton
              penetration depth below the CMOS active layer, preventing single-event burnout.
            </p>
          </div>
        </motion.section>

        {/* Material Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="stack-heading"
          className="mb-12"
        >
          <h2 id="stack-heading" className="text-xl font-bold mb-6 text-[#7c3aed]">
            Material Stack — Smart Armor Diagram
          </h2>
          <div
            className="rounded-xl border border-white/10 overflow-hidden"
            role="img"
            aria-label="Smart armor diagram showing Al structural frame, W gamma-ray foil, and Ir fasteners"
          >
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 px-6 py-5 border-b border-white/5 last:border-0"
                style={{
                  background: `linear-gradient(90deg, ${layer.color}15 0%, transparent 100%)`,
                  borderLeft: `3px solid ${layer.color}`,
                }}
              >
                <div className="flex-shrink-0 text-center">
                  <Link
                    href={`/elements/${layer.element.split(' ')[0]}`}
                    className="font-mono text-xl font-black hover:underline"
                    style={{ color: layer.color }}
                    aria-label={`View element ${layer.element}`}
                  >
                    {layer.element}
                  </Link>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1">{layer.label}</h3>
                  <p className="text-xs text-gray-400">{layer.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Performance Targets */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="perf-heading"
        >
          <h2 id="perf-heading" className="text-xl font-bold mb-5 text-[#f59e0b]">
            Performance Targets
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'TID Reduction', value: '30×' },
              { label: 'Mass Budget', value: '< 90 g' },
              { label: 'Operating Temp', value: '−150 to +120 °C' },
              { label: 'Thickness', value: '4.5 mm total' },
              { label: 'Proton Attenuation', value: '95%' },
              { label: 'AO Erosion Rate', value: '< 0.01 μm/yr' },
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
