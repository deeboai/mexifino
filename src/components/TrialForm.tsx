import { useState, type FormEvent, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

interface Props {
  accentClass: string
  labelClass?: string
  inputClass?: string
  buttonLabel?: string
  title?: string
  subtitle?: string
  programs: string[]
  wrapperClass?: string
  successIcon?: ReactNode
}

export function TrialForm({
  accentClass,
  labelClass = 'text-white/60',
  inputClass = 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/40',
  buttonLabel = 'Claim my free class',
  title = 'Book your free trial',
  subtitle,
  programs,
  wrapperClass = '',
  successIcon,
}: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setTimeout(() => {
      setPending(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className={wrapperClass}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <div className={`grid h-16 w-16 place-items-center rounded-full ${accentClass}`}>
              {successIcon ?? <Check className="h-8 w-8" strokeWidth={3} />}
            </div>
            <h3 className="font-display text-3xl uppercase tracking-wider">Request received</h3>
            <p className="max-w-sm text-sm opacity-70">
              A coach will reach out shortly to confirm your trial class time. Come as you are — we'll handle the rest.
            </p>
            <p className="text-[10px] uppercase tracking-widest opacity-40">Demo — no real booking sent</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div>
              <h3 className="font-display text-3xl uppercase tracking-wider">{title}</h3>
              {subtitle && <p className="mt-2 text-sm opacity-60">{subtitle}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" labelClass={labelClass}>
                <input required className={`h-11 w-full rounded-md border px-3 text-sm outline-none transition ${inputClass}`} />
              </Field>
              <Field label="Last name" labelClass={labelClass}>
                <input required className={`h-11 w-full rounded-md border px-3 text-sm outline-none transition ${inputClass}`} />
              </Field>
              <Field label="Email" labelClass={labelClass}>
                <input required type="email" className={`h-11 w-full rounded-md border px-3 text-sm outline-none transition ${inputClass}`} />
              </Field>
              <Field label="Phone" labelClass={labelClass}>
                <input required type="tel" className={`h-11 w-full rounded-md border px-3 text-sm outline-none transition ${inputClass}`} />
              </Field>
              <Field label="Interested in" labelClass={labelClass}>
                <select className={`h-11 w-full rounded-md border px-3 text-sm outline-none transition ${inputClass}`}>
                  {programs.map((p) => (
                    <option key={p} className="bg-black text-white">
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Experience" labelClass={labelClass}>
                <select className={`h-11 w-full rounded-md border px-3 text-sm outline-none transition ${inputClass}`}>
                  <option className="bg-black text-white">Complete beginner</option>
                  <option className="bg-black text-white">Some experience</option>
                  <option className="bg-black text-white">Advanced</option>
                </select>
              </Field>
            </div>
            <Field label="Anything we should know? (optional)" labelClass={labelClass}>
              <textarea rows={3} className={`w-full rounded-md border px-3 py-2 text-sm outline-none transition ${inputClass}`} />
            </Field>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={pending}
              type="submit"
              className={`w-full rounded-md py-4 font-display text-lg uppercase tracking-widest transition disabled:opacity-50 ${accentClass}`}
            >
              {pending ? 'Sending…' : buttonLabel}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({ label, labelClass, children }: { label: string; labelClass: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className={`mb-1.5 block text-[11px] uppercase tracking-widest ${labelClass}`}>{label}</span>
      {children}
    </label>
  )
}
