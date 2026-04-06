import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const projects = {
  en: [
    {
      name: 'Portfolio Website',
      description: 'This very site. A fully responsive portfolio with React frontend, Express backend, and file-based CRUD API for contact form submissions.',
      tags: ['React', 'Express', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/maniprasadneupane01-prog',
      live: '#',
      cover: '/portfolio-cover.png',
    },
    {
      name: 'Biraj Dental Hospital',
      description: 'Full-stack dental clinic website for Bhaktapur\'s premier dental hospital. Features online appointment booking with time slot management, bilingual support (EN/NP), dark/light themes, PDF receipt generation, and a self-contained admin dashboard.',
      tags: ['React', 'Express', 'GSAP', 'Tailwind', 'i18next', 'jsPDF'],
      github: 'https://github.com/maniprasadneupane01-prog',
      live: 'https://dentalbiraj.vercel.app',
      cover: '/biraj-dental-cover.png',
    },
  ],
  de: [
    {
      name: 'Portfolio-Website',
      description: 'Diese Seite. Ein vollständig responsives Portfolio mit React-Frontend, Express-Backend und dateibasiertem CRUD-API für Kontaktformular-Einreichungen.',
      tags: ['React', 'Express', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/maniprasadneupane01-prog',
      live: '#',
      cover: '/portfolio-cover.png',
    },
    {
      name: 'Biraj Dental Hospital',
      description: 'Full-Stack-Zahnklinik-Website für Bhaktapurs führendes Zahnkrankenhaus. Funktionen: Online-Terminbuchung mit Zeitmanagement, zweisprachige Unterstützung (DE/NP), Dark/Light-Themes, PDF-Beleggenerierung und integriertes Admin-Dashboard.',
      tags: ['React', 'Express', 'GSAP', 'Tailwind', 'i18next', 'jsPDF'],
      github: 'https://github.com/maniprasadneupane01-prog',
      live: 'https://dentalbiraj.vercel.app',
      cover: '/biraj-dental-cover.png',
    },
  ],
  np: [
    {
      name: 'पोर्टफोलियो वेबसाइट',
      description: 'यो नै साइट। सम्पर्क फारमका लागि React फ्रन्टएन्ड, Express ब्याकएन्ड र फाइल-आधारित CRUD API सहित पूर्ण रिस्पोन्सिव पोर्टफोलियो।',
      tags: ['React', 'Express', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/maniprasadneupane01-prog',
      live: '#',
      cover: '/portfolio-cover.png',
    },
    {
      name: 'बिराज डेन्टल हस्पिटल',
      description: 'भक्तपुरको अग्रणी डेन्टल अस्पतालको लागि फुल-स्ट्याक डेन्टल क्लिनिक वेबसाइट। अनलाइन अपोइन्टमेन्ट बुकिङ, द्विभाषी समर्थन (EN/NP), डार्क/लाइट थिम, PDF रिसिप्ट जेनेरेसन र एडमिन ड्यासबोर्ड।',
      tags: ['React', 'Express', 'GSAP', 'Tailwind', 'i18next', 'jsPDF'],
      github: 'https://github.com/maniprasadneupane01-prog',
      live: 'https://dentalbiraj.vercel.app',
      cover: '/biraj-dental-cover.png',
    },
  ],
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const currentProjects = projects[language] || projects.en

  return (
    <section id="projects" className="bg-bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-main font-mono text-sm mb-4 tracking-wider uppercase">My Work</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">{t('projects', 'title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('projects', 'subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, i) => (
            <motion.div
              key={project.name}
              className="card glow-border group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <div className="h-48 bg-bg-tertiary rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                {project.cover ? (
                  <motion.img
                    src={project.cover}
                    alt={`${project.name} cover`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                  />
                ) : (
                  <motion.div
                    className="text-6xl font-display font-bold text-text-faint group-hover:text-accent-main/30 transition-colors duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.div>
                )}
              </div>
              
              <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent-main transition-colors">
                {project.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-pill">{tag}</span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-accent-main transition-colors text-sm"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <FaGithub size={16} />
                  {t('projects', 'code')}
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted hover:text-accent-warm transition-colors text-sm"
                  aria-label={`View live demo of ${project.name}`}
                >
                  <FiExternalLink size={16} />
                  {t('projects', 'liveDemo')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}