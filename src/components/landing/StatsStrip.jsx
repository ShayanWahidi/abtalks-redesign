import CountUp from '../effects/CountUp.jsx'

const stats = [
  { to: 10000, separator: ',', suffix: '+', label: 'members' },
  { to: 60, separator: '', suffix: ' days', label: 'per cohort' },
  { to: 100, separator: '', suffix: '+', label: 'hiring partners' },
]

function StatsStrip() {
  return (
    <section className="mx-5 my-6 grid grid-cols-3 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface py-6 md:py-10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
          <span className="font-mono text-2xl font-bold text-parchment md:text-4xl">
            <CountUp to={stat.to} separator={stat.separator} duration={1.5} />
            {stat.suffix}
          </span>
          <span className="text-xs text-muted">{stat.label}</span>
        </div>
      ))}
    </section>
  )
}

export default StatsStrip
