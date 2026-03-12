'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';

export default function RTGHeatsinkPage() {
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
          className="relative rounded-2xl border border-[#f59e0b]/20 bg-gradient-to-br from-[#140a00] to-[#1e1000] p-8 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f59e0b12_0%,transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-[#f59e0b]" size={24} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
                Product · Theoretical
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">RTG Nuclear Heat Sink</h1>
            <p className="text-gray-400 max-w-2xl">
              Passive heat management for Pu-238 Radioisotope Thermoelectric Generator systems
              powering deep-space probes. Caesium glass, dysprosium fins, and tungsten containment.
            </p>
            <div className="flex gap-2 mt-4">
              {['Pu', 'Cs', 'Dy', 'W'].map((sym) => (
                <Link
                  key={sym}
                  href={`/elements/${sym}`}
                  className="text-sm font-mono px-3 py-1 rounded-full border border-[#f59e0b]/30 text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-colors"
                  aria-label={`View element ${sym}`}
                >
                  {sym}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pu-238 Fuel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="fuel-heading"
          className="mb-12"
        >
          <h2 id="fuel-heading" className="text-xl font-bold mb-5 text-[#f59e0b]">
            § 1 — Pu-238 Fuel Source
          </h2>
          <div className="rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-5">
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Plutonium-238 undergoes spontaneous alpha decay (half-life 87.7 years) releasing
              5.5 MeV per decay event. Each gram of Pu-238 produces approximately 0.54 W of
              thermal power continuously, with only 0.8% power degradation per year.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              NASA&apos;s MMRTG (Multi-Mission RTG) uses 4.8 kg of PuO₂ producing 2,000 W thermal
              and 110 W electrical (η ≈ 6%). The Cassini mission ran for 20 years on three GPHS-RTG
              units, demonstrating the extraordinary longevity of this power system.
            </p>
          </div>
        </motion.section>

        {/* Cs Glass */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="cs-heading"
          className="mb-12"
        >
          <h2 id="cs-heading" className="text-xl font-bold mb-5 text-[#00d4ff]">
            § 2 — Cs (55) Borosilicate Glass Thermal Gradient
          </h2>
          <div className="rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-5">
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Caesium borosilicate glass (Cs₂O-B₂O₃-SiO₂) is used as a radial thermal gradient
              management medium. Its exceptionally low thermal conductivity (0.8 W/m·K) and
              high viscosity at operating temperatures (600–800 °C) allow it to function as a
              thermal &ldquo;buffer&rdquo; between the hot Pu fuel pellet and the thermoelectric modules.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The high atomic number of Cs (55) also provides secondary gamma-ray shielding within
              the glass matrix, reducing dose to external electronics by an additional 15%.
            </p>
          </div>
        </motion.section>

        {/* Dy Fins */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="dy-heading"
          className="mb-12"
        >
          <h2 id="dy-heading" className="text-xl font-bold mb-5 text-[#7c3aed]">
            § 3 — Dy (66) Magnetocaloric Heat Flow Control
          </h2>
          <div className="rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/5 p-5">
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Dysprosium has the highest magnetic moment of any known element (10.6 μB per atom).
              Near its Curie temperature (~88 K), Dy alloy fins exhibit a large magnetocaloric
              effect — applying or removing a magnetic field causes reversible temperature changes
              of up to 5 K.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              In the RTG context, this enables passive thermomagnetic switching: at high load,
              Dy fins enter the paramagnetic state, becoming transparent to heat flow. At low
              load, they re-enter the ferromagnetic state and act as directional heat valves,
              channeling heat preferentially toward the thermoelectric elements.
            </p>
          </div>
        </motion.section>

        {/* W Containment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="w-heading"
          className="mb-12"
        >
          <h2 id="w-heading" className="text-xl font-bold mb-5 text-[#f59e0b]">
            § 4 — W (74) Containment Vessel
          </h2>
          <div className="rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-5">
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              The primary containment vessel is machined from a tungsten alloy (W-5%Re). Tungsten&apos;s
              melting point of 3422 °C ensures structural integrity even under re-entry heating
              scenarios (surface temperature ~ 1600 °C). The 10 mm wall thickness reduces
              alpha-particle flux to zero and attenuates gamma emissions below mission dose limits.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Re-addition of 5% rhenium suppresses the ductile-to-brittle transition temperature,
              maintaining toughness from −200 °C (deep space) to 1500 °C (re-entry), covering
              the full mission thermal envelope.
            </p>
          </div>
        </motion.section>

        {/* Thermoelectric generation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="teg-heading"
        >
          <h2 id="teg-heading" className="text-xl font-bold mb-5 text-[#00d4ff]">
            § 5 — Thermoelectric Generation
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            PbTe thermoelectric unicouples convert the radial temperature gradient (ΔT ~ 500 °C)
            directly to electricity via the Seebeck effect (ZT ≈ 1.4 at 500 °C). No moving parts,
            no maintenance, guaranteed operation for the mission lifetime of 17+ years.
          </p>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Thermal Power', value: '2,000 W' },
              { label: 'Electrical Output', value: '110 W' },
              { label: 'Efficiency (η)', value: '~6%' },
              { label: 'Design Life', value: '17+ yr' },
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
