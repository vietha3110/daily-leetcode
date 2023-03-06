// function reverseBits(n) {
//     n = n.toString(2);
//     let result = 0;
//     let diff = 32 - n.length;
//     for (let i = 0; i < diff; i++) {
//         n = "0" + n;
//     }
//     for (let i = 0; i < n.length; i++ ) {
//         result += 2 ** (i) * (+n[i]);
//     } 
//     return result;
// }
// console.log(reverseBits(43261596))


const reverseBits = (n) => {
    let result = 0; 
    for (let i = 0; i < 31; i++) {
        result = result * 2 + n % 2;
        n = Math.floor(n / 2);
    }
    return result;
}
