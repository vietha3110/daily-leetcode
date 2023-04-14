function longestPalindrome(str) {
    const pairStorage = {};
    let check = 0;
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
        } else if (pairStorage[key] > 1 && pairStorage[key] % 2 === 1) {
            count += pairStorage[key] - 1;
            check++;
        } else if (pairStorage[key] === 1) {
            check++;
        }
    }
    if (check > 0) {
        count++;
    }

    return count;
}

console.log(longestPalindrome("abccccdd"))
