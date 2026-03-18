import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar, FiLock } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import { projects, type ProjectCategory } from '../../data'

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Backend', value: 'backend' },
  { label: 'Data / Cloud', value: 'data' },
]

const categoryColors: Record<string, string> = {
  web: 'dark:bg-violet-500/15 dark:text-violet-300 dark:border-violet-500/20 bg-violet-100 text-violet-700 border-violet-200',
  mobile: 'dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border-cyan-200',
  backend: 'dark:bg-pink-500/15 dark:text-pink-300 dark:border-pink-500/20 bg-pink-100 text-pink-700 border-pink-200',
  data: 'dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/20 bg-amber-100 text-amber-700 border-amber-200',
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isPrivate = !project.github

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card p-6 flex flex-col group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Gradient top border on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-violet via-purple-400 to-accent-cyan"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl dark:bg-dark-700 bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
            {project.icon}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-sm dark:text-white text-gray-900 group-hover:text-accent-violet-light transition-colors leading-tight">
                {project.title}
              </h3>
              {project.featured && (
                <FiStar className="w-3 h-3 text-amber-400 fill-amber-400 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-md border ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              {project.company && (
                <span className="text-xs dark:text-gray-500 text-gray-400 font-medium">
                  @ {project.company}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {isPrivate ? (
            <span
              title="Private / Proprietary"
              className="w-8 h-8 flex items-center justify-center rounded-lg dark:bg-dark-700 bg-gray-100 dark:text-gray-600 text-gray-400 cursor-default"
            >
              <FiLock className="w-3.5 h-3.5" />
            </span>
          ) : (
            <a
              href={project.github!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg dark:bg-dark-700 bg-gray-100 dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900 dark:hover:bg-dark-600 hover:bg-gray-200 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="w-3.5 h-3.5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="w-8 h-8 flex items-center justify-center rounded-lg dark:bg-dark-700 bg-gray-100 dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900 dark:hover:bg-dark-600 hover:bg-gray-200 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 dark:bg-dark-950 bg-white">
      <div className="section-container">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Professional systems, open-source tools, and side projects — spanning web, mobile, and data engineering."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {filters.map(({ label, value }) => {
            const count = value === 'all' ? projects.length : projects.filter((p) => p.category === value).length
            return (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  activeFilter === value
                    ? 'bg-gradient-to-r from-accent-violet to-purple-500 text-white border-transparent shadow-glow'
                    : 'dark:bg-dark-800 dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-accent-violet/40 bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-violet-300'
                }`}
              >
                {label}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-md ${activeFilter === value ? 'bg-white/20 text-white' : 'dark:bg-dark-700 dark:text-gray-500 bg-gray-100 text-gray-400'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note about private projects */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs dark:text-gray-600 text-gray-400 mt-6 flex items-center justify-center gap-1.5"
        >
          <FiLock className="w-3 h-3" />
          Professional projects are marked private due to NDA / proprietary code
        </motion.p>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/kratijain1606"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub className="w-4 h-4" />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
