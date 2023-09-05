import './Home.scss'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Button from '../../button'

const Home = () => {
  const [counter, setCounter] = useState(0)

  const handleAdjust = (amount) => {
    setCounter((current) => current + amount)
  }

  return (
    <div className="home">
      <h1>My example</h1>
      <h2>{counter}</h2>
      <div className="button-group">
        <Button
          onClick={() => handleAdjust(-1)}
          icon={<FaMinus />}
          label="Minus"
        />
        <Button onClick={() => handleAdjust(1)} icon={<FaPlus />} label="Add" />
      </div>
    </div>
  )
}

export default Home
