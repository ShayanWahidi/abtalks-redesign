import { Snowflake } from 'lucide-react'

function StreakFreezeCallout() {
  return (
    <section className="mx-5 my-6 rounded-xl border-l-4 border-frost bg-surface p-5 shadow-[0_0_24px_-8px_rgba(110,231,240,0.25)] md:flex md:items-center md:gap-6">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-frost/15 text-frost md:mb-0 md:shrink-0">
        <Snowflake size={20} strokeWidth={2} />
      </div>
      <div className="md:flex-1">
        <h2 className="text-lg font-bold text-parchment">Life happens. Your streak doesn't have to break.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Every student gets 2 Streak Freeze tokens per challenge. Miss a day, use a freeze, keep your
          streak alive — no excuses needed, no penalty.
        </p>
        <div className="mt-4 flex justify-end">
          <span className="rounded-full bg-frost/10 px-3 py-1 font-mono text-xs font-bold text-frost">
            2 free freezes included
          </span>
        </div>
      </div>
    </section>
  )
}

export default StreakFreezeCallout
