function lengthOfLongestSubstring(s) {
    let max = 0; 
    let start = 0;
    let check = new Set();
    for (let i = 0; i < s.length; i++) {
        for (let j = start; j < s.length; j++) {
            if (!check.has(s[j])) {
                check.add(s[j]);
                if (max < (j - i + 1)) {
                    max = j - i + 1;
                }
            } else {
                start = j;
                check.delete(s[i]);
                break;
            }
        }
    }
    return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"))
