import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import SectionTitle from '../ui/SectionTitle'
import { experience } from '../../data'

const typeConfig = {
  fulltime: {
    label: 'Full-time',
    color: 'text-accent-violet-light',
    bg: 'dark:bg-accent-violet/15 bg-violet-100',
    border: 'dark:border-accent-violet/30 border-violet-200',
    dot: 'bg-accent-violet',
    glow: 'shadow-[0_0_14px_rgba(124,58,237,0.6)]',
    line: 'from-accent-violet',
  },
  intern: {
    label: 'Internship',
    color: 'text-accent-cyan',
    bg: 'dark:bg-accent-cyan/15 bg-cyan-100',
    border: 'dark:border-accent-cyan/30 border-cyan-200',
    dot: 'bg-accent-cyan',
    glow: 'shadow-[0_0_14px_rgba(6,182,212,0.6)]',
    line: 'from-accent-cyan',
  },
  workshop: {
    label: 'Workshop',
    color: 'text-amber-400',
    bg: 'dark:bg-amber-500/15 bg-amber-100',
    border: 'dark:border-amber-500/30 border-amber-200',
    dot: 'bg-amber-400',
    glow: 'shadow-[0_0_14px_rgba(251,191,36,0.6)]',
    line: 'from-amber-400',
  },
  achievement: {
    label: 'Achievement',
    color: 'text-pink-400',
    bg: 'dark:bg-pink-500/15 bg-pink-100',
    border: 'dark:border-pink-500/30 border-pink-200',
    dot: 'bg-pink-400',
    glow: 'shadow-[0_0_14px_rgba(236,72,153,0.6)]',
    line: 'from-pink-400',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 dark:bg-dark-900 bg-gray-50/50">
      <div className="section-container">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="From Goldman Sachs compliance systems to mobile apps — building impactful software across industries."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px dark:bg-gradient-to-b dark:from-accent-violet/60 dark:via-accent-cyan/30 dark:to-transparent bg-gradient-to-b from-violet-300 via-cyan-200 to-transparent" />

          <div className="space-y-6">
            {experience.map((item, index) => {
              const config = typeConfig[item.type]
              const isFirst = index === 0

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
                    <div className={`absolute w-2.5 h-2.5 rounded-full ${config.dot} ${config.glow} -top-1 -right-1`} />
                    <FiBriefcase className={`w-4 h-4 ${config.color}`} />
                  </div>

                  {/* Card */}
                  <div className={`glass-card p-6 transition-all duration-300 hover:-translate-y-0.5 ${isFirst ? 'hover:shadow-glow' : 'hover:shadow-card'} relative overflow-hidden`}>
                    {/* Subtle gradient left border for most recent */}
                    {isFirst && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-violet to-accent-cyan" />
                    )}

                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg border ${config.bg} ${config.color} ${config.border}`}>
                            {config.label}
                          </span>
                          {isFirst && (
                            <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-lg dark:bg-emerald-500/15 dark:border dark:border-emerald-500/30 dark:text-emerald-400 bg-emerald-50 border border-emerald-200 text-emerald-600">
                              <HiSparkles className="w-3 h-3" /> Most Recent
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold dark:text-white text-gray-900 mt-1">
                          {item.role}
                        </h3>
                        <p className={`text-sm font-semibold mt-0.5 ${config.color}`}>
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="block text-xs font-mono dark:bg-dark-700 bg-gray-100 dark:text-gray-300 text-gray-600 px-3 py-1.5 rounded-lg border dark:border-white/10 border-gray-200 whitespace-nowrap mb-1">
                          {item.duration}
                        </span>
                        <span className="flex items-center justify-end gap-1 text-xs dark:text-gray-500 text-gray-400">
                          <FiMapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-4">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm dark:text-gray-400 text-gray-600 leading-relaxed"
                        >
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t dark:border-white/5 border-gray-100">
                      {item.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
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
