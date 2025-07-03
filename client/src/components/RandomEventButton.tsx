import { useState } from 'react'
import EventDialog from './EventDialog'
import { usePlayerStats } from '../hooks/usePlayerStats'
import type { AIEvent, AIEventOption } from '@shared/typings'

const RandomEventButton = () => {
  const [event, setEvent] = useState<AIEvent | null>(null)
  const [notification, setNotification] = useState<string | null>(null)
  const { applyEffects } = usePlayerStats()

  const triggerEvent = async () => {
    const res = await fetch('/api/ai/event', { method: 'POST' })
    const data = (await res.json()) as AIEvent
    setEvent(data)
  }

  const resolveEvent = async (option: AIEventOption) => {
    if (!event) return
    const res = await fetch('/api/ai/event/resolve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: event.id, optionLabel: option.label })
    })
    const result = await res.json()
    applyEffects(result.effects)
    const text = Object.entries(result.effects as Record<string, number>)
      .map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`)
      .join(', ')
    setNotification(text)
    setEvent(null)
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <div>
      <button onClick={triggerEvent}>Wywołaj losowe wydarzenie</button>
      {event && <EventDialog event={event} onChoose={resolveEvent} />}
      {notification && <div className="notification">{notification}</div>}
    </div>
  )
}

export default RandomEventButton
