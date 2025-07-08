const arr = [1, -34, 2, 3, 34, 5336, 67, 8, 89, 34, 9, 900];
const largestElem = (arr) => {
  let largNo = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largNo) {
      largNo = arr[i];
    }
  }
  return largNo;
};
console.log(largestElem(arr));

const smallesNo = (arr) => {
  let SmallestNo = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < SmallestNo) {
      SmallestNo = arr[i];
    }
  }
  return SmallestNo;
};
console.log(smallesNo(arr));
