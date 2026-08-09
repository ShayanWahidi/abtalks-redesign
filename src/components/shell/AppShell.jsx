import { useProfile } from '../../context/ProfileContext.jsx'
import DashboardHeader from '../dashboard/DashboardHeader.jsx'
import ProfileSwitcher from '../demo/ProfileSwitcher.jsx'
import Footer from '../landing/Footer.jsx'
import BottomNav from './BottomNav.jsx'

function AppShell({ children }) {
  const { student } = useProfile()

  return (
    <main className="mx-auto min-h-screen max-w-md bg-ink text-parchment md:max-w-none">
      <div className="md:mx-auto md:max-w-4xl">
        <DashboardHeader student={student} />
        <ProfileSwitcher />
        <div className="pb-24">
          {children}
          <Footer />
        </div>
      </div>
      <BottomNav />
    </main>
  )
}

export default AppShell
