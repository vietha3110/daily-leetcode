function lengthOfLongestSubstring(s) {
    let max = 0; 
    
    for (let i = 0; i < s.length; i++) {
        let check = new Set();
        check.add(s[i]);
        let count = 1;
        for (let j = i + 1; j < s.length; j++){
            if (check.has(s[j])) {
                if (count > max) max = count;
                break;
            } else {
                check.add(s[j]); 
                count++;
            }
        }
        if (count > max) max = count; 
    }
   
    return max;

}

console.log(lengthOfLongestSubstring("abcabcbb"))
