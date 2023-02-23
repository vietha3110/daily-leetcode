function isPalindrome(x) {
    let str = "" + x; 
    if (str === str.split("").reverse().join("")) {
        return true
    }
    return false
}
console.log(isPalindrome(x = 121))
