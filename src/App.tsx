import React, { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Instagram, ArrowUpRight, ArrowUp } from 'lucide-react';
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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  // Reveal-on-scroll via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Reliable scroll-spy using viewport center band
  useEffect(() => {
    const ids = ['hero', ...NAV_ITEMS.map((n) => n.toLowerCase())];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[var(--bg-primary)]/85 glass-nav border-b border-[var(--border)]'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-sans text-base sm:text-lg font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity"
          >
            SHADAB<span className="text-[var(--text-tertiary)]">.DEV</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-[var(--text-primary)] bg-[var(--bg-tertiary)]'
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="https://blog-iota-ten-88.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
            >
              Blog
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setDarkMode((p) => !p)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ml-2 p-2 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-secondary)] transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode((p) => !p)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 mx-4 rounded-[16px] border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden shadow-lg">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className={`block px-4 py-3 text-sm font-medium border-b border-[var(--border)] transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-[var(--text-primary)] bg-[var(--bg-tertiary)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
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
              className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
            >
              Blog
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-8 md:py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="font-sans text-sm font-semibold text-[var(--text-primary)] tracking-tight mb-0.5">
                SHADAB<span className="text-[var(--text-tertiary)]">.DEV</span>
              </p>
              <p className="text-xs text-[var(--text-tertiary)] mb-0">
                © {new Date().getFullYear()} Shaikh Shadab. Built with React &amp; Tailwind.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
