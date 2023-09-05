import './App.css'
import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home'
import Stopwatch from './components/pages/stopwatch'
import Cats from './components/pages/cats'
import Form from './components/form'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/stopwatch" Component={Stopwatch} />
          <Route path="/cats" Component={Cats} />
          <Route path="/form" Component={Form} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
