import React from 'react';
import { ArrowRight, Download, Mail, MapPin, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
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
      className="relative min-h-[calc(100vh-2rem)] flex items-center pt-28 pb-16 md:py-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-center">
          {/* ── Left: Text ───────────────────────────────────── */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[11px] font-medium tracking-wide text-[var(--text-secondary)]">
                Cybersecurity &amp; MERN Stack
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-[1.08] tracking-tight">
              Hi, I&apos;m{' '}
              <span className="underline decoration-[var(--border-hover)] decoration-2 underline-offset-8">
                Shadab
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
              Cybersecurity Engineer and MERN Stack Developer focused on
              application security, reliable systems, and secure software
              development. Experienced in security operations, vulnerability
              assessment, and full-stack engineering.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn btn-accent px-5 py-2.5 text-sm"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn btn-outline px-5 py-2.5 text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <button
                onClick={handleDownloadCV}
                className="btn btn-outline px-5 py-2.5 text-sm"
              >
                Download CV
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[var(--text-tertiary)] border-t border-[var(--border)] pt-6">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                Head of Testing Dept.
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                Thane, India
              </span>
              <span>BCA · 8.8 / 10 GPA</span>
            </div>
          </div>

          {/* ── Right: Info card (desktop) ─────────────────── */}
          <div className="hidden lg:block">
            <div className="card-elevated p-6">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
                  shadab.dev
                </span>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-20 pt-0.5 uppercase tracking-wider">
                    Role
                  </span>
                  <span className="text-[var(--text-primary)] font-medium leading-snug">
                    Cybersecurity Engineer · MERN Stack Developer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-20 pt-0.5 uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:shaikhshadab2604@gmail.com"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] break-all transition-colors"
                  >
                    shaikhshadab2604@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-20 pt-0.5 uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+919324852474"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    +91 9324852474
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-tertiary)] flex-shrink-0 w-20 pt-0.5 uppercase tracking-wider">
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
