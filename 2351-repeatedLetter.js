function repeatedLetter(s) {
    let objChars = {}; 
    for (let char of s) {
        if (char in objChars) {
            return char;
        } else {
            objChars[char] = 1;
        }
    }
    return -1;
}

console.log(repeatedLetter(s = "abccbaacz"))
