import './App.css'
import HomeScreen from './components/HomeScreen'
import MapView from './components/MapView'
import GamblingGame from './components/GamblingGame'
import { PlayerStatsProvider } from './hooks/usePlayerStats'

function App() {
  return (
    <PlayerStatsProvider>
      <div className="app-container">
        <h1>ADHD Life</h1>
        <HomeScreen />
        <MapView />
        <GamblingGame />
      </div>
    </PlayerStatsProvider>
  )
}

export default App
