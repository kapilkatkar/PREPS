//You can explicitly set the value of "this" using call(), apply(), or bind() methods.
//Certainly! call(), apply(), and bind() are methods in JavaScript
//that allow you to set the value of this explicitly when calling a function.

//1. call
//The call() method is used to invoke a function immediately and
//explicitly specify the value of this and pass arguments to the function.
function greet() {
  console.log("hellow" + " " + this.name);
}

const obj = {
  name: "kapil",
};

greet.call(obj);

//2. apply()
// The apply() method is similar to call() but instead of passing arguments individually,
// it takes an array-like object as the second argument.
function greet1(arg) {
  console.log(`${arg}, ${this.name}`);
}

const greetings = ["hellow"];
const person = { name: "kapil" };

greet1.apply(person, greetings);

//bind
//The bind() method in JavaScript is used to create a new function that, when called,
function greet2() {
  console.log(`hellow, ${this.name}`);
}

const person2 = {
  name: "kapil",
};

const newGreet = greet2.bind(person2);
newGreet();
