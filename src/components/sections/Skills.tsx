import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiDatabase, FiTool } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { skillCategories } from '../../data'

const categoryIcons: Record<string, React.ElementType> = {
  frontend: FiMonitor,
  mobile: FiSmartphone,
  backend: FiDatabase,
  tools: FiTool,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const active = skillCategories.find((c) => c.category === activeCategory) ?? skillCategories[0]

  return (
    <section id="skills" className="py-24 dark:bg-dark-950 bg-white">
      <div className="section-container">
        <SectionTitle
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="Technologies and tools I've worked with and continue to explore."
        />

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.category] ?? FiTool
              const isActive = cat.category === activeCategory
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'dark:bg-accent-violet/15 dark:border-accent-violet/40 dark:text-white bg-violet-50 border-violet-300 text-violet-700 shadow-glow'
                      : 'dark:bg-dark-800 dark:border-white/5 dark:text-gray-500 dark:hover:border-white/20 dark:hover:text-gray-300 bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? '' : ''}`} />
                  <span className="text-xs font-semibold">{cat.label}</span>
                </button>
              )
            })}
          </motion.div>

          {/* Skills panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              {(() => {
                const Icon = categoryIcons[active.category] ?? FiTool
                return (
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                )
              })()}
              <div>
                <h3 className="text-base font-bold dark:text-white text-gray-900">{active.label}</h3>
                <p className="text-xs dark:text-gray-500 text-gray-400">{active.skills.length} technologies</p>
              </div>
            </div>

            <div className="space-y-5">
              {active.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium dark:text-gray-300 text-gray-700">{skill.name}</span>
                    <span className="text-xs font-mono dark:text-gray-500 text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 dark:bg-dark-700 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.07, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${active.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* All skills quick view */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-4 text-center">
              All Technologies
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {skillCategories.flatMap((cat) =>
                cat.skills.map((skill) => (
                  <motion.span
                    key={`${cat.category}-${skill.name}`}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                )),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
