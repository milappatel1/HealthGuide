import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const AccessibilityControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { fontSize, setFontSize } = setFontSize();

  return (
    <div className="w-min mx-auto p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </div>
  );
};

export default AccessibilityControls;
