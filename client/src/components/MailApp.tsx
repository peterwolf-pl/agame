import { useEffect, useState } from 'react'

interface Message {
  id: number
  from: string
  subject: string
  body: string
}

export default function MailApp() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    fetch('/api/messages')
      .then((r) => r.json())
      .then((data) => setMessages(data))
      .catch(() => {})
  }, [])

  return (
    <div>
      <h2>Skrzynka odbiorcza</h2>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>
            <strong>{m.from}:</strong> {m.subject}
          </li>
        ))}
      </ul>
    </div>
  )
}
