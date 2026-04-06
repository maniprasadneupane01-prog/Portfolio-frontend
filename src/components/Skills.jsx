import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const techSkills = [
  { name: 'HTML', level: 92 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'Python', level: 40 },
  { name: 'Git / GitHub', level: 85 },
  { name: 'Claude Code', level: 60 },
  { name: 'Opencode', level: 75 },
  { name: 'Gemini', level: 80 },
]

const languageSkills = {
  en: [
    { flag: '🇳🇵', language: 'Nepali', level: 'Native / C2', details: null },
    { flag: '🇩🇪', language: 'German', level: 'B1 Level', details: ['Lesen ✓', 'Hören ✓', 'OSD VHS Bhaktapur'] },
    { flag: '🇬🇧', language: 'English', level: 'Professional B2/C1', details: null },
  ],
  de: [
    { flag: '🇳🇵', language: 'Nepali', level: 'Muttersprache / C2', details: null },
    { flag: '🇩🇪', language: 'Deutsch', level: 'B1-Niveau', details: ['Lesen ✓', 'Hören ✓', 'OSD VHS Bhaktapur'] },
    { flag: '🇬🇧', language: 'Englisch', level: 'Professionell B2/C1', details: null },
  ],
  np: [
    { flag: '🇳🇵', language: 'नेपाली', level: 'मातृभाषा / C2', details: null },
    { flag: '🇩🇪', language: 'जर्मन', level: 'B1 स्तर', details: ['Lesen ✓', 'Hören ✓', 'OSD VHS भक्तपुर'] },
    { flag: '🇬🇧', language: 'अंग्रेजी', level: 'व्यावसायिक B2/C1', details: null },
  ],
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const currentLangSkills = languageSkills[language] || languageSkills.en

  return (
    <section id="skills" className="bg-bg-primary" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-main font-mono text-sm mb-4 tracking-wider uppercase">What I Know</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">{t('skills', 'title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('skills', 'subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-8">{t('skills', 'technical')}</h3>
            <div className="space-y-6">
              {techSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-8">{t('skills', 'languages')}</h3>
            <div className="space-y-4">
              {currentLangSkills.map((lang, i) => (
                <motion.div
                  key={lang.language}
                  className="card glow-border p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{lang.flag}</span>
                      <div>
                        <h4 className="font-heading text-lg font-semibold">{lang.language}</h4>
                        <p className="text-accent-main text-sm font-mono">{lang.level}</p>
                      </div>
                    </div>
                  </div>
                  {lang.details && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {lang.details.map((detail) => (
                        <span key={detail} className="tech-pill">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm">{skill.name}</span>
        <span className="text-accent-main font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-main to-accent-warm"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}