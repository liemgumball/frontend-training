import { useContext } from 'react'
import { ObserversContext } from '../contexts/QueryContext'
import { Observer } from '../services/observer'

const useMutation = (queryKey: string, mutationFn: (variables: any) => any) => {
  const observers = useContext(ObserversContext)

  const observer: Observer | undefined = observers.find(
    (observer) => observer.key === queryKey
  )

  const mutate = async (variables: {}) => {
    try {
      const response = await mutationFn(variables)
      console.log('Observers: ', observers)

      if (response && observer) {
        observer.callback()
      }
    } catch (error) {
      alert(error)
    }
  }

  return { mutate } as const
}

export default useMutation
