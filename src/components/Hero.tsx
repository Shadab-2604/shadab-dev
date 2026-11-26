import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero: React.FC<{ darkMode: boolean }> = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/ShaikhShadab.pdf';
    link.download = 'Shaikh_Shadab_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-12 md:py-20 reveal"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">

          {/* ── Left: Text ───────────────────────────────────── */}
          <div>
            <p
              className="font-mono text-[11px] font-medium tracking-widest text-[var(--text-tertiary)] uppercase mb-6"
            >
              {'< Hello, World! />'}
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[var(--text-primary)] mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-[var(--text-secondary)]">Shadab</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
              Cybersecurity Engineer and MERN Stack Developer focused on
              application security, reliable systems, and secure software
              development. Experienced in security operations, vulnerability
              assessment, and full-stack development.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:shaikhshadab2604@gmail.com"
                className="btn btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <button
                onClick={handleDownloadCV}
                className="btn btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                Download CV
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-tertiary)] border-t border-[var(--border)] pt-6">
              <span>Cybersecurity · MERN Stack</span>
              <span>·</span>
              <span>Thane, India</span>
              <span>·</span>
              <span>BCA, 8.8/10</span>
            </div>
          </div>

          {/* ── Right: Info card (desktop) ─────────────────── */}
          <div className="hidden lg:block">
            <div className="card-elevated p-6">
              {/* Mac-style dots */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-[11px] text-[var(--text-tertiary)]">
                  shadab.dev
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-24">
                    Role
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    Cybersecurity Engineer \| MERN Stack Developer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-24">
                    Email
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    shaikhshadab2604@gmail.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-24">
                    Phone
                  </span>
                  <span className="text-[var(--text-secondary)]">+91 9324852474</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-24">
                    Location
                  </span>
                  <span className="text-[var(--text-secondary)]">Thane, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
