'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/elements', label: 'Elements' },
  { href: '/projects', label: 'Projects' },
  { href: '/ai-tools', label: 'AI Tools' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header
      role="banner"
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#00d4ff]/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[#00d4ff] hover:text-white transition-colors"
          aria-label="ElementLab home"
        >
          <span className="text-2xl" aria-hidden="true">⚗</span>
          <span>ElementLab</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00d4ff] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/elements"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border border-[#00d4ff]/50 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all"
          aria-label="Start prototyping elements"
        >
          Prototype Now
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-[#0a0f1e]/95 backdrop-blur-md border-b border-[#00d4ff]/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-[#00d4ff] hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/elements"
                onClick={() => setMenuOpen(false)}
                className="block mt-2 px-4 py-2 rounded-full text-sm font-semibold text-center border border-[#00d4ff]/50 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all"
                aria-label="Start prototyping elements"
              >
                Prototype Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
