'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity } from 'lucide-react';

const printParams = [
  { param: 'Layer Height', value: '30 μm' },
  { param: 'Laser Power', value: '180 W' },
  { param: 'Scan Speed', value: '1200 mm/s' },
  { param: 'Hatch Spacing', value: '80 μm' },
  { param: 'Platform Temp', value: '200 °C' },
  { param: 'Build Atmosphere', value: 'Ar < 50 ppm O₂' },
];

export default function SmartBonePage() {
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
          className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0a1a14] to-[#0f2820] p-8 mb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#10b98115_0%,transparent_60%)]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="text-emerald-400" size={24} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Product · Research
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3">Smart Bone Bio-Implant</h1>
            <p className="text-gray-400 max-w-2xl">
              A biocompatible Ti-V alloy orthopedic screw with indium surface doping for
              real-time impedance-based osseointegration monitoring.
            </p>
            <div className="flex gap-2 mt-4">
              {['Ti', 'V', 'In'].map((sym) => (
                <Link
                  key={sym}
                  href={`/elements/${sym}`}
                  className="text-sm font-mono px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                  aria-label={`View element ${sym}`}
                >
                  {sym}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Alloy Base */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="alloy-heading"
          className="mb-12"
        >
          <h2 id="alloy-heading" className="text-xl font-bold mb-5 text-[#00d4ff]">
            § 1 — Ti-V Alloy Base
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-5">
              <h3 className="font-semibold text-[#00d4ff] mb-2 text-sm">
                <Link href="/elements/Ti" className="hover:underline" aria-label="View Titanium element">Ti</Link> — Titanium Scaffold
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li>› Ti-6Al-4V ELI (Extra Low Interstitial) grade for implant use.</li>
                <li>› Elastic modulus 110 GPa — closest to cortical bone (10–30 GPa) of any metal.</li>
                <li>› TiO₂ passive layer prevents ion leaching; FDA-cleared for permanent implants.</li>
                <li>› Osseointegration rate &gt; 97% at 12-week follow-up in clinical trials.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/5 p-5">
              <h3 className="font-semibold text-[#7c3aed] mb-2 text-sm">
                <Link href="/elements/V" className="hover:underline" aria-label="View Vanadium element">V</Link> — Vanadium Beta Stabiliser
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li>› 4 wt% V stabilises β-Ti phase, improving machinability and fatigue life.</li>
                <li>› Increases tensile strength from 900 MPa (CP-Ti) to 1100 MPa.</li>
                <li>› V concentration in tissue &lt; 0.1 ppb post-implantation — clinically acceptable.</li>
                <li>› Co-precipitation of TiV₂ intermetallic strengthens grain boundaries.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Indium Doping */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="in-heading"
          className="mb-12"
        >
          <h2 id="in-heading" className="text-xl font-bold mb-5 text-[#f59e0b]">
            § 2 — In (49) Surface Doping for Impedance Sensing
          </h2>
          <div className="rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-5">
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              A 50 nm indium-tin-oxide (ITO) sputtered film on the screw&apos;s cortical contact surface
              acts as a bio-impedance electrode. As bone mineralises around the implant, the
              dielectric constant of the surrounding tissue changes — the ITO sensor detects this
              shift and wirelessly reports it via near-field NFC at 13.56 MHz.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="font-mono text-[#f59e0b] font-bold mb-1">50 nm</div>
                <div className="text-gray-500">ITO Film Thickness</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="font-mono text-[#f59e0b] font-bold mb-1">13.56 MHz</div>
                <div className="text-gray-500">NFC Carrier</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="font-mono text-[#f59e0b] font-bold mb-1">± 2%</div>
                <div className="text-gray-500">Impedance Accuracy</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3D Print Params */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="print-heading"
          className="mb-12"
        >
          <h2 id="print-heading" className="text-xl font-bold mb-5 text-[#00d4ff]">
            § 3 — L-PBF Print Parameters for Orthopedic Screws
          </h2>
          <dl className="rounded-xl border border-white/10 bg-[#0d1426]/60 divide-y divide-white/5 overflow-hidden">
            {printParams.map(({ param, value }) => (
              <div key={param} className="flex items-center justify-between px-5 py-3">
                <dt className="text-sm text-gray-400">{param}</dt>
                <dd className="text-sm font-mono text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* Connectivity diagram */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="connect-heading"
        >
          <h2 id="connect-heading" className="text-xl font-bold mb-5 text-[#7c3aed]">
            § 4 — Connectivity: Implant → Tablet
          </h2>
          <div
            className="flex flex-wrap items-center gap-0 justify-start"
            role="img"
            aria-label="Connectivity pipeline: ITO Sensor to NFC Transceiver to BLE Bridge to Tablet App to Cloud Dashboard"
          >
            {['ITO Sensor', 'NFC 13.56 MHz', 'BLE Bridge', 'Tablet App', 'Cloud Dashboard'].map(
              (node, i, arr) => (
                <div key={node} className="flex items-center">
                  <div className="rounded-lg border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-3 py-2 text-xs font-semibold text-[#7c3aed] min-w-[90px] text-center">
                    {node}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center mx-1" aria-hidden="true">
                      <div className="w-5 h-px bg-[#7c3aed]/40" />
                      <div className="w-0 h-0 border-t-3 border-b-3 border-l-3 border-t-transparent border-b-transparent border-l-[#7c3aed]/60" />
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
