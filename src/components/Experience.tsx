import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Shield, Code2, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    title: 'Cybersecurity Engineer Intern',
    company: 'Head of Testing Department',
    period: '09/2026 – Present',
    Icon: Shield,
    achievements: [
      'Contribute across cybersecurity, software quality, and development responsibilities.',
      'Serve as Head of the Testing Department, overseeing testing activities and quality assurance.',
      'Contribute to MERN Stack development across frontend and backend tasks with security best practices.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Samatva Dynamics OPC Pvt Ltd',
    period: 'Ahmedabad, India',
    Icon: Code2,
    achievements: [
      'Contributed to FiveM (GTA V) scripting and customization for multiplayer server features.',
      'Built and maintained web applications, working across frontend and backend components.',
    ],
  },
  {
    title: 'Alegria Web-weaving Hackathon (1st Rank)',
    company: 'Panvel, India',
    period: '',
    Icon: Award,
    achievements: [
      'Developed "Radio Rewind," a retro music streaming website in just 6 hours.',
      'Showcased skills in web development, teamwork, and creative problem-solving.',
      'Secured 1st rank among competing teams.',
    ],
  },
];

// Three.js orb loaded lazily only when section is visible
const ThreeOrb: React.FC = () => {
  const [Three, setThree] = useState<typeof import('three') | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Dynamic import of Three.js — only loads when this component mounts
    import('three').then((threeModule) => {
      setThree(threeModule);
    });
  }, []);

  useEffect(() => {
    if (!Three || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new Three.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const geometry = new Three.SphereGeometry(1, 64, 64);
    const material = new Three.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.03,
    });
    const sphere = new Three.Mesh(geometry, material);
    sphere.position.set(0, 0, -3);
    scene.add(sphere);

    const ambientLight = new Three.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new Three.PointLight(0xffffff, 0.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      if (!isVisibleRef.current) return;
      rafRef.current = requestAnimationFrame(animate);
      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Pause animation when tab is hidden
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      if (isVisibleRef.current) animate();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    isVisibleRef.current = true;

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      renderer.dispose();
    };
  }, [Three]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: Three ? 'block' : 'none' }}
    />
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = gsap.fromTo(
      '.exp-card',
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    ).scrollTrigger;

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section bg-[var(--bg-primary)] relative overflow-hidden"
    >
      <ThreeOrb />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="section-head mb-12">
          <span className="kicker">// my journey</span>
          <h2 className="mb-4">Experience</h2>
          <hr className="rule" />
        </div>

        <div className="relative pl-8">
          {EXPERIENCES.map((exp, i) => {
            const Icon = exp.Icon;
            return (
              <div key={i} className="exp-card relative pl-10 pb-12 last:pb-0">
                {i !== EXPERIENCES.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-px bg-[var(--border)]" />
                )}

                <div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-[var(--border)] bg-[var(--bg-primary)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]" />
                </div>

                <div className="card p-5 rounded-lg">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {exp.company}
                      </p>
                    </div>
                    {exp.period && (
                      <div className="flex items-center gap-1.5 text-[11px] font-mono flex-shrink-0 px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-tertiary)]">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 list-disc list-inside text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.achievements.map((ach, j) => (
                      <li key={j}>
                        <span className="text-[var(--text-primary)] font-medium pr-1">
                          <Icon className="inline w-3 h-3 -mt-0.5" />
                        </span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
