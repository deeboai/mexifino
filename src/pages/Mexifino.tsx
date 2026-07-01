import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, MapPin, Phone, Clock } from 'lucide-react'
import { TrialForm } from '../components/TrialForm'
import { PitchBadge } from '../components/PitchBadge'

const programs = [
  { name: 'Boxing', tag: "The core. Fundamentals every week, sparring when you're ready." },
  { name: 'Kickboxing', tag: 'Hands and legs. Conditioning that hits different.' },
  { name: 'Personal Training', tag: 'One-on-one with Coach Jesse. Sharp, specific, honest.' },
  { name: 'Group Fitness', tag: 'Circuits, bag work, footwork drills. Show up, get after it.' },
]

const schedule = [
  { day: 'Mon', classes: ['6:00 Fundamentals', '12:00 Fitness', '18:00 Boxing', '19:30 Kickboxing'] },
  { day: 'Tue', classes: ['6:00 Boxing', '12:00 Group Fitness', '18:00 Kickboxing', '19:30 Sparring'] },
  { day: 'Wed', classes: ['6:00 Fundamentals', '12:00 Fitness', '18:00 Boxing'] },
  { day: 'Thu', classes: ['6:00 Boxing', '12:00 Group Fitness', '18:00 Kickboxing', '19:30 Open Gym'] },
  { day: 'Fri', classes: ['6:00 Fundamentals', '12:00 Fitness', '18:00 Boxing', '19:30 Sparring'] },
  { day: 'Sat', classes: ['9:00 Community Class', '10:30 Open Gym'] },
]

export default function Mexifino() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const wordmarkScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 py-3 backdrop-blur-xl border-b border-white/5' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" /> Hub
          </Link>
          <span className="font-gothic text-xl md:text-2xl">Mexifino</span>
          <a href="#trial" className="rounded-none border border-white bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-black hover:bg-transparent hover:text-white transition">
            Free trial
          </a>
        </div>
      </motion.nav>

      {/* Hero — video bg */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <video src="/media/mexifino-life-1.mp4" autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        <motion.div style={{ opacity: scrimOpacity }} className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

        <motion.div style={{ scale: wordmarkScale, y: wordmarkY }} className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="font-display text-xs uppercase text-white/70 md:text-sm"
          >
            Northfield · Minnesota
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 font-gothic text-6xl uppercase leading-none text-white sm:text-8xl md:text-9xl"
          >
            Mexifino
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mx-auto mt-8 max-w-md font-display text-base uppercase tracking-[0.25em] text-white/70"
          >
            Fight culture meets bold art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#trial"
              className="rounded-none bg-white px-8 py-4 font-display text-sm uppercase tracking-[0.25em] text-black hover:bg-white/80 transition"
            >
              Book free trial
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#studio"
              className="rounded-none border border-white/40 px-8 py-4 font-display text-sm uppercase tracking-[0.25em] text-white hover:border-white transition"
            >
              Meet the studio
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/40">
          Scroll ↓
        </div>
      </section>

      {/* Intro — big statement (bone / white section) */}
      <section className="relative overflow-hidden bg-[var(--bone)] px-6 py-32 text-black">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'url(/media/mexifino-pattern.png)', backgroundSize: '400px' }}
        />
        <div className="relative mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs uppercase tracking-[0.4em] text-black/50"
          >
            The studio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-gothic text-5xl leading-[0.95] md:text-8xl"
          >
            Black walls.
            <br />
            A real ring.
            <br />
            <span className="italic">Art you can't ignore.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl"
          >
            Tattoo-flash art and hand-painted lettering cover the walls floor to ceiling. It's the kind of gym you'd
            want to hang out in even if you never threw a punch — and then you throw a few anyway.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl"
          >
            No frills, no fluff — a ring, heavy bags, and coaches who actually pay attention to your technique.
          </motion.p>
        </div>
      </section>

      {/* Studio video 2 */}
      <section id="studio" className="relative h-[70vh] overflow-hidden">
        <video src="/media/mexifino-life-2.mp4" autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs uppercase tracking-[0.4em] text-white/60"
          >
            Inside the studio
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 max-w-2xl font-gothic text-4xl md:text-6xl"
          >
            Where the real work happens.
          </motion.h3>
        </div>
      </section>

      {/* Coach */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.4em] text-white/50">The coach</p>
            <h2 className="mt-4 font-gothic text-5xl leading-tight md:text-7xl">
              Jesse
              <br />
              Tores.
            </h2>
            <p className="mt-8 max-w-md text-white/70">
              Owner, head coach, and the reason professional boxers followed him to Minnesota. Jesse trains
              alongside working pros and everyday members with the same intensity — the difference is what you're
              chasing.
            </p>
            <p className="mt-4 max-w-md text-white/70">
              Most people who walk in aren't chasing a fight — they want to get in shape and learn how to handle
              themselves. That's exactly who this gym is built for.
            </p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square overflow-hidden rounded-none border border-white/10"
            >
              <img src="/media/mexifino-photo-stance.jpg" alt="Coach Jesse Tores in fight stance" className="h-full w-full object-cover" />
            </motion.div>
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 opacity-30"
              style={{ backgroundImage: 'url(/media/mexifino-pattern.png)', backgroundSize: '300px' }}
            />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-y border-white/10 bg-neutral-950 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-white/50">Programs</p>
          <h2 className="mt-4 max-w-2xl font-gothic text-5xl leading-tight md:text-7xl">Four ways in.</h2>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
            {programs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="group bg-neutral-950 p-10 transition"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-gothic text-4xl md:text-5xl">{p.name}</h3>
                  <span className="font-display text-xs text-white/30">0{i + 1}</span>
                </div>
                <p className="mt-4 max-w-md text-white/60">{p.tag}</p>
                <div className="mt-6 h-px w-0 bg-white transition-all duration-500 group-hover:w-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-white/50">Life at the studio</p>
        <h2 className="mt-4 max-w-2xl font-gothic text-5xl leading-tight md:text-7xl">Show up. Get to work.</h2>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            { src: '/media/mexifino-photo-crew.jpg', alt: 'Fighter and coaches backstage after a bout', aspect: 'aspect-[4/5]', wide: true },
            { src: '/media/mexifino-photo-sparring.jpg', alt: 'Sparring in the ring under the studio wall art', aspect: 'aspect-[4/5]' },
            { src: '/media/mexifino-photo-punch.jpg', alt: 'Member throwing a punch on the bag in Mexifino gear', aspect: 'aspect-[4/5]' },
            { src: '/media/mexifino-photo-lifestyle.jpg', alt: 'Member in Mexifino brand gear by the ring', aspect: 'aspect-[4/5]' },
            { src: '/media/mexifino-photo-mitts.jpg', alt: 'Coach working mitts with a young fighter', aspect: 'aspect-[4/5]' },
          ].map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06 }}
              className={`group overflow-hidden ${img.aspect} ${img.wide ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <Stat value={6} suffix=" days" label="Open Mon through Sat" />
          <Stat value={4} suffix="" label="Programs to choose from" />
          <Stat value={1} suffix="" label="Boxing ring with black ropes" />
          <Stat value={0} suffix="" label="Franchises, filler, or fluff" />
        </div>
      </section>

      {/* Schedule */}
      <section className="border-t border-white/10 bg-neutral-950 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-white/50">Sample week</p>
          <h2 className="mt-4 font-gothic text-5xl leading-tight md:text-7xl">The week ahead.</h2>
          <p className="mt-4 text-xs italic text-white/40">Sample schedule — actual timetable to be finalized with the gym.</p>
          <div className="mt-14 overflow-x-auto">
            <div className="grid min-w-[900px] grid-cols-6 gap-px bg-white/10">
              {schedule.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-black p-6"
                >
                  <p className="font-gothic text-2xl">{day.day}</p>
                  <ul className="mt-6 space-y-3">
                    {day.classes.map((c) => (
                      <li key={c} className="text-xs text-white/70">
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
      <section id="trial" className="relative overflow-hidden bg-[var(--bone)] py-32 text-black">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'url(/media/mexifino-pattern.png)', backgroundSize: '500px' }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.4em] text-black/50">First class free</p>
            <h2 className="mt-4 font-gothic text-5xl leading-[0.9] md:text-7xl">
              Come in.
              <br />
              Try a round.
            </h2>
            <p className="mt-6 max-w-md text-black/70">
              Wear something you can move in. Show up 15 minutes early. We'll wrap your hands.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  1500 Clinton Ln, Ste H
                  <br />
                  Northfield, MN 55057
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+17633415926" className="underline underline-offset-4">
                  (763) 341-5926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4" />
                <span>Mon–Sat · 6:00am–7:30pm</span>
              </div>
            </div>
          </div>
          <div className="rounded-none border border-black bg-black p-8 text-white md:p-10">
            <TrialForm
              accentClass="bg-white text-black hover:bg-white/80"
              labelClass="text-white/50"
              inputClass="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-white"
              programs={['Boxing', 'Kickboxing', 'Personal Training', 'Group Fitness', 'Not sure yet']}
              subtitle="One free class. Zero pressure."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-16 text-white border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-gothic text-3xl">Mexifino Boxing Studio</p>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              Real coaches, all-black walls, bold art on every surface. Fight culture in Northfield.
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-white/50">Visit</p>
            <p className="mt-3 text-sm text-white/70">
              1500 Clinton Ln, Ste H
              <br />
              Northfield, MN 55057
            </p>
            <p className="mt-3 text-sm text-white/70">(763) 341-5926</p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-white/50">Hours</p>
            <p className="mt-3 text-sm text-white/70">
              Mon–Sat
              <br />
              6:00am – 7:30pm
            </p>
            <p className="mt-3 text-sm text-white/70">Closed Sundays</p>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-white/5 pt-6 text-xs text-white/30">
          <span>© Mexifino Boxing Studio — concept 2026</span>
          <Link to="/" className="hover:text-white">
            ← Back to hub
          </Link>
        </div>
      </footer>

      <PitchBadge tone="dark" />
    </main>
  )
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [n, setN] = useState(0)
  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  useEffect(() => {
    if (inView) spring.set(value)
    return spring.on('change', (v) => setN(Math.round(v)))
  }, [inView, value, spring])
  return (
    <div ref={ref}>
      <p className="font-gothic text-6xl md:text-7xl">
        {n}
        {suffix}
      </p>
      <p className="mt-3 text-xs uppercase tracking-widest text-white/50">{label}</p>
    </div>
  )
}
