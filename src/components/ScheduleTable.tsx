type ScheduleRow = {
  time: string
  classes: { day: string; label: string }[]
}

type ScheduleTableProps = {
  days: string[]
  rows: ScheduleRow[]
  accentTextClass: string
  chipClass: string
  fadeFromClass?: string
}

export default function ScheduleTable({
  days,
  rows,
  accentTextClass,
  chipClass,
  fadeFromClass = 'from-neutral-950',
}: ScheduleTableProps) {
  return (
    <div>
      <p className={`mb-2 text-xs ${accentTextClass} sm:hidden`}>Swipe to see the full week →</p>
      <div className="relative">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr>
                <th className={`w-28 border-b border-white/10 pb-3 text-left text-xs uppercase tracking-wider ${accentTextClass}`}>
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className={`border-b border-white/10 pb-3 text-left text-xs uppercase tracking-wider ${accentTextClass}`}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.time} className="border-b border-white/5">
                  <td className="py-3 pr-2 text-white/50">{row.time}</td>
                  {days.map((day) => {
                    const match = row.classes.find((c) => c.day === day)
                    return (
                      <td key={day} className="py-3 pr-2">
                        {match ? (
                          <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${chipClass}`}>
                            {match.label}
                          </span>
                        ) : (
                          <span className="text-white/15">—</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l ${fadeFromClass} to-transparent sm:hidden`}
        />
      </div>
    </div>
  )
}
