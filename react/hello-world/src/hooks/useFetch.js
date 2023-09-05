import { useEffect, useState } from 'react'
import { useState } from 'react'

export function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const controller = new AbortController()
    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(setLoading(false))

    return (cleanUp = () => {
      controller.abort()
    })
  }, [url])
  return { loading, data, error }
}
