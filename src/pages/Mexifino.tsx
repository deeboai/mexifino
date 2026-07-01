import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TrialBookingForm from '../components/TrialBookingForm'
import ScheduleTable from '../components/ScheduleTable'
import ConceptBadge from '../components/ConceptBadge'
import VideoBackground from '../components/VideoBackground'
import Reveal from '../components/Reveal'

const programs = [
  { name: 'Boxing', copy: 'Technical, old-school boxing fundamentals — stance, defense, combinations.' },
  { name: 'Kickboxing', copy: 'Boxing plus kicks — a full-body conditioning workout with real technique.' },
  { name: 'Personal Training', copy: '1-on-1 sessions built around your goals, from first mitt work to fight-ready.' },
  { name: 'Group Fitness', copy: 'High-energy classes for anyone who wants the workout, not the fight.' },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const rows = [
  { time: '6:00a', classes: [{ day: 'Mon', label: 'Boxing' }, { day: 'Wed', label: 'Boxing' }, { day: 'Fri', label: 'Boxing' }] },
  { time: '8:00a', classes: [{ day: 'Tue', label: 'Group Fitness' }, { day: 'Thu', label: 'Group Fitness' }] },
  { time: '12:00p', classes: [{ day: 'Mon', label: 'Personal Training' }, { day: 'Wed', label: 'Personal Training' }] },
  { time: '5:00p', classes: [{ day: 'Tue', label: 'Kickboxing' }, { day: 'Thu', label: 'Kickboxing' }] },
  { time: '6:00p', classes: [{ day: 'Mon', label: 'Boxing' }, { day: 'Wed', label: 'Boxing' }, { day: 'Fri', label: 'Boxing' }] },
  { time: '9:00a', classes: [{ day: 'Sat', label: 'Open gym' }] },
]

export default function Mexifino() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ConceptBadge />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
          <Link
            to="/"
            aria-label="Back to Northfield Fight Clubs"
            className="shrink-0 text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-700"
          >
            <span aria-hidden>←</span> <span className="hidden sm:inline">Northfield Fight Clubs</span>
          </Link>
          <span className="text-lg" style={{ fontFamily: 'var(--font-blackletter)' }}>
            Mexifino
          </span>
          <a
            href="#booking"
            className="shrink-0 rounded border border-neutral-900 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white sm:px-4 sm:text-xs"
          >
            Free trial
          </a>
        </div>
      </header>

      {/* Hero — real gym footage in the background */}
      <VideoBackground
        webmSrc="/video/mexifino-hero.webm"
        mp4Src="/video/mexifino-hero.mp4"
        overlayClassName="bg-gradient-to-b from-black/70 via-black/60 to-black/85"
        fallbackClassName="bg-neutral-950"
        className="flex min-h-[85vh] flex-col items-center justify-center border-b border-neutral-900 px-6 py-28 text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50"
        >
          Northfield, Minnesota
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-7xl leading-none sm:text-9xl"
          style={{ fontFamily: 'var(--font-blackletter)' }}
        >
          Mexifino
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 font-[Oswald] text-lg uppercase tracking-[0.3em] text-white/80 sm:text-xl"
        >
          Boxing Studio
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-white/60"
        >
          Where fight culture meets bold art. A full-service boxing studio for kids, adults, and everyone
          starting from zero.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#booking" className="rounded bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-white/85">
            Book your free trial class
          </a>
          <a href="#programs" className="rounded border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-white">
            See our programs
          </a>
        </motion.div>
      </VideoBackground>

      {/* About / coach */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <VideoBackground
            webmSrc="/video/mexifino-training.webm"
            mp4Src="/video/mexifino-training.mp4"
            overlayClassName="bg-black/35"
            fallbackClassName="bg-neutral-950"
            className="relative flex aspect-square items-center justify-center rounded-lg border border-neutral-200"
          >
            <span
              className="pointer-events-none select-none text-[13rem] leading-none text-white/10"
              style={{ fontFamily: 'var(--font-blackletter)' }}
              aria-hidden
            >
              M
            </span>
            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/70">
              Live from the studio
            </span>
          </VideoBackground>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-400">Coached by Jesse Tores</p>
          <h2 className="mb-5 text-3xl font-semibold leading-snug">
            Bright studio. Serious coaching. No lockers, no showers, no fluff.
          </h2>
          <p className="mb-4 text-neutral-500">
            Mexifino brings a raw, art-forward take on the classic boxing gym — bold visuals on the walls, real
            boxing in the ring. About a third of our members are women, and most people who walk through the
            door aren't chasing a fight. They want to get stronger, get in shape, and learn how to handle
            themselves.
          </p>
          <p className="text-neutral-500">
            Coach Jesse trains alongside professional boxers who followed him to Minnesota — so whether you're
            here for your first class or your next fight, you're training with the same standard.
          </p>
        </Reveal>
      </section>

      {/* Programs */}
      <section id="programs" className="border-y border-neutral-200 bg-neutral-950 px-6 py-24 text-white">
        <Reveal>
          <h2 className="mb-2 text-center font-[Oswald] text-sm uppercase tracking-[0.3em] text-white/40">Programs</h2>
          <p className="mb-14 text-center text-3xl font-semibold">Train your way</p>
        </Reveal>
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.2 }}
                className="rounded-lg border border-white/10 p-6"
              >
                <h3 className="mb-2 font-[Oswald] text-lg uppercase tracking-wide">{p.name}</h3>
                <p className="text-sm text-white/50">{p.copy}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="mb-2 text-center font-[Oswald] text-sm uppercase tracking-[0.3em] text-neutral-400">Class schedule</h2>
          <p className="mb-10 text-center text-3xl font-semibold">Sample weekly schedule</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-lg border border-neutral-200 bg-neutral-950 p-6 text-white">
            <ScheduleTable
              days={days}
              rows={rows}
              accentTextClass="text-white/60"
              chipClass="bg-white/15 text-white"
            />
          </div>
        </Reveal>
      </section>

      {/* Booking */}
      <section id="booking" className="border-t border-neutral-200 bg-neutral-950 px-6 py-24 text-white">
        <Reveal className="mx-auto max-w-lg">
          <h2 className="mb-2 text-center font-[Oswald] text-sm uppercase tracking-[0.3em] text-white/40">Get started</h2>
          <p className="mb-8 text-center text-3xl font-semibold">Claim your free trial class</p>
          <TrialBookingForm
            classOptions={['Boxing', 'Kickboxing', 'Personal Training', 'Group Fitness']}
            accentClass="border-white"
            accentTextClass="text-white"
            buttonClass="bg-white text-black hover:bg-neutral-200"
          />
        </Reveal>
      </section>

      {/* Location */}
      <footer className="border-t border-neutral-200 px-6 py-14 text-center">
        <p className="mb-1 font-semibold">Mexifino Boxing Studio</p>
        <p className="text-sm text-neutral-500">1500 Clinton Ln, Ste H · Northfield, MN 55057</p>
        <p className="text-sm text-neutral-500">(763) 341-5926 · Mon–Sat 6:00a – 7:30p</p>
        <p className="mt-4 text-xs text-neutral-300">Design concept</p>
      </footer>
    </div>
  )
}
