import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <h1>Welcome to Liem's Website</h1>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
