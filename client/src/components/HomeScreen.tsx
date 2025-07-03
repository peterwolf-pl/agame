import type { FC } from "react"
import './HomeScreen.css'

interface AppIconProps {
  name: string
  onSelect: (name: string) => void
}

const apps = [
  'Przeglądarka',
  'Alledrogo',
  'Mail',
  'Kontakty',
  'Fakebook',
  'Badoom',
  'Instagram',
  'Muzyka',
  'Gry',
  'Bank',
  'Pinteresujące',
  'MójObywatel',
  'Zdrowie'
]

const AppIcon: FC<AppIconProps> = ({ name, onSelect }) => (
  <button type="button" className="app-icon" onClick={() => onSelect(name)}>
    <div className="icon" />
    <span>{name}</span>
  </button>
)

interface Props {
  onOpen: (name: string) => void
}

const HomeScreen: FC<Props> = ({ onOpen }) => (
  <div className="home-screen">
    {apps.map((app) => (
      <AppIcon key={app} name={app} onSelect={onOpen} />
    ))}
  </div>
)

export default HomeScreen
