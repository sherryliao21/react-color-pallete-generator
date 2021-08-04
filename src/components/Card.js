import React from 'react'
import CopyBtn from './CopyBtn'

const Card = ({ pallete }) => {
  let hex = ''
  const convert = (pallete) => {
    pallete.forEach(color => {
      hex += color.toString(16)
    })
    return hex.toUpperCase()
  }
  hex = convert(pallete)

  return (
    <div class="card-container">
      <div class="color" style={{ backgroundColor: `#${hex}` }}></div>
      <CopyBtn hex={ hex }/>
      <div class="hex">#{ hex }</div>
    </div>
  )
}

export default Card
