import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download, Package, Trophy, GraduationCap, MapPin } from 'lucide-react';
import ParticleBackground from './ui/ParticleBackground';
import useTypewriter from '../hooks/useTypewriter';

interface HeroProps {
  darkMode: boolean;
}

const TYPING_WORDS = [
  'Full-Stack MERN Developer',
  'Backend Engineer',
  'Problem Solver',
  'Open Source Builder',
];

const STATS = [
  { Icon: Package, label: 'projects', value: '"3+"' },
  { Icon: Trophy, label: 'hackathon_wins', value: '"2"' },
  { Icon: GraduationCap, label: 'gpa', value: '"8.8 / 10"' },
  { Icon: MapPin, label: 'location', value: '"Navi Mumbai"' },
] as const;

const Hero: React.FC<HeroProps> = () => {
  const typedText = useTypewriter(TYPING_WORDS);

  // Mouse-parallax for the floating card
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const cardX = useSpring(useTransform(rawX, [-900, 900], [-14, 14]), {
    stiffness: 50,
    damping: 18,
  });
  const cardY = useSpring(useTransform(rawY, [-600, 600], [-9, 9]), {
    stiffness: 50,
    damping: 18,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - width / 2);
    rawY.set(e.clientY - height / 2);
  };

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
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      onMouseMove={handleMouseMove}
    >
      {/* Particle canvas */}
      <ParticleBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" style={{ zIndex: 1 }} />

      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 -left-72 w-[550px] h-[550px] rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07), transparent 70%)', zIndex: 1 }}
      />
      <div
        className="absolute bottom-1/4 -right-72 w-[450px] h-[450px] rounded-full pointer-events-none animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(124,255,178,0.06), transparent 70%)', zIndex: 1 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">

          {/* ── Left: Text ───────────────────────────────────── */}
          <div>
            <motion.span
              className="inline-block font-mono text-[11px] tracking-[0.25em] uppercase text-cyan-neon mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {'< Hello, World! />'}
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient-cyan">Shadab</span>
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div
              className="flex items-center gap-2 font-mono text-lg md:text-xl text-white/70 mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
            >
              <span className="text-cyan-neon">&gt;</span>
              <span>{typedText}</span>
              <span className="text-cyan-neon animate-blink font-thin">|</span>
            </motion.div>

            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: '#9CA3AF' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Skilled in MongoDB, Express.js, React.js, and Node.js — building
              web apps, APIs, and backend systems with strong problem-solving
              and teamwork skills.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
            >
              <a
                href="#projects"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                Get in Touch
              </a>
              <button
                onClick={handleDownloadCV}
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                Download CV
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* ── Right: Floating info card (desktop) ──────────── */}
          <motion.div
            className="hidden lg:block"
            style={{ x: cardX, y: cardY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div
              className="rounded-2xl border p-6"
              style={{
                background: 'rgba(13,17,23,0.78)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)',
                borderColor: 'rgba(0,229,255,0.16)',
                boxShadow: '0 0 40px rgba(0,229,255,0.08), 0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              {/* Mac-style dots */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500/75" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/75" />
                <span className="w-3 h-3 rounded-full bg-green-500/75" />
                <span className="ml-2 font-mono text-[11px]" style={{ color: '#6B7280' }}>
                  shadab.json
                </span>
              </div>

              {/* JSON content */}
              <div className="space-y-4">
                <p className="font-mono text-xs" style={{ color: '#6B7280' }}>{'{'}</p>

                {STATS.map(({ Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-3 pl-5"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.72 + i * 0.1 }}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 text-cyan-neon" />
                    <span className="font-mono text-xs" style={{ color: '#9CA3AF' }}>
                      "{label}":&nbsp;
                    </span>
                    <span className="font-mono text-xs font-semibold text-mint-neon">
                      {value}
                    </span>
                  </motion.div>
                ))}

                <p className="font-mono text-xs" style={{ color: '#6B7280' }}>{'}'}</p>
              </div>

              {/* Status row */}
              <div
                className="mt-5 pt-4 flex items-center gap-2.5 border-t"
                style={{ borderColor: '#1E2D3D' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="font-mono text-xs text-green-400">available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ zIndex: 2 }}
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center p-1.5"
          style={{ border: '1.5px solid rgba(0,229,255,0.3)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-scroll-wheel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
