const arr = [1, 2, 3, 5, 6, 7, 6, 7, 2, 3, 4, 4];
const removeDups = (arr) => {
  const uniq = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (!uniq.includes(arr[i])) {
      uniq.push(arr[i]);
    }
  }
  return uniq;
};
console.log(removeDups(arr));
