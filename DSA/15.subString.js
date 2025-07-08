function printAllSubstrings(str) {
  const n = str.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      console.log(str.substring(i, j));
    }
  }
}

// Example usage
const input = "abc";
printAllSubstrings(input);
