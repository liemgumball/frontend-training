type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

interface Person {
  name: string
  age: number
  location: string
}

type LazyPerson = Getters<Person>

// Remove the 'kind' properties
type RemoveKindField<T> = {
  [K in keyof T as Exclude<K, 'kind'>]: T[K]
}

interface Circle {
  kind: 'circle'
  radius: number
}

type KindlessCircle = RemoveKindField<Circle>
