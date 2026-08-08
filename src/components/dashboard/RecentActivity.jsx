import { Check, Snowflake, X } from 'lucide-react'

const statusMeta = {
  completed: { icon: Check, iconClass: 'text-success' },
  frozen: { icon: Snowflake, iconClass: 'text-frost' },
  missed: { icon: X, iconClass: 'text-rose-400' },
}

function RecentActivity({ student, days }) {
  const recent = days
    .filter((d) => d.day <= student.currentDay && d.status !== 'locked')
    .sort((a, b) => b.day - a.day)
    .slice(0, 7)

  const hasActivity = recent.some((d) => ['completed', 'frozen', 'missed'].includes(d.status))

  return (
    <section className="mx-5 mt-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
      <h2 className="text-base font-bold text-parchment">Recent activity</h2>
      <p className="mt-0.5 text-xs text-muted">Last 7 days</p>

      {!hasActivity ? (
        <p className="py-8 text-center text-sm text-muted">
          No submissions yet. Complete Day 1 to get started.
        </p>
      ) : (
        <ul className="mt-1">
          {recent.map((day, i) => {
            const meta = statusMeta[day.status]
            const Icon = meta?.icon
            const isViewable = ['completed', 'frozen', 'missed'].includes(day.status)
            return (
              <li
                key={day.day}
                className={`flex items-center justify-between py-2 ${
                  i < recent.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <span className="flex items-center gap-2 font-mono text-sm font-bold text-parchment">
                  {Icon && <Icon size={15} className={meta.iconClass} />}
                  Day {day.day}
                </span>
                {isViewable && (
                  <a
                    href={`/day/${day.day}`}
                    className="rounded px-1 text-xs font-medium text-muted transition-colors active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
                  >
                    View →
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default RecentActivity
