import Landing from './pages/Landing.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ChallengeDay from './pages/ChallengeDay.jsx'
import Jobs from './pages/Jobs.jsx'
import Explore from './pages/Explore.jsx'
import Rewards from './pages/Rewards.jsx'
import Profile from './pages/Profile.jsx'
import ProfileSwitcher from './components/dev/ProfileSwitcher.jsx'
import AppShell from './components/shell/AppShell.jsx'
import usePath from './hooks/usePath.js'

function App() {
  const path = usePath()

  let page
  if (path.startsWith('/day/')) {
    const match = path.match(/^\/day\/(\d+)/)
    page = (
      <AppShell>
        <ChallengeDay dayNumber={match ? Number(match[1]) : 12} />
      </AppShell>
    )
  } else if (path.startsWith('/dashboard')) {
    page = (
      <AppShell>
        <Dashboard />
      </AppShell>
    )
  } else if (path.startsWith('/jobs')) {
    page = (
      <AppShell>
        <Jobs />
      </AppShell>
    )
  } else if (path.startsWith('/explore')) {
    page = (
      <AppShell>
        <Explore />
      </AppShell>
    )
  } else if (path.startsWith('/rewards')) {
    page = (
      <AppShell>
        <Rewards />
      </AppShell>
    )
  } else if (path.startsWith('/profile')) {
    page = (
      <AppShell>
        <Profile />
      </AppShell>
    )
  } else {
    page = <Landing />
  }

  return (
    <>
      <ProfileSwitcher />
      {page}
    </>
  )
}

export default App
