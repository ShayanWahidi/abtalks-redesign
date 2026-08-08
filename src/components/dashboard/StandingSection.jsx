function StandingSection({ student }) {
  const badges = student.badges ?? []

  return (
    <section className="mx-5 mt-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
      <h2 className="text-base font-bold text-parchment">Your standing</h2>
      <p className="mt-0.5 text-xs text-muted">How you compare to the cohort this week</p>

      <span className="mt-3 inline-block rounded-full bg-ember/15 px-3 py-1 font-mono text-xs font-bold text-ember">
        Top 20% this week
      </span>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Badges</p>
        {badges.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.id ?? badge.name}
                title={badge.description}
                className="rounded-full border border-white/10 bg-surface-hover px-3 py-1 text-xs font-medium text-parchment/80"
              >
                {badge.name}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted">Complete your first day to start earning badges.</p>
        )}
      </div>
    </section>
  )
}

export default StandingSection
