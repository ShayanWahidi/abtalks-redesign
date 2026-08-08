import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/abtalksonai/' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/abtalks-on-ai/' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@ABTalksOnAI' },
  { icon: FaXTwitter, label: 'X', href: 'https://x.com/abtalksonai' },
  { icon: FaDiscord, label: 'Discord', href: 'https://discord.gg/j4Q8tvDj6' },
]

function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="md:mx-auto md:max-w-6xl md:flex md:items-center md:justify-between">
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-parchment">AB TALKS</p>
        <p className="mt-1 text-xs text-muted-deep md:mt-0">
          © {new Date().getFullYear()} AB Talks. All rights reserved.
        </p>

        <div className="mt-4 flex items-center gap-4 md:mt-0">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-parchment active:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
