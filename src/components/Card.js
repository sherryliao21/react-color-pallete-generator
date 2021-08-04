import React from 'react'

const Card = ({ pallete }) => {
  let hex = ''
  const convert = (pallete) => {
    pallete.forEach(color => {
      hex += color.toString(16)
    })
    return hex
  }

  return (
    <div class="card-container">
      <div class="color" style={{ backgroundColor: `rgb(${pallete[0]}, ${pallete[1]}, ${pallete[2]})` }}></div>
      <div class="hex">#{ 123 }</div>
    </div>
  )
}

export default Card
