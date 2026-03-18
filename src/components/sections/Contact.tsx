import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiMapPin } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import AnimatedSection from '../ui/AnimatedSection'
import { personalInfo } from '../../data'

const socialLinks = [
  {
    icon: FiGithub,
    href: personalInfo.social.github,
    label: 'GitHub',
    username: '@kratijain1606',
    color: 'hover:text-white hover:border-white/30',
  },
  {
    icon: FiLinkedin,
    href: personalInfo.social.linkedin,
    label: 'LinkedIn',
    username: 'krati-jain-aa2494180',
    color: 'hover:text-blue-400 hover:border-blue-400/40',
  },
  {
    icon: FiTwitter,
    href: personalInfo.social.twitter,
    label: 'Twitter / X',
    username: '@Krati04619551',
    color: 'hover:text-sky-400 hover:border-sky-400/40',
  },
]

type FormState = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    // Simulate form submission (replace with real service like Formspree/EmailJS)
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setFormState('idle'), 4000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 dark:bg-dark-900 bg-gray-50/50">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left panel */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Email card */}
              <div className="glass-card p-6">
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-4">
                  Get in touch
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-purple-600 flex items-center justify-center">
                    <FiMail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs dark:text-gray-500 text-gray-400">Email</p>
                    <p className="text-sm font-medium dark:text-gray-200 text-gray-800">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 flex items-center justify-center gap-2 ${
                    copied
                      ? 'dark:bg-emerald-500/20 dark:border-emerald-500/40 dark:text-emerald-400 bg-emerald-50 border-emerald-300 text-emerald-600'
                      : 'dark:bg-dark-700 dark:border-white/10 dark:text-gray-300 dark:hover:border-accent-violet/40 bg-gray-100 border-gray-200 text-gray-700 hover:border-violet-300'
                  }`}
                >
                  {copied ? (
                    <>
                      <FiCheck className="w-4 h-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <FiMail className="w-4 h-4" /> Copy Email
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 dark:bg-dark-800 bg-white border dark:border-white/5 border-gray-200 rounded-xl p-4">
                <FiMapPin className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                <div>
                  <p className="text-xs dark:text-gray-500 text-gray-400">Location</p>
                  <p className="text-sm font-medium dark:text-gray-200 text-gray-700">{personalInfo.location}</p>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-6">
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-4">
                  Find me online
                </p>
                <div className="space-y-3">
                  {socialLinks.map(({ icon: Icon, href, label, username, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl dark:border dark:border-white/5 border border-gray-200 dark:text-gray-400 text-gray-500 transition-all duration-200 ${color}`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold">{label}</p>
                        <p className="text-xs dark:text-gray-600 text-gray-400 font-mono">{username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Contact form */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-6">Send a message</h3>

              {formState === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <FiCheck className="w-7 h-7 text-emerald-400" />
                  </div>
                  <p className="text-lg font-bold dark:text-white text-gray-900">Message sent!</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600 text-center">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold dark:text-gray-400 text-gray-600 mb-1.5">
                        Name <span className="text-accent-violet">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl text-sm dark:bg-dark-700 dark:border dark:border-white/10 dark:text-white dark:placeholder-gray-600 dark:focus:border-accent-violet/50 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-accent-violet/15 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold dark:text-gray-400 text-gray-600 mb-1.5">
                        Email <span className="text-accent-violet">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm dark:bg-dark-700 dark:border dark:border-white/10 dark:text-white dark:placeholder-gray-600 dark:focus:border-accent-violet/50 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-accent-violet/15 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold dark:text-gray-400 text-gray-600 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      placeholder="What's this about?"
                      className="w-full px-4 py-2.5 rounded-xl text-sm dark:bg-dark-700 dark:border dark:border-white/10 dark:text-white dark:placeholder-gray-600 dark:focus:border-accent-violet/50 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-accent-violet/15 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold dark:text-gray-400 text-gray-600 mb-1.5">
                      Message <span className="text-accent-violet">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm dark:bg-dark-700 dark:border dark:border-white/10 dark:text-white dark:placeholder-gray-600 dark:focus:border-accent-violet/50 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-accent-violet/15 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary justify-center py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
