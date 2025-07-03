import type { FC } from "react"
import './HomeScreen.css'

interface AppIconProps {
  name: string
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

const AppIcon: FC<AppIconProps> = ({ name }) => (
  <div className="app-icon">
    <div className="icon" />
    <span>{name}</span>
  </div>
)

const HomeScreen: FC = () => (
  <div className="home-screen">
    {apps.map((app) => (
      <AppIcon key={app} name={app} />
    ))}
  </div>
)

export default HomeScreen
