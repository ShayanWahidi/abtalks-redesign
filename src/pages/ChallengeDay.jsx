import { Lock } from 'lucide-react'
import { useProfile } from '../context/ProfileContext.jsx'
import DayContextBar from '../components/day/DayContextBar.jsx'
import TaskDetailCard from '../components/day/TaskDetailCard.jsx'
import SubmissionForm from '../components/day/SubmissionForm.jsx'

function ChallengeDay({ dayNumber = 12 }) {
  const { student, days } = useProfile()
  const n = Number.isFinite(Number(dayNumber)) && Number(dayNumber) > 0 ? Number(dayNumber) : 12
  const day = days[n - 1]

  return (
    <>
      <DayContextBar student={student} />

      {day && n <= student.currentDay ? (
        <>
          <TaskDetailCard day={day} student={student} />
          <SubmissionForm key={n} day={day} n={n} student={student} />
        </>
      ) : (
        <div className="px-5 py-16 text-center">
          <Lock size={28} className="mx-auto text-muted-deep" />
          <h1 className="mt-3 text-lg font-bold text-parchment">
            Day <span className="font-mono">{n}</span> hasn't unlocked yet
          </h1>
          <p className="mt-1 text-sm text-muted">
            Come back on Day <span className="font-mono font-bold">{n}</span> to see this challenge.
          </p>
          <a
            href="/dashboard"
            className="mt-5 inline-block rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-parchment transition-colors active:border-ember/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
          >
            Back to Dashboard
          </a>
        </div>
      )}
    </>
  )
}

export default ChallengeDay
