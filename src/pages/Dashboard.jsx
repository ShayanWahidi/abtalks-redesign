import { useProfile } from '../context/ProfileContext.jsx'
import JourneyGrid from '../components/dashboard/JourneyGrid.jsx'
import TodayTaskCard from '../components/dashboard/TodayTaskCard.jsx'
import StatRow from '../components/dashboard/StatRow.jsx'
import RecentActivity from '../components/dashboard/RecentActivity.jsx'
import StandingSection from '../components/dashboard/StandingSection.jsx'

function Dashboard() {
  const { student, days } = useProfile()

  return (
    <>
      <JourneyGrid student={student} days={days} />
      <TodayTaskCard student={student} days={days} />
      <StatRow student={student} />
      <RecentActivity student={student} days={days} />
      <StandingSection student={student} />
    </>
  )
}

export default Dashboard
