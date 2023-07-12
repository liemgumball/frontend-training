//prototype example
function Person(first, last, age, eye) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}

Person.prototype.nationality = 'Vietnamese'
Person.prototype.name = function () {
    return this.firstName + ' ' + this.lastName
}

const liem = new Person('liem', 'nguyen', 22, 'brown')
const hoang = new Person('hoang', 'ngo', 22, 'black')
console.log("\n\n----------prototype example--------")
console.log(liem.nationality)
console.log(hoang.name())

//Object methods
const car = {
    brand: "honda",
    color: "green",

    fullName: function(created, country) {
        return this.brand + " " + this.color + " " + created + " " + country
    },

    displayName: function() {
        console.log(this.brand + " " + this.color)
    },
}

const car1 = {
    brand: "mustang",
    color: "red"
}

const car2 = {
    brand: "limo",
    color: "black"
}

console.log("call() example: ",car.fullName.call(car1))
console.log("call() example: ",car.fullName.call(car2,"1945","USA"))

console.log("\n\n-----difference between call() and apply()------by passing an array:")
console.log("call() example: ",car.fullName.call(car2,["1975","Germany"]))
console.log("aplly() example: ",car.fullName.apply(car2,["1975","Germany"]))



//bind events example
console.log("\n\n---bind events example----------")
console.log("without bind() and with bind(): ")
setTimeout(car.displayName,3000)
setTimeout(car.displayName.bind(car),3000)