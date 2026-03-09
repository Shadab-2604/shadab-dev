// Shared Framer Motion animation presets

export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: EASE_OUT },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export const slideLeft = {
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: EASE_OUT },
};

export const slideRight = {
  initial: { opacity: 0, x: 28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: EASE_OUT },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: EASE_OUT },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE_OUT },
};
