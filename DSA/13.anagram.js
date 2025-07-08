const isAnagram = (char1, char2) => {
  let str1 = char1.split("");
  let str2 = char2.split("");
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        str2.splice(j, 1);
        break;
      }
    }
  }
  return str2.length > 0 ? false : true;
};
console.log(isAnagram("kapilaa", "pilka"));
