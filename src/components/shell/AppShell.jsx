import { useProfile } from '../../context/ProfileContext.jsx'
import DashboardHeader from '../dashboard/DashboardHeader.jsx'
import Footer from '../landing/Footer.jsx'
import BottomNav from './BottomNav.jsx'

function AppShell({ children }) {
  const { student } = useProfile()

  return (
    <main className="mx-auto min-h-screen max-w-md bg-ink text-parchment md:max-w-none">
      <div className="md:mx-auto md:max-w-4xl">
        <DashboardHeader student={student} />
        <div className="pb-20">{children}</div>
        <Footer />
      </div>
      <BottomNav />
    </main>
  )
}

export default AppShell
