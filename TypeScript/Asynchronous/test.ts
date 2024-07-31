setTimeout(() => console.log('timeout 0 ms'), 0)

console.log(1)

console.log(2)

new Promise((resolve) => {
  // setTimeout(() => resolve(0), 0)
  resolve(0)
}).then((value) => console.log(`promise resolved ${value}`))

console.log('end')
