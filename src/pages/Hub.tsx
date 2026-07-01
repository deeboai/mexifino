import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PitchBadge } from '../components/PitchBadge'

export default function Hub() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white noise">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[50vh] w-[50vh] rounded-full bg-[oklch(0.76_0.14_180/0.08)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-[oklch(0.5_0.2_25/0.08)] blur-3xl" />
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10"
      >
        <span className="font-display text-sm uppercase tracking-[0.3em] text-white/60">Two clubs · one pitch</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Concept 2026</span>
      </motion.header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-8 text-center md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-xs uppercase tracking-[0.4em] text-white/50"
        >
          Step into the ring
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 font-gothic text-5xl leading-[0.9] md:text-8xl"
        >
          Choose your <span className="italic">club</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-sm text-white/60 md:text-base"
        >
          Two independent fight studios. Two distinct worlds. Pick a door — walk through.
        </motion.p>
      </section>

      <section className="relative z-10 mx-auto mt-16 grid max-w-7xl gap-6 px-6 pb-24 md:mt-24 md:grid-cols-2 md:gap-8 md:px-10">
        <ClubCard
          to="/all-in"
          delay={0.2}
          name="All In Fight & Fitness Club"
          tag="BJJ · Boxing · Muay Thai · MMA · Fitness"
          logo="/media/all-in-logo.png"
          accent="teal"
        />
        <ClubCard
          to="/mexifino"
          delay={0.35}
          name="Mexifino Boxing Studio"
          tag="Northfield, MN · Fight culture meets bold art"
          logo="/media/mexifino-wordmark.png"
          accent="bone"
          invertLogo
        />
      </section>

      <PitchBadge tone="dark" />
    </main>
  )
}

function ClubCard({
  to,
  name,
  tag,
  logo,
  accent,
  delay,
  invertLogo,
}: {
  to: string
  name: string
  tag: string
  logo: string
  accent: 'teal' | 'bone'
  delay: number
  invertLogo?: boolean
}) {
  const accentBg = accent === 'teal' ? 'bg-teal' : 'bg-white'
  const glow =
    accent === 'teal'
      ? 'group-hover:shadow-[0_0_80px_-10px_oklch(0.76_0.14_180/0.5)]'
      : 'group-hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.3)]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={to}
        className={`group relative block h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 transition-all duration-700 hover:border-white/30 ${glow}`}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.img
            src={logo}
            alt=""
            className={`h-[70%] w-auto object-contain opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-70 ${invertLogo ? 'invert' : ''}`}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
          />
        </div>

        <div className="absolute inset-0 scrim-b" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8">
          <div>
            <p className={`font-display text-xs uppercase tracking-[0.3em] ${accent === 'teal' ? 'text-teal' : 'text-white/70'}`}>
              Enter
            </p>
            <h2 className="mt-2 font-gothic text-3xl leading-tight md:text-4xl">{name}</h2>
            <p className="mt-2 text-xs text-white/60 md:text-sm">{tag}</p>
          </div>
          <motion.div
            className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-black transition-all ${accentBg}`}
            whileHover={{ rotate: -45 }}
          >
            <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
