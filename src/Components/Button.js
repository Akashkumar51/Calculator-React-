import React from 'react'
import "./Button.css"

function Button(props) {
    console.log(props);
    function isOpertors(val) {
        return !isNaN(val) || val === "." || val === "="
    }
    return (
        <div onClick={() => props.children === "=" ? props.sumthevalue(props.children) : props.changeValue(props.children)} 
        className={`button-wrapper ${isOpertors(props.children) ? null : "operator"}`}>{props.children}</div>
    )
}

export default Button