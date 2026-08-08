import { useEffect, useState } from 'react'

export default function usePath() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const sync = () => setPath(window.location.pathname)

    const onClick = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('http') || anchor.target === '_blank') return
      event.preventDefault()
      window.history.pushState({}, '', href)
      sync()
    }

    window.addEventListener('popstate', sync)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', sync)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return path
}
