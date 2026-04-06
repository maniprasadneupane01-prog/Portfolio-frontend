import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, language, toggleLanguage, toggleTheme, theme, getLanguageLabel } = useLanguage()

  const navLinks = [
    { label: t('nav', 'about'), href: '#about' },
    { label: t('nav', 'skills'), href: '#skills' },
    { label: t('nav', 'projects'), href: '#projects' },
    { label: t('nav', 'experience'), href: '#experience' },
    { label: t('nav', 'contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-text-faint/10 py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/My Photo.webp" alt="Pratik Neupane" className="w-9 h-9 rounded-full object-cover border-2 border-accent-main/30" />
          </a>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="text-text-muted hover:text-accent-main transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex items-center gap-2 ml-4 border-l border-text-faint/30 pl-4">
              <button
                onClick={toggleLanguage}
                className="text-text-muted hover:text-accent-main transition-colors text-sm font-mono px-2 py-1 rounded border border-text-faint/30 hover:border-accent-main"
                title="Toggle Language"
              >
                {getLanguageLabel()}
              </button>
              
              <button
                onClick={toggleTheme}
                className="text-text-muted hover:text-accent-main transition-colors p-2 rounded-lg hover:bg-bg-tertiary"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-text-muted hover:text-accent-main transition-colors text-sm font-mono px-2 py-1 rounded border border-text-faint/30"
            >
              {getLanguageLabel()}
            </button>
            <button
              onClick={toggleTheme}
              className="text-text-muted hover:text-accent-main transition-colors p-2"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              className="text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="block font-heading text-3xl font-bold text-text-primary hover:text-accent-main transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}