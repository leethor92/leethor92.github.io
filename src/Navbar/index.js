import { useState } from 'react'
import style from './style.css'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { InfoRounded, Home, Email, Engineering } from '@mui/icons-material'

export default function Navbar() {
  const [value, setValue] = useState(0)

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <BottomNavigation
        classes={style.bottom_nav}
        showLabels
        value={value}
        onChange={(e, newValue) => handleChange(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<Home />}/>
        <BottomNavigationAction label="About" icon={<InfoRounded />} />
        <BottomNavigationAction label="Skills" icon={<Engineering />}/>
        <BottomNavigationAction label="Projects" icon={<InfoRounded />}/>
        <BottomNavigationAction label="Contact" icon={<Email />}/>
      </BottomNavigation>
      <header className="App-header">
        Test Text
      </header>
    </div>
  ) 
}
