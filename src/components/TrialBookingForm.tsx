import { useState, type FormEvent } from 'react'

type TrialBookingFormProps = {
  classOptions: string[]
  accentClass: string
  accentTextClass: string
  buttonClass: string
  labelFont?: string
}

export default function TrialBookingForm({
  classOptions,
  accentClass,
  accentTextClass,
  buttonClass,
}: TrialBookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`rounded-lg border ${accentClass} bg-black/40 p-8 text-center animate-fade-up`}>
        <p className={`text-2xl font-semibold ${accentTextClass}`}>You're in{name ? `, ${name}` : ''}.</p>
        <p className="mt-2 text-white/70">
          We've got your request for a free trial class. Someone from the team will reach out to confirm your time.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full rounded border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:${accentClass}`}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">Phone</label>
          <input
            required
            type="tel"
            className="w-full rounded border border-white/15 bg-white/5 px-3 py-2 text-white outline-none"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">Email</label>
        <input
          required
          type="email"
          className="w-full rounded border border-white/15 bg-white/5 px-3 py-2 text-white outline-none"
          placeholder="jane@email.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">Which class?</label>
        <select
          className="w-full rounded border border-white/15 bg-white/5 px-3 py-2 text-white outline-none"
        >
          {classOptions.map((c) => (
            <option key={c} value={c} className="bg-black">
              {c}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={`w-full rounded px-6 py-3 font-semibold uppercase tracking-wider transition ${buttonClass}`}>
        Claim my free trial class
      </button>
      <p className="text-center text-xs text-white/40">No commitment. No pressure. Just show up.</p>
    </form>
  )
}
