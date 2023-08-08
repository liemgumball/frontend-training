abstract class Animal {
    // Encapsulation
    private _id: string
    protected age!: number

    constructor() {
        this._id = Math.random().toFixed(2).toString()
    }

    // Abstraction
    abstract live(): boolean

    get id(): string {
        return this._id
    }

    // for Polymorphism
    abstract breath(): void
}

// Inheritance
class Fish extends Animal {
    constructor(age: number) {
        super()
        this.age = age
    }

    live(): boolean {
        return true
    }

    swim(): void {
        console.log('fish is swimming')
    }

    getAge(): number {
        return this.age
    }

    // Polymorphism
    breath(): void {
        console.log('puff puff puff')
    }
}

// Inheritance
class Lion extends Animal {
    constructor(age: number) {
        super()
        this.age = age
    }

    live(): boolean {
        return true
    }

    run(): void {
        console.log('lion is running')
    }

    // Polymorphism
    breath(): void {
        console.log('brr brr brr')
    }
}

class Zoo {
    private _animals: Animal[]

    constructor(animals: Animal[]) {
        this._animals = animals
    }

    print() {
        this._animals.forEach((a) => {
            a.breath()
        })
    }

    open() {
        console.log('open: ')
        this._animals.forEach((a) => {
            if (a instanceof Lion) {
                a.run()
            }
        })
    }
}

function main(): void {
    const zoo = new Zoo([
        new Fish(2),
        new Lion(10),
        new Fish(5),
        new Lion(15),
        new Fish(6),
    ])

    zoo.print()
    zoo.open()
}

main()
