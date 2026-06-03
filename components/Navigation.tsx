'use client';

import { useState } from 'react';
import {
  Home,
  Search,
  Compass,
  Bookmark,
  User,
  Menu,
  X,
  Moon,
  Sun,
} from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Mobile Navigation - Sticky */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 z-40 shadow-soft-lg">
        <div className="flex items-center justify-around h-20">
          <button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group touch-target">
            <Home className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700" />
            <span className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">Home</span>
          </button>

          <button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group touch-target">
            <Search className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-600" />
            <span className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">Search</span>
          </button>

          <button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group touch-target">
            <Compass className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-600" />
            <span className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">Qibla</span>
          </button>

          <button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group touch-target">
            <Bookmark className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-600" />
            <span className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">Saved</span>
          </button>

          <button className="flex flex-col items-center justify-center w-16 h-16 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group touch-target">
            <User className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-600" />
            <span className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">Profile</span>
          </button>
        </div>
      </nav>

      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 z-50 shadow-soft">
        <div className="container-max section">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-950 dark:text-white">
                  Islamic Companion
                </h1>
                <p className="text-xs text-neutral-500">Hub</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Categories
              </a>
              <a href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Resources
              </a>
              <a href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                About
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="btn-icon btn-icon-primary"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 z-50 shadow-soft">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IC</span>
            </div>
            <h1 className="font-bold text-neutral-950 dark:text-white">
              Companion
            </h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="btn-icon"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-icon"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-neutral-200 dark:border-neutral-800 animate-slideDown">
            <div className="flex flex-col p-4 gap-3">
              <a href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 py-2">
                Categories
              </a>
              <a href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 py-2">
                Resources
              </a>
              <a href="#" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 py-2">
                About
              </a>
              <button className="btn btn-primary w-full mt-2">Get Started</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
