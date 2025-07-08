const str = "apaplelwe";
const firstNonRepeated = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const before = str.slice(0, i);
    const after = str.slice(i + 1);

    // If char is not in the rest of the string and not before
    if (!before.includes(char) && !after.includes(char)) {
      return char;
    }
  }
};
console.log(firstNonRepeated(str));

// const str = "apaphleleaw";

// const firstNonRepeated = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
//     if (str.indexOf(currentChar) === str.lastIndexOf(currentChar)) {
//       return currentChar;
//     }
//   }
//   return null; // In case there's no non-repeated character
// };

// console.log(firstNonRepeated(str)); // Output: "l"
