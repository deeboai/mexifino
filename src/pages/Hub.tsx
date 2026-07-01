import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'

export default function Hub() {
  return (
    <VideoBackground
      webmSrc="/video/mexifino-hero.webm"
      mp4Src="/video/mexifino-hero.mp4"
      overlayClassName="bg-black/75"
      className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40"
      >
        Website concepts
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-2 text-2xl font-light text-white/90"
      >
        Northfield Fight Clubs
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-14 max-w-md text-sm text-white/40"
      >
        Pick a club to preview its site concept
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid w-full max-w-4xl gap-6 sm:grid-cols-2"
      >
        <Link to="/all-in" className="group block">
          <motion.div
            whileHover={{ y: -6, borderColor: 'rgba(45,212,191,0.5)' }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-neutral-950/80 p-10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <p className="relative mb-4 text-xs uppercase tracking-widest text-teal-400">Fight &amp; fitness club</p>
            <h2 className="relative text-4xl text-teal-300" style={{ fontFamily: 'var(--font-blackletter)' }}>
              All In
            </h2>
            <p className="relative mt-1 font-[Oswald] text-sm uppercase tracking-widest text-white/60">
              Fight &amp; Fitness Club
            </p>
            <p className="relative mt-4 text-sm text-white/40">BJJ · Boxing · Muay Thai · MMA · Fitness</p>
          </motion.div>
        </Link>

        <Link to="/mexifino" className="group block">
          <motion.div
            whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.4)' }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-neutral-950/80 p-10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <p className="relative mb-4 text-xs uppercase tracking-widest text-white/50">Boxing studio</p>
            <h2 className="relative text-4xl text-white" style={{ fontFamily: 'var(--font-blackletter)' }}>
              Mexifino
            </h2>
            <p className="relative mt-1 font-[Oswald] text-sm uppercase tracking-widest text-white/60">
              Boxing Studio
            </p>
            <p className="relative mt-4 text-sm text-white/40">Northfield, MN — Coach Jesse Tores</p>
          </motion.div>
        </Link>
      </motion.div>
    </VideoBackground>
  )
}
