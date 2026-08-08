import Nav from '../components/landing/Nav.jsx'
import Hero from '../components/landing/Hero.jsx'
import StatsStrip from '../components/landing/StatsStrip.jsx'
import TrackPicker from '../components/landing/TrackPicker.jsx'
import HowItWorks from '../components/landing/HowItWorks.jsx'
import StreakFreezeCallout from '../components/landing/StreakFreezeCallout.jsx'
import Testimonials from '../components/landing/Testimonials.jsx'
import FinalCta from '../components/landing/FinalCta.jsx'
import Footer from '../components/landing/Footer.jsx'

function Landing() {
  return (
    <main className="mx-auto min-h-screen max-w-md bg-ink text-parchment md:max-w-none">
      <Nav />
      <div className="md:mx-auto md:max-w-6xl">
        <Hero />
        <StatsStrip />
        <TrackPicker />
        <HowItWorks />
        <StreakFreezeCallout />
        <Testimonials />
        <FinalCta />
      </div>
      <Footer />
    </main>
  )
}

export default Landing
