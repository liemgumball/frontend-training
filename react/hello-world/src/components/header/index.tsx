import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header: React.FC = () => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>Welcome to Liem's Website</h1>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/stopwatch' ? 'active' : ''}>
            <Link to="/stopwatch">Stopwatch</Link>
          </li>
          <li className={location.pathname === '/cats' ? 'active' : ''}>
            <Link to="/cats">Cats</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
