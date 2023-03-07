var firstUniqChar = function(s) {
    let numObj = {};
    for (let i = 0; i <= s.length - 1; i++) {
        if(s[i] in numObj) {
            numObj[s[i]]++;
        } else {
            numObj[s[i]] = 1;
        }
    }
    console.log(numObj)
    let resChar = "";
    for (let key in numObj) {
        if(numObj[key] === 1) {
            resChar = key;
            return s.indexOf(resChar);
        }
    }
    return -1

};

console.log(firstUniqChar("leetcode"))
