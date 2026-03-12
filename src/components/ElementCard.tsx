import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { Element, ElementCategory } from '@/lib/types';

const categoryConfig: Record<
  ElementCategory,
  { label: string; color: string; bg: string }
> = {
  'light-structural': {
    label: 'Light/Structural',
    color: 'text-violet-300',
    bg: 'bg-violet-900/40 border-violet-500/30',
  },
  'reactive-active': {
    label: 'Reactive/Active',
    color: 'text-amber-300',
    bg: 'bg-amber-900/40 border-amber-500/30',
  },
  'transition-resistant': {
    label: 'Transition/Resistant',
    color: 'text-cyan-300',
    bg: 'bg-cyan-900/40 border-cyan-500/30',
  },
  'refractory-heavy': {
    label: 'Refractory/Heavy',
    color: 'text-purple-300',
    bg: 'bg-purple-900/40 border-purple-500/30',
  },
};

interface ElementCardProps {
  element: Element;
}

export default function ElementCard({ element }: ElementCardProps) {
  const cfg = categoryConfig[element.category];

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <Link
        href={`/elements/${element.symbol}`}
        aria-label={`View ${element.name} (${element.symbol}) element details`}
        className="block"
      >
        <div
          className="relative rounded-xl border border-white/10 bg-[#0d1426]/80 backdrop-blur-sm overflow-hidden
            hover:border-current transition-all duration-300 p-4 h-full"
          style={{ '--accent': element.color } as React.CSSProperties}
        >
          {/* Glow overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${element.color}22 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />

          {/* Atomic number */}
          <span
            className="absolute top-3 left-3 text-xs font-mono text-gray-500"
            aria-label={`Atomic number ${element.atomicNumber}`}
          >
            {element.atomicNumber}
          </span>

          {/* Symbol */}
          <div className="flex justify-center mt-4 mb-2">
            <span
              className={clsx(
                'text-5xl font-bold font-mono transition-all duration-300',
                'group-hover:drop-shadow-[0_0_12px_var(--accent)]'
              )}
              style={{ color: element.color }}
              aria-label={`Element symbol ${element.symbol}`}
            >
              {element.symbol}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-center text-sm font-semibold text-white mb-3">
            {element.name}
          </h3>

          {/* Category badge */}
          <div className="flex justify-center mb-3">
            <span
              className={clsx(
                'text-xs px-2 py-0.5 rounded-full border font-medium',
                cfg.color,
                cfg.bg
              )}
            >
              {cfg.label}
            </span>
          </div>

          {/* Properties */}
          <dl className="grid grid-cols-2 gap-1 text-xs">
            <div>
              <dt className="text-gray-500">Melting Pt</dt>
              <dd className="text-gray-300 font-mono">{element.meltingPoint}°C</dd>
            </div>
            <div>
              <dt className="text-gray-500">Density</dt>
              <dd className="text-gray-300 font-mono">{element.density} g/cm³</dd>
            </div>
          </dl>
        </div>
      </Link>
    </motion.div>
  );
}
