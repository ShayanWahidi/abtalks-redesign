/* oxlint-disable react/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'
import studentActive from '../data/student-active.json'
import studentDay1 from '../data/student-day1.json'
import studentEmpty from '../data/student-empty.json'

const profiles = {
  day1: studentDay1,
  active: studentActive,
  empty: studentEmpty,
}

const ProfileContext = createContext(null)

export function ProfileProvider({ children }) {
  const [activeProfileKey, setActiveProfileKey] = useState('active')

  const value = useMemo(() => {
    const profile = profiles[activeProfileKey] ?? studentActive
    return {
      activeProfileKey,
      setActiveProfileKey,
      student: profile.student,
      days: profile.days,
    }
  }, [activeProfileKey])

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return context
}
