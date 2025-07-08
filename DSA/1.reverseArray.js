const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 2, 34, 35, 436, 457, 567, 80];
//with loop
const reverseArr = (arr) => {
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
};
console.log("using loop", reverseArr(arr));

//with reverese method
//but here we are having one issue, it will modify the original array
console.log("using reverse method", arr.reverse());

//without modifying original array
const revArray = arr.slice().reverse();
console.log("using slice:", revArray);
