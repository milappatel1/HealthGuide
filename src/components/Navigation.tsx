import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
// Assuming AccessibilityControls is available/imported
// import AccessibilityControls from './AccessibilityControls'; 

// Mock component for AccessibilityControls for single-file context
const AccessibilityControls = () => (
  <div className="flex items-center space-x-2">
    {/* Placeholder for theme toggle or font size controls */}
    <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer" title="Accessibility Controls"></div>
  </div>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/diseases', label: 'All Diseases' },
    { path: '/body-systems', label: 'Body Systems' },
    { path: '/common-questions', label: 'Common Questions' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      {/* This div wraps the main header content (Logo, Desktop Nav, Buttons) 
        and applies responsive padding and max-width, keeping it centered.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg group-hover:scale-105 transition-transform duration-200">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
              HealthExplain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Accessibility Controls & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <AccessibilityControls />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) 
        This is now a direct child of <nav> and spans the full screen width (w-full).
        This prevents horizontal overflow/scrolling on small screens.
      */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 w-full">
          {/* This inner div re-applies the responsive horizontal padding 
            (px-4 sm:px-6 lg:px-8) to align the menu items with the main header content.
          */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  // Removed 'px-4' from the Link itself to avoid double padding 
                  // and allow the hover/active state to span the full width of the padded container.
                  className={`block py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
