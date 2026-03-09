import { useState, useEffect } from 'react';

/**
 * Cycles through an array of words with a typewriter typing/deleting effect.
 */
const useTypewriter = (
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseTime = 2200
): string => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[wordIndex % words.length];

    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setIsPaused(true);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex((p) => (p + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [text, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export default useTypewriter;
