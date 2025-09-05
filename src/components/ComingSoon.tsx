import React, { useEffect } from 'react';
import { X, Clock, ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-6">
            <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h2>

          {/* Message */}
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            This project demo is currently under development. We're working hard to bring you an amazing experience. Please check back later!
          </p>

          {/* Back button */}
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <div className="bg-gray-100 dark:bg-gray-700 px-8 py-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            In the meantime, check out the code on{' '}
            <a
              href="https://github.com/Shadab-2604"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
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