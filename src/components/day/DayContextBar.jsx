import { ArrowLeft } from 'lucide-react'

function DayContextBar({ student }) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-5">
      <a
        href="/dashboard"
        className="flex items-center gap-1 rounded text-sm font-medium text-muted transition-colors active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
      >
        <ArrowLeft size={16} />
        Dashboard
      </a>
      <span className="font-mono text-xs font-bold text-muted-deep">Today (IST): Day {student.currentDay}</span>
    </div>
  )
}

export default DayContextBar
