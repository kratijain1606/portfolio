import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase mb-4 dark:bg-accent-violet/15 dark:text-accent-violet-light dark:border dark:border-accent-violet/30 bg-violet-100 text-violet-700 border border-violet-200">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight dark:text-white text-gray-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg dark:text-gray-400 text-gray-500 max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
