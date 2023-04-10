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
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function productList(nums) {
    
}
