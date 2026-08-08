import { AlertTriangle, Clock } from 'lucide-react'

const difficultyStyles = {
  Easy: 'bg-success/15 text-success',
  Medium: 'bg-ember/15 text-ember',
  Hard: 'bg-rose-500/15 text-rose-400',
}

function TodayTaskCard({ student, days }) {
  const day = days[student.currentDay - 1]
  const n = student.currentDay
  const task = day?.task ?? {}

  if (day?.status === 'missed') {
    return (
      <section className="mx-5 mt-4 rounded-xl border border-rose-500/25 bg-rose-500/5 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-rose-400" />
          <div>
            <h2 className="text-base font-bold text-parchment">You missed Day {n}.</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Use a freeze or catch up to keep your streak alive.
            </p>
            <a
              href={`/day/${n}`}
              className="mt-4 inline-block rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-parchment transition-colors active:border-rose-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/60"
            >
              Use a Streak Freeze
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-5 mt-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
      <div className="flex items-center gap-2">
        {task.difficulty && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              difficultyStyles[task.difficulty] ?? 'bg-white/10 text-muted'
            }`}
          >
            {task.difficulty}
          </span>
        )}
        {task.estimatedMinutes != null && (
          <span className="flex items-center gap-1 font-mono text-xs font-bold text-muted">
            <Clock size={12} />
            ~{task.estimatedMinutes} min
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="shrink-0">
          <span className="block font-mono text-3xl font-bold leading-none text-ember">{n}</span>
          <span className="mt-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted">
            Day
          </span>
        </div>
        <div>
          <h2 className="text-lg font-bold leading-snug text-parchment">{task.title}</h2>
          {task.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted">{task.description}</p>
          )}
        </div>
      </div>

      <a
        href={`/day/${n}`}
        className="mt-5 block w-full rounded-xl bg-ember py-4 text-center text-base font-bold text-ink transition-colors active:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Start Today's Challenge →
      </a>
    </section>
  )
}

export default TodayTaskCard
