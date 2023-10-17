import { useContext } from 'react'
import { ObserversContext } from '../contexts/QueryContext'
import { Observer } from '../services/observer'

const useMutation = (queryKey: string, mutationFn: (variables: any) => any) => {
  const observers = useContext(ObserversContext)

  const observer: Observer | undefined = observers.find(
    (observer) => observer.key === queryKey
  )

  const result: { data?: any; error?: Error } = {
    data: undefined,
    error: undefined,
  }

  const mutate = async (variables: {}) => {
    try {
      result.data = await mutationFn(variables)

      if (result.data) observer?.callback() // if successful
    } catch (error) {
      result.error = error as Error
      alert(error)
    }
  }

  return { ...result, mutate } as const
}

export default useMutation
