import React from 'react';
import { Moon, Sun, Type, Minus, Plus } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useFontSize, FontSize } from '../hooks/useFontSize';

const AccessibilityControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();

  const fontSizes: { size: FontSize; label: string }[] = [
    { size: 'small', label: 'A' },
    { size: 'medium', label: 'A' },
    { size: 'large', label: 'A' }
  ];

  return (
    <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-1">
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Font:</span>
        {fontSizes.map((fs, index) => (
          <button
            key={fs.size}
            onClick={() => setFontSize(fs.size)}
            className={`p-1 rounded transition-colors ${
              fontSize === fs.size
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            style={{ 
              fontSize: index === 0 ? '12px' : index === 1 ? '14px' : '16px',
              fontWeight: 'bold'
            }}
          >
            {fs.label}
          </button>
        ))}
      </div>
      
      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
      
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