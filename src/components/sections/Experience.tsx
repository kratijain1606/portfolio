import { motion } from 'framer-motion'
import { FiBriefcase, FiCode, FiAward, FiBookOpen } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { experience } from '../../data'

const typeConfig = {
  project: {
    icon: FiCode,
    color: 'text-accent-violet-light',
    bg: 'dark:bg-accent-violet/15 bg-violet-100',
    border: 'dark:border-accent-violet/30 border-violet-200',
    dot: 'bg-accent-violet shadow-[0_0_12px_rgba(124,58,237,0.6)]',
    label: 'Project',
  },
  internship: {
    icon: FiBriefcase,
    color: 'text-accent-cyan',
    bg: 'dark:bg-accent-cyan/15 bg-cyan-100',
    border: 'dark:border-accent-cyan/30 border-cyan-200',
    dot: 'bg-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.6)]',
    label: 'Internship',
  },
  workshop: {
    icon: FiBookOpen,
    color: 'text-amber-400',
    bg: 'dark:bg-amber-500/15 bg-amber-100',
    border: 'dark:border-amber-500/30 border-amber-200',
    dot: 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]',
    label: 'Workshop',
  },
  achievement: {
    icon: FiAward,
    color: 'text-pink-400',
    bg: 'dark:bg-pink-500/15 bg-pink-100',
    border: 'dark:border-pink-500/30 border-pink-200',
    dot: 'bg-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.6)]',
    label: 'Achievement',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 dark:bg-dark-900 bg-gray-50/50">
      <div className="section-container">
        <SectionTitle
          eyebrow="Experience"
          title="My journey so far"
          subtitle="Projects, internships, workshops, and achievements that shaped me as a developer."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px dark:bg-gradient-to-b dark:from-accent-violet/50 dark:via-accent-cyan/30 dark:to-transparent bg-gradient-to-b from-violet-300 via-cyan-200 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const config = typeConfig[item.type]
              const Icon = config.icon

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 flex items-center justify-center w-10 h-10 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/10 border-gray-200 z-10">
                    <div className={`absolute w-2 h-2 rounded-full ${config.dot} -top-1 -right-1`} />
                    <Icon className={`w-4 h-4 ${config.color}`} />
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${config.bg} ${config.color} ${config.border}`}>
                            {config.label}
                          </span>
                        </div>
                        <h3 className="text-base font-bold dark:text-white text-gray-900">
                          {item.role}
                        </h3>
                        <p className="text-sm dark:text-gray-400 text-gray-600 font-medium mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono dark:bg-dark-700 bg-gray-100 dark:text-gray-400 text-gray-500 px-3 py-1.5 rounded-lg border dark:border-white/10 border-gray-200 whitespace-nowrap flex-shrink-0">
                        {item.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm dark:text-gray-400 text-gray-600 leading-relaxed"
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot.split(' ')[0]}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
