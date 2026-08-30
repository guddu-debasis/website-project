import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {
  const [activeTab, setActiveTab] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = ['Home', 'Services', 'Work', 'Contact us']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      {/* Dynamic Main Navbar Container */}
      <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-white/70 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-800 rounded-2xl md:rounded-full px-6 py-3 shadow-lg dark:shadow-black/40 flex flex-wrap items-center justify-between transition-colors duration-500">
        
        {/* Dynamic Logo Switch */}
        <a href="#" className="flex items-center group">
          <img 
            src={theme === 'dark' ? assets.logo_dark : assets.logo} 
            className="w-28 sm:w-32 h-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            alt="Logo"
          />
        </a>

        {/* Dynamic Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-gray-800/80 p-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
          {navItems.map((item) => {
            const link = item === 'Home' ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`
            const isActive = activeTab === item

            return (
              <a
                key={item}
                href={link}
                onClick={() => setActiveTab(item)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-sm scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                {item}
              </a>
            )
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Integrated Theme Toggle Component */}
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* CTA Button */}
          <a
            href="#contact-us"
            className="hidden sm:inline-flex group relative items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white overflow-hidden transition-all duration-300 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/40 active:scale-95"
          >
            <span className="absolute inset-0 bg-linear-to-r from-green-600 via-orange-600 to-pink-500 group-hover:scale-105 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2">
              Connect
              <img 
                src={assets.arrow_icon} 
                className="w-3 h-3 invert group-hover:translate-x-1 transition-transform duration-300" 
                alt=""
              />
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </button>
        </div>

        {/* Dynamic Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="w-full md:hidden mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-800 flex flex-col gap-2 transition-colors">
            {navItems.map((item) => {
              const link = item === 'Home' ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`
              return (
                <a
                  key={item}
                  href={link}
                  onClick={() => {
                    setActiveTab(item)
                    setIsMenuOpen(false)
                  }}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item}
                </a>
              )
            })}
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar

