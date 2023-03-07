var firstUniqChar = function(s) {
    let numObj = {};
    for (let i = 0; i <= s.length - 1; i++) {
        if(s[i] in numObj) {
            numObj[s[i]]++;
        } else {
            numObj[s[i]] = 1;
        }
    }
    for (let key in numObj) {
        if(numObj[key] === 1) {
            return s.indexOf(key);
        }
    }
    return -1

};

console.log(firstUniqChar("leetcode"))
