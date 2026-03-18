import { motion } from 'framer-motion'
import { FiExternalLink, FiCode, FiSmartphone, FiServer } from 'react-icons/fi'
import { HiAcademicCap, HiMapPin } from 'react-icons/hi2'
import SectionTitle from '../ui/SectionTitle'
import AnimatedSection from '../ui/AnimatedSection'
import { personalInfo, techStack } from '../../data'

const highlights = [
  {
    icon: FiCode,
    label: 'Frontend',
    value: 'React · HTML · CSS · Bootstrap',
    color: 'text-accent-violet-light',
    bg: 'dark:bg-accent-violet/10 bg-violet-50',
  },
  {
    icon: FiSmartphone,
    label: 'Mobile',
    value: 'Flutter · Dart · Firebase',
    color: 'text-accent-cyan',
    bg: 'dark:bg-accent-cyan/10 bg-cyan-50',
  },
  {
    icon: FiServer,
    label: 'Backend',
    value: 'Node.js · Express · MongoDB',
    color: 'text-pink-400',
    bg: 'dark:bg-pink-500/10 bg-pink-50',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 dark:bg-dark-900 bg-gray-50/50">
      <div className="section-container">
        <SectionTitle
          eyebrow="About Me"
          title="Building things people love"
          subtitle="A developer who thrives at the intersection of creativity and engineering."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Avatar + highlights */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Avatar card */}
              <div className="relative mx-auto lg:mx-0 w-56 h-56 mb-8">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-violet to-accent-cyan opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-3xl dark:bg-dark-800 bg-white border dark:border-white/10 border-gray-200 flex items-center justify-center shadow-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/10" />
                  <span className="relative text-7xl font-black gradient-text select-none">KJ</span>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl dark:bg-dark-700 bg-white border dark:border-white/10 border-gray-200 shadow-card text-xs font-semibold dark:text-white text-gray-800 flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Available
                </motion.div>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center gap-1.5 text-xs dark:text-gray-400 text-gray-600 dark:bg-dark-700 bg-white border dark:border-white/10 border-gray-200 px-3 py-1.5 rounded-lg">
                  <HiAcademicCap className="w-3.5 h-3.5 text-accent-violet-light" />
                  B.E. CSE — SGSITS, Indore
                </span>
                <span className="flex items-center gap-1.5 text-xs dark:text-gray-400 text-gray-600 dark:bg-dark-700 bg-white border dark:border-white/10 border-gray-200 px-3 py-1.5 rounded-lg">
                  <HiMapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  {personalInfo.location}
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map(({ icon: Icon, label, value, color, bg }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 p-3 rounded-xl ${bg} border dark:border-white/5 border-gray-200/80`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${color}`} />
                    <div>
                      <span className="text-xs font-semibold dark:text-gray-300 text-gray-700">{label}</span>
                      <p className="text-xs dark:text-gray-500 text-gray-500 font-mono mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio + stats + tech */}
          <AnimatedSection direction="right" delay={0.1}>
            <div>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-8">
                When I'm not coding, you'll find me on competitive programming platforms like{' '}
                <strong className="dark:text-gray-200 text-gray-800">Codechef</strong>,{' '}
                <strong className="dark:text-gray-200 text-gray-800">LeetCode</strong>, and{' '}
                <strong className="dark:text-gray-200 text-gray-800">Codeforces</strong> — or
                creating content to help beginners break into tech.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {personalInfo.stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="text-center p-4 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5 border-gray-200"
                  >
                    <div className="text-2xl font-black gradient-text mb-1">{value}</div>
                    <div className="text-xs dark:text-gray-500 text-gray-500 font-medium leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">
                  Tech I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FiExternalLink className="w-4 h-4" />
                  View GitHub
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
