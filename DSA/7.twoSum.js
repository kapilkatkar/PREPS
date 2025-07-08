const arr = [1, 2, 3, 4, 6, 5, 7, 89, 9];
const towSum = (arr, sum) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [arr[i], arr[j]];
      }
    }
  }
};
console.log(towSum(arr, 9));
