import React from 'react'
import "./Header.css"
import { ThemeContext } from '../App'
import { useContext } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Header() {

    const {toggletheme} = useContext(ThemeContext)

  return (
    <nav>
        <h1  className="Heading">Remembo!</h1>
        <button className="Toggle" onClick={toggletheme}>
        <WbSunnyIcon fontSize='small' />
        </button>
    </nav>
  )
}

export default Header