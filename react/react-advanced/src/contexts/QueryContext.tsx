import { ReactNode, createContext, useCallback, useState } from 'react'
import { Observer } from '../services/observer'

export const ObserversContext = createContext<Observer[]>([])

export const AddObserverContext = createContext<
  ((observer: Observer) => void) | undefined
>(undefined)

export const RemoveObserverContext = createContext<
  ((key: string) => void) | undefined
>(undefined)

export const QueryContextProvider = (props: { children?: ReactNode }) => {
  const [observers, setObservers] = useState<Observer[]>([])

  const addObserver = useCallback(
    (observer: Observer) => {
      if (!observers.some((item) => observer.key === item.key))
        setObservers([...observers, observer])
    },
    [observers]
  )

  const removeObserver = useCallback(
    (key: string) => {
      setObservers((current) => current.filter((item) => item.key !== key))
    },
    [observers]
  )

  return (
    <ObserversContext.Provider value={observers}>
      <AddObserverContext.Provider value={addObserver}>
        <RemoveObserverContext.Provider value={removeObserver}>
          {props.children}
        </RemoveObserverContext.Provider>
      </AddObserverContext.Provider>
    </ObserversContext.Provider>
  )
}
