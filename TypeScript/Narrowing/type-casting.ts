const unknownType: unknown = '123'

const cast1: number = <number>unknownType
const cast2: number = unknownType as number

console.log(cast1,cast2)
console.log(typeof cast1, typeof cast2)
