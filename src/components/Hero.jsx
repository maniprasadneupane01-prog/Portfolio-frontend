import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const words = {
  en: ['Tech Enthusiast', 'Math Educator', 'German Language Learner', 'Building for Germany'],
  de: ['Tech-Enthusiast', 'Mathelehrer', 'Deutsch-Lernender', 'Baue für Deutschland'],
  np: ['टेक उत्साही', 'गणित शिक्षक', 'जर्मन भाषा सिक्दै', 'जर्मनीको लागि निर्माण'],
}

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { t, language } = useLanguage()

  const currentWords = words[language] || words.en
  const currentSubtitle = t('hero', 'subtitle')

  useEffect(() => {
    const word = currentWords[currentWord]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(word.slice(0, displayedText.length + 1))
        if (displayedText === word) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayedText(word.slice(0, displayedText.length - 1))
        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentWord((prev) => (prev + 1) % currentWords.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWord, currentWords])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      <div className="absolute inset-0 bg-bg-primary/50" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          className="text-accent-main font-mono text-sm md:text-base mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t('hero', 'welcome')}
        </motion.p>
        
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Hi, I'm{' '}
          <span className="text-gradient">Pratik Neupane</span>
        </motion.h1>
        
        <motion.div
          className="h-12 md:h-16 flex items-center justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="font-heading text-2xl md:text-4xl text-text-muted">
            {displayedText}
          </span>
          <motion.span
            className="inline-block w-1 h-8 md:h-10 bg-accent-main ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          />
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <a 
            href="#projects" 
            className="cta-primary text-lg px-10 py-5 inline-flex items-center justify-center gap-3"
            style={{
              backgroundColor: 'var(--accent-main)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1.125rem',
              boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t('hero', 'viewWork')}
          </a>
          <a 
            href="#contact" 
            className="cta-ghost text-lg px-10 py-5 inline-flex items-center justify-center gap-3"
            style={{
              border: '2px solid var(--text-faint)',
              color: 'var(--text-primary)',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1.125rem',
              transition: 'all 0.3s ease',
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('hero', 'getInTouch')}
          </a>
        </motion.div>
      </div>
      
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        {[
          { href: 'https://github.com/maniprasadneupane01-prog', icon: 'GitHub', label: 'GitHub' },
          { href: 'https://instagram.com/pratikneupane02', icon: 'Instagram', label: 'Instagram' },
          { href: 'https://facebook.com/pratik.neupane.378', icon: 'Facebook', label: 'Facebook' },
          { href: 'mailto:maniprasadneupane01@gmail.com', icon: 'Email', label: 'Email' },
        ].map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-faint hover:text-accent-main transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            aria-label={social.label}
          >
            <SocialIcon name={social.icon} />
          </motion.a>
        ))}
        <div className="w-px h-16 bg-text-faint mx-auto" />
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-faint rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-accent-main rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialIcon({ name }) {
  switch (name) {
    case 'GitHub':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case 'Instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case 'Facebook':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      )
    case 'Email':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      )
    default:
      return null
  }
}