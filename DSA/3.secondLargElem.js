const arr = [1, -34, 2, 3, 34, 5336, 67, 8, 89, 34, 9, 900, 1000];
const secondLargNo = (arr) => {
  let first = -Infinity;
  let socond = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num < first && num > socond) {
      second = num;
    }
  }
  return second;
};
console.log(secondLargNo(arr));
