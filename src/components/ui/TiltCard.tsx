import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  intensity = 7,
}) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 140,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 140,
    damping: 22,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
