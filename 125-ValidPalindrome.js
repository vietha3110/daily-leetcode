function isValidPalindrome(s) {
    s = (s.replace(/[^0-9a-zA-Z]/g, ''));
    let left = 0; 
    let right = s.length - 1; 
    while (left < right) {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
    
}
