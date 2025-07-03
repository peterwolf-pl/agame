import { useState } from 'react'
import './MapView.css'

interface Location {
  id: string
  name: string
}

const locations: Location[] = [
  { id: 'home', name: 'Dom' },
  { id: 'gym', name: 'Siłownia' },
  { id: 'pub', name: 'Pub' },
]

const MapView = () => {
  const [selected, setSelected] = useState<Location | null>(null)

  return (
    <div className="map-view">
      {locations.map((loc) => (
        <button key={loc.id} className="location" onClick={() => setSelected(loc)}>
          {loc.name}
        </button>
      ))}

      {selected && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selected.name}</h2>
            <button onClick={() => setSelected(null)}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MapView
