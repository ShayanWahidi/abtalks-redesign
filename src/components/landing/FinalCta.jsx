function FinalCta() {
  return (
    <section className="mx-5 my-6 rounded-xl border border-white/5 border-t border-white/[0.08] bg-gradient-to-br from-surface to-ink p-6 text-center md:px-12 md:py-12">
      <h2 className="text-2xl font-bold text-parchment md:mx-auto md:max-w-xl">
        Your streak starts whenever you're ready.
      </h2>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted md:max-w-xl">
        Late night, early morning — the challenge doesn't care when, just that you show up.
      </p>
      <a
        href="/dashboard"
        className="mt-5 block w-full rounded-xl bg-ember py-4 text-center text-base font-bold text-ink transition-colors active:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Start the Challenge
      </a>
    </section>
  )
}

export default FinalCta
