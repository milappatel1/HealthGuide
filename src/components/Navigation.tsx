import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Heart, Menu, X } from "lucide-react"
import AccessibilityControls from "./AccessibilityControls"

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/diseases", label: "All Diseases" },
    { path: "/body-systems", label: "Body Systems" },
    { path: "/common-questions", label: "Common Questions" },
    { path: "/about", label: "About" },
  ]

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group min-w-0 flex-shrink-0">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg group-hover:scale-105 transition-transform duration-200">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="hidden xs:inline text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
              <span className="sm:hidden">Health</span>
              <span className="hidden sm:inline">HealthExplain</span>
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
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Accessibility Controls & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="hidden xs:block">
              <AccessibilityControls />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="xs:hidden mb-4 px-4">
              <AccessibilityControls />
            </div>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
