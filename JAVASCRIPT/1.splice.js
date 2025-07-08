let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(1, 2); // Remove 2 items starting at index 1
console.log(arr); // [1, 4, 5]
console.log(removed); // [2, 3]

let arr2 = [1, 4, 5];
arr2.splice(1, 0, 2, 3); // At index 1, remove 0, insert 2 and 3
console.log(arr2); // [1, 2, 3, 4, 5]

let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, 9, 10); // From index 2, remove 2 items, insert 9, 10
console.log(arr3); // [1, 2, 9, 10, 5]

//=================

const str2 = "apple";
console.log(str2.slice(0, 2)); // 0 index se start hoke 2 ke pahle ts ka slice krke return

const str3 = "apple";
console.log(str3.slice(2)); // pahle 2 cur krke baki return
