import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const stats = [
    { value: '6 Months', label: t('about', 'teachingExp') },
    { value: 'B1', label: t('about', 'germanLevel') },
    { value: '2', label: t('about', 'osdModules') },
  ]

  const paragraphs = {
    en: [
      "I'm Pratik Neupane (Mani Prasad Neupane) — a Vibe Coder and primary math educator from Nepal with a clear vision: to build a professional career in Germany. My journey spans from teaching primary school mathematics to mastering modern web technologies.",
      'For six months, I taught mathematics to young minds, discovering that the patience required to explain complex concepts translates perfectly into writing clean, readable code. Every function I write is like a lesson plan — structured, purposeful, and designed to be understood.',
      "Currently, I'm advancing my German language skills, having already passed the Lesen (Reading) and Hören (Listening) modules at B1 level through OSD VHS Bhaktapur. Germany's engineering culture and commitment to quality deeply resonate with how I approach software development.",
      'I build with React, Node.js, and modern web technologies — always with the mindset that code should serve people, not the other way around. Whether it\'s a classroom of students or users on the web, my goal is the same: make things clear, useful, and beautiful.',
    ],
    de: [
      'Ich bin Pratik Neupane (Mani Prasad Neupane) — ein Vibe Coder und Grundschul-Mathelehrer aus Nepal mit einer klaren Vision: eine Karriere in Deutschland aufzubauen. Meine Reise reicht vom Unterrichten von Grundschulmathematik bis zum Meistern moderner Webtechnologien.',
      'Sechs Monate lang habe ich Mathematik für junge Menschen unterrichtet und dabei entdeckt, dass die Geduld, die nötig ist, um komplexe Konzepte zu erklären, perfekt in das Schreiben von sauberem, lesbaren Code übersetzt wird. Jede Funktion, die ich schreibe, ist wie ein Unterrichtsplan — strukturiert, zielgerichtet und darauf ausgelegt, verstanden zu werden.',
      'Derzeit verbessere ich meineDeutschkenntnisse und habe bereits die Module Lesen und Hören auf B1-Niveau bei OSD VHS Bhaktapur bestanden. Die deutsche Ingenieurskultur und das Qualitätsbewusstsein resonieren tief mit meinem Ansatz in der Softwareentwicklung.',
      'Ich entwickle mit React, Node.js und modernen Webtechnologien — immer mit der Überzeugung, dass Code den Menschen dienen sollte, nicht umgekehrt. Ob im Klassenzimmer oder im Web, mein Ziel ist das Gleiche: Dinge klar, nützlich und schön machen.',
    ],
    np: [
      'म Pratik Neupane (Mani Prasad Neupane) हूँ — एक भाइब कोडर र नेपालको प्राथमिक गणित शिक्षक स्पष्ट दृष्टिकोणको साथ: जर्मनीमा व्यावसायिक करियर बनाउनु। मको यात्रा प्राथमिक विद्यालय गणित शिक्षणदेखि आधुनिक वेब प्रविधिमा महारत हासिल गर्नेसम्म फैलिएको छ।',
      'छ महिनासम्म मैले युवाहरूलाई गणित सिकाए, जहाँ मैले भेट्टाए कि जटिल अवधारणाहरू व्याख्या गर्न आवश्यक धैर्य सफा, पढ्न योग्य कोड लेख्नमा पूर्ण रूपमा अनुवाद हुन्छ। म लेख्ने प्रत्येक प्रकार्य एक पाठ योजना जस्तै हो — संरचित, उद्देश्यपूर्ण र बुझ्न डिजाइन गरिएको।',
      'हाल, म मेरो जर्मन भाषा कौशल सुधारिरहेको छु, र OSD VHS भक्तपुरबाट B1 स्तरमा Lesen (पढ्न) र Hören (सुन्न) मोड्युल पास गरेको छु। जर्मनीको इन्जिनियरिङ संस्कृति र गुणस्तरप्रति प्रतिबद्धता मेरो सफ्टवेयर विकासमा गहिरो प्रतिध्वनि गर्छ।',
      'म React, Node.js र आधुनिक वेब प्रविधिहरूसँग निर्माण गर्छु — सधैं यस मानसिकताको साथ कि कोडले मान्छेहरूलाई सेवा दिनुपर्छ, अर्को तरिकाले होइन। विद्यार्थीहरूको कक्षा होस् वा वेब प्रयोगकर्ताहरू, मेरो उही लक्ष्य छ: चीजहरूलाई स्पष्ट, उपयोगी र सुन्दर बनाउनु।',
    ],
  }

  const currentParagraphs = paragraphs[language] || paragraphs.en

  return (
    <section id="about" className="bg-bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-bg-tertiary">
              <img
                src="/My Photo.webp"
                alt="Pratik Neupane"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent-main/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-warm/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-accent-main font-mono text-sm mb-4 tracking-wider uppercase">About Me</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('about', 'title').split('.').map((part, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? null : '.'}
                  <br />
                  {i === arr.length - 1 && <span className="text-gradient">{part.trim()}</span>}
                  {i !== arr.length - 1 && part.trim()}
                </span>
              ))}
            </h2>
            
            <div className="space-y-4 text-text-muted leading-relaxed">
              {currentParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-bg-tertiary rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className="font-heading text-2xl md:text-3xl font-bold text-accent-main">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}