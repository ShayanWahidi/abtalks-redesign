import tracks from '../../data/tracks.js'
import ScrollStack, { ScrollStackItem } from '../effects/ScrollStack.jsx'

function TrackPicker() {
  return (
    <section className="py-8">
      <div className="px-5 md:px-8 lg:px-0">
        <h2 className="text-2xl font-bold text-parchment">Pick your track</h2>
        <p className="mt-1 text-sm text-muted">You'll build in this track for the full 60 days.</p>
      </div>

      <ScrollStack
        useWindowScroll
        itemDistance={60}
        itemStackDistance={40}
        stackPosition="25%"
        scaleEndPosition="12%"
        baseScale={0.85}
        itemScale={0.03}
        rotationAmount={1}
        blurAmount={1}
      >
        {tracks.map((track) => {
          const Icon = track.icon
          return (
            <ScrollStackItem key={track.title}>
              <article className="flex h-full flex-col">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ember/15 text-ember">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold leading-snug text-parchment">{track.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{track.description}</p>
                <button
                  type="button"
                  className="mt-auto rounded-lg border border-white/10 py-2.5 text-sm font-medium text-muted transition-colors active:border-ember/50 active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
                  onClick={() => console.log(`Track selected: ${track.title} — visual only in this demo`)}
                >
                  Select track
                </button>
              </article>
            </ScrollStackItem>
          )
        })}
      </ScrollStack>
    </section>
  )
}

export default TrackPicker
