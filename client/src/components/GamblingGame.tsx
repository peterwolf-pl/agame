import { useState } from 'react'

const GamblingGame = () => {
  const [result, setResult] = useState<string | null>(null)

  const play = () => {
    const win = Math.random() > 0.5
    setResult(win ? 'Wygrana!' : 'Przegrana :(')
  }

  return (
    <div>
      <h3>Prosta mini-gra hazardowa</h3>
      <button onClick={play}>Zagraj</button>
      {result && <p>{result}</p>}
    </div>
  )
}

export default GamblingGame
