// const str = "apple";
// // If your goal is to extract part of a string, use .slice() instead:

// const capitalizsedStr =
//   str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(capitalizsedStr);

// const str1 = "welcome to the team mr. Kapil";
// let NewStr = str1
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//   .join(" ");
// console.log(NewStr);

const str = "apple";
const capitalizsedStr =
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalizsedStr);

const str1 = "welcome to the team mr. Kapil";
let newStr = str1
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase)
  .join(" ");
console.log(str1);

const str2 = "apple";
console.log(str2.slice(0, 2)); // 0 index se start hoke 2 ke pahle ts ka slice krke return

const str3 = "apple";
console.log(str3.slice(2)); // pahle 2 cur krke baki return
