const arr = [13, 2, 3, 4, 54, 33, 47, 555, 38, 7, 36, 5, 33, 35, 33];
let maxNum = Math.max(...arr);
let minNum = Math.min(...arr);

console.log(maxNum, minNum);
// 1. maximin and minimun number from array
const maxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `${max} and ${min}`;
};
console.log(maxMin(arr));

// 2.Reverse an array

const ReverseArr = (arr) => {
  let arr1 = [];
  for (let i = arr.length - 1; i > 0; i--) {
    arr1.push(arr[i]);
  }
  return arr1;
};
console.log(ReverseArr(arr));

console.log(arr.slice().reverse());

//3.sum of all elements

const SumOfAllElem = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(SumOfAllElem(arr));

//4. search index - return the index if found else -1
//search for 555
const searchIndex = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
    return -1;
  }
};
console.log(searchIndex(arr, 555));

//5.check if array is sorted

const isArrsoretd = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};
console.log(isArrsoretd(arr));

//6.remove duplicates from sorted array

const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--; //when it matches it will remove elements and shifts to the left, so need to do this in order to not miss any element
      }
    }
  }
  return arr;
};
console.log(removeDuplicates(arr));
//or
// let uniqueSet = new Set(arr); //this will remove duplicates
// console.log(uniqueSet); // Output: Set { 1, 2, 3, 4 }

//7.left  rotate the array by one possition
const leftRotate = (arr) => {
  if (arr.length === 0) return arr;

  const firstElement = arr.shift();
  arr.push(firstElement);
  // or return arr.slice(1).concat(arr[0]);
  return arr;
};

console.log(leftRotate(arr));

//8.left  rotate the array by k possition
const arr2 = [13, 2, 3, 4, 54, 47, 555, 38, 7, 36, 4, 33, 35];
const leftRotateBykPos = (arr2, k) => {
  if (arr2.length === 0) return arr2;
  console.log("arr2.slice(k)", arr2.slice(k));
  console.log("arr2.slice(0, k)", arr2.slice(0, k));

  return arr2.slice(k).concat(arr2.slice(0, k));
};
console.log("k pos", leftRotateBykPos(arr2, 3));

// 9. *Insert an Element at a Given Index*

const inserElemAtK = (arr2, k) => {
  if (arr2.length === 0) return arr2;
  arr2.splice(k, 0, 1111);
  return arr2;
};
console.log("insert at k", inserElemAtK(arr2, 3));

//10. Count the Number of Even and Odd Elements*
const oddEven = () => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
      even++;
    }
    odd++;
  }
  return { odd, even };
};

console.log(oddEven(arr2));

// 11.Find All Pairs with a Given Sum

const pairSum = (arr, sum) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result.length > 0 ? result : null;
};
console.log(pairSum(arr, 7));

//12. 13. *Find Frequency of Each Element*

const Frequency = (arr3) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr3[i]]) {
      obj[arr3[i]] += 1;
    } else {
      obj[arr3[i]] = 1;
    }
  }
  return obj;
};
const arr3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(Frequency(arr3));

//14. *Move All Zeros to End*
let arr4 = [1, 2, 0, 4, 20, 3, 9, 0, 9, 0, 9, 90];
const MoveZeroToEnd = () => {
  const nwArr = [];
  const zeros = [];
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === 0) {
      zeros.push(0);
    } else {
      nwArr.push(arr4[i]);
    }
  }
  return nwArr.concat(zeros);
};
console.log(MoveZeroToEnd(arr4));

const firstNonRepeatingCharacter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      return arr[i];
    }
  }

  return arr;
};
console.log(firstNonRepeatingCharacter("swiss"));

function toggleCase(str) {
  let toggled = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === char.toLowerCase()) {
      toggled += char.toUpperCase();
    } else {
      toggled += char.toLowerCase();
    }
  }

  return toggled;
}

const input = "HeLLo WoRLd";
const result = toggleCase(input);
console.log(result); // Output: hEllO wOrlD

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(findLongestWord("a man jumps")); // Output: "jumps"
