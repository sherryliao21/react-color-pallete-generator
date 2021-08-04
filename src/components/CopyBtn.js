import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import Clipboard from 'react-clipboard.js';
import { useAlert } from 'react-alert'

const CopyBtn = ({ hex }) => {
  const colorHex = '#' + hex
  const alert = useAlert()
  const onSuccess = () => {
    alert.show(`Copied color to clipboard`)
  }
  return (
    <div class="clip">
      <Clipboard data-clipboard-text={colorHex} button-title="Copy HEX" onSuccess={ onSuccess }>
        <FontAwesomeIcon icon={ faClipboard } />
      </Clipboard>
    </div>
  )
}

export default CopyBtn
