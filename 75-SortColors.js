function sortColors(nums) {
    let pointer = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
            pointer++
        }
    }
    for (let i = pointer; i < nums.length; i++) {
        if (nums[i] === 1) {
            [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
            pointer++
        }
    }
    return nums;
}

console.log(sortColors(nums=[2,0,1,1,2,0,1,2,1,0,0]))
