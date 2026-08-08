import { Snowflake } from 'lucide-react'
import GridTexture from '../effects/GridTexture.jsx'

const cellStyles = {
  completed: 'bg-success',
  frozen: 'bg-frost',
  missed: 'bg-rose-500',
  pending: 'bg-ember ring-2 ring-white/80',
  locked: 'bg-white/10 opacity-30',
}

const legend = [
  { label: 'Completed', dot: 'bg-success' },
  { label: 'Frozen', dot: 'bg-frost' },
  { label: 'Missed', dot: 'bg-rose-500' },
  { label: 'Upcoming', dot: 'bg-white/10 opacity-30' },
]

function JourneyGrid({ student, days }) {
  return (
    <section className="mx-5 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
      <div className="relative overflow-hidden">
        <GridTexture />
        <div className="relative">
          <h2 className="text-base font-bold text-parchment">Your 60-Day Journey</h2>
          <p className="mt-0.5 font-mono text-xs font-bold text-muted">
            {student.totalDaysCompleted} days complete · Day {student.currentDay} of {student.challengeLength}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-10 gap-1.5">
        {days.map((day) => {
          const isTappable = ['completed', 'frozen', 'missed'].includes(day.status)
          const cell = (
            <div
              className={`relative flex aspect-square items-center justify-center rounded-[4px] ${
                cellStyles[day.status] ?? 'bg-white/10 opacity-30'
              } ${isTappable ? 'cursor-pointer transition-opacity active:opacity-80' : ''}`}
              aria-label={`Day ${day.day}: ${day.status}`}
            >
              {day.status === 'frozen' && <Snowflake size={12} className="text-parchment" strokeWidth={2.5} />}
            </div>
          )
          return isTappable ? (
            <a key={day.day} href={`/day/${day.day}`}>
              {cell}
            </a>
          ) : (
            <div key={day.day}>{cell}</div>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
        {legend.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} aria-hidden="true" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  )
}

export default JourneyGrid
