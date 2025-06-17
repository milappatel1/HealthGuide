import { useState, useEffect } from 'react';

export type FontSize = 'small' | 'medium' | 'large';

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const saved = localStorage.getItem('fontSize');
    return (saved as FontSize) || 'medium';
  });

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.className = document.documentElement.className
      .replace(/font-size-\w+/g, '')
      .trim();
    document.documentElement.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  return { fontSize, setFontSize };
};