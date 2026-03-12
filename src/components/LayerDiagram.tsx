import { motion } from 'framer-motion';
import type { Layer } from '@/lib/types';

interface LayerDiagramProps {
  layers: Layer[];
}

export default function LayerDiagram({ layers }: LayerDiagramProps) {
  return (
    <div
      className="rounded-xl border border-white/10 overflow-hidden"
      aria-label="Functionally graded material layer diagram"
      role="img"
    >
      {layers.map((layer, i) => (
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="relative flex items-center gap-4 px-6 py-5 border-b border-white/5 last:border-0"
          style={{
            background: `linear-gradient(90deg, ${layer.color}22 0%, ${layer.color}08 60%, transparent 100%)`,
            borderLeft: `3px solid ${layer.color}`,
          }}
        >
          {/* Layer index */}
          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: `${layer.color}33`, color: layer.color, border: `1px solid ${layer.color}55` }}
            aria-hidden="true"
          >
            {i + 1}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h4
                className="text-sm font-bold"
                style={{ color: layer.color }}
              >
                {layer.name}
              </h4>
              {/* Element chips */}
              <div className="flex flex-wrap gap-1" aria-label={`Elements in ${layer.name}`}>
                {layer.elements.map((sym) => (
                  <span
                    key={sym}
                    className="text-xs font-mono px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${layer.color}22`,
                      color: layer.color,
                      border: `1px solid ${layer.color}44`,
                    }}
                  >
                    {sym}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">{layer.description}</p>
          </div>

          {/* Gradient transition indicator (not last) */}
          {i < layers.length - 1 && (
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, ${layer.color}66 0%, ${layers[i + 1].color}66 100%)`,
              }}
              aria-hidden="true"
            />
          )}
        </motion.div>
      ))}

      {/* Composition gradient bar */}
      <div
        className="h-2 w-full"
        style={{
          background: layers.length > 0
            ? `linear-gradient(90deg, ${layers.map((l, i) => `${l.color} ${(i / (layers.length - 1)) * 100}%`).join(', ')})`
            : 'transparent',
        }}
        aria-hidden="true"
        title="Composition gradient from outer to inner layer"
      />
    </div>
  );
}
