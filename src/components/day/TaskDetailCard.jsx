import { Clock } from 'lucide-react'

const difficultyStyles = {
  Easy: 'bg-success/15 text-success',
  Medium: 'bg-ember/15 text-ember',
  Hard: 'bg-rose-500/15 text-rose-400',
}

function shortTrackLabel(track) {
  if (!track) return null
  return track
    .split(/\s+/)
    .filter((word) => word !== '&')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function SectionHeading({ children }) {
  return (
    <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-muted first:mt-0">
      {children}
    </h3>
  )
}

function TaskDetailCard({ day, student }) {
  const n = day.day
  const task = day.task ?? {}
  const detail = task.detail
  const trackLabel = shortTrackLabel(student.track)

  return (
    <section className="mx-5 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
      <div className="flex items-center gap-2">
        {task.difficulty && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              difficultyStyles[task.difficulty] ?? 'bg-white/10 text-muted'
            }`}
          >
            {task.difficulty}
          </span>
        )}
        {task.estimatedMinutes != null && (
          <span className="flex items-center gap-1 font-mono text-xs font-bold text-muted">
            <Clock size={12} />
            ~{task.estimatedMinutes} min
          </span>
        )}
      </div>

      <h1 className="mt-3 text-xl font-bold leading-snug text-parchment">{task.title}</h1>
      <p className="mt-1 font-mono text-sm font-bold text-muted">
        Day {n}
        {trackLabel ? ` · ${trackLabel}` : ''}
      </p>

      {detail ? (
        <div className="mt-2 text-sm leading-relaxed text-parchment/80">
          {detail.welcome && <p>{detail.welcome}</p>}

          {detail.context && (
            <>
              <SectionHeading>Context</SectionHeading>
              <p className="text-muted">{detail.context}</p>
            </>
          )}

          {Array.isArray(detail.whatToDo) && detail.whatToDo.length > 0 && (
            <>
              <SectionHeading>What to do</SectionHeading>
              <ul className="list-disc space-y-1 pl-5 text-muted">
                {detail.whatToDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {detail.taskInstructions && (
            <>
              <SectionHeading>Task</SectionHeading>
              <p className="text-muted">{detail.taskInstructions.intro}</p>
              {Array.isArray(detail.taskInstructions.steps) && (
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">
                  {detail.taskInstructions.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}
            </>
          )}

          {detail.exampleOutput && (
            <>
              <SectionHeading>Example Output</SectionHeading>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-ink p-3 font-mono text-sm leading-relaxed text-parchment/80">
                {detail.exampleOutput}
              </pre>
            </>
          )}

          {detail.submissionNote && (
            <>
              <SectionHeading>Submission</SectionHeading>
              <p className="text-muted">{detail.submissionNote}</p>
            </>
          )}
        </div>
      ) : (
        <div className="mt-2 text-sm leading-relaxed text-muted">
          {task.description && <p>{task.description}</p>}

          {Array.isArray(task.requirements) && task.requirements.length > 0 && (
            <>
              <SectionHeading>What you'll build</SectionHeading>
              <ul className="list-disc space-y-1 pl-5">
                {task.requirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default TaskDetailCard
