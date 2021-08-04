import React from 'react'

const GenerateBtn = ({ onClick }) => {
  return (
    <div class="btn-container">
      <button class="btn" onClick={ onClick }>Generate</button>
    </div>
  )
}

export default GenerateBtn
