import { useProfile } from '../../context/ProfileContext.jsx'

const options = [
  { key: 'day1', label: 'Day 1' },
  { key: 'active', label: 'Active' },
  { key: 'empty', label: 'Empty' },
]

function ProfileSwitcher() {
  const { activeProfileKey, setActiveProfileKey } = useProfile()

  if (!import.meta.env.DEV) return null

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-surface p-1 shadow-lg shadow-black/40">
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => setActiveProfileKey(option.key)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            activeProfileKey === option.key
              ? 'bg-ember text-ink'
              : 'text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60 active:text-parchment'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default ProfileSwitcher
