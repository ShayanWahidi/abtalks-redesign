import { ArrowRight, Check, Gift } from 'lucide-react'
import { useProfile } from '../context/ProfileContext.jsx'

const waysToEarn = [
  { label: 'Complete a task', points: 10 },
  { label: 'Push to GitHub', points: 5 },
  { label: 'Share on LinkedIn', points: 8 },
]

const catalog = [
  {
    title: 'Resume review call',
    description: '30-minute 1:1 with a senior engineer.',
    cost: 150,
  },
  {
    title: 'Mock technical interview',
    description: 'A timed interview with live feedback.',
    cost: 300,
  },
  {
    title: '1 month of Pro plan',
    description: 'Unlock advanced resources & tracks.',
    cost: 500,
  },
  {
    title: 'AB Talks merch pack',
    description: 'Stickers, tee, and notebook bundle.',
    cost: 700,
  },
  {
    title: 'Referral boost',
    description: 'Priority referral to partner companies.',
    cost: 1000,
  },
]

function Rewards() {
  const { student } = useProfile()
  const points = student.synergyPoints ?? 0

  return (
    <>
      <section className="px-5">
        <h1 className="text-2xl font-bold text-parchment">Rewards</h1>
        <p className="mt-1 text-sm text-muted">Earn synergy points by shipping every day.</p>
      </section>

      <section className="mt-6 px-5">
        <div className="rounded-xl border border-white/5 border-t border-white/[0.08] bg-gradient-to-br from-ember/25 to-ember/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ember">
            Your balance
          </p>
          <p className="mt-1 font-mono text-4xl font-bold text-parchment">{points.toLocaleString()}</p>
          <p className="mt-1 text-sm text-muted">Synergy points</p>
        </div>

        <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">
          Ways to earn
        </h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {waysToEarn.map((way) => (
            <div key={way.label} className="rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-4 text-center">
              <p className="font-mono text-xl font-bold text-ember">+{way.points}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{way.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 px-5">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Catalog</h2>
        <div className="mt-3 space-y-4">
          {catalog.map((item) => {
            const affordable = points >= item.cost
            return (
              <article key={item.title} className="rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-parchment">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">{item.description}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-ember/15 px-3 py-1 font-mono text-sm font-bold text-ember">
                    {item.cost} SP
                  </span>
                </div>
                {affordable ? (
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2.5 text-sm font-semibold text-parchment transition-opacity hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
                  >
                    <Gift size={16} /> Redeem
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-muted">
                    Need <span className="font-mono font-bold">{item.cost - points}</span> more SP to
                    redeem
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="mt-8 px-5">
        <div className="flex items-center gap-3 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
          <Check size={20} className="shrink-0 text-ember" />
          <p className="text-sm leading-relaxed text-muted">
            Redeems are manual in this demo — reach out on Discord to claim anything you can
            afford.
          </p>
          <ArrowRight size={16} className="shrink-0 text-muted-deep" />
        </div>
      </section>
    </>
  )
}

export default Rewards
