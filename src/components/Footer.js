import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div class="footer">
      <p class="footer-text">Made with
      <span class="text-red-400 mx-2">&#9829;</span>
        by Sherry Liao &copy; 2021 <a href="https://github.com/sherryliao21" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={ faGithub } class="github-logo"/></a></p>
    </div>
  )
}

export default Footer
