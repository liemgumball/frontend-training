import { ReactNode, createContext, useState } from 'react'
import { Observer } from '../services/observer'

export const ObserversContext = createContext<Observer[]>([])

export const AddObserverContext = createContext<
  ((observer: Observer) => void) | undefined
>(undefined)

export const QueryContextProvider = (props: { children?: ReactNode }) => {
  const [observers, setObservers] = useState<Observer[]>([])

  const addObserver = (observer: Observer) => {
    if (!observers.some((item) => observer.key === item.key))
      setObservers([...observers, observer])
  }

  return (
    <ObserversContext.Provider value={observers}>
      <AddObserverContext.Provider value={addObserver}>
        {props.children}
      </AddObserverContext.Provider>
    </ObserversContext.Provider>
  )
}
