import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
}) => {
  const centered = align === 'center';
  return (
    <motion.div
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="block font-mono text-[11px] tracking-[0.28em] uppercase text-cyan-neon mb-3">
          // {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-20 bg-gradient-to-r from-transparent via-cyan-neon to-transparent ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionTitle;
