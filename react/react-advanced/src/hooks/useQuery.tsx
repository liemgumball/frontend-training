import { useState, useEffect, useContext } from 'react'
import { AddObserverContext } from '../contexts/QueryContext'
import { Observer } from '../services/observer'

const useQuery = (queryKey: string, queryFn: (...args: any[]) => unknown) => {
  const [result, setResult] = useState<{
    data?: []
    isLoading?: boolean
    error?: Error
    isError?: boolean
  }>({})

  const addObserver = useContext(AddObserverContext)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setResult((current) => ({ ...current, isLoading: true }))
        const response = await queryFn()

        if (response)
          setResult((current) => ({ ...current, data: response as [] }))
      } catch (err) {
        // avoid if it's an aborted request
        if ((err as Error).name !== 'AbortError') {
          setResult((current) => ({
            ...current,
            error: err as Error,
            isError: true,
            isLoading: false,
          }))
        }
      }
    }

    const observer = new Observer(queryKey, fetchData)
    if (addObserver) addObserver(observer)

    return () => {
      controller.abort() // abort the fetch request when the component unmounted or updated.
    }
  }, [queryFn, queryKey])

  return { ...result } as const
}

export default useQuery
