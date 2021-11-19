let duplicates = (str) => {
     str = str.split("");
   
    return str.reduce((data, item) => {
    data[item] = (data[item] || 0) +1;
    return data
    }, {})
}

console.log(duplicates("aabbcde"));