import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight, FiDownload } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import { personalInfo } from '../../data'

const roles = personalInfo.roles

function TypewriterText() {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = roles[current]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setCurrent((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, current])

  return (
    <span className="gradient-text font-black">
      {displayed}
      <span className="animate-pulse text-accent-violet">|</span>
    </span>
  )
}

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dark:bg-dark-950 bg-white"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-grid-pattern absolute inset-0 opacity-100" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent-violet/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent-cyan/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]"
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-violet/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold dark:bg-accent-violet/10 dark:border dark:border-accent-violet/30 dark:text-accent-violet-light bg-violet-100 border border-violet-200 text-violet-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <HiSparkles className="w-3.5 h-3.5" />
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={item}
            className="text-sm font-mono font-medium dark:text-gray-400 text-gray-500 mb-3 tracking-wider"
          >
            Hello, world! 👋 I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none dark:text-white text-gray-900 mb-4"
          >
            {personalInfo.firstName}{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-gray-300 text-gray-700 mb-6 h-10 flex items-center"
          >
            <TypewriterText />
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-base md:text-lg dark:text-gray-400 text-gray-600 max-w-xl leading-relaxed mb-8"
          >
            {personalInfo.bioShort}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base px-8 py-3.5"
            >
              View My Work
              <FiArrowRight className="w-4 h-4" />
            </button>
            <a href="mailto:kratijain1600@gmail.com" className="btn-secondary text-base px-8 py-3.5">
              <FiDownload className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="text-xs dark:text-gray-600 text-gray-400 font-mono">CONNECT</span>
            <div className="h-px w-8 dark:bg-gray-700 bg-gray-300" />
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl dark:bg-dark-700 dark:border dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-accent-violet/40 dark:hover:bg-accent-violet/10 bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono dark:text-gray-600 text-gray-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 dark:border-gray-700 border-gray-300 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full dark:bg-gray-500 bg-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
