import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "I'd always planned to 'code more' and never did. Sixty days of a non-negotiable daily commit flipped that — the streak number staring back at me each morning beat any to-do list. A referral came from a LinkedIn post I'd made on day 30.",
    name: 'Rohan Deshpande',
    role: 'COEP, Pune',
    initials: 'RD',
    avatarClass: 'bg-ember/20 text-ember',
  },
  {
    quote:
      "What surprised me wasn't the code but the record of it. Watching the days fill up one by one made me realize consistency is a trainable skill. I interview better now because I can prove I actually show up.",
    name: 'Ananya Iyer',
    role: 'IIT Madras',
    initials: 'AI',
    avatarClass: 'bg-success/20 text-success',
  },
  {
    quote:
      "I missed day 19 and the freeze token saved a streak I'd built for a month. More than that, the public commit log grew a footprint that had recruiters reaching out — nobody even asked to see my resume.",
    name: 'Kabir Malhotra',
    role: 'VIT Vellore',
    initials: 'KM',
    avatarClass: 'bg-surface-hover text-parchment',
  },
]

function Testimonials() {
  return (
    <section className="py-8">
      <div className="px-5 md:px-8 lg:px-0">
        <h2 className="text-2xl font-bold text-parchment">What builders are saying</h2>
      </div>

      <div className="scrollbar-hide mt-4 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:grid md:grid-cols-2 md:flex-wrap md:gap-4 md:overflow-visible md:px-8 lg:grid-cols-4 lg:px-0">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex min-w-[260px] snap-center flex-col rounded-xl border border-white/5 border-t border-white/[0.08] bg-surface p-5 md:min-w-0 md:snap-none"
          >
            <Quote size={20} className="mb-3 text-ember" fill="currentColor" strokeWidth={0} />
            <blockquote className="text-sm leading-relaxed text-parchment/80">{t.quote}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.avatarClass}`}
                aria-hidden="true"
              >
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-parchment">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
