import './App.css'
import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import StatsApp from './components/StatsApp'
import MailApp from './components/MailApp'

function App() {
  const [activeApp, setActiveApp] = useState<string | null>(null)

  let content
  if (!activeApp) {
    content = <HomeScreen onOpen={setActiveApp} />
  } else {
    let appContent
    if (activeApp === 'Zdrowie') {
      appContent = <StatsApp />
    } else if (activeApp === 'Mail') {
      appContent = <MailApp />
    } else {
      appContent = <p>{activeApp} w przygotowaniu...</p>
    }
    content = (
      <div>
        <button type="button" onClick={() => setActiveApp(null)}>
          Powrót
        </button>
        {appContent}
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
