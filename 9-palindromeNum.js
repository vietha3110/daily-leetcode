function isPalindrome(x) {
    let str = "" + x;
    return str === str.split('').reverse().join('');
}

function isPalindrome2(x) {
    let z = x;
    let y = 0;
    while (x > 0) {
        y = y * 10 + x % 10;
        x = x / 10;
    }
    return z === y;
}

console.log(isPalindrome(x = 121))
