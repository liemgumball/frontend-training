const array = [10, 30, 20, 10, 20, 30];

console.log(array);
array.push(0)
console.log("array after push(0): "
  + array
)

const pop = array.pop()
console.log("array.pop(): "
  + pop
)

const shift = array.shift()
console.log("array.shift(): "
  + shift
)

array.unshift(10)
console.log("array after unshift(10): "
  + array
)

console.log("Array.every value < 40: "
    + array.every(
      (currentValue) => currentValue < 40
    )
  );

console.log("array fonud ele > 20: "
  + array.find(ele => ele > 20)
)

console.log("array fonud index of ele > 20: "
  + array.findIndex(ele => ele > 20)
)

console.log("array after sort descending: "
      + array.sort((a,b)=> b-a)
)
  
const newArray = array.map(
    (value, index) => (Number(value)+index)
  )

console.log("\nNew Array from map with value = currentValue + index: ")
newArray.forEach((currentValue, index, array) => {
    console.log(`Value: ${currentValue}, Index: ${index}, Array: [${array}]`);
  });


console.log("\narray after fill(0,2,5)");
console.log(array.fill(0,2,5))


console.log("\narray sum using reduce: " 
  + array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
    ,0 //initial value
))

console.log("\nresult after using some(% 2 !== 0): "
    + array.some(
      value => value % 2 !== 0
    )
)



const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'painting', 'swimming'],

  filterHobbies: function (keyword) {
    return this.hobbies.filter(
      hobby => hobby.includes(keyword)
    ,this); // "this" refers to the "person" object
  }
};


const filteredHobbies = person.filterHobbies('a');
console.log("\nHobbie that include the keyword \"a\":",filteredHobbies);