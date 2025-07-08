const removeVowels = (str1) => {
  let result = "";
  let vowels = "aeiou";
  let str = str1.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
};

console.log(removeVowels("Hello World"));
console.log(removeVowels("This is a test"));

const countVowelsAndConsonants = (str1) => {
  let vowelsCount = 0;
  let consonantsCount = 0;
  let vowels = "aeiou";
  let str = str1.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
};

console.log(countVowelsAndConsonants("Hello World"));
console.log(countVowelsAndConsonants("This is a test."));
