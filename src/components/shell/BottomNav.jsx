import { Briefcase, Compass, Gift, Home, User } from 'lucide-react'
import usePath from '../../hooks/usePath.js'

const tabs = [
  { label: 'Home', href: '/dashboard', icon: Home },
  { label: 'Jobs', href: '/jobs', icon: Briefcase },
  { label: 'Rewards', href: '/rewards', icon: Gift },
  { label: 'Explore', href: '/explore', icon: Compass },
  { label: 'Profile', href: '/profile', icon: User },
]

function BottomNav() {
  const path = usePath()

  return (
    <nav className="glass-panel fixed inset-x-0 bottom-0 z-40 h-16">
      <div className="mx-auto flex h-full max-w-md items-stretch justify-around md:max-w-none">
        {tabs.map(({ label, href, icon }) => {
          const Icon = icon
          const active = path === href || (href !== '/dashboard' && path.startsWith(href))
          const isRewards = href === '/rewards'

          return (
            <a
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`flex flex-1 flex-col items-center justify-center gap-0.5 transition-colors active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ember/60 ${
                active ? 'text-ember' : 'text-muted hover:text-parchment/60'
              }`}
            >
              <span
                className={
                  isRewards
                    ? '-mt-3 rounded-full bg-ember px-3 py-1.5 text-ink'
                    : undefined
                }
              >
                <Icon size={isRewards ? 20 : 22} strokeWidth={2} />
              </span>
              <span className="text-[11px] font-medium">{label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
