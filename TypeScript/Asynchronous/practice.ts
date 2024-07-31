function doSomethingAsync(arr: number[]) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      try {
        let n = Math.ceil(Math.random() * 100 + 1)
        if (n < 50) {
          throw new Error('n is < 50')
        }
        resolve([...arr, n])
      } catch (e) {
        reject(e)
      }
    }, 1000)
  })
}
doSomethingAsync([1, 2, 3, 4]).then(console.log).catch(console.error)

// The Promise API includes a method named all
// which allows us to execute a series of promises in parallel and get all the results of each of the promises at once
Promise.all([
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(1), 1000)
  }),
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(2), 2000)
  }),
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(3), 3000)
  }),
]).then((values) => {
  console.log(values) // [ 1 ,2, 3]
})

// The Promise API also includes a method named race
// which allows us to execute a series of promises in parallel and obtain the result of the first promise resolved
Promise.race([
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(1), 3000)
  }),
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(2), 2000)
  }),
  new Promise<number>((resolve) => {
    setTimeout(() => resolve(3), 1000)
  }),
]).then((fastest) => {
  console.log(fastest) // 3
})
