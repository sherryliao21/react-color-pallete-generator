import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFillDrip } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const title = 'Color Pallete Generator'

  return (
    <div>
      <h1 class="app-title">{ title }<FontAwesomeIcon icon={ faFillDrip } class="swatchbook"/></h1>
    </div>
  )
}

export default Header
