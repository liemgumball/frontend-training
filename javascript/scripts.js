//test callback
const doSomething = (callback) => {
    console.log('do things')

    const result = 'yes'
    callback(result)
}

doSomething((result) => {
    console.log(result)
})

//test declare Promise
const doSomethingElse = new Promise(
    (resolve, reject) => {
        const success = true
        if (success) {
            resolve('ok')   
        } else {
            reject('this error occurred')
        }
    }
)

doSomethingElse
	.then(result => {
		console.log(result)
	})
	.catch(error => {
		console.log(error)
	})