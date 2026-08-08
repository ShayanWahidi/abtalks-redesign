const jobs = [
  {
    title: 'Frontend Engineer',
    company: 'A technology company',
    location: 'Remote',
    type: 'Full-time',
    posted: '2 days ago',
  },
  {
    title: 'Data Analyst Intern',
    company: 'A fintech startup',
    location: 'Hybrid · Bengaluru',
    type: 'Internship',
    posted: '4 days ago',
  },
  {
    title: 'Backend Developer',
    company: 'An AI research lab',
    location: 'Remote',
    type: 'Contract',
    posted: '1 week ago',
  },
]

function Jobs() {
  return (
    <section className="px-5">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold text-parchment">Jobs</h1>
        <span className="text-sm text-muted">3 openings</span>
      </div>
      <p className="mt-1 text-sm text-muted">Curated for builders — updated daily.</p>

      <div className="mt-5 space-y-4">
        {jobs.map((job) => (
          <article key={job.title} className="rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-block rounded-full bg-ember/15 px-3 py-1 text-xs font-semibold text-ember">
                  {job.type}
                </span>
                <h2 className="mt-2 text-base font-semibold text-parchment">{job.title}</h2>
                <p className="mt-0.5 text-sm text-muted">
                  {job.company} · {job.location}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-muted-deep">Posted {job.posted}</p>
              <a
                href="#"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-parchment active:border-ember/50 active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
              >
                Apply
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Jobs
