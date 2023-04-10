function longestPalindrome(str) {
    const pairStorage = {};
    for (let char of str) {
        if (char in pairStorage) {
            pairStorage[char]++;
        } else {
            pairStorage[char] = 1;
        }
    }
    let count = 0; 
    for (let key in pairStorage) {
        if (pairStorage[key] % 2 === 0) {
            count += pairStorage[key];
        }
    }
    return count;
}

console.log(longestPalindrome("abccccdd"))
