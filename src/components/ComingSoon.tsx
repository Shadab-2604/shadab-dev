import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Clock, ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-2xl border max-w-md w-full overflow-hidden"
        style={{
          background: 'rgba(13,17,23,0.96)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderColor: 'rgba(0,229,255,0.2)',
          boxShadow: '0 0 60px rgba(0,229,255,0.1), 0 20px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6B7280] hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Body */}
        <div className="p-8 text-center">
          <div
            className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
            style={{
              background: 'rgba(0,229,255,0.08)',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
          >
            <Clock className="w-7 h-7 text-cyan-neon animate-spin-slow" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">Coming Soon</h2>
          <p className="text-sm text-[#9CA3AF] mb-7 leading-relaxed">
            This project demo is currently under development. We're working hard
            to bring you an amazing experience. Please check back later!
          </p>

          <button
            onClick={onClose}
            className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div
          className="px-8 py-4 text-center border-t"
          style={{
            borderColor: 'rgba(0,229,255,0.1)',
            background: 'rgba(0,229,255,0.03)',
          }}
        >
          <p className="text-xs text-[#6B7280]">
            In the meantime, check out the code on{' '}
            <a
              href="https://github.com/Shadab-2604"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-neon hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
