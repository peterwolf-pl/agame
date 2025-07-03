import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { PlayerStats } from '@shared/typings'

const defaultStats: PlayerStats = {
  boredom: 50,
  intellectual: 50,
  luxury: 50,
  hunger: 50,
  fatigue: 50,
  sleep: 50,
  social: 50,
  love: 50,
  sexuality: 50,
  stress: 50,
  addiction: 0,
  hygiene: 50,
  health: 50,
  jobSatisfaction: 50,
  selfDiscipline: 50,
  openMindedness: 50,
}

interface StatsContext {
  stats: PlayerStats
  setStats: (stats: PlayerStats) => void
}

const PlayerStatsContext = createContext<StatsContext | undefined>(undefined)

export const PlayerStatsProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<PlayerStats>(defaultStats)

  return (
    <PlayerStatsContext.Provider value={{ stats, setStats }}>
      {children}
    </PlayerStatsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayerStats = () => {
  const context = useContext(PlayerStatsContext)
  if (!context) throw new Error('usePlayerStats must be used within provider')
  return context
}
