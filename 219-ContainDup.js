var containsNearbyDuplicate = function (nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in obj && i - obj[nums[i]] <= k) {
            return true;   
        } else {
            obj[nums[i]] = i;
        }
    }
    return false;
}

console.log(containsNearbyDuplicate(nums = [1,0,1,1], k = 1))
