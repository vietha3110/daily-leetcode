function moveZeroes(nums) {
    let pointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
            pointer++
        }
    }
   
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
