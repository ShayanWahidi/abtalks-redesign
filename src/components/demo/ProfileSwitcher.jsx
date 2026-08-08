import { useProfile } from '../../context/ProfileContext.jsx'

const options = [
  { key: 'day1', label: 'Day 1' },
  { key: 'active', label: 'Active' },
  { key: 'empty', label: 'Empty' },
]

function ProfileSwitcher() {
  const { activeProfileKey, setActiveProfileKey } = useProfile()

  return (
    <div className="flex w-full items-center justify-center px-5 py-2">
      <div className="glass-panel flex items-center gap-2 rounded-full px-2 py-1">
        <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-muted">
          Demo:
        </span>
        <div className="flex items-center gap-1">
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setActiveProfileKey(option.key)}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
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
    </div>
  )
}

export default ProfileSwitcher
