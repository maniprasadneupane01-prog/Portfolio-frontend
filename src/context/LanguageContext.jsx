import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
  }, [theme])

  const t = (section, key) => {
    return translations[language]?.[section]?.[key] || translations['en']?.[section]?.[key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'en') return 'de'
      if (prev === 'de') return 'np'
      return 'en'
    })
  }

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const getLanguageLabel = () => {
    if (language === 'en') return 'EN'
    if (language === 'de') return 'DE'
    if (language === 'np') return 'NP'
    return 'EN'
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      t, 
      toggleLanguage,
      toggleTheme,
      theme,
      getLanguageLabel
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)