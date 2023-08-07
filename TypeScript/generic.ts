function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}
const s = firstElement(['a', 'b', 'c'])
const n = firstElement([1, 2, 3])
const u = firstElement([])

console.log(s, n, u)

function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output
): Output[] {
    return arr.map(func)
}

const parsed = map(['a', '2', '3'], (n) => Math.pow(parseInt(n), 2))

console.log(parsed)
