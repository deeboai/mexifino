import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

type CountUpProps = {
  to: number
  suffix?: string
  duration?: number
}

export default function CountUp({ to, suffix = '', duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
