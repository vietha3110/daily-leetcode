//using xor operator
function singleNumber(nums) {
    let res = 0; 
    for (let num of nums) {
        res = res ^ num;
    }
    return res;
}
