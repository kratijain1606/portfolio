import { motion } from 'framer-motion'
import { FiExternalLink, FiCode } from 'react-icons/fi'
import { HiAcademicCap, HiMapPin } from 'react-icons/hi2'
import { FiSmartphone, FiServer } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'
import AnimatedSection from '../ui/AnimatedSection'
import { personalInfo, education, achievements, leadership, techStack } from '../../data'

const highlights = [
  {
    icon: FiCode,
    label: 'Backend',
    value: 'Java · Spring Boot · Kafka · Node.js',
    color: 'text-accent-violet-light',
    bg: 'dark:bg-accent-violet/10 bg-violet-50',
  },
  {
    icon: FiSmartphone,
    label: 'Mobile & Frontend',
    value: 'Flutter · React · Angular · Dart',
    color: 'text-accent-cyan',
    bg: 'dark:bg-accent-cyan/10 bg-cyan-50',
  },
  {
    icon: FiServer,
    label: 'Data & Cloud',
    value: 'MongoDB · Kafka · HBase · Azure',
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
          title="Building things that matter"
          subtitle="3+ years shipping production systems at scale — from Goldman Sachs compliance platforms to mobile apps."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — Avatar + quick info */}
          <AnimatedSection direction="left">
            <div>
              {/* Avatar */}
              <div className="relative mx-auto lg:mx-0 w-52 h-52 mb-8">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-violet to-accent-cyan opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-3xl dark:bg-dark-800 bg-white border dark:border-white/10 border-gray-200 flex items-center justify-center shadow-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/10" />
                  <span className="relative text-6xl font-black gradient-text select-none">KJ</span>
                </div>
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl dark:bg-dark-700 bg-white border dark:border-white/10 border-gray-200 shadow-card text-xs font-semibold dark:text-white text-gray-800 flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {personalInfo.availability}
                </motion.div>
              </div>

              {/* Location chip */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center gap-1.5 text-xs dark:text-gray-400 text-gray-600 dark:bg-dark-700 bg-white border dark:border-white/10 border-gray-200 px-3 py-1.5 rounded-lg">
                  <HiMapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  {personalInfo.location}
                </span>
              </div>

              {/* Education */}
              <div className="mb-6">
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">
                  Education
                </p>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className={`p-4 rounded-xl border ${edu.current ? 'dark:bg-accent-violet/10 dark:border-accent-violet/30 bg-violet-50 border-violet-200' : 'dark:bg-dark-800 dark:border-white/5 bg-white border-gray-200'}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <HiAcademicCap className={`w-3.5 h-3.5 flex-shrink-0 ${edu.current ? 'text-accent-violet-light' : 'text-gray-400'}`} />
                            <span className={`text-xs font-bold ${edu.current ? 'dark:text-accent-violet-light text-violet-700' : 'dark:text-gray-200 text-gray-800'}`}>
                              {edu.institution}
                            </span>
                            {edu.current && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs dark:text-gray-400 text-gray-600 mt-0.5 ml-5">{edu.degree} · {edu.field}</p>
                          {edu.gpa && (
                            <p className="text-xs font-mono dark:text-gray-500 text-gray-400 mt-0.5 ml-5">GPA: {edu.gpa}</p>
                          )}
                        </div>
                        <span className="text-[10px] font-mono dark:text-gray-500 text-gray-400 flex-shrink-0">{edu.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
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

          {/* Right — Bio, stats, achievements, leadership */}
          <AnimatedSection direction="right" delay={0.1}>
            <div>
              <p className="text-base md:text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
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

              {/* Achievements */}
              <div className="mb-8">
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">
                  Awards & Recognition
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((a) => (
                    <motion.div
                      key={a.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5 border-gray-200"
                    >
                      <span className="text-2xl flex-shrink-0">{a.icon}</span>
                      <div>
                        <p className="text-xs font-semibold dark:text-gray-200 text-gray-800">{a.title}</p>
                        <p className="text-xs dark:text-gray-500 text-gray-400">{a.org} · {a.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div className="mb-8">
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">
                  Leadership & Community
                </p>
                <div className="space-y-2">
                  {leadership.map((l) => (
                    <div key={l.id} className="flex items-center gap-3 p-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5 border-gray-200">
                      <span className="text-lg flex-shrink-0">{l.icon}</span>
                      <div>
                        <p className="text-xs font-semibold dark:text-gray-200 text-gray-800">{l.role}</p>
                        <p className="text-xs dark:text-gray-500 text-gray-400">{l.org} · {l.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <p className="text-xs font-mono font-semibold dark:text-gray-500 text-gray-400 tracking-widest uppercase mb-3">
                  Tech I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
