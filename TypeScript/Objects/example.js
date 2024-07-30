var o1 = 'I am an Object';
var o2 = { text: 'I am an object' };
var o3 = { text: 'I am also an Object' };
var o4 = ['I', 'am', 'an', 'object'];
var o5 = ['I', 'am', 'an', 'Object'];
console.log(o1);
// console.log(o2.text) // Does not compile
// console.log(o3.text) // Does not compile
console.log(o4);
console.log(o5);
// Curly bracket
var curly1 = { text: 'An object' };
var curly2 = { text: 'An object' };
var curly3 = { text: 'An object' };
console.log(curly1.text);
console.log(curly2.text);
// console.log(curly3.text); // Does not not compile
// New Object
var MyClass = /** @class */ (function () {
    function MyClass(val) {
        this.value = val;
    }
    return MyClass;
}());
var c1 = new MyClass('ABC');
var c2 = new MyClass('ABC');
console.log(c1 === c2);
c1.value = '1';
console.log(c1.value);
console.log(c2.value);