import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TrialBookingForm from '../components/TrialBookingForm'
import ScheduleTable from '../components/ScheduleTable'
import ConceptBadge from '../components/ConceptBadge'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'

const disciplines = [
  {
    name: 'Boxing',
    copy: 'Footwork, head movement, and hands that hit as hard as they defend.',
  },
  {
    name: 'Muay Thai',
    copy: 'The art of eight limbs — elbows, knees, and clinch work included.',
  },
  {
    name: 'BJJ',
    copy: 'Ground control and submissions, gi and no-gi, all levels welcome.',
  },
  {
    name: 'MMA',
    copy: 'Blend every discipline into one game plan under live coaching.',
  },
  {
    name: 'Fitness',
    copy: 'Strength & conditioning built specifically for fighters — and for you.',
  },
]

const stats = [
  { value: 5, suffix: '', label: 'disciplines under one roof' },
  { value: null, display: 'All', label: 'levels — beginner to competitor' },
  { value: null, display: 'Kids', label: '& adults classes' },
  { value: 1, suffix: '', label: 'free trial class, no strings' },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const rows = [
  { time: '6:00a', classes: [{ day: 'Mon', label: 'Boxing' }, { day: 'Wed', label: 'Boxing' }, { day: 'Fri', label: 'Boxing' }] },
  { time: '9:00a', classes: [{ day: 'Sat', label: 'MMA' }] },
  { time: '12:00p', classes: [{ day: 'Tue', label: 'Fitness' }, { day: 'Thu', label: 'Fitness' }] },
  { time: '5:30p', classes: [{ day: 'Mon', label: 'Muay Thai' }, { day: 'Wed', label: 'Muay Thai' }] },
  { time: '6:30p', classes: [{ day: 'Tue', label: 'BJJ' }, { day: 'Thu', label: 'BJJ' }, { day: 'Sat', label: 'BJJ' }] },
  { time: '7:30p', classes: [{ day: 'Mon', label: 'MMA' }, { day: 'Fri', label: 'Open mat' }] },
]

export default function AllIn() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ConceptBadge />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
          <Link
            to="/"
            aria-label="Back to Northfield Fight Clubs"
            className="shrink-0 text-xs uppercase tracking-widest text-white/40 hover:text-white/70"
          >
            <span aria-hidden>←</span> <span className="hidden sm:inline">Northfield Fight Clubs</span>
          </Link>
          <span className="text-lg text-teal-300" style={{ fontFamily: 'var(--font-blackletter)' }}>
            All In
          </span>
          <a
            href="#booking"
            className="shrink-0 rounded border border-teal-400/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-300 hover:bg-teal-400/10 sm:px-4 sm:text-xs"
          >
            Free trial
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-teal-400"
        >
          Northfield's fight &amp; fitness club
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl leading-none text-teal-300 sm:text-8xl"
          style={{ fontFamily: 'var(--font-blackletter)' }}
        >
          All In
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 font-[Oswald] text-xl uppercase tracking-[0.25em] text-white sm:text-2xl"
        >
          Fight &amp; Fitness Club
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-white/60"
        >
          BJJ · Boxing · Muay Thai · MMA · Fitness — five disciplines, one gym, no half measures.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#booking" className="rounded bg-teal-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-teal-300">
            Book your free trial class
          </a>
          <a href="#disciplines" className="rounded border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/50">
            See the disciplines
          </a>
        </motion.div>
      </section>

      {/* Disciplines */}
      <section id="disciplines" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="mb-2 text-center font-[Oswald] text-sm uppercase tracking-[0.3em] text-teal-400">What we train</h2>
          <p className="mb-14 text-center text-3xl font-semibold text-white">Five ways to go all in</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {disciplines.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(45,212,191,0.4)' }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-lg border border-white/10 bg-neutral-950 p-6"
              >
                <div className="mb-4 h-1 w-8 rounded bg-teal-400" />
                <h3 className="mb-2 font-[Oswald] text-lg uppercase tracking-wide text-white">{d.name}</h3>
                <p className="text-sm text-white/50">{d.copy}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-white/10 bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-4 font-[Oswald] text-sm uppercase tracking-[0.3em] text-teal-400">Why All In</h2>
            <p className="mb-6 text-3xl font-semibold leading-snug text-white">
              A real fight gym, and a real community — for beginners and competitors alike.
            </p>
            <p className="text-white/60">
              Most members never plan on stepping in a cage. They come for the conditioning, the discipline, and a
              room full of people who show up. The ones who do want to compete get coached like it.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-lg border border-white/10 bg-black p-6">
                  <p className="text-3xl font-bold text-teal-300">
                    {s.value !== null ? <CountUp to={s.value} suffix={s.suffix} /> : s.display}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="mb-2 text-center font-[Oswald] text-sm uppercase tracking-[0.3em] text-teal-400">Class schedule</h2>
          <p className="mb-10 text-center text-3xl font-semibold text-white">Sample weekly schedule</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ScheduleTable
            days={days}
            rows={rows}
            accentTextClass="text-teal-400"
            chipClass="bg-teal-400/15 text-teal-300"
            fadeFromClass="from-black"
          />
        </Reveal>
      </section>

      {/* Booking */}
      <section id="booking" className="border-t border-white/10 bg-neutral-950 px-6 py-24">
        <Reveal className="mx-auto max-w-lg">
          <h2 className="mb-2 text-center font-[Oswald] text-sm uppercase tracking-[0.3em] text-teal-400">Get started</h2>
          <p className="mb-8 text-center text-3xl font-semibold text-white">Claim your free trial class</p>
          <TrialBookingForm
            classOptions={['Boxing', 'Muay Thai', 'BJJ', 'MMA', 'Fitness']}
            accentClass="border-teal-400"
            accentTextClass="text-teal-300"
            buttonClass="bg-teal-400 text-black hover:bg-teal-300"
          />
        </Reveal>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-white/30">
        All In Fight &amp; Fitness Club · Design concept — location &amp; hours to be added
      </footer>
    </div>
  )
}
