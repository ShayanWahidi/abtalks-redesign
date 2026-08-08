import { useState } from 'react'
import { CheckCircle2, GitFork, Link2, Snowflake, Trophy } from 'lucide-react'

function formatDate(iso) {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const inputClass =
  'mt-1 w-full rounded-lg border border-white/10 bg-ink px-3 py-2.5 text-sm text-parchment placeholder:text-muted-deep focus:outline-none focus:ring-2 focus:ring-ember/60'

function SubmitSuccess({ n, submission }) {
  const synergy = submission.synergyEarned ?? 0
  const links = [
    { url: submission.githubUrl, icon: GitFork, label: 'GitHub' },
    { url: submission.linkedinUrl, icon: Link2, label: 'LinkedIn' },
  ].filter((link) => link.url)

  return (
    <div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success">
        <CheckCircle2 size={20} />
      </div>
      <h2 className="mt-3 text-lg font-bold text-parchment">
        You completed Day <span className="font-mono">{n}</span>
      </h2>
      {submission.submittedAt && (
        <p className="mt-0.5 text-xs text-muted">{formatDate(submission.submittedAt)}</p>
      )}

      {synergy > 0 && (
        <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-ember/15 px-3 py-1 font-mono text-xs font-bold text-ember">
          <Trophy size={12} />
          +{synergy} synergy
        </span>
      )}

      {links.length > 0 && (
        <div className="mt-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-ink px-3 py-2.5 text-sm text-parchment/80 transition-colors active:border-ember/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
              >
                <Icon size={15} className="shrink-0 text-muted" />
                <span className="truncate">{link.label}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

function FreezeState({ n }) {
  return (
    <div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-frost/15 text-frost">
        <Snowflake size={20} />
      </div>
      <h2 className="mt-3 text-lg font-bold text-parchment">
        Day <span className="font-mono">{n}</span> was covered by a Streak Freeze
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        No submission needed — your streak stayed intact.
      </p>
      <p className="mt-4 text-xs text-muted-deep">
        Freezes protect your streak but don't earn synergy.
      </p>
    </div>
  )
}

function MissedFreezeOption({ n, freezesLeft }) {
  const hasFreezes = freezesLeft > 0
  return (
    <div className="mb-5 rounded-xl border border-frost/25 bg-frost/5 p-4">
      <div className="flex items-center gap-2">
        <Snowflake size={16} className="shrink-0 text-frost" />
        <h3 className="text-sm font-semibold text-parchment">Missed this one?</h3>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted">
        {hasFreezes
          ? 'Use a Streak Freeze to protect your streak instead of submitting late.'
          : 'No freeze tokens left.'}
      </p>
      <button
        type="button"
        disabled={!hasFreezes}
        onClick={() => console.log('Freeze used on Day ' + n + ' — no-op in this demo')}
        className="mt-3 w-full rounded-lg border border-frost/40 py-2.5 text-sm font-semibold text-frost transition-colors active:bg-frost/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frost/60 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Use a Freeze Token (<span className="font-mono font-bold">{freezesLeft}</span> left)
      </button>
    </div>
  )
}

function SubmitForm({
  n,
  confirmed,
  setConfirmed,
  githubUrl,
  setGithubUrl,
  linkedinUrl,
  setLinkedinUrl,
  onSubmit,
}) {
  return (
    <div>
      <h2 className="text-base font-bold text-parchment">Submit your solution</h2>
      <p className="mt-0.5 text-xs leading-relaxed text-muted">
        Confirm you completed today's task. GitHub and LinkedIn are optional — they earn bonus
        synergy.
      </p>

      <label className="mt-4 flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(event) => setConfirmed(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-ember"
        />
        <span className="text-sm text-parchment/80">I confirm I have completed today's task.</span>
      </label>

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">
        Add proof (optional, earns more synergy)
      </p>

      <label className="mt-3 block">
        <span className="text-xs font-medium text-muted">GitHub URL</span>
        <input
          type="url"
          value={githubUrl}
          onChange={(event) => setGithubUrl(event.target.value)}
          placeholder="GitHub commit or repo URL"
          className={inputClass}
        />
        <span className="mt-1 block font-mono text-[11px] font-bold text-muted-deep">Optional · +5 synergy</span>
      </label>

      <label className="mt-3 block">
        <span className="text-xs font-medium text-muted">LinkedIn URL</span>
        <input
          type="url"
          value={linkedinUrl}
          onChange={(event) => setLinkedinUrl(event.target.value)}
          placeholder="https://www.linkedin.com/posts/..."
          className={inputClass}
        />
        <span className="mt-1 block font-mono text-[11px] font-bold text-muted-deep">Optional · +8 synergy</span>
      </label>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!confirmed}
        className="mt-5 w-full rounded-xl bg-ember py-4 text-center text-base font-bold text-ink transition-colors active:bg-ember-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        Submit Day <span className="font-mono font-bold">{n}</span>
      </button>
    </div>
  )
}

function SubmissionForm({ day, n, student }) {
  const [confirmed, setConfirmed] = useState(false)
  const [githubUrl, setGithubUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submission = day.submission ?? {}
  const freezesLeft = student.freezeTokensTotal - student.freezeTokensUsed

  if (submitted) {
    const earned = (githubUrl.trim() ? 5 : 0) + (linkedinUrl.trim() ? 8 : 0)
    return (
      <section className="mx-5 mt-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
        <SubmitSuccess
          n={n}
          submission={{
            githubUrl: githubUrl.trim() || null,
            linkedinUrl: linkedinUrl.trim() || null,
            submittedAt: new Date().toISOString(),
            synergyEarned: earned,
          }}
        />
      </section>
    )
  }

  if (day.status === 'completed' || submission.confirmed === true) {
    return (
      <section className="mx-5 mt-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
        <SubmitSuccess n={n} submission={submission} />
      </section>
    )
  }

  if (day.status === 'frozen') {
    return (
      <section className="mx-5 mt-4 rounded-xl border border-frost/25 bg-frost/5 p-5">
        <FreezeState n={n} />
      </section>
    )
  }

  return (
    <section className="mx-5 mt-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
      {day.status === 'missed' && <MissedFreezeOption n={n} freezesLeft={freezesLeft} />}
      <SubmitForm
        n={n}
        confirmed={confirmed}
        setConfirmed={setConfirmed}
        githubUrl={githubUrl}
        setGithubUrl={setGithubUrl}
        linkedinUrl={linkedinUrl}
        setLinkedinUrl={setLinkedinUrl}
        onSubmit={() => setSubmitted(true)}
      />
    </section>
  )
}

export default SubmissionForm
