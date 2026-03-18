import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../../data'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="dark:bg-dark-900 bg-gray-50 dark:border-t dark:border-white/5 border-t border-gray-200">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
              <span className="text-white font-black text-xs">K</span>
            </div>
            <span className="font-bold text-sm dark:text-white text-gray-900">
              Krati<span className="text-accent-violet-light">.dev</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-xl dark:bg-dark-700 dark:border dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-accent-violet/40 bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-violet-300 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs dark:text-gray-500 text-gray-400 flex items-center gap-1">
            Built with{' '}
            <FiHeart className="w-3 h-3 text-pink-500 fill-pink-500" /> by Krati Jain
            &nbsp;·&nbsp; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
