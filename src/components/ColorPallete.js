import React from 'react'
import Card from './Card'

const ColorPallete = ({ pallete }) => {
  return (
    <div class="pallete-container">
      <Card pallete={ pallete[0] }/>
      <Card pallete={ pallete[1] }/>
      <Card pallete={ pallete[2] }/>
      <Card pallete={ pallete[3] }/>
      <Card pallete={ pallete[4] } />
    </div>
  )
}

export default ColorPallete
