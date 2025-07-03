import { useState } from 'react'

export interface GameState {
  player: Record<string, unknown>
  skills: Record<string, number>
  skillsList: string[]
  isPaused: boolean
}

const initialState: GameState = {
  player: {},
  skills: {},
  skillsList: [],
  isPaused: false,
}

const useGetGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialState)

  const togglePause = () =>
    setGameState((state) => ({ ...state, isPaused: !state.isPaused }))

  return { gameState, togglePause }
}

export default useGetGameState
