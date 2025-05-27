import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="relative">
      <nav className="flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold tracking-tight" onClick={closeMenu}>
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-600 dark:text-blue-400' : ''}`}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-600 dark:text-blue-400' : ''}`}
          >
            À propos
          </Link>
          <Link 
            to="/experience" 
            className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/experience') ? 'text-blue-600 dark:text-blue-400' : ''}`}
          >
            Expérience
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-600 dark:text-blue-400' : ''}`}
          >
            Contact
          </Link>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-4 md:hidden">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-600 dark:text-blue-400' : ''}`}
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/about') ? 'text-blue-600 dark:text-blue-400' : ''}`}
              onClick={closeMenu}
            >
              À propos
            </Link>
            <Link 
              to="/experience" 
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/experience') ? 'text-blue-600 dark:text-blue-400' : ''}`}
              onClick={closeMenu}
            >
              Expérience
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-600 dark:text-blue-400' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;