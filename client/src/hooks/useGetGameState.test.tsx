import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useGetGameState from './useGetGameState'

describe('useGetGameState', () => {
  it('returns correct structure', () => {
    const { result } = renderHook(() => useGetGameState())

    expect(result.current).toHaveProperty('gameState')
    expect(result.current).toHaveProperty('togglePause')
    expect(typeof result.current.togglePause).toBe('function')

    expect(result.current.gameState).toMatchObject({
      player: expect.anything(),
      skills: expect.any(Object),
      skillsList: expect.any(Array),
      isPaused: expect.any(Boolean),
    })
  })

  it('togglePause switches isPaused state', () => {
    const { result } = renderHook(() => useGetGameState())

    expect(result.current.gameState.isPaused).toBe(false)
    act(() => {
      result.current.togglePause()
    })
    expect(result.current.gameState.isPaused).toBe(true)
  })
})
