import React, { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const NAV_ITEMS = ['About', 'Projects', 'Skills', 'Experience', 'Contact'] as const;

const SOCIAL_LINKS = [
  { href: 'https://github.com/Shadab-2604', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/shaikh-shadab-8937b7281/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'https://instagram.com/_shad.dev_', icon: Instagram, label: 'Instagram' },
];

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') !== 'light'
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Apply dark mode to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mouse-glow tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Active-section highlight via IntersectionObserver
  useEffect(() => {
    const ids = ['hero', ...NAV_ITEMS.map((n) => n.toLowerCase())];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Close mobile menu on nav click
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">

        {/* Global mouse-glow (dark mode only, desktop) */}
        {darkMode && (
          <div
            className="pointer-events-none fixed inset-0 z-20 hidden md:block transition-none"
            style={{
              background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,229,255,0.042), transparent 40%)`,
            }}
          />
        )}

        {/* ── Navbar ─────────────────────────────────────────── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'py-3 bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-color)]'
              : 'py-5 bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-mono text-xl font-bold tracking-wider text-cyan-neon hover:glow-text transition-all duration-300"
            >
              SHADAB<span className="text-[var(--text-secondary)]">.DEV</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const active = activeSection === item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative text-sm font-medium transition-colors duration-200 group ${
                      active
                        ? 'text-cyan-neon'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-cyan-neon transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
              <a
                href="https://blog-iota-ten-88.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
              >
                Blogs
                <span className="absolute -bottom-0.5 left-0 h-px bg-cyan-neon w-0 group-hover:w-full transition-all duration-300" />
              </a>
              <button
                onClick={() => setDarkMode((p) => !p)}
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-neon hover:border-cyan-neon/40 transition-all duration-200"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode((p) => !p)}
                aria-label="Toggle theme"
                className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-neon transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen((p) => !p)}
                aria-label="Toggle menu"
                className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-neon transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 mx-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/95 backdrop-blur-2xl overflow-hidden shadow-card">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={`block px-5 py-3.5 text-sm font-medium border-b border-[var(--border-color)] last:border-0 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-neon bg-cyan-neon/5'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://blog-iota-ten-88.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block px-5 py-3.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20 transition-colors"
              >
                Blogs
              </a>
            </div>
          )}
        </nav>

        {/* ── Sections ───────────────────────────────────────── */}
        <main>
          <Hero darkMode={darkMode} />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="font-mono text-sm font-bold text-cyan-neon mb-1">SHADAB.DEV</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  © 2024 Shaikh Shadab. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-neon hover:border-cyan-neon/40 hover:shadow-glow-sm transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
