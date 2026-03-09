/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        navy: {
          DEFAULT: '#0B0F19',
          light: '#111827',
          card: '#0D1117',
          border: '#1E2D3D',
        },
        'cyan-neon': '#00E5FF',
        'mint-neon': '#7CFFB2',
      },
      boxShadow: {
        'glow-sm': '0 0 12px rgba(0,229,255,0.2), 0 0 24px rgba(0,229,255,0.08)',
        glow: '0 0 25px rgba(0,229,255,0.35), 0 0 50px rgba(0,229,255,0.12)',
        'glow-lg': '0 0 50px rgba(0,229,255,0.5), 0 0 100px rgba(0,229,255,0.2)',
        'glow-mint': '0 0 25px rgba(124,255,178,0.35)',
        card: '0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-wheel': 'scrollWheel 1.5s ease-out infinite',
        blink: 'blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        scrollWheel: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(24px)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
