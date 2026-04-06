import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t, language, setLanguage } = useLanguage()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: t('nav', 'about'), href: '#about' },
    { label: t('nav', 'skills'), href: '#skills' },
    { label: t('nav', 'projects'), href: '#projects' },
    { label: t('nav', 'contact'), href: '#contact' },
  ]

  const socials = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/maniprasadneupane01-prog', label: 'GitHub' },
    { icon: <FaInstagram size={18} />, href: 'https://instagram.com/pratikneupane02', label: 'Instagram' },
    { icon: <FaFacebook size={18} />, href: 'https://facebook.com/pratik.neupane.378', label: 'Facebook' },
    { icon: <FiMail size={18} />, href: 'mailto:maniprasadneupane01@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-bg-primary border-t border-text-faint/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#hero" className="font-display text-2xl font-bold text-gradient">
            Pratik Neupane
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-accent-main transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-faint hover:text-accent-main transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-text-faint/10 pt-6 text-center">
          <p className="text-text-faint text-sm">
            © {currentYear} Mani Prasad Neupane. {t('footer', 'copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}