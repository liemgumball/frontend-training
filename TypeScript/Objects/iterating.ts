let listArrayPrimitive = { m1: 'valuem1', m2: 2 }
const keys = Object.keys(listArrayPrimitive)
const entries = Object.entries(listArrayPrimitive) // require to have "lib": [ "es2017.object" ]
console.log('keys', keys)
console.log('entries', entries)

function* foo() {
  yield 1
  yield 2
  yield 3
  yield 4
  return 5
}

let bar = foo()

console.log(bar.next())
console.log(bar.next())
// console.log(bar.return(7))
console.log(bar.next())
console.log(bar.next())
console.log(bar.next())
console.log(bar.next())
console.log(bar.return(7))
