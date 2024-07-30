type Not<T> = T extends false ? true : false

type Or<T> = T extends [true, true]
  ? true
  : T extends [true, false]
  ? true
  : T extends [false, true]
  ? true
  : T extends [false, false]
  ? false
  : never

// The following assignments should compile correctly
const foo: Not<number> = false
const foo2: Not<false> = true

const bar: Or<[true, false]> = true
const bar2: Or<[false, false]> = false

function filterByType<T extends { type: string }, U extends T['type']>(
  arr: T[],
  type: U
) {
  type R = Extract<T, { type: U }>

  return arr.filter((item): item is R => item.type === type)
}

type StandardUser = { type: 'user'; id: number }
type AdminUser = { type: 'admin'; id: number }

type User = StandardUser | AdminUser

declare const users: User[]

const admins = filterByType(users, 'admin')
