import './Home.scss'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Button from '../../button'

const Home = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="home">
      <h1>My example</h1>
      <h2>{counter}</h2>
      <div className="button-group">
        <Button onClick={handleDecrement} icon={<FaMinus />} label="Minus" />
        <Button onClick={handleIncrement} icon={<FaPlus />} label="Add" />
      </div>
    </div>
  )
}

export default Home
