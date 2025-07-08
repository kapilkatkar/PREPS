//These are higher-order functions, meaning they take other functions as arguments.

// The map() method creates a new array by applying a given function to each element in the original array.
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]

//The filter() method creates a new array with all elements that pass a specified condition
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Add 1 year to each user's age
const updatedUsers = users.map((user) => ({
  name: user.name,
  age: user.age + 1,
}));

console.log(updatedUsers);

//The reduce() method applies a reducer function to each element in the array,
//accumulating the results into a single value

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value is 0

console.log(sum); // Output: 15
