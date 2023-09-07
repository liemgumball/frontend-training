import { useRef, useState } from 'react'
import Button from '../../button'
import { FaPlay, FaStop } from 'react-icons/fa'

const Stopwatch: React.FC = () => {
  const [startTime, setStartTime] = useState(0)
  const [now, setNow] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(1)}</h1>
      <Button onClick={handleStart}>
        <FaPlay />
        Play
      </Button>
      <Button onClick={handleStop}>
        <FaStop />
        Stop
      </Button>
    </>
  )
}

export default Stopwatch
