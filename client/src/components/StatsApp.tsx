import { useEffect, useState } from 'react'

interface Stats {
  boredom: number
  intellect: number
  luxury: number
  hunger: number
  fatigue: number
  sleep: number
  social: number
  love: number
  addiction: number
  stress: number
}

export default function StatsApp() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {})
  }, [])

  if (!stats) return <div>Loading...</div>

  return (
    <div>
      <h2>Statystyki</h2>
      <ul>
        <li>Znudzenie: {stats.boredom}</li>
        <li>Sprawność intelektualna: {stats.intellect}</li>
        <li>Poczucie luksusu: {stats.luxury}</li>
        <li>Głód: {stats.hunger}</li>
        <li>Zmęczenie: {stats.fatigue}</li>
        <li>Sen: {stats.sleep}</li>
        <li>Towarzystwo: {stats.social}</li>
        <li>Miłość: {stats.love}</li>
        <li>Uzależnienie: {stats.addiction}</li>
        <li>Poziom stresu: {stats.stress}</li>
      </ul>
    </div>
  )
}
