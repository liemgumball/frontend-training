type RemoveOptionalParameters<T> = T extends (...args: infer P) => infer R
  ? (
      ...args: {
        [K in keyof P]-?: P[K]
      }
    ) => R
  : T

type a = RemoveOptionalParameters<
  (a: string, b?: number) => { readonly a: string }
>

type user = 'user' | 'admin' | '123' | 123 | 'boolean'

type ExtractNumberType<T> = T extends `${infer U}`
  ? U extends `${number}`
    ? U
    : never
  : never

type b = ExtractNumberType<user>

type ExtractNumberFromArray<T extends readonly any[]> =
  T extends readonly (infer E)[] ? (E extends number ? E : never) : never

type arr = readonly [1, 'sda', 'dakdha', 4, true]
type c = ExtractNumberFromArray<arr>

type Flatten<T> = T extends Array<infer E> ? Flatten<E> : T
type NestedArray = number[][][]

type d = Flatten<NestedArray>

type TupleToUnion<T extends Array<any>> = T extends [infer E, ...infer Rest]
  ? E | TupleToUnion<Rest>
  : never

type e = TupleToUnion<[number, string, 'user', 'admin', 3, true, false]>
