import { Eye, GitCommit, Target } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Commit to a track',
    description: 'Choose one focus and stick with it for 60 days.',
  },
  {
    number: '02',
    icon: GitCommit,
    title: 'Build daily proof',
    description: 'One GitHub commit and one LinkedIn post, every day.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'Get visible',
    description: 'Recruiters see consistency, not just a resume line.',
  },
]

function HowItWorks() {
  return (
    <section className="px-5 py-10 md:px-8 lg:px-0">
      <h2 className="mb-4 text-2xl font-bold text-parchment">How the 60 days work</h2>

      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <article key={step.number} className="mb-3 flex gap-4 rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5 md:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember/15 text-ember">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span className="mt-2 font-mono text-[11px] font-bold tabular-nums text-muted-deep">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-parchment">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorks
