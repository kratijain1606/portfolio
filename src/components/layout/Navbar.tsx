import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from '../ui/ThemeToggle'
import { useActiveSection } from '../../hooks/useActiveSection'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'dark:bg-dark-900/80 bg-white/80 backdrop-blur-xl dark:border-b dark:border-white/5 border-b border-gray-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center shadow-glow group-hover:shadow-glow-cyan transition-shadow">
              <span className="text-white font-black text-sm">K</span>
            </div>
            <span className="font-bold text-sm dark:text-white text-gray-900 hidden sm:block">
              Krati<span className="text-accent-violet-light">.dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`nav-link px-3 py-1.5 rounded-lg ${isActive ? 'active' : ''}`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:kratijain1600@gmail.com"
              className="hidden md:inline-flex btn-primary py-2 px-4 text-xs"
            >
              Hire Me
            </a>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl dark:bg-dark-700 dark:border dark:border-white/10 bg-gray-100 border border-gray-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX className="w-5 h-5 dark:text-white text-gray-900" />
              ) : (
                <HiMenuAlt3 className="w-5 h-5 dark:text-white text-gray-900" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 dark:bg-dark-900/95 bg-white/95 backdrop-blur-xl dark:border-b dark:border-white/5 border-b border-gray-200 shadow-xl"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${isActive
                        ? 'dark:bg-accent-violet/20 dark:text-white bg-violet-100 text-violet-700'
                        : 'dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {label}
                  </button>
                )
              })}
              <a
                href="mailto:kratijain1600@gmail.com"
                className="btn-primary mt-2 justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
