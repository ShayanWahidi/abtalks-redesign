import { Calendar, CheckCircle2, Flame, Snowflake } from 'lucide-react'

function StatCard({ label, value, mutedLabel, caption, icon: Icon, iconClass, progress }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-muted">{label}</span>
        <Icon size={16} className={iconClass} />
      </div>
      {mutedLabel ? (
        <p className="mt-2 text-sm font-medium leading-snug text-muted">{mutedLabel}</p>
      ) : (
        <p className="mt-2 font-mono text-3xl font-bold text-parchment">{value}</p>
      )}
      {progress != null && (
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-1 rounded-full bg-ember" style={{ width: `${progress}%` }} />
        </div>
      )}
      {caption && <p className="mt-2 font-mono text-[11px] font-bold leading-snug text-muted-deep">{caption}</p>}
    </div>
  )
}

function StatRow({ student }) {
  const {
    currentDay,
    challengeLength,
    currentStreak,
    longestStreak,
    totalDaysCompleted,
    freezeTokensTotal,
    freezeTokensUsed,
  } = student

  const dayProgress =
    challengeLength > 0 ? Math.round((currentDay / challengeLength) * 100) : 0
  const freezesLeft = freezeTokensTotal - freezeTokensUsed

  return (
    <section className="mx-5 mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
      <StatCard
        label={`DAY ${currentDay} OF ${challengeLength}`}
        value={currentDay}
        icon={Calendar}
        iconClass="text-ember"
        progress={dayProgress}
        caption="Calendar progress from your start date"
      />
      <StatCard
        label="CURRENT STREAK"
        value={currentStreak}
        mutedLabel={currentStreak === 0 ? 'Ready to start your streak?' : undefined}
        icon={Flame}
        iconClass={currentStreak > 0 ? 'text-ember' : 'text-muted-deep'}
        caption={`Longest: ${longestStreak}`}
      />
      <StatCard
        label="DAYS COMPLETED"
        value={totalDaysCompleted}
        icon={CheckCircle2}
        iconClass="text-success"
      />
      <StatCard
        label="FREEZE TOKENS LEFT"
        value={freezesLeft}
        icon={Snowflake}
        iconClass="text-frost"
        caption={`${freezeTokensUsed} used so far`}
      />
    </section>
  )
}

export default StatRow
