function productArr(nums) {
    let prefix = 1; 
    let suffix = 1; 
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(prefix);
        prefix *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];     
    }
    return res;
}

console.log(productArr(nums = [1,2,3,4]))
