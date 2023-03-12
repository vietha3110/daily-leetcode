function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    } 
    let countObj = {};
    for (let i = 0; i <= s.length; i++) {
        if (s[i] in countObj) {
            countObj[s[i]]++;
        } else {
            countObj[s[i]] = 1;
        }
    }
    for (let i = 0; i <= t.length; i++) {
        if (t[i] in countObj) {
            countObj[t[i]]--;
        } else {
            countObj[t[i]] = 1;
        }
    }
    for (let key in countObj) {
        if (countObj[key] !== 0) {
            return false;
        }
    }
    return true;

}
