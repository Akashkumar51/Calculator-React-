import React from 'react'
import "./ClearButton.css"

function clearbutton(props) {
    console.log(props);
  return (
    <div className='clear-btn' onClick={() => props.changeValuetoclear("clear")}>{props.children}</div>
  )
}

export default clearbutton