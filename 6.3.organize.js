let organize = (str1, str2) => {
  str1.split("");
  str2.split("");
  let nonDupStr1 = removeDuplicates(str1);
  let nonDupStr2 = removeDuplicates(str2);
  let joinedStr = nonDupStr1.join('') + nonDupStr2.join('');
  return removeDuplicates(joinedStr).join('')
};

let removeDuplicates = (data) => {
  return [...new Set(data)]
};

console.log(organize("xyaabbccccdefww","xxxxyyyyabkklmopq"))
