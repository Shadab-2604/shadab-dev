import React, { useEffect } from 'react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] p-7 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div
            className="mx-auto w-10 h-10 rounded border border-[var(--border)] flex items-center justify-center mb-5"
          >
            <Clock className="w-5 h-5 text-[var(--text-tertiary)]" />
          </div>

          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">
            Coming Soon
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-7 leading-relaxed">
            This project demo is currently under development. Please check back later.
          </p>

          <button
            onClick={onClose}
            className="btn inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Go Back
          </button>
        </div>

        <div className="px-7 py-4 text-center border-t border-[var(--border)]">
          <p className="text-[11px] text-[var(--text-tertiary)]">
            In the meantime, check out the code on{' '}
            <a
              href="https://github.com/Shadab-2604"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--text-tertiary)] transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
