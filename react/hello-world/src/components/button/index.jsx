import './Button.scss'
import React from 'react'

const Button = ({ onClick, icon, ...props }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {props.label && <span className="label">{props.label}</span>}
    </button>
  )
}

export default Button
