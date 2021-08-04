import React from 'react'

const GenerateBtn = ({ onClick }) => {
  return (
    <div class="btn-container">
      <button class="btn hover:bg-teal-blue-light hover:translate-y-0.5 transform transition" onClick={ onClick }>Generate</button>
    </div>
  )
}

export default GenerateBtn
