import Link from 'next/link';
import { FlaskConical, Github, Atom } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/elements', label: 'Element Library' },
  { href: '/projects', label: 'Projects' },
  { href: '/ai-tools', label: 'AI Tools' },
];

const categories = [
  { label: 'Light / Structural', href: '/elements?cat=light-structural' },
  { label: 'Reactive / Active', href: '/elements?cat=reactive-active' },
  { label: 'Transition / Resistant', href: '/elements?cat=transition-resistant' },
  { label: 'Refractory / Heavy', href: '/elements?cat=refractory-heavy' },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#060a14] border-t border-[#00d4ff]/10 text-gray-400"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-[#00d4ff] hover:text-white transition-colors w-fit"
              aria-label="ElementLab home"
            >
              <span className="text-2xl" aria-hidden="true">⚗</span>
              <span>ElementLab</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500 max-w-sm">
              Advanced material science prototyping platform. Design high-entropy
              alloys, functionally graded materials, and next-generation composites
              powered by combinatorial AI.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ElementLab on GitHub"
                className="text-gray-500 hover:text-[#00d4ff] transition-colors"
              >
                <Github size={18} aria-hidden="true" />
              </a>
              <a
                href="/ai-tools"
                aria-label="AI Tools"
                className="text-gray-500 hover:text-[#7c3aed] transition-colors"
              >
                <FlaskConical size={18} aria-hidden="true" />
              </a>
              <a
                href="/elements"
                aria-label="Element Library"
                className="text-gray-500 hover:text-[#f59e0b] transition-colors"
              >
                <Atom size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#00d4ff] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Element Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Element Categories
            </h3>
            <ul className="space-y-2" role="list">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm hover:text-[#00d4ff] transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} ElementLab. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <span className="text-[#00d4ff]">Next.js 15</span>
            {' & '}
            <span className="text-[#7c3aed]">Advanced Materials Science</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
