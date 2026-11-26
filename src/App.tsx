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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal-on-scroll via IntersectionObserver (CSS only, no animation library)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--bg-primary)]">

        {/* ── Navbar ─────────────────────────────────────────── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
            scrolled
              ? 'py-3 bg-[var(--bg-primary)]/85 glass-nav border-b border-[var(--border)]'
              : 'py-4 bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-sans text-lg font-semibold tracking-tight text-[var(--text-primary)]"
            >
              SHADAB<span className="text-[var(--text-secondary)]">.DEV</span>
            </a>

            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const active = activeSection === item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors ${
                      active
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
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
                className="text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
              >
                Blog
              </a>
              <button
                onClick={() => setDarkMode((p) => !p)}
                aria-label="Toggle theme"
                className="p-2 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode((p) => !p)}
                aria-label="Toggle theme"
                className="p-2 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen((p) => !p)}
                aria-label="Toggle menu"
                className="p-2 rounded-[10px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 mx-4 rounded-[16px] border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden shadow-card">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-sm border-b border-[var(--border)] last:border-0 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-[var(--text-primary)] bg-[var(--bg-tertiary)]'
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
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
                className="block px-4 py-3 text-sm border-b border-[var(--border)] last:border-0 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
              >
                Blog
              </a>
            </div>
          )}
        </nav>

        <main>
          <Hero darkMode={darkMode} />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="font-sans text-sm font-semibold text-[var(--text-primary)] tracking-tight">SHADAB.DEV</p>
                <p className="text-[10px] text-[var(--text-tertiary)]">Shaikh Shadab.</p>
              </div>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-[12px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
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
