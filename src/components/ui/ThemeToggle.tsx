import { motion } from 'framer-motion'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl dark:bg-dark-700 dark:border dark:border-white/10 bg-gray-100 border border-gray-200 transition-colors duration-200 hover:border-accent-violet/50"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <BsMoonStarsFill className="w-4 h-4 text-accent-violet-light" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <BsSunFill className="w-4 h-4 text-amber-400" />
      </motion.div>
    </motion.button>
  )
}
