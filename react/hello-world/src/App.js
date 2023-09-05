import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home'
import Stopwatch from './components/pages/stopwatch'
import Cats from './components/pages/cats'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/stopwatch" Component={Stopwatch} />
          <Route path="/cats" Component={Cats} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
