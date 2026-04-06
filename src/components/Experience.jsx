import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiBookOpen, FiCheckCircle, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const experiences = {
  en: [
    {
      icon: <FiBriefcase size={20} />,
      title: 'Primary Math Teacher',
      duration: '6 Months',
      location: 'Nepal',
      status: 'Completed',
      description: 'Taught mathematics to primary school students, developing lesson plans and assessment strategies that improved student engagement and comprehension.',
      bullets: [
        'Designed interactive math lessons for grades 3-5, incorporating visual aids and hands-on activities',
        'Tracked individual student progress and adapted teaching methods to different learning styles',
        'Conducted parent-teacher meetings to discuss student development and home learning strategies',
        'Created supplementary practice materials and weekly quizzes to reinforce concepts',
      ],
      certificate: true,
    },
    {
      icon: <FiBookOpen size={20} />,
      title: 'German Language Student',
      duration: 'Ongoing',
      location: 'OSD VHS Bhaktapur',
      status: 'In Progress',
      description: 'Pursuing German language certification with focus on professional communication and cultural integration.',
      modules: [
        { name: 'Lesen (Reading)', status: 'Passed', icon: <FiCheckCircle size={14} className="text-accent-green" /> },
        { name: 'Hören (Listening)', status: 'Passed', icon: <FiCheckCircle size={14} className="text-accent-green" /> },
        { name: 'Schreiben (Writing)', status: 'In Progress', icon: null },
        { name: 'Sprechen (Speaking)', status: 'In Progress', icon: null },
      ],
      currentLevel: 'B1',
    },
  ],
  de: [
    {
      icon: <FiBriefcase size={20} />,
      title: 'Grundschul-Mathelehrer',
      duration: '6 Monate',
      location: 'Nepal',
      status: 'Abgeschlossen',
      description: 'Unterrichtete Mathematik an Grundschulen, entwickelte Unterrichtspläne und Bewertungsstrategien, die das Schülerengagement und Verständnis verbesserten.',
      bullets: [
        'Entwarf interaktive Mathestunden für Klassen 3-5 mit visuellen Hilfen und praktischen Aktivitäten',
        'Verfolgte den individuellen Schülerfortschritt und passte Unterrichtsmethoden an verschiedene Lernstile an',
        'Führte Eltern-Lehrer-Gespräche zur Schülerentwicklung und Lernstrategien zu Hause durch',
        'Erstellte ergänzende Übungsmaterialien und wöchentliche Quiz, um Konzepte zu festigen',
      ],
      certificate: true,
    },
    {
      icon: <FiBookOpen size={20} />,
      title: 'Deutschstudent',
      duration: 'Laufend',
      location: 'OSD VHS Bhaktapur',
      status: 'In Progress',
      description: 'Verfolge eine deutsche Sprachzertifizierung mit Fokus auf berufliche Kommunikation und kulturelle Integration.',
      modules: [
        { name: 'Lesen', status: 'Passed', icon: <FiCheckCircle size={14} className="text-accent-green" /> },
        { name: 'Hören', status: 'Passed', icon: <FiCheckCircle size={14} className="text-accent-green" /> },
        { name: 'Schreiben', status: 'In Progress', icon: null },
        { name: 'Sprechen', status: 'In Progress', icon: null },
      ],
      currentLevel: 'B1',
    },
  ],
  np: [
    {
      icon: <FiBriefcase size={20} />,
      title: 'प्राथमिक गणित शिक्षक',
      duration: 'छ महिना',
      location: 'नेपाल',
      status: 'पूर्ण',
      description: 'प्राथमिक विद्यालय विद्यार्थीहरूलाई गणित सिकाए, पाठ योजना र मूल्यांकन रणनीति विकास गरे जसले विद्यार्थी संलग्नता र बुझाई सुधारे।',
      bullets: [
        'ग्रेड 3-5 का लागि अन्तर्क्रियात्मक गणित पाठहरू डिजाइन गरे, दृश्य सहायता र व्यावहारिक गतिविधिहरू समावेश गरे',
        'व्यक्तिगत विद्यार्थी प्रगति ट्र्याक गरे र विभिन्न शैलीहरू अनुसार शिक्षण विधिहरू अनुकूलित गरे',
        'विद्यार्थी विकास र घरमा सिक्ने रणनीतिहरूको बारेमा अभिभावक-शिक्षक भेटघाट गरे',
        'अवधारणाहरू सुदृढ पार्नका लागि पूरक अभ्यास सामग्री र साप्ताहिक क्विजहरू बनाए',
      ],
      certificate: true,
    },
    {
      icon: <FiBookOpen size={20} />,
      title: 'जर्मन भाषा विद्यार्थी',
      duration: 'जारी',
      location: 'OSD VHS भक्तपुर',
      status: 'प्रगति मा',
      description: 'पेशेवर सञ्चार र सांस्कृतिक एकीकरणमा केन्द्रित भएर जर्मन भाषा प्रमाणपत्र हासिल गर्दै।',
      modules: [
        { name: 'पढ्न', status: 'Passed', icon: <FiCheckCircle size={14} className="text-accent-green" /> },
        { name: 'सुन्न', status: 'Passed', icon: <FiCheckCircle size={14} className="text-accent-green" /> },
        { name: 'लेख्न', status: 'In Progress', icon: null },
        { name: 'बोल्न', status: 'In Progress', icon: null },
      ],
      currentLevel: 'B1',
    },
  ],
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const currentExperiences = experiences[language] || experiences.en

  return (
    <section id="experience" className="bg-bg-primary" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-main font-mono text-sm mb-4 tracking-wider uppercase">My Journey</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">{t('experience', 'title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('experience', 'subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-text-faint -translate-x-1/2" />
          
          {currentExperiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className={`relative mb-12 md:mb-16 ${i % 2 === 0 ? 'md:pr-1/2 md:text-right md:pr-12' : 'md:pl-1/2 md:pl-12'} pl-12 md:pl-0`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <div className={`absolute left-2 md:left-1/2 w-5 h-5 rounded-full bg-accent-main border-4 border-bg-primary -translate-x-1/2 z-10 ${exp.status === 'In Progress' || exp.status === 'प्रगति मा' || exp.status === 'Laufend' ? 'animate-pulse' : ''}`} />
              
              <div className={`card glow-border ${i % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="text-accent-main">{exp.icon}</span>
                  <h3 className="font-heading text-xl font-bold">{exp.title}</h3>
                </div>
                
                <div className={`flex flex-wrap items-center gap-3 mb-4 text-sm ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="text-text-muted">{exp.duration}</span>
                  <span className="text-text-faint">·</span>
                  <span className="text-text-muted">{exp.location}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${exp.status === 'In Progress' || exp.status === 'प्रगति मा' || exp.status === 'Laufend' ? 'bg-accent-warm/10 text-accent-warm' : 'bg-accent-green/10 text-accent-green'}`}>
                    {exp.status === 'Completed' ? t('experience', 'completed') : exp.status === 'In Progress' || exp.status === 'प्रगति मा' || exp.status === 'Laufend' ? t('experience', 'inProgress') : exp.status}
                  </span>
                </div>
                
                <p className="text-text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                
                {exp.bullets && (
                  <ul className={`space-y-2 mb-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="text-text-muted text-sm flex items-start gap-2">
                        {i % 2 !== 0 && <span className="text-accent-main mt-1">▹</span>}
                        <span>{bullet}</span>
                        {i % 2 === 0 && <span className="text-accent-main mt-1">◃</span>}
                      </li>
                    ))}
                  </ul>
                )}
                
                {exp.modules && (
                  <div className={`space-y-2 mb-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.modules.map((mod) => (
                      <div key={mod.name} className={`flex items-center gap-2 text-sm ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {i % 2 !== 0 && mod.icon}
                        <span className={mod.status === 'Passed' ? 'text-accent-green' : 'text-text-muted'}>
                          {mod.name}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${mod.status === 'Passed' ? 'bg-accent-green/10 text-accent-green' : 'bg-text-faint/30 text-text-faint'}`}>
                          {mod.status === 'Passed' ? t('experience', 'completed') : t('experience', 'inProgress')}
                        </span>
                        {i % 2 === 0 && mod.icon}
                      </div>
                    ))}
                  </div>
                )}
                
                {exp.certificate && (
                  <button
                    className={`inline-flex items-center gap-2 text-accent-main hover:text-accent-warm transition-colors text-sm font-medium ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    onClick={() => window.open('/Experince Certificate.jpeg', '_blank')}
                  >
                    <FiExternalLink size={14} />
                    {t('experience', 'viewCertificate')}
                  </button>
                )}
                
                {exp.currentLevel && (
                  <div className={`mt-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="inline-block px-4 py-2 bg-accent-main/10 text-accent-main rounded-lg font-heading font-bold text-lg">
                      {t('experience', 'currentLevel')}: {exp.currentLevel}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}