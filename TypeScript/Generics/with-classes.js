var Human = /** @class */ (function () {
    function Human() {
        this.greeting = "Hello";
    }
    return Human;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.greeting = "Grrrrrr";
    }
    return Lion;
}());
var Tulip = /** @class */ (function () {
    function Tulip() {
        this.greeting = "...";
    }
    return Tulip;
}());
// Not limited to Human! Now any type that inherits Greeter
var LivingSpecies = /** @class */ (function () {
    function LivingSpecies(species) {
        this.species = species;
    }
    LivingSpecies.prototype.sayHello = function () {
        console.log(this.species.greeting);
    };
    return LivingSpecies;
}());
var species1 = new LivingSpecies(new Human());
species1.sayHello();
var species2 = new LivingSpecies(new Lion());
species2.sayHello();
var species3 = new LivingSpecies(new Tulip());
species3.sayHello();
