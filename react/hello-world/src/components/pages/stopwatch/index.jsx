import { useRef, useState } from 'react'
import Button from '../../button'
import { FaPlay, FaStop } from 'react-icons/fa'

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(0)
  const [now, setNow] = useState(0)
  const intervalRef = useRef(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(1)}</h1>
      <Button onClick={handleStart} icon={<FaPlay />} label="Play" />
      <Button onClick={handleStop} icon={<FaStop />} label="Stop" />
    </>
  )
}

export default Stopwatch
