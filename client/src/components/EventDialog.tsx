import type { FC } from 'react'
import type { AIEvent, AIEventOption } from '@shared/typings'
import './MapView.css'

interface Props {
  event: AIEvent
  onChoose: (option: AIEventOption) => void
}

const EventDialog: FC<Props> = ({ event, onChoose }) => (
  <div className="modal">
    <div className="modal-content">
      <p>{event.description}</p>
      {event.options.map((opt) => (
        <button key={opt.label} onClick={() => onChoose(opt)} className="location">
          {opt.label}
        </button>
      ))}
    </div>
  </div>
)

export default EventDialog
