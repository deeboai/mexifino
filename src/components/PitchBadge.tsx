import { motion } from 'framer-motion'

export function PitchBadge({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md ${
        isDark
          ? 'border-white/20 bg-black/60 text-white/70'
          : 'border-black/20 bg-white/70 text-black/70'
      }`}
    >
      Design concept — schedule, pricing & photos to be finalized with the gym
    </motion.div>
  )
}
