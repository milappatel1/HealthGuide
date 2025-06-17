import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                HealthExplain
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Making medical information accessible and understandable for everyone. 
              Learn about health conditions in simple, clear language.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Features
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>Medically Reviewed Content</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Users className="h-4 w-4 text-green-500" />
                <span>Family-Friendly Explanations</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Accessibility Features</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
              Important Notice
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
              This website provides general health information for educational purposes only. 
              It is not intended to replace professional medical advice, diagnosis, or treatment. 
              Always consult with a healthcare professional for medical concerns.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            © 2025 HealthExplain. Educational content for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;