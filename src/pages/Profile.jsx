import { Flame, Gift, Trophy, User } from 'lucide-react'
import { useProfile } from '../context/ProfileContext.jsx'

function initialsFor(name) {
  if (!name || !name.trim()) return null
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Profile() {
  const { student } = useProfile()
  const initials = initialsFor(student.name)
  const displayName = student.name && student.name.trim() ? student.name : 'Builder'

  const stats = [
    {
      icon: Flame,
      label: 'Day streak',
      value: student.currentStreak ?? 0,
    },
    {
      icon: Trophy,
      label: 'Days completed',
      value: student.totalDaysCompleted ?? 0,
    },
    {
      icon: Gift,
      label: 'Synergy points',
      value: student.synergyPoints ?? 0,
    },
  ]

  return (
    <>
      <section className="px-5">
        <h1 className="text-2xl font-bold text-parchment">Profile</h1>
        <p className="mt-1 text-sm text-muted">Your builder identity.</p>
      </section>

      <section className="mt-6 px-5">
        <div className="flex flex-col items-center rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-6 text-center">
          {student.avatar ? (
            <img
              src={student.avatar}
              alt={displayName}
              className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
            />
          ) : (
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ember/15 text-2xl font-bold text-parchment ring-2 ring-white/10">
              {initials ? initials : <User size={32} aria-hidden="true" />}
            </span>
          )}
          <h2 className="mt-4 text-xl font-bold text-parchment">{displayName}</h2>
          <p className={student.track ? 'mt-1 text-sm text-muted' : 'mt-1 text-sm text-ember'}>
            {student.track ?? 'No track selected yet'}
          </p>
        </div>
      </section>

      <section className="mt-6 px-5">
        <div className="space-y-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ember/15 text-ember">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
                <span className="font-mono text-lg font-bold text-parchment">{stat.value.toLocaleString()}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-6 px-5">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Badges</h2>
        {student.badges.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {student.badges.map((badge) => (
              <li key={badge.id} className="rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface px-5 py-3">
                <p className="text-sm font-semibold text-parchment">{badge.name}</p>
                <p className="mt-0.5 text-xs text-muted">{badge.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-muted">Complete your first day to start earning badges.</p>
        )}
      </section>
    </>
  )
}

export default Profile
