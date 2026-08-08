import GridTexture from '../effects/GridTexture.jsx'
import TrueFocus from '../effects/TrueFocus.jsx'

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-16 text-center md:px-8 lg:px-0">
      <GridTexture />
      <div className="relative">
      <p className="mb-4 text-sm font-medium text-ember">Build in public. Prove it daily.</p>

      <h1 className="text-4xl font-bold leading-tight text-parchment md:mx-auto md:max-w-3xl md:text-5xl lg:text-6xl">
        Code every day.
        <br />
        Post the proof.
        <br />
        <TrueFocus
          sentence="Get discovered."
          blurAmount={4}
          borderColor="#F5A65B"
          glowColor="rgba(245, 166, 91, 0.6)"
          animationDuration={0.6}
          pauseBetweenAnimations={1.5}
        />
      </h1>

      <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-muted md:max-w-3xl md:text-lg">
        A 60-day coding challenge for Indian college students. Pick a track, ship something daily, and
        build a public streak recruiters can actually see.
      </p>

      <a
        href="/dashboard"
        className="mt-6 block w-full rounded-xl bg-ember py-4 text-center text-base font-bold text-ink transition-colors active:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:mx-auto md:block md:w-auto md:px-12"
      >
        Start Day 1 →
      </a>

      <p className="mt-3 text-xs text-muted-deep">No signup friction for this demo — jump straight in.</p>
      </div>
    </section>
  )
}

export default Hero
