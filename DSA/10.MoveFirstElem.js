const arr = [1, 2, 3, 4, 5, 6, 7];
//output [2, 3, 4, 5, 6, 7, 1]

const moveFirstElem = (arr) => {
  const first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
  return arr;
};
console.log(moveFirstElem(arr));

//arr.shift();  // Remove first element
//arr.push(first);
