// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Input: a = 1, b = 2
// Output: 3
function sum(a, b) {
    while (b !== 0) {
        const carry = a & b;         
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

console.log(sum(10, 1))
//recursive 
function add(a, b) {
    if (b === 0) {
        return a;
    } else {
        return add(a ^ b, (a && b) << 1);
    }
}
