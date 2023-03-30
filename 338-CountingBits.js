// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

function convertBinary(n) {
    let sum = 0;
    while (n > 0) {
        if (n % 2 === 1) sum += 1;
        n = Math.floor(n / 2);
    }
    return sum
}

function countBits(n) {
    let res = []; 
    for (let i = 0; i <= n; i++) {
        res.push(convertBinary(i));
    }
    return res
}
console.log(countBits(2))
