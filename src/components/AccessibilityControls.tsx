// Accessibility Controls (2).tsx
import React from 'react';
import { Moon, Sun, Type } from 'lucide-react'; // Added 'Type' icon
import { useTheme } from '../hooks/useTheme';
import { useFontSize } from '../hooks/useFontSize'; // Imported useFontSize

const AccessibilityControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // Call the useFontSize hook
  const { fontSize } = useFontSize(); 

  return (
    <div className="w-min mx-auto p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex space-x-2">
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {/* Font Size Indicator (currently only 'small' is an option) */}
      <button
        // No onClick action needed since 'small' is the only size and is already active
        // If you had more sizes, you would use setFontSize here.
        className="p-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold"
        aria-label={`Current font size is ${fontSize}`}
      >
        <Type size={16} /> {/* A generic 'Type' icon */}
        <span className="sr-only">Current size: {fontSize}</span>
      </button>

    </div>
  );
};

export default AccessibilityControls;
