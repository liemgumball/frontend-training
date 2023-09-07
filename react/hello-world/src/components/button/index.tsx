import './Button.scss'
import React from 'react'

type ButtonProps = {
  disabled?: boolean
  onClick: () => void
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ disabled, onClick, children }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
