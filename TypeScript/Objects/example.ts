let o1: Object = 'I am an Object'
let o2: object = { text: 'I am an object' }
let o3: Object = { text: 'I am also an Object' }
let o4: object = ['I', 'am', 'an', 'object']
let o5: Object = ['I', 'am', 'an', 'Object']

console.log(o1)
// console.log(o2.text) // Does not compile
// console.log(o3.text) // Does not compile
console.log(o4)
console.log(o5)

// Curly bracket
let curly1 = { text: 'An object' }
let curly2: { text: string } = { text: 'An object' }
let curly3: {} = { text: 'An object' }

console.log(curly1.text)
console.log(curly2.text)
// console.log(curly3.text); // Does not not compile

// New Object
class MyClass {
  private _value: string
  constructor(val: string) {
    this._value = val
  }

  get value() {
    return this._value
  }

  set value(val: string) {
    this._value = val
  }
}
const c1 = new MyClass('ABC')
const c2 = new MyClass('ABC')
console.log(c1 === c2)
c1.value = '1'
console.log(c1.value)
console.log(c2.value)

// Object vs object
let o: object
// o = 1; // Primitive = does not work
o = { a: '123' } // Anonymous object = work
interface MySchema {
  val: string
}
let interfaceObject: MySchema = { val: 'Test' }
o = interfaceObject // Typed object = work
// o = null; // Does not work
// o = undefined; // Does not work
let x = new Array()
o = x // "new" object = work

let y = { y: 1 }
let obj: Object = y
console.log(obj.toString())

let objectIndex: { x: number; y: string } = { x: 1, y: '2' }
objectIndex['x'] = 2
objectIndex['y'] = 'a string'
// objectIndex[0] = 1; // Doesn't transpile
// objectIndex[{ x: 1 }] = 123; // Doesn't transpile
console.log(objectIndex) // { '0': 1, x: 2, y: '2' }

interface MyGenericDictionary<T> {
  // Generic for the value
  [id: string]: T // The type T is the only accepted value
}
const dict2: MyGenericDictionary<string> = {
  ['100']: 'hundred',
  ['200']: 'two hundreds',
}
const dict3: MyGenericDictionary<number> = { ['100']: 100, ['200']: 200 }

console.log(dict2)
console.log(dict3)

interface Person {
  id: number
  name: string
}
let myMap = new Map<number, Person>()
myMap.set(1, { id: 1, name: 'First' })
myMap.set(10, { id: 10, name: 'Tenth' })

if (myMap.has(10)) {
  console.log(myMap.get(10)?.name)
}

interface MyStringDictionaryWithMembers {
  [key: string]: string
  m1: string
  // m2: number; // Won't transpile, must be a string
}

const SERIALIZE_1 = Symbol('serialize-method-key') // Symbol
const SERIALIZE_2 = 'serialize-method-key' // Constant

const o12 = { [SERIALIZE_1]: '1', [SERIALIZE_2]: '2' }

let s1: string = o12[SERIALIZE_1]
let s2: string = o12[SERIALIZE_2]
console.log(s1)
console.log(s2)
console.log(o12)

interface MyTypeA {
  [k: string]: string
}

// interface MyTypeB {
//   [k: "id1" | "id2"]: string; // index signature parameter type cannot be a literal type or generic type.
//                               // but mapped index can work
// }

type AllowedKey = 'Id1' | 'Id2'
type MyTypeC = {
  [k in AllowedKey]: string
}
let c: MyTypeC = { Id1: '123', Id2: 'ABC' }
