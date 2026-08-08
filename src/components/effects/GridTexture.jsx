function GridTexture({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(237,234,227,0.06) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    />
  )
}

export default GridTexture
