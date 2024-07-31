// Three classes that inherit a common one
interface Greeter {
    greeting: string;
}
class Human implements Greeter { // Implement the common interface
    public greeting: string = "Hello";
}
class Lion implements Greeter {// Implement the common interface
    public greeting: string = "Grrrrrr";
}
class Tulip { // Does not implement the common interface
    public greeting: string = "...";
}
 
// Not limited to Human! Now any type that inherits Greeter
class LivingSpecies {
    public species: Greeter;
 
    constructor(species: Greeter) {
        this.species = species;
    }
    public sayHello(): void {
        console.log(this.species.greeting);
    }
}
const species1 = new LivingSpecies(new Human());
species1.sayHello();
const species2 = new LivingSpecies(new Lion());
species2.sayHello();
const species3 = new LivingSpecies(new Tulip());
species3.sayHello();