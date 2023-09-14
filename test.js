function longestSubstring(s) {
    let res = [];
    let max = 0;
    for (let i = 0; i <= s.length; i++) {
        if (res.includes(s[i])) {
            if (max <= res.length) {
                console.log('here')
                max = res.length;
                
            }
            res = [];
            res.push(s[i]);
        } else {
            res.push(s[i]);
            
        }
    }
    return max;
}

console.log(longestSubstring( s = " "))
