import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Zap, Swords, Flame, Dumbbell, Shield, Trophy, Users, Clock } from 'lucide-react'
import { TrialForm } from '../components/TrialForm'
import { PitchBadge } from '../components/PitchBadge'

const disciplines = [
  { icon: Shield, name: 'BJJ', tag: 'Ground game, leverage over strength — gi and no-gi rounds every week.' },
  { icon: Swords, name: 'Boxing', tag: "Footwork, angles, sharp hands. Fundamentals-first, spar when you're ready." },
  { icon: Flame, name: 'Muay Thai', tag: 'The art of eight limbs. Clinch work, kicks, elbows, real conditioning.' },
  { icon: Zap, name: 'MMA', tag: 'Stitch it together — stand-up, wrestling, submissions. One integrated game.' },
  { icon: Dumbbell, name: 'Fitness', tag: 'Strength & conditioning built for fighters. Open to everyone, all levels.' },
]

const schedule = [
  { day: 'Mon', classes: ['6:00 Boxing', '12:00 Fitness', '18:00 BJJ', '19:30 Muay Thai'] },
  { day: 'Tue', classes: ['6:00 MMA', '12:00 Boxing', '18:00 Muay Thai', '19:30 BJJ'] },
  { day: 'Wed', classes: ['6:00 BJJ', '12:00 Fitness', '18:00 Boxing', '19:30 MMA'] },
  { day: 'Thu', classes: ['6:00 Muay Thai', '12:00 Boxing', '18:00 BJJ', '19:30 Fitness'] },
  { day: 'Fri', classes: ['6:00 Boxing', '12:00 MMA', '18:00 Open Mat', '19:30 Muay Thai'] },
  { day: 'Sat', classes: ['9:00 Fundamentals', '10:30 Sparring', '12:00 Open Mat'] },
  { day: 'Sun', classes: ['10:00 Open Mat'] },
]

export default function AllIn() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 20])

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white noise">
      {/* Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/5' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-teal transition">
            <ArrowLeft className="h-4 w-4" /> Hub
          </Link>
          <div className="flex items-center gap-3">
            <img src="/media/all-in-logo.png" alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-display text-sm uppercase tracking-[0.25em] hidden sm:inline">All In F&F Club</span>
          </div>
          <a href="#trial" className="rounded-full bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black hover:bg-[oklch(0.82_0.16_180)] transition">
            Free trial
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.76_0.14_180/0.15)] via-transparent to-transparent" />
          <div className="absolute -bottom-40 -right-20 h-[80vh] w-[80vh] rounded-full bg-[oklch(0.76_0.14_180/0.1)] blur-3xl" />
        </div>

        <motion.img
          src="/media/all-in-logo.png"
          alt=""
          style={{ y: logoY, scale: logoScale, rotate: logoRotate }}
          className="pointer-events-none absolute right-[-15%] top-[10%] h-[90vh] w-auto opacity-20 md:opacity-30"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-xs uppercase tracking-[0.4em] text-teal"
            >
              BJJ · Boxing · Muay Thai · MMA · Fitness
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 font-gothic text-6xl leading-[0.85] md:text-9xl"
            >
              All <span className="italic text-teal">In</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 max-w-md font-display text-lg uppercase tracking-wider text-white/70"
            >
              Five disciplines. One club. Show up. Do the work. Leave better than you came in.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href="#trial" primary>
                Book free trial
              </MagneticButton>
              <MagneticButton href="#disciplines">Explore disciplines</MagneticButton>
            </motion.div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Disciplines */}
      <section id="disciplines" className="relative mx-auto max-w-7xl px-6 py-32">
        <SectionHeader eyebrow="What we train" title="Five disciplines, one house" />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <DisciplineCard key={d.name} {...d} index={i} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden border-y border-white/10 bg-neutral-950 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-4">
          <StatCounter value={5} suffix="" label="Disciplines under one roof" />
          <StatCounter value={40} suffix="+" label="Classes per week" />
          <StatCounter value={100} suffix="%" label="All levels welcome" />
          <StatCounter value={1} suffix="" label="Free trial class — on us" />
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <SectionHeader eyebrow="Why us" title="A gym you actually keep showing up to" />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: Trophy, title: 'Real coaches', body: 'Certified instructors across every discipline. No franchise scripts — actual teaching.' },
            { icon: Users, title: 'Room for everyone', body: 'Beginners are the point. Sparring is optional. Ego is not allowed on the mats.' },
            { icon: Clock, title: 'Built for real schedules', body: 'Early mornings, lunch hours, after work. Come once, come five times — it works.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-teal/50 hover:bg-white/[0.04]"
            >
              <f.icon className="h-8 w-8 text-teal" />
              <h3 className="mt-6 font-display text-2xl uppercase tracking-wider">{f.title}</h3>
              <p className="mt-3 text-sm text-white/60">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="border-t border-white/10 bg-neutral-950 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Sample week" title="A week on the mats" note="Sample schedule — actual timetable to be finalized with the gym." />
          <div className="mt-14 overflow-x-auto">
            <div className="grid min-w-[900px] grid-cols-7 gap-3">
              {schedule.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-white/10 bg-black p-4"
                >
                  <p className="font-display text-lg uppercase tracking-widest text-teal">{day.day}</p>
                  <ul className="mt-4 space-y-2">
                    {day.classes.map((c) => (
                      <li key={c} className="border-t border-white/5 pt-2 text-xs text-white/70 first:border-0 first:pt-0">
                        {c}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trial form */}
      <section id="trial" className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.76_0.14_180/0.08)] blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.4em] text-teal">First one's free</p>
            <h2 className="mt-4 font-gothic text-5xl leading-[0.9] md:text-7xl">
              Come try
              <br />a class.
            </h2>
            <p className="mt-6 max-w-md text-white/60">
              Show up 15 minutes early, wear something you can move in. We'll handle the rest. No commitment, no
              pressure.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">What to bring</p>
                <p className="mt-1 text-sm">Water. That's it.</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Age</p>
                <p className="mt-1 text-sm">16 & up</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-950/80 p-8 backdrop-blur-xl md:p-10">
            <TrialForm
              accentClass="bg-teal text-black hover:bg-[oklch(0.82_0.16_180)]"
              programs={['BJJ', 'Boxing', 'Muay Thai', 'MMA', 'Fitness', 'Not sure yet']}
              subtitle="One free class. Any discipline. Any level."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="/media/all-in-logo.png" alt="All In" className="h-16 w-16 rounded-full" />
            <p className="mt-4 font-gothic text-2xl">All In Fight & Fitness Club</p>
            <p className="mt-2 max-w-sm text-sm text-white/50">
              Five disciplines under one roof. Real coaches, real training, no franchise nonsense.
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-teal">Location</p>
            <p className="mt-3 text-sm text-white/60">To be added</p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-teal">Hours</p>
            <p className="mt-3 text-sm text-white/60">To be added</p>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-white/5 pt-6 text-xs text-white/30">
          <span>© All In F&F Club — concept 2026</span>
          <Link to="/" className="hover:text-teal">
            ← Back to hub
          </Link>
        </div>
      </footer>

      <PitchBadge tone="dark" />
    </main>
  )
}

function SectionHeader({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-xs uppercase tracking-[0.4em] text-teal"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 max-w-2xl font-gothic text-4xl leading-tight md:text-6xl"
      >
        {title}
      </motion.h2>
      {note && <p className="mt-4 text-xs italic text-white/40">{note}</p>}
    </div>
  )
}

function DisciplineCard({ icon: Icon, name, tag, index }: { icon: typeof Zap; name: string; tag: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-8 transition-all duration-500 hover:border-teal"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal/0 via-transparent to-teal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-teal/10" />
      <div className="relative">
        <div className="grid h-12 w-12 place-items-center rounded-lg border border-teal/30 bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-black">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-gothic text-3xl">{name}</h3>
        <p className="mt-3 text-sm text-white/60">{tag}</p>
      </div>
    </motion.div>
  )
}

function MagneticButton({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-sm uppercase tracking-widest transition ${
        primary ? 'bg-teal text-black hover:bg-[oklch(0.82_0.16_180)]' : 'border border-white/20 text-white hover:border-teal hover:text-teal'
      }`}
    >
      {children}
    </motion.a>
  )
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [n, setN] = useState(0)
  const spring = useSpring(0, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) spring.set(value)
    const unsub = spring.on('change', (v) => setN(Math.round(v)))
    return unsub
  }, [inView, value, spring])

  return (
    <div ref={ref}>
      <p className="font-gothic text-6xl text-teal md:text-7xl">
        {n}
        {suffix}
      </p>
      <p className="mt-3 text-xs uppercase tracking-widest text-white/50">{label}</p>
    </div>
  )
}
