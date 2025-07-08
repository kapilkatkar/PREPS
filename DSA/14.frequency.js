function getCharFrequency(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}
const input = "hello world";
const result = getCharFrequency(input);
console.log(result);
