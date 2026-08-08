function Nav() {
  return (
    <header className="sticky top-0 z-40 h-16 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-md items-center justify-between px-5 md:max-w-6xl md:px-8">
        <a href="/" className="font-mono text-sm font-bold uppercase tracking-widest text-parchment">
          AB TALKS
        </a>
        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
          onClick={() => console.log('Sign in — no-op in this demo')}
        >
          Sign in
        </button>
      </nav>
    </header>
  )
}

export default Nav
