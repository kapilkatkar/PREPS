const arr = [3, 542, 51, 61, 51, 34, 12, 1];
//isme har ek iteration me sbse bada number jo jai wo last me chala jayega
//bubble sort
const sortArr = (arr) => {
  console.log(arr.length);
  console.log(arr.length - 1);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(sortArr(arr));
