import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiPhone, FiGithub, FiInstagram, FiFacebook, FiSend, FiLoader } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const API_URL = import.meta.env.VITE_API_URL || ''

const contactInfo = {
  en: [
    { icon: <FiMail size={18} />, label: 'Email', value: 'maniprasadneupane01@gmail.com', href: 'mailto:maniprasadneupane01@gmail.com' },
    { icon: <FiPhone size={18} />, label: 'Phone', value: '+977 9849946279', href: 'tel:+9779849946279' },
    { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/maniprasadneupane01-prog', href: 'https://github.com/maniprasadneupane01-prog' },
    { icon: <FiInstagram size={18} />, label: 'Instagram', value: 'instagram.com/pratikneupane02', href: 'https://instagram.com/pratikneupane02' },
    { icon: <FiFacebook size={18} />, label: 'Facebook', value: 'facebook.com/pratik.neupane.378', href: 'https://facebook.com/pratik.neupane.378' },
  ],
  de: [
    { icon: <FiMail size={18} />, label: 'E-Mail', value: 'maniprasadneupane01@gmail.com', href: 'mailto:maniprasadneupane01@gmail.com' },
    { icon: <FiPhone size={18} />, label: 'Telefon', value: '+977 9849946279', href: 'tel:+9779849946279' },
    { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/maniprasadneupane01-prog', href: 'https://github.com/maniprasadneupane01-prog' },
    { icon: <FiInstagram size={18} />, label: 'Instagram', value: 'instagram.com/pratikneupane02', href: 'https://instagram.com/pratikneupane02' },
    { icon: <FiFacebook size={18} />, label: 'Facebook', value: 'facebook.com/pratik.neupane.378', href: 'https://facebook.com/pratik.neupane.378' },
  ],
  np: [
    { icon: <FiMail size={18} />, label: 'इमेल', value: 'maniprasadneupane01@gmail.com', href: 'mailto:maniprasadneupane01@gmail.com' },
    { icon: <FiPhone size={18} />, label: 'फोन', value: '+977 9849946279', href: 'tel:+9779849946279' },
    { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/maniprasadneupane01-prog', href: 'https://github.com/maniprasadneupane01-prog' },
    { icon: <FiInstagram size={18} />, label: 'Instagram', value: 'instagram.com/pratikneupane02', href: 'https://instagram.com/pratikneupane02' },
    { icon: <FiFacebook size={18} />, label: 'Facebook', value: 'facebook.com/pratik.neupane.378', href: 'https://facebook.com/pratik.neupane.378' },
  ],
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const currentContactInfo = contactInfo[language] || contactInfo.en

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.errors) {
          const newErrors = {}
          data.errors.forEach((err) => {
            newErrors[err.path] = err.msg
          })
          setErrors(newErrors)
        }
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="bg-bg-secondary" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-main font-mono text-sm mb-4 tracking-wider uppercase">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">{t('contact', 'title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('contact', 'subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentContactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card glow-border flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-main/10 flex items-center justify-center text-accent-main group-hover:bg-accent-main/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm text-text-primary group-hover:text-accent-main transition-colors truncate max-w-[200px]">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-text-muted mb-2">{t('contact', 'fullName')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-bg-tertiary border ${errors.name ? 'border-red-500' : 'border-text-faint/30'} rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-main transition-colors`}
                    placeholder="Your name"
                    required
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-text-muted mb-2">{t('contact', 'email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-bg-tertiary border ${errors.email ? 'border-red-500' : 'border-text-faint/30'} rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-main transition-colors`}
                    placeholder="you@example.com"
                    required
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-text-muted mb-2">{t('contact', 'message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-bg-tertiary border ${errors.message ? 'border-red-500' : 'border-text-faint/30'} rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-main transition-colors resize-none`}
                  placeholder="Tell me what's on your mind..."
                  required
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--accent-main)',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  padding: '1.25rem 2rem',
                  boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'none',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <FiLoader className="animate-spin" size={20} />
                    {t('contact', 'sending')}
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    {t('contact', 'sendMessage')}
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  className="rounded-lg text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 217, 163, 0.1)',
                    border: '1px solid rgba(0, 217, 163, 0.2)',
                    color: 'var(--accent-green)',
                  }}
                >
                  {t('contact', 'success')}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="rounded-lg text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: '#f87171',
                  }}
                >
                  {t('contact', 'error')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}