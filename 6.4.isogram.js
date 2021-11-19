function isIsogram(str) {
  let hash = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}

console.log(isIsogram("moOse"));
console.log(isIsogram("aba"));
console.log(isIsogram("Derma"));
