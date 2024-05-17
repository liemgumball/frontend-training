import {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import {
  AddObserverContext,
  RemoveObserverContext,
} from '../contexts/QueryContext'
import { Observer } from '../services/observer'

const useQuery = (queryKey: string, queryFn: (...args: any[]) => unknown) => {
  const callbackRef = useRef(queryFn)

  const [result, setResult] = useState<{
    data: unknown[]
    error?: Error
    isFetching?: boolean
    isLoading?: boolean
    isError?: boolean
  }>(defaultResult)

  const addObserver = useContext(AddObserverContext)

  const removeObserver = useContext(RemoveObserverContext)

  let count = 0

  const fetchData = useCallback(async () => {
    try {
      setResult((current) => ({
        ...current,
        isFetching: true,
        isLoading: count === 0,
      }))

      const response = await callbackRef.current()
      if (response)
        setResult((current) => ({
          ...current,
          data: response as [],
          isError: false,
        }))
    } catch (err) {
      setResult((current) => ({
        ...current,
        error: err as Error,
        isError: true,
      }))
    } finally {
      setResult((current) => ({
        ...current,
        isLoading: false,
        isFetching: false,
      }))

      console.log(++count)
    }
  }, [result])

  useEffect(() => {
    callbackRef.current = queryFn

    if (addObserver) {
      const observer = new Observer(queryKey, fetchData)
      addObserver(observer)
    }

    return () => {
      if (removeObserver) removeObserver(queryKey)
    }
  }, [queryFn, queryKey])

  return useMemo(() => ({ ...result } as const), [result])
}

export default useQuery

const defaultResult = {
  data: [] as unknown[],
  error: undefined,
  isFetching: false,
  isLoading: false,
  isError: false,
}
