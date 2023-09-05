import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Button from '../../button'
import './Home.scss'

const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0) // Specify the type for counter

  const handleAdjust = (amount: number) => {
    setCounter((current) => current + amount)
  }

  return (
    <div className="home">
      <h1>My example</h1>
      <h2>{counter}</h2>
      <div className="button-group">
        <Button onClick={() => handleAdjust(-1)}>
          <FaMinus />
        </Button>
        <Button onClick={() => handleAdjust(1)}>
          <FaPlus />
        </Button>
      </div>
    </div>
  )
}

export default Home
