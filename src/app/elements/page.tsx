'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import clsx from 'clsx';
import ElementCard from '@/components/ElementCard';
import { elements } from '@/lib/data/elements';
import type { ElementCategory } from '@/lib/types';

type FilterTab = 'all' | ElementCategory;

const tabs: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'light-structural', label: 'Light / Structural' },
  { value: 'reactive-active', label: 'Reactive / Active' },
  { value: 'transition-resistant', label: 'Transition / Resistant' },
  { value: 'refractory-heavy', label: 'Refractory / Heavy' },
];

export default function ElementsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return elements.filter((el) => {
      const matchesCat = activeTab === 'all' || el.category === activeTab;
      const matchesSearch =
        !q ||
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        String(el.atomicNumber).includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Element <span className="gradient-text">Library</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            22 curated elements for advanced materials prototyping — from lightweight structural
            aluminium to exotic transuranic actinides.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <label htmlFor="element-search" className="sr-only">Search elements by name or symbol</label>
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="element-search"
            type="search"
            placeholder="Search by name or symbol…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
            aria-label="Search elements by name or symbol"
          />
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter elements by category"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={clsx(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all border',
                activeTab === tab.value
                  ? 'bg-[#00d4ff]/15 border-[#00d4ff]/60 text-[#00d4ff]'
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-xs text-gray-500 mb-6" aria-live="polite">
          Showing {filtered.length} of {elements.length} elements
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            role="list"
            aria-label="Element cards"
          >
            {filtered.map((el, i) => (
              <motion.div
                key={el.symbol}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                role="listitem"
              >
                <ElementCard element={el} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500" role="status" aria-live="polite">
            <p className="text-lg">No elements found matching &ldquo;{search}&rdquo;</p>
            <button
              type="button"
              onClick={() => { setSearch(''); setActiveTab('all'); }}
              className="mt-4 text-sm text-[#00d4ff] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
