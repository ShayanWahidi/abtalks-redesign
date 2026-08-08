import { useProfile } from '../../context/ProfileContext.jsx'

const options = [
  { key: 'day1', label: 'Day 1' },
  { key: 'active', label: 'Active' },
  { key: 'empty', label: 'Empty' },
]

function ProfileSwitcher() {
  const { activeProfileKey, setActiveProfileKey } = useProfile()

  return (
    <div className="glass-panel fixed right-4 top-4 z-50 flex items-center gap-3 rounded-full py-1 pl-3 pr-1">
      <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-muted">
        Demo profiles
      </span>
      <div className="flex items-center gap-1">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setActiveProfileKey(option.key)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              activeProfileKey === option.key
                ? 'bg-ember text-ink'
                : 'text-muted hover:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60 active:text-parchment'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProfileSwitcher
