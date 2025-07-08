const arr = [0, 1, 3, 1, 0, 7, 0, 4, 0, 2];

const zeroToRight = (arr) => {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      pos++;
    }
  }
  return arr;
};
console.log(zeroToRight(arr));
//tow pointer method
//if arr[i] is not zero, then swap elemenets and move to next pos
