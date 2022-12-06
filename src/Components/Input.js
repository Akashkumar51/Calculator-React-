import React from 'react'
import "./Input.css"

function input(props) {
    console.log(props);
  return (
    <div className='input'>{props.input}</div>
  )
}

export default input