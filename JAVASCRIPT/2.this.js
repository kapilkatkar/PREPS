//"this" keyword refers to the value of object which is currently executing the code.
//the value depends on how the function is getting called

//1. global scope
console.log(this === window); //true

//2. function context
function newFun() {
  console.log(this);
}
newFun(); // it will take the refernce of globale scope

//3. method context
const obj = {
  name: "kapil",
  greet: function () {
    console.log(`hi ${this.name}`);
  },
};
obj.greet(); //this will referce to obj object

//4. Explicit context:
//You can explicitly set the value of "this" using call(), apply(), or bind() methods.
