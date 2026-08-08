import { Flame, User } from 'lucide-react'

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

function DashboardHeader({ student }) {
  const initials = initialsFor(student.name)
  const hasStreak = student.currentStreak > 0

  return (
    <header className="px-5 pb-4 pt-5">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="font-mono text-lg font-bold uppercase tracking-widest text-parchment transition-opacity hover:opacity-80 active:opacity-70"
        >
          AB TALKS
        </a>
        {student.avatar ? (
          <img
            src={student.avatar}
            alt={student.name || 'Profile'}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-sm font-bold text-parchment ring-1 ring-white/10">
            {initials ? initials : <User size={18} aria-hidden="true" />}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className={`text-sm ${student.track ? 'text-muted' : 'text-ember'}`}>
          {student.track ?? 'No track selected yet'}
        </p>
        <span className="flex items-center gap-1 rounded-full bg-surface px-3 py-1">
          <Flame size={14} className={hasStreak ? 'text-ember' : 'text-muted-deep'} />
          <span className="font-mono text-sm font-bold text-parchment">{student.currentStreak}</span>
        </span>
      </div>
    </header>
  )
}

export default DashboardHeader
