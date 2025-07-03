import './App.css'
import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import StatsApp from './components/StatsApp'

function App() {
  const [activeApp, setActiveApp] = useState<string | null>(null)

  let content
  if (!activeApp) {
    content = <HomeScreen onOpen={setActiveApp} />
  } else if (activeApp === 'Zdrowie') {
    content = <StatsApp />
  } else {
    content = (
      <div>
        <button type="button" onClick={() => setActiveApp(null)}>
          Powrót
        </button>
        <p>{activeApp} w przygotowaniu...</p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <h1>ADHD Life</h1>
      {content}
    </div>
  )
}

export default App
