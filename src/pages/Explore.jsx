import { ArrowRight, Check, Compass } from 'lucide-react'
import { useProfile } from '../context/ProfileContext.jsx'
import tracks from '../data/tracks.js'

const trackAliases = {
  'Frontend Development': 'Full-Stack Web Development',
  'Data Science': 'Data Science & ML',
}

function findTrack(name) {
  if (!name) return null
  const aliased = trackAliases[name] ?? name
  return (
    tracks.find((track) => track.title === aliased) ??
    tracks.find((track) => track.shortTitle === aliased) ??
    tracks.find((track) => track.title.toLowerCase().includes(aliased.toLowerCase())) ??
    tracks.find((track) => aliased.toLowerCase().includes(track.shortTitle.toLowerCase())) ??
    null
  )
}

function ActiveTrackCard({ track }) {
  const Icon = track.icon
  return (
    <article className="rounded-xl border border-ember/30 bg-ember/10 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember/20 text-ember">
          <Icon size={22} strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-base font-semibold text-parchment">{track.title}</h3>
          <p className="text-sm text-ember">Your active track</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-parchment/60">{track.description}</p>
    </article>
  )
}

function Explore() {
  const { student } = useProfile()
  const activeTrack = findTrack(student.track)

  return (
    <>
      <section className="px-5">
        <h1 className="text-2xl font-bold text-parchment">Explore</h1>
        <p className="mt-1 text-sm text-muted">Find your next build track.</p>
      </section>

      <section className="mt-6 px-5">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Your track</h2>
        <div className="mt-3">
          {activeTrack ? (
            <ActiveTrackCard track={activeTrack} />
          ) : (
            <article className="rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted-deep/20 text-muted">
                  <Compass size={22} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-parchment">No track selected yet</h3>
                  <p className="text-sm text-muted">Pick one below to start your 60-day build.</p>
                </div>
              </div>
              <a
                href="#switch-tracks"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-ember px-4 py-2.5 text-sm font-semibold text-parchment transition-opacity hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
              >
                Pick a track <ArrowRight size={16} />
              </a>
            </article>
          )}
        </div>
      </section>

      <section id="switch-tracks" className="mt-8 px-5">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Switch tracks</h2>
        <div className="mt-3 space-y-3">
          {tracks.map((track) => {
            const Icon = track.icon
            const isCurrent = activeTrack?.title === track.title
            return (
              <article
                key={track.title}
                className="flex items-center gap-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/15 text-ember">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-parchment">{track.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">{track.description}</p>
                </div>
                {isCurrent ? (
                  <span className="flex shrink-0 items-center gap-1 rounded-lg bg-ember/15 px-3 py-2 text-xs font-semibold text-ember">
                    <Check size={14} /> Active
                  </span>
                ) : (
                  <button
                    type="button"
                    className="shrink-0 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-muted transition-colors active:border-ember/50 active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
                    onClick={() => console.log(`Track selected: ${track.title} — visual only in this demo`)}
                  >
                    Select
                  </button>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Explore
